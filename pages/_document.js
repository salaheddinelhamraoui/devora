import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Devora - WordPress maintenance, security and SEO experts. Operated by Devora Systems."
        />
        <meta
          name="keywords"
          content="SEO, google search, bing, yahoo, facebook ads"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
