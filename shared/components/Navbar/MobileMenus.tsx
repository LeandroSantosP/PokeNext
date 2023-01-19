import Link from "next/link"
import { useState } from "react"
import styled from "styled-components"
import { Button } from "./Button"



const MobileMenuStyles = styled.ul`
         flex-direction: column;
         position: fixed;
         top: 0;
         left: 0;
         height: 100%;
         width: 300px;
         padding-top: 3.5rem;
         background-color: #2f2d2d;

         li {
            display: flex;
            justify-content: center;
            background-color: #111;
            color: #fff;
            
            margin-bottom: 1rem;
            padding: 1rem;
            font-size: 2rem;

            text-align: center;
            width: 300px;
            width: 100%;

            a {
               width: 300px;
               background-color: initial;
            }
         }
`

interface MobileMenu {
   open: () => void;
}

export const MobileMenu = ({ open }: MobileMenu) => {

   return (
      <>
         <MobileMenuStyles>

            <li>
               <Link href="/">Home</Link>
            </li>
            <li>
               <Link href="/about">
                  Sobre
               </Link >
            </li>
         </MobileMenuStyles>
      </>
   )
}