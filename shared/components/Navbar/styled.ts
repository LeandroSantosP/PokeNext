import styled from "styled-components";

export const NavContainer = styled.nav`
   width: 100%;
   background-color: #111;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px;



   & div:first-child {
      display: flex;
      align-items: center;
      gap: 2rem;
      
      h1 {
         color: #ccc;
         font-size: 20px;
      }
   }

   //nav-container

   ul {
      display: flex;
      gap: 1rem;  
      border-radius: 5px; 
      

      @media(max-width: 768px){
         display: none;
      }

   }
   /* li { transform: rotate(6deg) } */
   

   a {
      background-color: #4B3F59;

      border-radius: 3px;
      padding: 10px 15px;
      transition: all .3s;
      font-size: 20px;
      color: #ccc;

      &:hover {
         background-color: #26153D;

      }

   }


`