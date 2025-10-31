import Layout from '../components/Layout'
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function UkazkyProjektu() {
  const projekty = [
    {
      id: 1,
      nazev: "AI Prediktivní analýza pro Helios Inuvio",
      klient: "Výrobní společnost s.r.o.",
      partner: "Helios Inuvio by Asseco Solutions",
      popis: "Implementace prediktivního modelu strojového učení pro optimalizaci skladových zásob a předpověď poptávky.",
      technologie: ["Python", "TensorFlow", "Helios Inuvio API", "Azure ML"],
      vysledky: [
        "Snížení skladových nákladů o 35%",
        "Zlepšení přesnosti předpovědi poptávky o 82%",
        "Automatizace objednávkového procesu",
        "Real-time dashboardy v Helios Inuvio"
      ],
      funkcnosti: [
        "Integrace historických dat z Helios Inuvio",
        "ML model pro analýzu sezónnosti a trendů",
        "Automatické generování objednávek",
        "Upozornění na anomálie v datech"
      ]
    },
    {
      id: 2,
      nazev: "Inteligentní automatizace fakturace s AI",
      klient: "Logistická firma a.s.",
      partner: "Helios Inuvio by Asseco Solutions",
      popis: "Nasazení AI systému pro automatické zpracování a kategorizaci přijatých faktur s napojením na účetní modul Helios Inuvio.",
      technologie: ["OCR", "NLP", "Computer Vision", "Helios Inuvio REST API"],
      vysledky: [
        "90% automatizace zpracování faktur",
        "Zkrácení doby zpracování z 3 dnů na 2 hodiny",
        "Snížení chybovosti o 95%",
        "Úspora 4 FTE pozic v účtárně"
      ],
      funkcnosti: [
        "Automatické skenování a rozpoznávání textu (OCR)",
        "Inteligentní extrakce klíčových údajů z faktur",
        "Automatické párování s objednávkami v Helios Inuvio",
        "Detekce duplicit a podezřelých transakcí"
      ]
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Ukázky projektů – Zynaptec</title>
      </Head>

      {/* Hero sekce */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ukázky našich projektů
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Propojujeme sílu umělé inteligence s robustností ERP systémů. 
              Zde jsou konkrétní příklady našich úspěšných implementací s Helios Inuvio.
            </p>
          </motion.div>

          {/* Partner badge */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-sm text-gray-400 mb-2">Oficiální technologický partner</p>
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-white">Helios Inuvio</div>
                <span className="text-gray-400">by</span>
                <div className="text-xl text-blue-400">Asseco Solutions</div>
              </div>
            </div>
          </div>

          {/* Projekty */}
          <div className="space-y-12">
            {projekty.map((projekt, index) => (
              <motion.div
                key={projekt.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-3xl font-bold text-white">{projekt.nazev}</h2>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm text-gray-400">Klient:</span>
                      <p className="text-white font-medium">{projekt.klient}</p>
                    </div>

                    <div className="mb-6">
                      <span className="text-sm text-gray-400">Partner:</span>
                      <p className="text-blue-400 font-medium">{projekt.partner}</p>
                    </div>

                    <p className="text-gray-300 mb-6">{projekt.popis}</p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Klíčové funkčnosti:</h3>
                      <ul className="space-y-2">
                        {projekt.funkcnosti.map((funkcnost, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-300 text-sm">{funkcnost}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {projekt.technologie.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Dosažené výsledky</h3>
                    <ul className="space-y-3">
                      {projekt.vysledky.map((vysledek, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-200">{vysledek}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA sekce */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-12 backdrop-blur-sm border border-purple-500/30"
          >
            <h2 className="text-3xl font-bold mb-4">
              Máte Helios Inuvio a chcete ho obohatit o AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Pomůžeme vám využít plný potenciál vašich dat a automatizovat procesy pomocí umělé inteligence.
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/kontakt'}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
              >
                Začněte konzultací zdarma
              </button>
              <button 
                onClick={() => window.location.href = '/sluzby'}
                className="border-2 border-white/50 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
              >
                Naše služby
              </button>
            </div>
          </motion.div>

          {/* Technické info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">API Integrace</h3>
              <p className="text-gray-400 text-sm">Seamless propojení s Helios Inuvio REST API</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time Data</h3>
              <p className="text-gray-400 text-sm">Okamžité zpracování dat a predikce</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Bezpečnost</h3>
              <p className="text-gray-400 text-sm">Enterprise-grade zabezpečení dat</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}