import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook  } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout'
import { ThemeProvider } from '@emotion/react'

library.add(
  fab, 
  faCheckSquare, 
  faCoffee,
  faFacebook,
)

//this help to reload page instant with changes
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if(jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

  }, []); 


  const theme = {
    colors: {
        primary: '#ffe000'
    }
  }

  //return all element in props of pages
  return (
    <>
    <Layout>
      <div className="root-app">
        <ThemeProvider theme={theme}>
        <main>
          <Component {...pageProps} />
        </main>
        </ThemeProvider>
      </div>
    </Layout>
    </>
  )
}


