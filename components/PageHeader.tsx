import styles from './Layout.module.css';
import utilStyles from '../styles/utils.module.css';
import ProfilePic from './ProfilePic';
import { Link } from '@chakra-ui/next-js';

const name = 'Your Name';

interface PageHeaderProps {
  home?: boolean;
}

export default function PageHeader({ home }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      {home ? (
        <>
          <ProfilePic
            height={144}
            width={144}
            className={utilStyles.borderCircle}
          />

          <h1 className={utilStyles.heading2Xl}>{name}</h1>
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
          <h2 className={utilStyles.headingLg}>
            <Link href="/" className={utilStyles.colorInherit}>
              {name}
            </Link>
          </h2>
        </>
      )}
    </header>
  );
}
