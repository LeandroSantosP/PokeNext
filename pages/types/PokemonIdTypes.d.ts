export interface ability {
   name: string;
   url: string;
}

export interface abilityProps {
   ability: ability
   is_hidden: boolean;
   slot: number;
}

export interface pokeNewInfos {
   colors: coloursByTypeProps[]
   abilitys: abilityProps[];
}