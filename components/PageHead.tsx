import Head from 'next/head';

interface PageHeadProps {
  title: string;
  children?: React.ReactNode;
}

export default function PageHead({
  title = 'Create Next App',
  children,
}: PageHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      {children ? children : null}
    </Head>
  );
}
