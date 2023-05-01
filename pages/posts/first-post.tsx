import Script from 'next/script';
import PageHead from '../../components/PageHead';
import AnchorLink from '../../components/AnchorLink';
import CustomScript from '../../components/CustomScript';

export default function FirstPost() {
  return (
    <>
      <PageHead title="First Post"></PageHead>
      <CustomScript
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>First Post</h1>
      <AnchorLink />
    </>
  );
}
