
import Layout from '../components/Layout'
import Head from 'next/head'

export default function Tym() {
  return (
    <Layout>
      <Head>
        <title>Náš tým – Zynaptec</title>
      </Head>
      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)] px-4 text-center">
        <div>
          <h1 className="text-4xl font-display mb-6">Náš tým</h1>
          <p className="mb-6 max-w-2xl mx-auto">Jsme multidisciplinární tým expertů v oblasti AI, výzkumu, vývoje a datové vědy. Společně tvoříme Zynaptec – inteligenci za hranicí možného.</p>
          <img src="/team-photo.png" alt="Tým Zynaptec" className="rounded shadow-lg mx-auto max-w-4xl" />
        </div>
      </div>
    </Layout>
  )
}
