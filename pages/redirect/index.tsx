import { Flex, Heading, Spinner } from '@chakra-ui/react';
import Layout from '../../components/Layout';

export default function Redirect() {
  console.log("Redirect doesn't render, redirects");
  return (
    <Layout>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignContent="space-apart"
        alignItems="center"
        minHeight="50vh"
      >
        <Heading as="h2" mb="3">
          Redirecting...
        </Heading>
        <p>Uses 308 buy default</p>
        <Spinner />
      </Flex>
    </Layout>
  );
}

export async function getStaticProps() {
  console.log('redirect get static props');
  // Cleanup function
  return {
    redirect: {
      destination: '/',
      permanent: true, // triggers Status code 308
    },
  };
}
