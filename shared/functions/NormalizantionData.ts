import { pokesInfosProps, PokeInfos } from "../components/types/type";
import { NormalizantionCategoriesProps } from "../components/types/typeCate";

export function NormalizerData(data: PokeInfos) {
   const pokesInfos = data

   if (!data) return null;


   return {
      pokename: pokesInfos.name ?? null,
      pokeId: pokesInfos.id ?? null,
      pokeWeight: pokesInfos.weight ?? null,
      pokeAbility: pokesInfos.abilities.map(abibility => abibility.ability) ?? null,
      pokeTypes: pokesInfos.types,
      pokeForms: pokesInfos.forms.map(form => form) ?? null,
      pokeImages: pokesInfos.sprites ?? null,
      pokeHeight: pokesInfos.height ?? null
   }
}

///
export const NormalizantionCategories = (data: NormalizantionCategoriesProps) => {
   const { id, name, pokemon } = data;

   return {
      categoryName: name ?? null,
      id: id ?? null,
      pokemonList: pokemon.map(poke => poke.pokemon) ?? null
   }
}