import { Box, Heading, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';

export default function Custom500() {
  return (
    <Layout
      CustomHead={() => (
        <PageHead title="500">
          <meta name="robots" content="noindex,nofollow" />
        </PageHead>
      )}
    >
      <Box p={10} color="red">
        <Heading as="h2">Custom 500</Heading>
        <Heading as="h3">Server-side error</Heading>
        <Text>
          The server encountered an unexpected condition that prevented it from
          fulfilling the request.
        </Text>
      </Box>
    </Layout>
  );
}
