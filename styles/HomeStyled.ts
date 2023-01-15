import styled from "styled-components";

export const MainContainer = styled.div`
   background-image: url('./images/background.jpg');
   min-height: 100vh;
   background-size: cover;
   background-repeat: no-repeat;
   background-attachment: scroll;
   background-attachment: fixed;


   div:first-child{
         display: flex;
         justify-content: center;
         align-items: center;
         font-size: 2rem;
         font-weight: bold;
         color: #111;
         padding: 3rem;

         & span {
            color: #E33D33;
         }
   }

   ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;

   }

`