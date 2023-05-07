import { Box, Heading } from '@chakra-ui/react';
import Layout from '../components/Layout';

// pages/404.js
export default function Custom404() {
  return (
    <Layout title="404">
      <Box p={10} color="orange.500">
        <Heading as="h2">Custom 404</Heading>
        <Heading as="h3">Page Not Found</Heading>
        <p>The server can't find the requested resource.</p>
      </Box>
    </Layout>
  );
}
