import Head from "next/head";
import { site } from "@/lib/site";

export default function Seo({ title, description, image, path = "" }) {
  const pageTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;
  const pageDescription = description ?? site.description;
  const url = `${site.url}${path}`;
  const ogImage = image ? `${site.url}${image}` : null;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={url} />
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}

      <meta name="twitter:card" content={ogImage ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
    </Head>
  );
}
