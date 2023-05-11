// import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { ReactNode } from 'react';
import Head from 'next/head';

export interface PageHeadProps {
  title?: string;
  children?: ReactNode;
}
export const siteTitle = 'Next.js Sample Website';

export default function PageHead({
  title = siteTitle,
  children,
}: PageHeadProps) {
  return (
    <Head>
      {/* one of most important SEO elements - title in search results, and affects page rankings */}
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      {/* used to complement title, affects click-through-rate on search results; add more keywords here. Words appear in bold on search */}
      <meta
        name="description"
        content="Demo lesson from Next.js tutorial"
        key="desc"
      />
      {/* tell Google not to show sitelinks search box */}
      <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
      {/* do not offer google translate */}
      <meta name="google" content="notranslate" key="notranslate" />
      {/* open graph og used for social media */}
      <meta name="og:title" content={title} />
      <meta name="og:description" content="Demo lesson from Next.js tutorial" />
      <meta
        property="og:image" // describes page content
        content={`https://og-image.vercel.app/${encodeURI(
          title
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      {children ? children : null}
    </Head>
  );
}
