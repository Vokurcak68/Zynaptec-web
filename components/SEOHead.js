import Head from 'next/head'
import SEO from '../lib/seo'

export default function SEOHead({
  title,
  description,
  image,
  url,
  type = 'website',
  noindex = false
}) {
  const pageTitle = title ? `${title} | ${SEO.defaultTitle}` : SEO.defaultTitle
  const pageDescription = description || SEO.defaultDescription
  const pageImage = image || `${SEO.siteUrl}${SEO.defaultImage}`
  const pageUrl = url || SEO.siteUrl

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={SEO.openGraph.site_name} />
      <meta property="og:locale" content={SEO.openGraph.locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* Additional SEO */}
      <meta name="language" content="Czech" />
      <meta name="author" content="Zynaptec" />
    </Head>
  )
}
