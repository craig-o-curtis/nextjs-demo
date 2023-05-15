import utilStyles from '../styles/utils.module.css';
import ProfilePic from './ProfilePic';
import { Link } from '@chakra-ui/next-js';
import { useRouter } from 'next/router';
import styles from './Layout.module.css';
import { Heading } from '@chakra-ui/react';

const name = 'next.js demo';

export default function PageHeader() {
  const router = useRouter();
  const onIndex = router.pathname === '/' || router.route === '/';

  return (
    <header className={styles.header}>
      {onIndex ? (
        <>
          <ProfilePic
            height={144}
            width={144}
            className={utilStyles.borderCircle}
          />

          <Heading as="h1" className={utilStyles.heading2Xl}>
            {name}
          </Heading>
        </>
      ) : (
        <>
          <Link href="/">
            <ProfilePic
              className={utilStyles.borderCircle}
              height={108}
              width={108}
            />
          </Link>
          <Heading as="h2" className={utilStyles.headingLg}>
            <Link href="/">{name}</Link>
          </Heading>
        </>
      )}
    </header>
  );
}
