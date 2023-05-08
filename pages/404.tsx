import { Box, Heading } from '@chakra-ui/react';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';

// pages/404.js
// {/*<Layout title="X404"> */}
export default function Custom404() {
  return (
    <Layout
      CustomHead={() => (
        <PageHead title="404">
          <meta name="robots" content="noindex,nofollow" />
        </PageHead>
      )}
    >
      <Box p={10} color="orange.500">
        <Heading as="h2">Custom 404</Heading>
        <Heading as="h3">Page Not Found</Heading>
        <p>The server can't find the requested resource.</p>
      </Box>
    </Layout>
  );
}
