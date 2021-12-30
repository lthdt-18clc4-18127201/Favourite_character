import CharDetailCom from "../../components/CharDetail";
import fetch from 'isomorphic-unfetch';
import React from "react";

const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

export async function getServerSideProps({ query }) {
  const {id} = query
  const res = await fetch(`${defaultEndpoint}${id}`);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

export default function character({ data }) {
    return (
      <div>
        <CharDetailCom data_1={data}/>
      </div>
    )
  }