import { useState } from 'react';
import { Box, Heading, List, ListItem } from '@chakra-ui/react';
import Layout from '../components/Layout';
import DynamicImportFuseSearchInput from '../components/DynamicImportFuseSearchInput';
import DynamicImportNumber from '../components/DynamicImportNumber';
import { ViewCountry, APICountry } from '../shared/countries';

interface CountriesSearchProps {
  countries: ViewCountry[];
}

export default function CountriesSearch({ countries }: CountriesSearchProps) {
  const [results, setResults] = useState(countries);
  // dynamic

  return (
    <Layout title="countries search">
      <Box p={10}>
        <Heading as="h2">Lazy Load - Countries search</Heading>
        <p>Example lazy importing 3rd party libs Fuse.js and Lodash</p>
        <DynamicImportFuseSearchInput
          countries={countries}
          onChange={(updatedCountries) => setResults(updatedCountries)}
        />
        <List>
          {results.map((country) => (
            <ListItem key={country.cca2}>
              {country.cca2}: {country.name}
              <p>
                Async population:{' '}
                <DynamicImportNumber num={country.population} />
              </p>
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
