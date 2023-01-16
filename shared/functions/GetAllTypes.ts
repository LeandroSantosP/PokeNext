import { useEffect, useState } from "react";
import { isNumericLiteral, TypePredicateKind } from "typescript";

interface allNamesTypesProps {
   name?: string;
   url?: string;
}

export interface coloursByTypeProps {
   color: string;
   type: string;
}


const coloursByType: coloursByTypeProps[] = [
   {
      type: "normal",
      color: '#A8A77A'
   },
   {
      type: "fighting",
      color: '#C22E28'
   },
   {
      type: "flying",
      color: '#A98FF3'
   },
   {
      type: "poison",
      color: '#A33EA1'
   },
   {
      type: "ground",
      color: '#E2BF65'
   },
   {
      type: "rock",
      color: '#B6A136'
   },
   {
      type: "bug",
      color: '#A6B91A'
   },
   {
      type: "ghost",
      color: '#735797'
   },
   {
      type: "steel",
      color: '#B7B7CE'
   },
   {
      type: "fire",
      color: '#EE8130'
   },
   {
      type: "water",
      color: '#6390F0'
   },
   {
      type: "grass",
      color: '#7AC74C'
   },
   {
      type: "electric",
      color: '#F7D02C'
   },
   {
      type: "psychic",
      color: '#F95587'
   },
   {
      type: "ice",
      color: '#96D9D6'
   },
   {
      type: "dragon",
      color: '#6F35FC'
   },
   {
      type: "dark",
      color: '#705746'
   },
   {
      type: "fairy",
      color: '#D685AD'
   },
   {
      type: "unknown",
      color: "#ccc"
   },
   {
      type: "#111",
      color: ""
   },
];


export interface ColorsReponseProps {
   colors: coloursByTypeProps[];
   allPokemonsTypes: string[];
}

//Can you take all pokemons just pass '' propety in GetAllTyped function!

export const GetAllTyped = async (types: string[] | ''): Promise<ColorsReponseProps | any> => {
   const response = await fetch(`https://pokeapi.co/api/v2/type`);
   const data = await response.json();
   const allNamesTypes = data.results.map((element: allNamesTypesProps) => element.name);

   if (types.length > 0 && !types !== null) {
      const filterType = allNamesTypes.filter((type: string) => types.includes(type));

      return {
         colors: coloursByType.filter(item => filterType.includes(item.type)),
         allPokemonsTypes: allNamesTypes
      }
   }


   return allNamesTypes;
}
