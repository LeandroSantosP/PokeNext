export interface abilitiesProps {
   ability: {
      name: string;
      url: string;
   }
   slot: number;
   is_hidden: boolean;
}

interface formProps {
   name: string;
   url: string;
};

interface typesPros {
   slot: number;
   type: formProps;

};




export interface pokesInfosProps {
   abilities: abilitiesProps[];
   forms: formProps[];
   types: typesPros[];
   weight: number;
   id: number;
   name: string;
}

export interface PokeInfos extends pokesInfosProps {
   sprites: {
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
   }
   height: number;
}


