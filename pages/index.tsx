import Image from 'next/image';
import { Card } from '../shared/components/Card/Card';
import * as C from '../styles/HomeStyled';

export interface resultsProps {
  name: string;
  id: number;
  url: string
}

interface dataResultProps {
  results: resultsProps[];
}

export async function getStaticProps() {
  const maxPokemons = 100;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`);
  const data: dataResultProps = await response.json();
  //add index pokemon
  console.log(data);

  data.results.forEach((poke, index) => {
    poke.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results
    }
  }
}

interface HomeProps {
  pokemons: resultsProps[];
}

export default function Home({ pokemons }: HomeProps) {

  return (
    <C.MainContainer>
      <div>
        <h1>Poke<span>Next</span></h1>
        <Image src="/images/logo.png" alt='logo' height={40} width={40} />

      </div>

      <ul>
        {pokemons.map((poke) => (
          <Card key={poke.id} pokeInfos={poke} />
        ))}
      </ul>
    </C.MainContainer>
  )
}
