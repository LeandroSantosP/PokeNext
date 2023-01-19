import styled from "styled-components";

export const CategorieContainer = styled.ul`
   display: flex;
   width: 100%;
   background-color: #4B3F59;
   flex-wrap: wrap;
   gap: 1rem;
   justify-content: center;
   align-items: center  ;
   padding-top: 4.7rem;

`

interface titleProps {
   color: string;
}

export const Title = styled.h1<titleProps>`
   font-weight: bold;
   font-size: 30x;
   color: ${({ color }) => color};
   position: absolute;
   width: 100%;
   margin: 10px 0;
   background-color: #111;
   padding: 10px;
   box-shadow: 5px 10px 10px rgba(0 , 0 , 0 , 0.40);
`