import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import PageHead from './PageHead';
import PageHeader from './PageHeader';

interface LayoutProps {
  title?: string;
  children?: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  const pageBg = useColorModeValue('gray.100', 'gray.900');
  return (
    <Box>
      <PageHead title={title} />
      <Box maxW="36rem" p="1rem" m="3rem auto 6rem">
        <PageHeader />
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          background={pageBg}
        >
          <main>{children}</main>
        </Flex>
      </Box>
    </Box>
  );
}
