import Image from "next/image";
import Link from "next/link";
import { resultsProps } from "../../../pages"
import * as C from './styled';


interface CardProps {
   pokeInfos: resultsProps
}
function FormatTextToUpperCase(name: string) {
   let fristLetter = name.charAt(0).toUpperCase();
   let restLetters = name.slice(1);
   let finalResult = fristLetter + restLetters;

   return finalResult;
};


export const Card = ({ pokeInfos }: CardProps) => {
   const { id, name, url } = pokeInfos;


   return (
      <C.LiContainer>
         <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
            height={150}
            width={150}
         />

         <h2>{FormatTextToUpperCase(name)}</h2>
         <Link href={`/pokemon/${id}`}>Ver Mais Detalhes</Link>
      </C.LiContainer>

   )
}