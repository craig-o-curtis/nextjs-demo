import { Box, Heading, Code } from '@chakra-ui/react';
import Layout from '../components/Layout';

// component does not render, just redirects to 404 according to getStaticProps return notFound true
export default function Custom404() {
  return (
    <Layout title="404">
      <Box p={10}>
        <Heading as="h2">Manual 404</Heading>
        <Heading as="h3">Page Not Found</Heading>
        <p>Use getStaticProps</p>
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getStaticProps(context: never) {
  return {
    notFound: true, // triggers 404
    // props: {},
  };
}
