import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dataResultProps } from "..";
import { FormatTextToUpperCase, getUrlId } from "../../shared/components/Card/Card";
import { TitleCustom } from "../../shared/components/generics/TitleCustom";
import { PokeHabilitys } from "../../shared/components/PokeAbilitys/PokeAbilitys";
import { TableOfPokeInfos } from "../../shared/components/TableOfPokeInfos/TableOfPokeInfos";
import { coloursByTypeProps, GetAllTyped } from "../../shared/functions/GetAllTypes";
import { NormalizerData } from "../../shared/functions/NormalizantionData";
import { pokeNewInfos } from "../types/PokemonIdTypes";
import * as C from '../../styles/PokemonStyled';
import Head from "next/head";

export const getStaticPaths = async () => {
   const maxPokemons = 99999;
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`);
   const data: dataResultProps = await response.json();

   const paths = data.results.map((pokemon) => {
      const getID = getUrlId(pokemon.url);

      return {
         params: { pokemonId: getID.toString() }
      }
   });

   return {
      paths,
      fallback: false
   }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
   <Head>
      <title>Detalhes</title>
      <meta name="description" content="Detalhes de um pokemon" />
      <link rel="icon" type="image/x-icon" href="/images/logo.png" />
   </Head>
   const id = params?.pokemonId;
   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
   const data = await res.json();

   return {
      props: {
         pokemon: data
      }
   }
};

export default function Pokemon({ pokemon }: any) {

   const pokemons = NormalizerData(pokemon);

   const [poketype, setPokeType] = useState<coloursByTypeProps[]>([]);
   const [newInfos, setNewInfos] = useState<pokeNewInfos>()

   const typesNames = pokemons?.pokeTypes.map(item => item.type.name);

   useEffect(() => {
      if (typesNames) {
         const getColors = async () => {
            const response = await GetAllTyped(typesNames);
            if (response) {
               setPokeType(response.colors);
               setNewInfos({
                  colors: response.colors,
                  abilitys: pokemon.abilities
               })

            }
         }

         getColors();
      }
   }, [setPokeType]);

   const pokeID = (pokemons?.pokeId.toString().length);

   if (pokemons)
      return (
         <>
            <C.PokemonContainer>
               <C.PokeTitle>{FormatTextToUpperCase(pokemons?.pokename)}</C.PokeTitle>
               <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.pokeId}.png`}
                  alt={pokemons.pokename}
                  width={200}
                  height={200}
               />

               <C.InfosContainer color="#111">
                  <TitleCustom color="#111" fontSize={11} text="Tipos" />
                  <C.typeContainer >
                     {pokemons && pokemons?.pokeTypes.map((item, index) => (
                        <Link key={index} href={`/pokemon/category/${getUrlId(item.type.url)}`} style={{
                           backgroundColor: `${poketype
                              .map(pokeInfo => pokeInfo.type === item.type.name && pokeInfo.color)
                              .filter(item => typeof item === 'string')[0]}`
                        }}>
                           <>
                              {FormatTextToUpperCase(item.type.name)}
                           </>
                        </Link>
                     ))}
                  </C.typeContainer>
                  <TitleCustom color="#111" fontSize={11} text="Abilidades" />
                  <C.typeContainer>
                     {newInfos && newInfos.abilitys.map((ability) => (
                        <PokeHabilitys key={ability.slot} ability={ability} />
                     ))}
                  </C.typeContainer>
                  <TableOfPokeInfos pokeInfos={pokemons} />
               </C.InfosContainer>
            </C.PokemonContainer>

         </>
      );
}