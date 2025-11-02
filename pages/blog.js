import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { blogPosts, getAllCategories } from '../data/blogPosts'
import { useState } from 'react'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Vše')
  const categories = ['Vše', ...getAllCategories()]

  const filteredPosts = selectedCategory === 'Vše'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <Layout>
      <Head>
        <title>Blog – Zynaptec | AI a automatizace ve firmách</title>
        <meta name="description" content="Přečtěte si naše články o umělé inteligenci, automatizaci procesů a integraci AI do ERP systémů." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hlavička */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 pb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Blog Zynaptec
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Praktické návody, case studies a insights o AI a automatizaci firemních procesů
            </p>
          </div>

          {/* Filtry kategorií */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid článků */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <article className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer h-full flex flex-col">
                  {/* Kategorie a čas čtení */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  {/* Titulek */}
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Datum a CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Číst více →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Pokud nejsou žádné články */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                V této kategorii zatím nejsou žádné články.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
