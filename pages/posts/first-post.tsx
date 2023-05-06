import AnchorLink from '../../components/AnchorLink';
import CustomScript from '../../components/CustomScript';
import { Button, Flex, Heading } from '@chakra-ui/react';
import Layout from '../../components/Layout';

export default function FirstPost() {
  return (
    <Layout>
      <CustomScript
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <Heading as="h1" mb="6">
        First Post
      </Heading>
      <AnchorLink />
      <Flex>
        <Button>I do nothing</Button>
      </Flex>
    </Layout>
  );
}
