import React, { ComponentType } from 'react';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import PageHead, { PageHeadProps } from './PageHead';
import PageHeader from './PageHeader';

interface LayoutProps {
  title?: string;
  CustomHead?: ComponentType<PageHeadProps>;
  children?: React.ReactNode;
}

export default function Layout({ title, CustomHead, children }: LayoutProps) {
  const pageBg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box>
      {CustomHead === undefined ? <PageHead title={title} /> : <CustomHead />}
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
