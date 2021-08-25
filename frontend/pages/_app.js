import { GlobalStyles } from '../styles/global';

import Provider from '../utils/context'

import "./_app.css";

// cookies / axios
import axios from 'axios';
import jsCookie from 'js-cookie';
import jsHttpCookie from 'cookie';

function MyApp({ Component, pageProps, router }) {

  return (<Provider>
    <GlobalStyles />
    <Component {...pageProps} />
  </Provider>);
}

export async function getServerSideProps({ req, res }) {
  const { token } = jsHttpCookie.parse(req.headers.cookie);
}

export default MyApp
