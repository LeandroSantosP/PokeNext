import Image from "next/image";
import Link from "next/link";
import { resultsProps } from "../../../pages"
import * as C from './styled';


interface CardProps {
   pokeInfos: resultsProps
}
export function FormatTextToUpperCase(name: string) {
   let fristLetter = name.charAt(0).toUpperCase();
   let restLetters = name.slice(1);
   let finalResult = fristLetter + restLetters;

   return finalResult;
};

export function getUrlId(url: string) {
   let urlWithOutBackslash = ''

   if (url.includes("/")) urlWithOutBackslash = url.replaceAll("/", "");

   const getID = urlWithOutBackslash.slice(-5);


   return getID.replace(/[^0-9]/g, '');
}


export const Card = ({ pokeInfos }: CardProps) => {
   const { name, url } = pokeInfos;

   const pokeId = getUrlId(url);

   return (
      <C.LiContainer>
         <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`}
            alt={name}
            height={150}
            width={150}
         />

         <h2>{FormatTextToUpperCase(name)}</h2>
         <Link href={`/pokemon/${pokeId}`}>Ver Mais Detalhes</Link>
      </C.LiContainer>

   )
}