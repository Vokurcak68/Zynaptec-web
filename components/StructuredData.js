import Head from 'next/head'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zynaptec',
    url: 'https://www.zynaptec.cz',
    logo: 'https://www.zynaptec.cz/zynaptec-logo.png',
    description: 'AI Consulting & Machine Learning Solutions - Transformujeme budoucnost pomocí AI',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CZ',
      addressLocality: 'Praha',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@zynaptec.cz',
      contactType: 'customer service',
    },
    sameAs: [
      // Přidejte vaše sociální sítě
      // 'https://www.linkedin.com/company/zynaptec',
      // 'https://twitter.com/zynaptec',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zynaptec',
    url: 'https://www.zynaptec.cz',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.zynaptec.cz/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </Head>
  )
}
