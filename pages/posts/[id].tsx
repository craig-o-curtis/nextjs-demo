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
        <Heading>{title}</Heading>
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
export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths: { params: { id: string } }[] = getAllPostIds();
  return {
    paths,
    fallback: false, // any paths not returned will get 404
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
