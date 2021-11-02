import {
  GAL_DONATE_PAGE_2018,
  GAL_DONATE_PAGE_2019,
  LLS_URL,
} from '@/utils/constants';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const BaseLayout: React.FC<any> = ({
  title = '🕺 Grooving Against Leukemia 🕺',
  description = 'Donate to LLS | 🍺 After the NYC Marathon from 3-7 at Crompton Ale House',
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

        {/* Open Graph */}
        <meta
          property="og:url"
          content={'groovingagainstleukemia.com'}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={`https://gal.vercel.app/gal-logo.png`}
          key="ogimage"
        />
        <meta property="og:site_name" content="GAL 2021" key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        {/* Twitter */}
        <meta name="twitter:card" content={'summary'} />
        <meta name="twitter:site" content="@thejackobrien" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`https://gal.vercel.app/gal-logo.png`}
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
        <div className="w-full flex flex-col justify-center items-center gap-2 mt-12 mb-4 pb-2">
          <div className="">
            <Image src="/gal-logo.png" width="70" height="70" priority />
          </div>

          <div className="flex gap-2">
            <p className="text-xs">
              <Link href={LLS_URL}>
                <a target="_blank">Leukemia & Lymphoma Society</a>
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
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;
