
import Layout from '../components/Layout'
import Head from 'next/head'

export default function Tym() {
  return (
    <Layout>
      <Head>
        <title>Náš tým – Zynaptec</title>
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 pb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Náš tým
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Jsme multidisciplinární tým expertů v oblasti AI, výzkumu, vývoje a datové vědy. Společně tvoříme Zynaptec – inteligenci za hranicí možného.
          </p>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="pt-4 pb-20 px-4 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/team-photo.png"
              alt="Tým Zynaptec"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
