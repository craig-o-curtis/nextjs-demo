//pages/sitemap.xml.js
import { GetServerSidePropsContext } from 'next';

const EXTERNAL_URL = 'https://nextjs-demo-beta.vercel.app';
const EXTERNAL_DATA_URL = `${EXTERNAL_URL}/posts`;

interface FakePostSinceThisTutorialSucks {
  id: string;
}

function generateSiteMap(posts: FakePostSinceThisTutorialSucks[]) {
  // not ideal, example form nextjs tutorial gives ridic api url not even used in previous lessons
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${EXTERNAL_URL}</loc>
     </url>
     <url>
       <loc>${EXTERNAL_URL}/posts/ssg-ssr</loc>
     </url>
     <url>
       <loc>${EXTERNAL_URL}/posts/pre-rendering</loc>
     </url>
     ${
       posts.length > 0 &&
       posts
         .map(({ id }) => {
           return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `;
         })
         .join('')
     }
   </urlset>
 `;
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  // We make an API call to gather the URLs for our site
  //   const request = await fetch(EXTERNAL_DATA_URL);
  //   const posts = await request.json();
  const mockPosts: FakePostSinceThisTutorialSucks[] = [];

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(mockPosts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}
