// pages/_app.js
import React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
// global styles here
import '../styles/globals.css';
import { customTheme } from '../styles/chakraColorTheme';

interface MyAppProps extends AppProps {
  props: {
    title: string;
  };
}

export default function App({ Component, pageProps, props }: MyAppProps) {
  console.log('props', props);
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
