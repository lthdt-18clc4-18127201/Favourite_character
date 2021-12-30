import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";
import Image from 'next/image'

const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

export default function CharacterGrid({new_data}){
    const { info, results: defaultResults = [] } = new_data;
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
                    <Link href="/character/[id]" passHref as={`/character/${id}`}>
                    <a>
                        <Image src={image} alt={`${name} Thumbnail`} height={200} width={200}/>
                        <h3>{ name }</h3>
                    </a>
                    </Link>
                </li>
                )
                })}
            </div>
            <p>
            <button className="btn btn-to-auth-form"onClick={handleLoadMore}>Load More</button>
            </p>
        </main>
        </div>
    )
}