import { Fragment } from 'react';
import NavBar from '../components/Navbar';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NavBar />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
