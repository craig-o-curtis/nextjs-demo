import styles from '../styles/Home.module.css';
import AnchorLink from '../components/AnchorLink';
import ProfilePic from '../components/ProfilePic';
import PageHead from '../components/PageHead';

export default function Home(): JSX.Element {
  return (
    <div className={styles?.container}>
      <PageHead title="Blog App" />

      <main>
        <h1 className={styles.title}>Blog App</h1>
        <ProfilePic />

        <p className={styles.description}>Read the blogs.</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Blog 1 &rarr;</h3>
            <AnchorLink path="/posts/first-post" text="First Post" />
          </div>
        </div>
      </main>

      <footer>Footer</footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
