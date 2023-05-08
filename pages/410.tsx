import { Box, Heading } from '@chakra-ui/react';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';

export default function Custom410() {
  return (
    <Layout
      CustomHead={() => (
        <PageHead title="410">
          <meta name="robots" content="noindex,nofollow" />
        </PageHead>
      )}
    >
      <Box p={10} color="orange.500">
        <Heading as="h2">Custom 410</Heading>
        <Heading as="h3">Service gone</Heading>
        <p>
          Access to the target resource is no longer available at the origin
          server and that this condition is likely to be permanent.
        </p>
      </Box>
    </Layout>
  );
}
