import { abilityProps } from "../../../pages/types/PokemonIdTypes";
import { FormatTextToUpperCase } from "../Card/Card";
import * as C from './styled';

interface PokeHabilitysProps {
   ability: abilityProps
};

export const PokeHabilitys = ({ ability }: PokeHabilitysProps) => <C.AbilityContianer><h2>{FormatTextToUpperCase(ability.ability.name)}</h2></C.AbilityContianer>