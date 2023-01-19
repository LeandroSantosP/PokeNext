import React, { useEffect, useState } from 'react';
import { NormalizantionCategories } from '../../../shared/functions/NormalizantionData';
import { coloursByType } from '../../../shared/functions/GetAllTypes'
import { getAllCategory } from '../../../shared/functions/getAllCategory';
import { pokemonListProps } from '../../../shared/components/types/typeCate';
import { Card, getUrlId } from '../../../shared/components/Card/Card';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as C from '../../../styles/CetegoryStyles';
import Head from 'next/head';

interface datasProps {
   categoryName: string
   id: number;
   pokemonList: pokemonListProps[]
}

export const getStaticPaths: GetStaticPaths = async () => {

   const response = await fetch(`https://pokeapi.co/api/v2/type/`)
   const json = await response.json();

   const paths = json.results.map((item: any) => ({
      params: { categoryId: getUrlId(item.url).toString() }
   }))

   return {
      paths,
      fallback: false
   }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {

   const id = params?.categoryId

   return {
      props: {
         id,
         exemple: `lsdankldajklsadjkld`,
      }
   }
}

interface categoryProps {
   id: string;
}

export default function category({ id }: categoryProps) {
   const [data, setData] = useState<datasProps>();

   const ThemeColorBYPekeType = (name: string | undefined): string => {
      const colorfilter = coloursByType
         .filter(item => item.type === name)
         .map(item => item.color);

      return colorfilter[0];
   }

   useEffect(() => {
      if (id) {
         getAllCategory(id)
            .then(res => {
               setData(NormalizantionCategories(res));
            })
            .catch(err => {
               console.error(err);
            });
      }
   }, [id]);

   const themeColor = ThemeColorBYPekeType(data?.categoryName);

   return (
      <>
         <Head>
            <title>PokeDex</title>
            <meta name="description" content="Pagina de Lista de pokemoons pelo tipo" />
            <link rel="icon" type="image/x-icon" href="/images/logo.png" />
         </Head>
         <C.Title color={themeColor}>Categoria <span>{data?.categoryName}</span></C.Title>
         <C.CategorieContainer>
            {data && data.pokemonList.map((poke, index) => (
               <Card key={index} pokeInfos={{ name: `${poke.name}`, url: `${poke.url}` }} />
            ))}
         </C.CategorieContainer>
      </>
   )
}
