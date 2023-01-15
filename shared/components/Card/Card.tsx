import Image from "next/image";
import { resultsProps } from "../../../pages"
import * as C from './styled';


interface CardProps {
   pokeInfos: resultsProps
}

export const Card = ({ pokeInfos }: CardProps) => {

   const { id, name, url } = pokeInfos;

   return (

      <C.LiContainer>
         <h2>{name}</h2>
         <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
            height={150}
            width={150}
         />
      </C.LiContainer>

   )
}