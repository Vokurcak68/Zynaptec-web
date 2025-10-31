
import Layout from '../components/Layout'
import Head from 'next/head'

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog – Zynaptec</title>
      </Head>
      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)] px-4"><div className="p-16 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-display mb-6">Blog Zynaptec</h1>
        <div className="space-y-8 text-left">
          <div>
            <h3 className="text-xl font-bold">Budoucnost výzkumu s AI</h3>
            <p>Umělá inteligence zásadně mění způsob, jakým analyzujeme vědecká data...</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Etika ve věku strojového učení</h3>
            <p>Transparentnost a férovost modelů je základní pilíř našich hodnot...</p>
          </div>
        </div>
      </div></div>
    </Layout>
  )
}
