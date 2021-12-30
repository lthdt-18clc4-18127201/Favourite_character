import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";
import Image from 'next/image'

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
  const { info, results: defaultResults = [] } = data;
  const [results, updateResults] = useState(defaultResults);
  const [page, updatePage] = useState({
    ...info,
    current: defaultEndpoint
  });
  const { current } = page;

  useEffect(() => {
    if ( current === defaultEndpoint ) return;

    async function request() {
      const res = await fetch(current)
      const nextData = await res.json();

      updatePage({
        current,
        ...nextData.info
      });

      if ( !nextData.info?.prev ) {
        updateResults(nextData.results);
        return;
      }

      updateResults(prev => {
        return [
          ...prev,
          ...nextData.results
        ]
      });
    }

    request();
  }, [current]);

  function handleLoadMore() {
    updatePage(prev => {
      return {
        ...prev,
        current: page?.next
      }
    });
  }

  return (
    <div className="body-page">
      <Head>
        <title>Wubba Lubba Dub Dub!</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          FAVOURITE CHARACTER
        </h1>

        <p className={styles.description}>
          Welcome to Favourite Character Wiki
        </p>

        <div className={styles.character_grid}>
          {results.map(result => {
            const { id, name, image } = result;
            return (
              <li key={id} className={styles.character_card}>
                <Image src={image} alt={`${name} Thumbnail`} height={200} width={200}/>
                <a href="#">
                  <h3>{ name }</h3>
                </a>
              </li>
              )
            })}
        </div>
        <p>
          <button onClick={handleLoadMore}>Load More</button>
        </p>
      </main>
    </div>
  )
}