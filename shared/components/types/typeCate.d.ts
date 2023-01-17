export interface pokemonListProps {
   name: string;
   url: string;
}

interface pokemonProps {
   pokemon: pokemonListProps;
}

export interface NormalizantionCategoriesProps {
   id: number;
   name: string;
   pokemon: pokemonProps[];
}