import { formProps, PokeInfos, typesPros } from '../types/type'
import { NormalizantionCategoriesProps } from '../types/typeCate'


export const TableOfPokeInfos = ({ pokeInfos }: any) => {

   return (
      <>
         <section>
            <div>
               <h4>Numero:</h4>
               <p>#{pokeInfos.pokeId}</p>
            </div>
            <div>
               <h4>Altura:</h4>
               <p>{pokeInfos.pokeHeight * 10}  <span>cm</span></p>
            </div>
            <div>
               <h4>Peso:</h4>
               <p>{pokeInfos.pokeWeight / 10} <span>Kg</span></p>
            </div>
         </section>
      </>
   )
}