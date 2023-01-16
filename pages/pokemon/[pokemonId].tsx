import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dataResultProps } from "..";
import { FormatTextToUpperCase, getUrlId } from "../../shared/components/Card/Card";
import { coloursByTypeProps, GetAllTyped } from "../../shared/functions/GetAllTypes";
import { NormalizerData } from "../../shared/functions/NormalizadData";
import * as C from '../../styles/PokemonStyled';

export const getStaticPaths = async () => {
   const maxPokemons = 200;
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

export const getStaticProps = async (context: any) => {

   const id = context.params.pokemonId;

   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
   const data = await res.json();

   return {
      props: {
         pokemon: data
      }
   }
}

export default function Pokemon({ pokemon }: any) {
   const pokemons = NormalizerData(pokemon);
   const [poketype, setPokeType] = useState<coloursByTypeProps[]>([]);

   const typesNames = pokemons?.pokeTypes.map(item => item.type.name);

   useEffect(() => {
      if (typesNames) {
         const getColors = async () => {
            const response = await GetAllTyped(typesNames);
            if (response)
               setPokeType(response.colors);
         }

         getColors();
      }
   }, [setPokeType]);

   const pokeID = (pokemons?.pokeId.toString().length);

   if (pokemons && poketype)

      return (
         <>
            <C.PokemonContainer>
               <C.PokeTitle>{FormatTextToUpperCase(pokemons?.pokename)}</C.PokeTitle>
               <Image
                  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokeID === 1 ? '00' + pokemons.pokeId : pokeID === 2 ? '0' + pokemons.pokeId : pokeID === 3 ? pokemons.pokeId : ''}.png`}
                  alt={pokemons.pokename}
                  width={200}
                  height={200}
               />

               <C.InfosContainer color="#111">

                  <h2 >Tipo</h2>
                  <C.typeContainer >
                     {pokemons && pokemons?.pokeTypes.map(item => (
                        <Link href="#" style={{
                           backgroundColor: `${poketype
                              .map(pokeInfo => pokeInfo.type === item.type.name && pokeInfo.color)
                              .filter(item => typeof item === 'string')[0]}`
                        }} key={item.slot}>
                           {FormatTextToUpperCase(item.type.name)}
                        </Link>
                     ))}
                  </C.typeContainer>

                  <section>
                     <div>
                        <h4>Numero:</h4>
                        <p>#{pokemons.pokeId}</p>
                     </div>
                     <div>
                        <h4>Altura:</h4>
                        <p>{pokemons.pokeHeight * 10}  <span>cm</span></p>
                     </div>
                     <div>
                        <h4>Peso:</h4>
                        <p>{pokemons.pokeWeight / 10} <span>Kg</span></p>
                     </div>
                  </section>

               </C.InfosContainer>

            </C.PokemonContainer>

         </>
      );
}