import { pokesInfosProps, PokeInfos } from "./type";

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