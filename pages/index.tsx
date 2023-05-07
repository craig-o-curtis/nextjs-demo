import AnchorLink from '../components/AnchorLink';
import {
  Box,
  Divider,
  Heading,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';
import DarkModeToggle from '../components/DarkModeToggle';
import CustomScript from '../components/CustomScript';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';

// static site get props stuff here
import { getSortedPostsData, Post } from '../lib/posts';
import { Fragment } from 'react';
import PostMeta from '../components/PostMeta';

interface IndexPage {
  allPostsData: Post[];
  starWarsGuys: Record<string, unknown>[];
}

export default function IndexPage({ allPostsData }: IndexPage): JSX.Element {
  const squareBg = useColorModeValue('blue.600', 'purple.300');

  return (
    <Layout>
      <CustomScript
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Box>
        <DarkModeToggle />
        <Heading className="text-3xl font-bold underline">
          Hello tailwind!
        </Heading>
        <Divider my="1" />
        <p>
          Redirect example:{' '}
          <AnchorLink path="/redirect" text="Redirects to /" />
          <p>
            <strong>Note: </strong> broken in build, changing redirect.index to
            txt file
          </p>
        </p>
        <Divider my="1" />
        <p>
          Custom 404 example: <AnchorLink path="/404" text="404 page" />
        </p>
        <Divider my="1" />
        <p>
          Manual 404 example:{' '}
          <AnchorLink path="/manual404" text="Redirects to 404" />
        </p>
        <Divider my="1" />
        <p>
          Custom 410 example: <AnchorLink path="/410" text="410 page" />
        </p>
        <Divider my="1" />
        <p>
          Custom 500 example: <AnchorLink path="/500" text="500 page" />
        </p>
        <Divider my="1" />
        <p>
          Custom 503 example: <AnchorLink path="/503" text="503 page" />
        </p>
        <Divider my="1" />
        <p className="text-slate-700 dark:text-slate-500">
          All about some blog stuff
        </p>
      </Box>

      <List spacing={3} className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <Fragment key={id}>
            <Divider my={3} />
            <ListItem key={id} className={utilStyles.listItem}>
              <AnchorLink color={squareBg} path={`/posts/${id}`} text={title} />
              <PostMeta id={id} date={date} />
            </ListItem>
          </Fragment>
        ))}
      </List>
    </Layout>
  );
}

export async function getStaticProps() {
  // filesystem md files
  const allPostsData = getSortedPostsData();
  // api stuff
  const starWarsGuysRaw = await fetch('https://swapi.dev/api//people/1/');
  const starWarsGuys = await starWarsGuysRaw.json();

  return {
    props: {
      allPostsData,
      starWarsGuys,
    },
  };
}
