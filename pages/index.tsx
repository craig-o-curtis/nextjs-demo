import AnchorLink from '../components/AnchorLink';
import { Box, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import DarkModeToggle from '../components/DarkModeToggle';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';

// static site get props stuff here
import { getSortedPostsData, Post } from '../lib/posts';

interface IndexPage {
  allPostsData: Post[];
  starWarsGuys: Record<string, unknown>[];
}

export default function IndexPage({ allPostsData }: IndexPage): JSX.Element {
  const squareBg = useColorModeValue('blue.600', 'purple.300');

  return (
    <Layout home>
      <Box>
        <DarkModeToggle />
        <h1 className="text-3xl font-bold underline">Hello tailwind!</h1>
        <p className="text-slate-700 dark:text-slate-500">test1</p>
        <p className="text-lg">test1</p>
        <h3>Blog 1 &rarr;</h3>
        <AnchorLink path="/posts/first-post" text="First Post" />
      </Box>

      <List spacing={3} className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <ListItem key={id} className={utilStyles.listItem}>
            <AnchorLink color={squareBg} path={`/posts/${id}`} text={title} />
            <br />
            id: {id}
            <br />
            date: {date}
          </ListItem>
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
