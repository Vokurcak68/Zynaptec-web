
import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'

export default function Jazyk() {
  return (
    <Layout>
      <Head>
        <title>Jazyk – Zynaptec</title>
      </Head>
      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)] px-4"><div className="p-16 text-center">
        <h1 className="text-4xl font-display mb-6">Zvolte jazyk</h1>
        <div className="space-x-6">
          <Link href="/" locale="cs"><button className="bg-purple-700 px-6 py-2 rounded">Čeština</button></Link>
          <Link href="/" locale="en"><button className="bg-purple-700 px-6 py-2 rounded">English</button></Link>
        </div>
        <p className="mt-6 text-sm text-gray-400">Přepínání jazyků je simulované. V budoucnu lze doplnit i18n modul.</p>
      </div></div>
    </Layout>
  )
}
