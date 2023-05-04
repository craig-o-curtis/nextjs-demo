import AnchorLink from '../components/AnchorLink';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import DarkModeToggle from '../components/DarkModeToggle';
import Layout from '../components/Layout';

export default function IndexPage(): JSX.Element {
  const pageBg = useColorModeValue('gray.100', 'gray.900');
  const squareBg = useColorModeValue('gray.200', 'gray.800');

  return (
    <Layout home>
      <Flex
        height="100vh"
        justifyContent="center"
        alignItems="center"
        background={pageBg}
      >
        <Flex direction="column" p="4" background={squareBg}>
          <DarkModeToggle />

          <div>
            <h1 className="text-3xl font-bold underline">Hello tailwind!</h1>
            <p className="text-slate-700 dark:text-slate-500">test1</p>
            <p className="text-lg">test1</p>
            <h3>Blog 1 &rarr;</h3>
            <AnchorLink path="/posts/first-post" text="First Post" />
          </div>
        </Flex>
      </Flex>
    </Layout>
  );
}
