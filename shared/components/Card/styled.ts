import styled from "styled-components";

export const LiContainer = styled.li`
      display: flex;
      flex-direction: column;
      background-color: #ccc;
      border-radius:5px;
      border: 5px solid #4B3F59;
      gap: .7rem;
      width: 200px;
      height: 300px;


      img{
            margin: 0 auto;
      }

      h1{
            font-size: 2rem;
      }
      & a{
       background-color: #333;
       color: #fff;
       padding: 1rem;
       border-radius: 6px;
       margin: 0 5px;
       margin-top: 1rem;
       transition: all .3s;
      }

      & a:hover {
            background-color: #111;
      }
`

