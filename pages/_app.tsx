import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />

        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />

        {process.env.NODE_ENV === 'production' && (
          <script
            defer
            data-domain='jmie.xyz'
            src='https://plausible.io/js/plausible.js'
          ></script>
        )}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Jamie McElwain is a Frontend Developer'
        />

        <title>Jamie McElwain - Frontend Developer</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
