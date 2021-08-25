import { GlobalStyles } from '../styles/global';
import { Provider } from 'react-redux';
// import { useStore } from 'store';

import "./_app.css";

function MyApp({ Component, pageProps }) {

  // const store = useStore();


  // return <Provider store={store}>
  //   <Component {...pageProps} />
  // </Provider>
  return(<Component {...pageProps} />);

}

export default MyApp
