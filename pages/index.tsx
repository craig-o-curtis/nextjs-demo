import AnchorLink from '../components/AnchorLink';
import ProfilePic from '../components/ProfilePic';
import PageHead from '../components/PageHead';
import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import DarkModeToggle from '../components/DarkModeToggle';

export default function IndexPage(): JSX.Element {
  const pageBg = useColorModeValue('gray.100', 'gray.900');
  const squareBg = useColorModeValue('gray.200', 'gray.800');

  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      background={pageBg}
    >
      <Flex direction="column" p="4" background={squareBg}>
        <PageHead title="Blog App" />

        <main>
          <Heading mb="6">Blog App</Heading>
          <ProfilePic />

          <DarkModeToggle />

          <p>Read the blogs</p>

          <div>
            <div>
              <h3>Blog 1 &rarr;</h3>
              <AnchorLink path="/posts/first-post" text="First Post" />
            </div>
          </div>
        </main>

        <footer>Footer</footer>
      </Flex>
    </Flex>
  );
}
