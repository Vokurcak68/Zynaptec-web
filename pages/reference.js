
import Layout from '../components/Layout'
import Head from 'next/head'

export default function Reference() {
  return (
    <Layout>
      <Head>
        <title>Reference – Zynaptec</title>
      </Head>
      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)] px-4"><div className="p-16 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-display mb-6">Co o nás říkají</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded shadow">
            <p>„Zynaptec nám umožnil analyzovat klinická data rychlostí, kterou jsme si nedovedli představit."</p>
            <p className="mt-2 text-sm text-right">– MUDr. Eva Novotná, IKEM</p>
          </div>
          <div className="bg-gray-800 p-6 rounded shadow">
            <p>„Jejich platforma změnila způsob, jakým plánujeme energetické modely.“</p>
            <p className="mt-2 text-sm text-right">– Ing. Tomáš Hrubý, ČEZ</p>
          </div>
        </div>
      </div></div>
    </Layout>
  )
}
