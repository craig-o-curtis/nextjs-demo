import { Box, Heading } from '@chakra-ui/react';
import Layout from '../components/Layout';

// pages/404.js
export default function Custom404() {
  return (
    <Layout title="404">
      <Box p={10}>
        <Heading as="h1">404</Heading>
        <Heading as="h2">Page Not Found</Heading>
      </Box>
    </Layout>
  );
}
