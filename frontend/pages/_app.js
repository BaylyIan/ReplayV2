import { GlobalStyles } from '../styles/global';
import Provider from '../utils/context'

import "./_app.css";

// cookies / axios
import axios from 'axios';
import jsCookie from 'js-cookie';
import jsHttpCookie from 'cookie';

function MyApp({ Component, pageProps, router }) {

  var tokenCheck = false;
  if (process.browser) {
    const token = sessionStorage.getItem("token");
    if (token) {
      jsCookie.set("token", token);
      axios.defaults.headers.common['Authorization'] = "Bearer " + token;
      tokenCheck = true
    }else{
      tokenCheck = false
    }
  }

  console.log(tokenCheck, 'tokenCheck')

  return (<Provider>
    <GlobalStyles />
    <Component {...pageProps} />
  </Provider>);
}

export async function getServerSideProps({ req, res }) {
  const { token } = jsHttpCookie.parse(req.headers.cookie);
}

export default MyApp
