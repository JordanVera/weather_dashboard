import React from 'react';
import { WeatherProvider } from '../context/WeatherContext'; // Adjust the path as needed

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <WeatherProvider>
      <Component {...pageProps} />
    </WeatherProvider>
  );
}

export default MyApp;
