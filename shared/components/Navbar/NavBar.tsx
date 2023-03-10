import Link from "next/link"
import Image from "next/image";
import * as C from './styled';
import { Button } from "./Button";


export const Navbar = () => {


   return (
      <>

         <C.NavContainer>
            <div>
               <Image src="/images/logo.png" alt="Logo" width={70} height={70} />
               <h1>PokeNext</h1>
            </div>

            <ul>
               <li>
                  <Link href="/">Home</Link>
               </li>
               <li>
                  <Link href="/about">
                     Sobre
                  </Link>
               </li>
            </ul>
         </C.NavContainer>
      </>
   )
}