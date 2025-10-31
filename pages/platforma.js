
import Layout from '../components/Layout'
import Head from 'next/head'

export default function Platforma() {
  return (
    <Layout>
      <Head>
        <title>Platforma – Zynaptec</title>
      </Head>
      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)] px-4"><div className="p-16 text-center">
        <h1 className="text-4xl font-display mb-6">Platforma Zynaptec</h1>
        <p className="text-lg mb-4">Komplexní prostředí pro vývoj, nasazení a správu AI modelů.</p>
        <img src="/platform/dashboard.png" alt="Dashboard" className="rounded shadow-lg mx-auto mt-8 max-w-xl" />
        <p className="mt-6 max-w-2xl mx-auto">
          Rychlé nasazení modelů, přístup k datasetům, spolupráce, verzování a analytické nástroje.
        </p>
      </div></div>
    </Layout>
  )
}
