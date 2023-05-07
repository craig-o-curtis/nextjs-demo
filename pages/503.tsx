import { Box, Heading } from '@chakra-ui/react';
import Layout from '../components/Layout';

// pages/404.js
export default function Custom503() {
  return (
    <Layout title="503">
      <Box p={10} color="red">
        <Heading as="h2">Custom 503</Heading>
        <Heading as="h3">Service not available</Heading>
        <p>Website is down for an extended period of time.</p>
        <p>This prevents losing search engine rankings on a long-term basis.</p>
      </Box>
    </Layout>
  );
}
