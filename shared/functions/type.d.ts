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

}

export interface pokesInfosProps {
   abilities: abilitiesProps[];
   forms: formProps[];
   types: typesPros;
   weight: number;
   id: number;
   name: string;

}

