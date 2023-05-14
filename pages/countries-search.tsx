import { useState } from 'react';
import dynamic from 'next/dynamic';
import {
  Box,
  Heading,
  List,
  ListItem,
  useDisclosure,
  Button,
  Text,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import DynamicImportFuseSearchInput from '../components/DynamicImportFuseSearchInput';
import DynamicImportNumber from '../components/DynamicImportNumber';
import { ViewCountry, APICountry } from '../shared/countries';

// Dynamic import of Components
const DynamicImportModal = dynamic(() => import('../components/DynamicModal'), {
  ssr: false,
});

interface CountriesSearchProps {
  countries: ViewCountry[];
}

export default function CountriesSearch({ countries }: CountriesSearchProps) {
  const [results, setResults] = useState(countries);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // dynamic

  return (
    <Layout title="countries search">
      <Box p={10}>
        <Box>
          <Heading as="h2">Dynamic modal</Heading>
          <Button onClick={onOpen}>Open Modal</Button>
          {isOpen && <DynamicImportModal isOpen={isOpen} onClose={onClose} />}
        </Box>
        <Heading as="h2">Lazy Load - Countries search</Heading>
        <Text>Example lazy importing 3rd party libs Fuse.js and Lodash</Text>
        <DynamicImportFuseSearchInput
          countries={countries}
          onChange={(updatedCountries) => setResults(updatedCountries)}
        />
        <List>
          {results.map((country) => (
            <ListItem key={country.cca2}>
              {country.cca2}: {country.name}
              <Text>
                Async population:{' '}
                <DynamicImportNumber num={country.population} />
              </Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Layout>
  );
}

export async function getServerSideProps() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();

  return {
    props: {
      countries: countries.map((country: APICountry) => ({
        name: country.name.common ?? 'unknown',
        cca2: country.cca2 ?? 'unknown',
        population: country.population ?? 'unknown',
      })) as ViewCountry[],
    },
  };
}
