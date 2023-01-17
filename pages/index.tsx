import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Card } from '../shared/components/Card/Card';
import { Button } from '../shared/components/Navbar/Button';
import { allNamesTypesProps, GetAllTyped } from '../shared/functions/GetAllTypes';
import * as C from '../styles/HomeStyled';

export interface resultsProps {
  name: string;
  url: string
}

export interface dataResultProps {
  results: resultsProps[];
}

interface HomeProps {
  pokemons: resultsProps[];
}

export async function getStaticProps() {
  const maxPokemons = 200;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`);
  const data: dataResultProps = await response.json();

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default function Home({ pokemons }: HomeProps) {
  const [optionEl, setOptionEL] = useState<any>([])
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const getAllpokeTypes = async () => {
      const result = await (GetAllTyped(''));

      return setOptionEL(result);

    }
    getAllpokeTypes();

  }, []);
  const handlesubmit = (dados: any) => {
    console.log(dados);
  }
  return (
    <C.MainContainer>
      <form onSubmit={handlesubmit}>
        <select onChange={(e) => setValue(e.target.value)}>
          {optionEl.map((opt: any) => (
            <option key={opt.name}>{opt.name}</option>
          ))}
        </select>
      </form>
      <div>
        <h1>Poke<span>Next</span></h1>
        <Image src="/images/logo.png" alt='logo' height={100} width={100} />

      </div>
      {/* <Button /> */}
      <ul>
        {pokemons.map((poke, index) => (
          <Card key={index} pokeInfos={poke} />
        ))}
      </ul>

    </C.MainContainer>
  )
}
