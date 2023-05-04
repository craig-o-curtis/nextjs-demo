import { Box } from '@chakra-ui/react';
import PageHead from './PageHead';
import PageHeader from './PageHeader';

interface LayoutProps {
  home?: boolean;
  children?: React.ReactNode;
}

export default function Layout({ home = false, children }: LayoutProps) {
  return (
    <Box maxW="36rem" p="0 1rem" m="3rem auto 6rem">
      <PageHead title="TODO dynamic title" />
      <PageHeader home={home} />
      <main>{children}</main>
    </Box>
  );
}
