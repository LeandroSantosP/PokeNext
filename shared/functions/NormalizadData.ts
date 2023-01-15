import { pokesInfosProps } from "./type";

export function NormalizerData(data: pokesInfosProps) {
   const pokesInfos = data

   if (!data) return null;

   return {
      pokename: pokesInfos.name,
      pokeId: pokesInfos.id,
      pokeWeight: pokesInfos.weight,
      pokeAbility: pokesInfos.abilities.map(abibility => abibility.ability),
      pokeTypes: pokesInfos.types.type,
      pokeForms: pokesInfos.forms.map(form => form)
   }


}