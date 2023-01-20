import Image from 'next/image';
import * as C from '../../styles/AboutStyled';

export default function About() {

   return (
      <>
         <C.AboutContainer>
            <div>
               <h1>Sobre o Projeto!</h1>
               <Image src="/images/pokelogo.png" alt='sobre' height={300} width={200} />
            </div>
            <div>
               <p>
                  O projeto PokeNext é uma aplicação web construída usando o framework Next.js com intuito de estudar o Next JS, Uma aplicacao imita uma Pokedex de Pokemon. Ele permite que os usuários visualizem informações detalhadas sobre vários Pokemons. Os usuários podem também podem listar Pokemons pela sua categoria. A aplicação também tem uma página de detalhes para cada Pokemon, onde os usuários podem ver uma imagem do Pokemon e ler mais informações sobre ele. O projeto usa uma API externa para obter informações sobre Pokemons. A interface é construída usando React e estilizada com Lib Styled Components.
               </p>
            </div>
         </C.AboutContainer>
      </>
   )
}