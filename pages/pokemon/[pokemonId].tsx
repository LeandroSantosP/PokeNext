import { dataResultProps } from "..";
import { NormalizerData } from "../../shared/functions/NormalizadData";
import { pokesInfosProps } from "../../shared/functions/type";

export const getStaticPaths = async () => {
   const maxPokemons = 200;
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`);
   const data: dataResultProps = await response.json();

   const paths = data.results.map((pokemon, index) => {
      return {
         params: { pokemonId: (index + 1).toString() }
      }
   });

   return {
      paths,
      fallback: false
   }

}

export const getStaticProps = async (context: any) => {

   const id = context.params.pokemonId

   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
   const data = await res.json();

   return {
      props: {
         pokemon: data
      }
   }
}

export default function Pokemon({ pokemon }: any) {
   const NormalizetedData = NormalizerData(pokemon)

   return (
      <>
         <p>{NormalizetedData?.pokename}</p>
      </>
   )
}