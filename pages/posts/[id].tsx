import { GetStaticProps } from 'next';
import { Box, Heading, Divider } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
// middle-end md processing
import type { Post } from '../../lib/posts';
import PostMeta from '../../components/PostMeta';

type PostProps = Post;

export default function Post({ id, title, date, contentHtml }: PostProps) {
  return (
    <Layout title={title}>
      <Box p="3">
        <Heading as="h1">{title}</Heading>
        <Divider my={3} />
        <PostMeta id={id} date={date} />
        <Divider my={3} />
        {/* Not ideal at all, should use mdx, but just a demo */}
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </Box>
    </Layout>
  );
}

// Build out all possible paths
export async function getStaticPaths(localeObj: {
  locales: string[];
  defaultLocale: string;
}) {
  // Return a list of possible value for id
  console.log('getStaticPaths passes localeObj', localeObj);
  const paths: { params: { id: string } }[] = getAllPostIds();

  return {
    paths,
    fallback: false, // any paths not returned will get 404
    // fallback: 'blocking', // any new post added post build will SSR to ensure SEO. It will then be static for all subsequent requests
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  if (!params || typeof params.id !== 'string') throw new Error('No params.id');
  const postData = await getPostData(params.id);

  return {
    props: { ...postData },
  };
};

// SSR example:
// export async function getServerSideProps({ query }) {
//   const res = await fetch(`https://www.example.com/api/blog/${query.slug}`);
//   const data = await res.json();

//   return {
//     props: {
//       blog: data,
//     },
//   };
// }
