import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MobileMenu } from './MobileMenus';

interface ButtonProps {
   open: boolean;
}

const StyledBurger = styled.div<ButtonProps>`
   width: 2rem;
   height: 2rem;
   position: fixed;
   top: 40px;
   right: 20px;
   display: flex;
   justify-content: space-around;
   flex-flow: column nowrap;


   @media (min-width: 768px) {
      display: none;
   }


   div{
      width: 2rem;
      height: 0.25rem;
      background-color: ${({ open }) => open ? '#ccc' : '#333'};
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s linear;

      &:nth-child(1){
         transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotare(0deg)'};
      }
      &:nth-child(2){
         transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
         opacity: ${({ open }) => open ? '0' : '1'};
      }

      &:nth-child(3){
         transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotare(0deg)'};
      }
   }

`

export const Button = () => {
   const [open, setOpen] = useState(false);

   function handletoggle() {
      return setOpen(!open)
   }

   return (
      <>
         <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
            {open ? <MobileMenu open={handletoggle} /> : ''}
         </StyledBurger>
      </>
   )
}
