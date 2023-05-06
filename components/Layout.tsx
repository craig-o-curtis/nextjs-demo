import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import PageHead from './PageHead';
import PageHeader from './PageHeader';

interface LayoutProps {
  home?: boolean;
  children?: React.ReactNode;
}

export default function Layout({ home = false, children }: LayoutProps) {
  const pageBg = useColorModeValue('gray.100', 'gray.900');
  return (
    <Box maxW="36rem" p="1rem" m="3rem auto 6rem">
      <PageHead title="TODO dynamic title" />
      <PageHeader home={home} />
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        background={pageBg}
      >
        <main>{children}</main>
      </Flex>
    </Box>
  );
}
