import styled from "styled-components";

export const PokemonContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   padding: 15px;
   gap: 15px;
   background-color: #4B3F59;
      min-height: 100vh;
   position: relative;


`

export const ShadowContainer = styled.div`
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;

      background: rgb(255,255,255);
      background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(3,1,1,0.5270483193277311) 0%, rgba(0,0,0,1) 100%);
`


export const PokeTitle = styled.h1`
      font-size: 3rem;
      color: #111;
      font-weight: bold;
      color: ${props => props.color || '#111'};

`

export const InfosContainer = styled.div<{ color?: string }>`
      width: 70%;
      height: 100%;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #111;
      border-radius: 10px;
      margin-bottom: 2rem;
      
      section {
            display: flex;
            width: 100%;
            justify-content: space-evenly;
            gap: 1rem;
            align-items: center;

            h4{
                  font-size: 1rem;
                  margin-bottom: .5rem;
                  border-bottom: 1px solid #111;
            }

            span{
                  font-weight: bold;
                  color: ${props => props.color || 'black'};
            }
      }

      @media (max-width: 768px) {
            width: 100%;
      }
`

export const typeContainer = styled.div`
      padding: 10px;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      gap: 10px;
      margin: 1rem 0;

      a {
            max-width:45%;
            flex: 1;
            padding: 10px 15px;
            border-radius: 6px;
            overflow: hidden;
            text-overflow: ellipsis; 
      }


            @media (max-width: 768px) {
                  flex-direction: column;
                  align-items: center;
                  a {
                        width: 100%;
                        max-width:100%;
                        flex: 1;
                  }
            }     


`