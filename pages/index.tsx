import Image from 'next/image';
import { useState } from 'react';
import { Card } from '../shared/components/Card/Card';
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

  return (
    <C.MainContainer>
      <div>
        <h1>Poke<span>Next</span></h1>
        <Image src="/images/logo.png" alt='logo' height={100} width={100} />

      </div>

      <ul>
        {pokemons.map((poke, index) => (
          <Card key={index} pokeInfos={poke} />
        ))}
      </ul>
    </C.MainContainer>
  )
}
