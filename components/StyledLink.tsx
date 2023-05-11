import Link from 'next/link';
import styled from 'styled-components';

// This creates a custom component that wraps an <a> tag
const WrappedLink = styled(Link)`
  color: red;
`;

function StyledLink({
  href,
  name,
}: {
  href: HTMLAnchorElement['href'];
  name: string;
}) {
  // Probably don't need to use passHref
  return (
    <WrappedLink href={href} passHref>
      {name}
    </WrappedLink>
  );
}

export default StyledLink;
