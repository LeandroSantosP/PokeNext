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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, dolores nulla non consequuntur excepturi magnam ipsa saepe soluta neque commodi vitae vero dolorum quidem numquam enim pariatur aliquam aliquid architecto!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, dolores nulla non consequuntur excepturi magnam ipsa saepe soluta neque commodi vitae vero dolorum quidem numquam enim pariatur aliquam aliquid architecto!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, dolores nulla non consequuntur excepturi magnam ipsa saepe soluta neque commodi vitae vero dolorum quidem numquam enim pariatur aliquam aliquid architecto!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, dolores nulla non consequuntur excepturi magnam ipsa saepe soluta neque commodi vitae vero dolorum quidem numquam enim pariatur aliquam aliquid architecto!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, dolores nulla non consequuntur excepturi magnam ipsa saepe soluta neque commodi vitae vero dolorum quidem numquam enim pariatur aliquam aliquid architecto!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, dolores nulla non consequuntur excepturi magnam ipsa saepe soluta neque commodi vitae vero dolorum quidem numquam enim pariatur aliquam aliquid architecto!
               </p>
            </div>
         </C.AboutContainer>
      </>
   )
}