import Head from 'next/head';

const BaseLayout: React.FC<any> = ({
  title = 'Grooving Against Leukemia',
  description = 'Post Marathon Party at Crompton Ale House',
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Monoton&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>{children}</main>

      <footer>
        <p>Reach out!</p>
        <p>
          <a href="https://www.planetary.org/worlds/pale-blue-dot">
            Pale blue dot.
          </a>
        </p>
      </footer>
    </div>
  );
};

export default BaseLayout;
