import styled from "styled-components";

export const AboutContainer = styled.section`
   display: flex;
   margin: 0 auto;
   background-color: #4B3F59;
   color: #ccc;
   flex-direction: column;
   padding: 20px;
   height: 90vh;

   div:nth-child(1) {
      margin-bottom: 2rem;

      h1 {
         font-size: 2rem;
         font-weight: bold;
         margin-bottom: 2rem;
      }

      img {
         height: 200px;
         width: 150px;
      }
   }

   div:nth-child(2) {
      font-size: 15px;
      margin: 0 auto;
      overflow: auto;
      display: flex;
      text-align: start;
      max-width: 600px;

   }
   @media (max-width: 768px) {
      width: 100%;


  div:nth-child(2) {
      font-size: 15px;
      max-width: 100%;
      margin: 0 auto;
      font-size: 10px;
   }
  }
`