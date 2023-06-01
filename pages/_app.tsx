// pages/_app.js

import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
// global styles here
import '../styles/globals.css';
import { customTheme } from '../styles/chakraColorTheme';

type MyAppProps = AppProps;

export default function App({ Component, pageProps }: MyAppProps) {
  // all props contains: router, Component, err, pageProps

  return (
    <CacheProvider>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  );
}

export async function getStaticProps() {
  const swapiData = await fetch('https://swapi.dev/api//people/1/');
  console.log('swapiData', swapiData);

  return {
    props: swapiData,
  };
}

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  console.log('metric', metric);
}
