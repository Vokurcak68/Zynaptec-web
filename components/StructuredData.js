import Head from 'next/head'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zynaptec',
    url: 'https://zynaptec.cz',
    logo: 'https://zynaptec.cz/zynaptec-logo.png',
    description: 'AI Consulting & Machine Learning Solutions - Transformujeme budoucnost pomocí AI',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Školská 660/3',
      addressLocality: 'Praha 1',
      postalCode: '110 00',
      addressCountry: 'CZ',
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
    url: 'https://zynaptec.cz',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://zynaptec.cz/search?q={search_term_string}',
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
