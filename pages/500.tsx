import { Box, Heading } from '@chakra-ui/react';
import Layout from '../components/Layout';

// pages/404.js
export default function Custom500() {
  return (
    <Layout title="500">
      <Box p={10} color="red">
        <Heading as="h2">Custom 500</Heading>
        <Heading as="h3">Server-side error</Heading>
        <p>
          The server encountered an unexpected condition that prevented it from
          fulfilling the request.
        </p>
      </Box>
    </Layout>
  );
}
