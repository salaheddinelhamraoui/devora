import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FBF8F3" />
      </Head>
      <body className="bg-cream">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
