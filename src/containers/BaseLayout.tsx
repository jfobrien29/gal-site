import {
  GAL_DONATE_PAGE_2018,
  GAL_DONATE_PAGE_2019,
  LLS_URL,
} from '@/utils/constants';
import Head from 'next/head';
import Link from 'next/link';

const BaseLayout: React.FC<any> = ({
  title = 'Grooving Against Leukemia',
  description = 'Post Marathon Party 3-7 at Crompton Ale House',
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          property="og:url"
          content={`https://gal.vercel.app/gal-logo.png`}
          key="ogurl"
        />

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
          href="https://fonts.googleapis.com/css2?family=Dosis&family=Monoton&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="dosis-font text-white">{children}</main>

      <footer className="dosis-font text-white">
        <div className="w-full flex flex-col justify-center items-center gap-2 mt-16 mb-4 pb-2">
          <h3 className="text-sm font-semibold mb-1">GAL 2021</h3>
          <div className="flex gap-2">
            <p className="text-xs">
              <Link href={LLS_URL}>
                <a target="_blank">Leukemia Lymphoma Society</a>
              </Link>
            </p>
            <p className="text-xs">|</p>
            <p className="text-xs">
              <Link href={GAL_DONATE_PAGE_2019}>
                <a target="_blank">GAL 2019</a>
              </Link>
            </p>
            <p className="text-xs">|</p>
            <p className="text-xs">
              <Link href={GAL_DONATE_PAGE_2018}>
                <a target="_blank">GAL 2018</a>
              </Link>
            </p>
          </div>
          {/* <p className="text-white text-xs">
            <Link href="/listening">
              <a>Now Playing</a>
            </Link>
          </p> */}
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;
