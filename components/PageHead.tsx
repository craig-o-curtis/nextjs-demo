import Head from 'next/head';

interface PageHeadProps {
  title?: string;
  children?: React.ReactNode;
}
export const siteTitle = 'Next.js Sample Website';

export default function PageHead({
  title = siteTitle,
  children,
}: PageHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image" // describes page content
        content={`https://og-image.vercel.app/${encodeURI(
          title
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      {children ? children : null}
    </Head>
  );
}
