import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { blogPosts, getPostById } from '../../data/blogPosts'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Custom components for markdown rendering
const markdownComponents = {
  // Code blocks
  code({ node, inline, className, children, ...props }) {
    if (inline) {
      return <code className="text-cyan-400 bg-gray-800 px-1.5 py-0.5 rounded text-sm" {...props}>{children}</code>
    }
    return (
      <pre className="bg-gray-900 border border-gray-800 shadow-xl p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-gray-300 text-sm" {...props}>{children}</code>
      </pre>
    )
  },
  // Headings
  h2: ({ children }) => (
    <h2 className="text-3xl font-display text-white mt-12 mb-6 pb-3 border-b border-gray-800">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-display text-cyan-400 mt-8 mb-4">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-display text-gray-200 mt-6 mb-3">{children}</h4>
  ),
  // Lists
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-gray-300 my-6 space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside text-gray-300 my-6 space-y-2">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-gray-300 marker:text-cyan-400">{children}</li>
  ),
  // Blockquote
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-cyan-500 bg-gray-900/50 py-2 px-4 my-6 text-gray-400">{children}</blockquote>
  ),
  // Paragraph
  p: ({ children }) => (
    <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
  ),
  // Links
  a: ({ href, children }) => (
    <a href={href} className="text-cyan-400 hover:text-cyan-300 no-underline" target="_blank" rel="noopener noreferrer">{children}</a>
  ),
  // Strong
  strong: ({ children }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
}

export default function BlogPost({ post, relatedPosts }) {
  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Článek nenalezen</h1>
            <Link href="/blog" className="text-cyan-400 hover:text-cyan-300">
              ← Zpět na blog
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <Head>
        <title>{post.title} – Zynaptec</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <article className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20">
        {/* Breadcrumbs */}
        <div className="max-w-4xl mx-auto px-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Domů
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-300">{post.title}</span>
          </div>
        </div>

        {/* Hlavička článku */}
        <header className="max-w-4xl mx-auto px-4 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-sm">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            {post.title}
          </h1>

          <p className="text-xl text-gray-300 mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-400 pb-8 border-b border-gray-800">
            <time dateTime={post.date}>{post.date}</time>
          </div>
        </header>

        {/* Obsah článku */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-invert prose-cyan max-w-none
            prose-headings:font-display prose-headings:text-white
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-800
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-cyan-400
            prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-gray-200
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-gray-300 prose-ul:my-6 prose-ul:list-disc
            prose-ol:text-gray-300 prose-ol:my-6 prose-ol:list-decimal
            prose-li:my-2 prose-li:marker:text-cyan-400
            prose-code:text-cyan-400 prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-pre:shadow-xl prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-blockquote:border-l-4 prose-blockquote:border-l-cyan-500 prose-blockquote:text-gray-400 prose-blockquote:bg-gray-900/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:my-6
            prose-hr:border-gray-800 prose-hr:my-8
            prose-table:text-gray-300 prose-table:border-gray-800
            prose-th:bg-gray-800 prose-th:p-3 prose-th:border prose-th:border-gray-700
            prose-td:p-3 prose-td:border prose-td:border-gray-800
          ">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* CTA sekce */}
          <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Zajímá vás implementace AI ve vaší firmě?
            </h3>
            <p className="text-gray-300 mb-6">
              Nabízíme bezplatnou konzultaci a analýzu vašich procesů. Pojďme společně najít, kde AI přinese největší přidanou hodnotu.
            </p>
            <Link
              href="/kontakt"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Kontaktujte nás
            </Link>
          </div>

          {/* Související články */}
          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl font-display mb-8 text-white">
                Související články
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id}>
                    <article className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {relatedPost.category}
                        </span>
                        <span className="text-xs text-gray-500">{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Tlačítko zpět */}
          <div className="mt-16 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              ← Zpět na všechny články
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  )
}

// Next.js getStaticPaths - generuje stránky pro všechny blog posty
export async function getStaticPaths() {
  const paths = blogPosts.map(post => ({
    params: { id: post.id }
  }))

  return {
    paths,
    fallback: false
  }
}

// Next.js getStaticProps - načítá data pro konkrétní článek
export async function getStaticProps({ params }) {
  const post = getPostById(params.id)

  // Najdeme související články ze stejné kategorie
  const relatedPosts = post
    ? blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 2)
    : []

  return {
    props: {
      post: post || null,
      relatedPosts
    }
  }
}
