import React from 'react';
// import Link from 'next/link';
import { Link } from '@chakra-ui/next-js';

interface AnchorLinkProps {
  path?: string;
  text?: string;
  color?: string;
}

export default function AnchorLink({
  path = '/',
  text = 'Home',
  color,
}: AnchorLinkProps) {
  return (
    <Link href={path} color={color}>
      {text}
    </Link>
  );
}
