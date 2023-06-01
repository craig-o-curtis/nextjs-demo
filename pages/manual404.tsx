import { GetStaticProps } from 'next';
import { Box, Heading, Text, Code } from '@chakra-ui/react';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';

// component does not render, just redirects to 404 according to getStaticProps return notFound true
export default function Custom404() {
  return (
    <Layout
      CustomHead={() => (
        <PageHead title="Manual 404">
          <meta name="robots" content="noindex,nofollow" />
        </PageHead>
      )}
    >
      <Box p={10}>
        <Heading as="h2">Manual 404</Heading>
        <Heading as="h3">Page Not Found</Heading>
        <Text>Use getStaticProps</Text>
        <Code
          // eslint-disable-next-line react/no-children-prop
          children={`
            export async function getStaticProps(context) {
                return {
                    notFound: true, // triggers 404
                };
            }
        `}
        />
      </Box>
    </Layout>
  );
}

// manual way to set
export async function getStaticProps(props: GetStaticProps) {
  console.log('props', props);
  return {
    notFound: true, // triggers 404
    // props: {},
  };
}
