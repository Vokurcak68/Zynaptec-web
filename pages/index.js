
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <Layout>
      <Head>
        <title>Zynaptec - AI řešení pro budoucnost</title>
        <meta name="description" content="Pokročilá AI řešení pro automatizaci, analýzu dat a digitální transformaci" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0" style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15) 0%, transparent 50%)`
          }}></div>
          <div className="absolute inset-0 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-pulse"
                style={{
                  width: Math.random() * 3 + 'px',
                  height: Math.random() * 3 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 5 + 's',
                  animationDuration: (Math.random() * 3 + 2) + 's'
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-fade-in">
            ZYNAPTEC
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 font-light">
            Transformujeme budoucnost pomocí umělé inteligence
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Poskytujeme pokročilá AI řešení pro automatizaci procesů, prediktivní analýzu a personalizované služby.
            Naše technologie pomáhají firmám růst a inovovat.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/sluzby">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-xl hover:shadow-2xl">
                Naše služby
              </button>
            </Link>
            <Link href="/kontakt">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all">
                Kontaktujte nás
              </button>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Naše klíčové kompetence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Strojové učení",
                desc: "Vyvíjíme custom ML modely pro predikci, klasifikaci a optimalizaci procesů.",
                icon: "🧠"
              },
              {
                title: "Zpracování přirozeného jazyka",
                desc: "NLP řešení pro analýzu textů, chatboty a automatizaci komunikace.",
                icon: "💬"
              },
              {
                title: "Computer Vision",
                desc: "Rozpoznávání obrazu a videa pro automatizaci kontroly kvality a bezpečnosti.",
                icon: "👁️"
              },
              {
                title: "Prediktivní analýza",
                desc: "Předpovídáme trendy a chování na základě historických dat.",
                icon: "📊"
              },
              {
                title: "Automatizace procesů",
                desc: "RPA a inteligentní automatizace pro zvýšení efektivity.",
                icon: "⚡"
              },
              {
                title: "AI konzultace",
                desc: "Strategické poradenství pro implementaci AI ve vaší firmě.",
                icon: "🎯"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Implementovaných projektů" },
            { number: "95%", label: "Spokojenost klientů" },
            { number: "50+", label: "AI expertů" },
            { number: "24/7", label: "Podpora" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Připraveni na AI transformaci?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Objevte, jak může umělá inteligence posunout vaše podnikání na další úroveň.
          </p>
          <Link href="/kontakt">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-transform shadow-xl hover:shadow-2xl">
              Začněte ještě dnes
            </button>
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </Layout>
  )
}
