import React from 'react';
// import Link from 'next/link';
import { Link } from '@chakra-ui/next-js';

interface AnchorLinkProps {
  path?: string;
  text?: string;
}

export default function AnchorLink({
  path = '/',
  text = 'Home',
}: AnchorLinkProps) {
  return <Link href={path}>{text}</Link>;
}
