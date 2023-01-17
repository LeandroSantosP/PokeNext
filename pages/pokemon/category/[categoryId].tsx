import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { NormalizantionCategories } from '../../../shared/functions/NormalizantionData';
import { coloursByType } from '../../../shared/functions/GetAllTypes'
import { getAllCategory } from '../../../shared/functions/getAllCategory';
import { pokemonListProps } from '../../../shared/components/types/typeCate';
import { Card } from '../../../shared/components/Card/Card';
import * as C from '../../../styles/CetegoryStyles'

interface datasProps {
   categoryName: string
   id: number;
   pokemonList: pokemonListProps[]
}

export default function category() {
   const [data, setData] = useState<datasProps>();

   const ThemeColorBYPekeType = (name: string | undefined): string => {
      const colorfilter = coloursByType
         .filter(item => item.type === name)
         .map(item => item.color);

      return colorfilter[0];
   }

   const routes = useRouter();
   const getid: any = routes.query.categoryId;

   useEffect(() => {
      console.log(getid);
      if (getid) {
         getAllCategory(getid)
            .then(res => {
               setData(NormalizantionCategories(res));
            })
            .catch(err => {
               console.error(err);
            });
      }
   }, [getid]);

   const themeColor = ThemeColorBYPekeType(data?.categoryName);
   console.log(themeColor);

   return (
      <div>
         <C.Title>Categoria <span>{data?.categoryName}</span></C.Title>
         <C.CategorieContainer>
            {data && data.pokemonList.map((poke, index) => (
               <Card key={index} pokeInfos={{ name: `${poke.name}`, url: `${poke.url}` }} />
            ))}

         </C.CategorieContainer>
      </div>
   )
}
