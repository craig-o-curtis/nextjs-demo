import { Box, Heading, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';

export default function Custom503() {
  return (
    <Layout
      CustomHead={() => (
        <PageHead title="503">
          <meta name="robots" content="noindex,nofollow" />
        </PageHead>
      )}
    >
      <Box p={10} color="red">
        <Heading as="h2">Custom 503</Heading>
        <Heading as="h3">Service not available</Heading>
        <Text>Website is down for an extended period of time.</Text>
        <Text>
          This prevents losing search engine rankings on a long-term basis.
        </Text>
      </Box>
    </Layout>
  );
}
