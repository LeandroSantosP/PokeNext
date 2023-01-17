import { NormalizantionCategoriesProps } from "../components/types/typeCate";


export const getAllCategory = async (id: string): Promise<NormalizantionCategoriesProps> => {

   const response = await fetch(`https://pokeapi.co/api/v2/type/${id}/`);
   const data = await response.json();
   console.log(data);

   return data;
}
