import styled from "styled-components";

export const FooterContainer = styled.footer`
   display: flex;
   min-height: 100px;
   justify-content: center;
   align-items: center;
   gap: 1rem;
   background-color: #111;

   p {
      color: #ccc;
      font-size: 18px;
      font-weight: bold;

      span {
         color: #2B1B3F;
         margin-right: 5px;
      }
   }
`