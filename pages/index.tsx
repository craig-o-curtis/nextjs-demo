import { GetStaticProps } from 'next';
import AnchorLink from '../components/AnchorLink';
import {
  Box,
  Divider,
  Heading,
  List,
  ListItem,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import DarkModeToggle from '../components/DarkModeToggle';
import CustomScript from '../components/CustomScript';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';

// static site get props stuff here
import { getSortedPostsData, Post } from '../lib/posts';
import { Fragment } from 'react';
import PostMeta from '../components/PostMeta';
import StyledLink from '../components/StyledLink';

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
        <Text>
          Custom 404 example: <AnchorLink path="/404" text="404 page" />
        </Text>
        <Divider my="1" />
        <Text>
          Manual 404 example:{' '}
          <AnchorLink path="/manual404" text="Redirects to 404" />
        </Text>
        <Divider my="1" />
        <Text>
          Custom 410 example: <AnchorLink path="/410" text="410 page" />
        </Text>
        <Divider my="1" />
        <Text>
          Custom 500 example: <AnchorLink path="/500" text="500 page" />
        </Text>
        <Divider my="1" />
        <Text>
          Custom 503 example: <AnchorLink path="/503" text="503 page" />
        </Text>
        <Divider my="1" />
        Example Styled component link{' '}
        <StyledLink href="/posts/ssg-ssr" name="hard-coded first post" />
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
      <Divider my="1" />
      <Box>
        <Heading as="h3">Lazy Loading: Countries Search</Heading>
        <AnchorLink path="/countries-search" text="Countries Search" />
      </Box>
    </Layout>
  );
}

export async function getStaticProps(props: GetStaticProps) {
  // filesystem md files
  const allPostsData = getSortedPostsData();
  // api stuff
  const starWarsGuysRaw = await fetch('https://swapi.dev/api//people/1/');
  const starWarsGuys = await starWarsGuysRaw.json();
  console.log('props', props);

  return {
    props: {
      allPostsData,
      starWarsGuys,
    },
  };
}
