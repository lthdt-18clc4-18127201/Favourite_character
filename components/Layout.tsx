import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { Container, Typography } from '@material-ui/core'
import useStyles from '../utils/styles'
import Nav from '../components/Nav'

export default function Layout({children}) {
    const classes = useStyles();

    return (
        <div>
            <Head>
                <title>Favourite Character</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
            </Head>
            <Nav/>

            <Container className={classes.main}>
                {children}
            </Container>

            <footer>
                <Typography>A lot of thing here</Typography>
                <Script src="scripts/jquery-3.3.1.min.js"></Script>
                <Script src="scripts/bootstrap.min.js"></Script>            
            </footer>
        </div>
    )
}
