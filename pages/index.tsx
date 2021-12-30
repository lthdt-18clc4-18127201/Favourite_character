import fetch from 'isomorphic-unfetch'
import CharacterGrid from '../components/CharacterGrid';

const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {

  return (
    <CharacterGrid new_data={data}/>
  )
}