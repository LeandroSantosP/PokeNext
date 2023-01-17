import { useRouter } from 'next/router';
import React, { use, useEffect, useState } from 'react';
import { NormalizantionCategories } from '../../../shared/functions/NormalizantionData';
import { getAllCategory } from '../../../shared/functions/getAllCategory';
import { pokemonListProps } from '../../../shared/components/types/typeCate';
import { Card } from '../../../shared/components/Card/Card';

interface categoryProps {
   params: {
      pokeByCategory: {
         name: string;
         url: string;
      }
   }
}

interface datasProps {
   categoryName: string
   id: number;
   pokemonList: pokemonListProps[]
}

export default function category() {
   const [data, setData] = useState<datasProps>()

   const routes = useRouter();
   const getid: any = routes.query.categoryId;
   console.log(getid);

   console.log(getid);

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


   return (
      <div>
         <ul>

            {data && data.pokemonList.map((poke, index) => (
               <Card key={index} pokeInfos={{ name: `${poke.name}`, url: `${poke.url}` }} />
            ))}
         </ul>
      </div>
   )
}
