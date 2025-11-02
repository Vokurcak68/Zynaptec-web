import Head from 'next/head'
import Layout from '../components/Layout'
import { useState } from 'react'
import Link from 'next/link'

export default function Sluzby() {
  const [activeService, setActiveService] = useState(0)
  
  const services = [
    {
      id: 'ml',
      title: 'Strojové učení a Deep Learning',
      icon: '🧠',
      description: 'Vyvíjíme pokročilé ML modely přizpůsobené vašim potřebám',
      features: [
        'Prediktivní modelování a forecasty',
        'Klasifikace a segmentace dat',
        'Detekce anomalií a podvodů',
        'Optimalizační algoritmy',
        'Reinforcement learning',
        'Transfer learning'
      ],
      useCases: [
        'Předpověď prodejů a poptávky',
        'Hodnocení úvěrového rizika',
        'Prediktivní údržba strojů',
        'Personalizovaná doporučení'
      ]
    },
    {
      id: 'nlp',
      title: 'Zpracování přirozeného jazyka',
      icon: '💬',
      description: 'Pokročilé NLP řešení pro analýzu a generování textu',
      features: [
        'Analýza sentimentu a emocí',
        'Automatické překlady',
        'Extrakce informací z dokumentů',
        'Sumarizace textů',
        'Chatboti a virtuální asistenti',
        'Generování obsahu'
      ],
      useCases: [
        'Zákaznická podpora 24/7',
        'Analýza recenzí a feedbacků',
        'Automatizace dokumentace',
        'Inteligentní vyhledávání'
      ]
    },
    {
      id: 'cv',
      title: 'Computer Vision',
      icon: '👁️',
      description: 'Rozpoznávání a analýza obrazu pro automatizaci procesů',
      features: [
        'Detekce a klasifikace objektů',
        'Rozpoznávání tváří a osob',
        'OCR a digitalizace dokumentů',
        'Analýza videa v reálném čase',
        'Kontrola kvality výroby',
        '3D rekonstrukce'
      ],
      useCases: [
        'Automatická kontrola kvality',
        'Bezpečnostní systémy',
        'Medicínská diagnostika',
        'Autonomní vozidla'
      ]
    },
    {
      id: 'automation',
      title: 'Inteligentní automatizace',
      icon: '⚡',
      description: 'RPA a AI-driven automatizace firemních procesů',
      features: [
        'Robotická procesní automatizace (RPA)',
        'Workflow automatizace',
        'Inteligentní dokument processing',
        'API integrace a orchestrace',
        'Low-code/no-code řešení',
        'Process mining'
      ],
      useCases: [
        'Automatizace fakturace',
        'Onboarding zaměstnanců',
        'Správa objednávek',
        'Reportování a analýzy'
      ]
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Služby - Zynaptec | AI řešení na míru</title>
        <meta name="description" content="Nabízíme komplexní AI služby - strojové učení, NLP, computer vision a automatizaci procesů" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Naše AI služby
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Poskytujeme komplexní řešení umělé inteligence přizpůsobená specifickým potřebám vašeho podnikání
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all hover:scale-[1.02] cursor-pointer border border-gray-800 hover:border-blue-500/50"
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-400">Funkce</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-400">Příklady použití</h4>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-blue-400 mt-1">▸</span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Náš proces implementace</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Analýza',
                desc: 'Pochopení vašich potřeb a cílů',
                icon: (
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              },
              {
                step: '02',
                title: 'Návrh',
                desc: 'Vývoj řešení na míru',
                icon: (
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                step: '03',
                title: 'Implementace',
                desc: 'Nasazení a integrace',
                icon: (
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              {
                step: '04',
                title: 'Optimalizace',
                desc: 'Průběžné vylepšování',
                icon: (
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              }
            ].map((phase, i) => (
              <div key={i} className="text-center group">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 mb-4 inline-block text-white group-hover:scale-110 transition-transform">
                  {phase.icon}
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-400 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Hidden */}
      <section className="py-20 px-4 bg-gray-950 hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Flexibilní ceník</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: 'od 50 000 Kč',
                period: 'měsíčně',
                features: [
                  'Základní AI modely',
                  'Emailová podpora',
                  'Měsíční reporty',
                  'API přístup'
                ],
                recommended: false
              },
              {
                name: 'Professional',
                price: 'od 150 000 Kč',
                period: 'měsíčně',
                features: [
                  'Pokročilé AI modely',
                  'Prioritní podpora 24/7',
                  'Custom integrace',
                  'Dedikovaný account manager',
                  'Týdenní analýzy'
                ],
                recommended: true
              },
              {
                name: 'Enterprise',
                price: 'Na míru',
                period: 'dle dohody',
                features: [
                  'Komplexní AI řešení',
                  'On-premise nasazení',
                  'SLA garance',
                  'Custom vývoj',
                  'Konzultace a školení',
                  'Neomezená podpora'
                ],
                recommended: false
              }
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`relative bg-gray-900 rounded-2xl p-8 border ${
                  plan.recommended 
                    ? 'border-blue-500 scale-105 shadow-2xl' 
                    : 'border-gray-800'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    DOPORUČENO
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/ {plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt">
                  <button className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}>
                    Zjistit více
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Training Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🎓 Školení a workshopy v AI</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Připravte svůj tým na éru umělé inteligence. Nabízíme praktická školení zaměřená na reálné využití AI v byznysu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left side - Training formats */}
            <div className="bg-gray-950 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📚</span>
                Formáty školení
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Firemní workshopy</h4>
                    <p className="text-gray-400">Jednodenní až vícedenní interaktivní workshopy přímo ve vaší firmě, přizpůsobené vašemu oboru a potřebám.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Online kurzy</h4>
                    <p className="text-gray-400">Flexibilní online školení s živou interakcí, záznamy lekcí a praktickými úkoly pro vaše týmy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Individuální konzultace</h4>
                    <p className="text-gray-400">Konzultace 1-na-1 pro manažery a leadery zaměřené na strategické využití AI ve firmě.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Training topics */}
            <div className="bg-gray-950 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                Témata školení
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-blue-500 transition-colors">
                  <h4 className="font-semibold mb-2">AI pro manažery a vedení</h4>
                  <p className="text-sm text-gray-400">Strategické využití AI, ROI, implementace a řízení AI projektů</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-blue-500 transition-colors">
                  <h4 className="font-semibold mb-2">Praktické využití ChatGPT & AI nástrojů</h4>
                  <p className="text-sm text-gray-400">Prompt engineering, automatizace workflow, produktivita s AI</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-blue-500 transition-colors">
                  <h4 className="font-semibold mb-2">Data Science a Machine Learning základy</h4>
                  <p className="text-sm text-gray-400">Úvod do ML, základy Pythonu, práce s daty a modely</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-blue-500 transition-colors">
                  <h4 className="font-semibold mb-2">AI v konkrétním oboru</h4>
                  <p className="text-sm text-gray-400">Marketing, HR, finance, healthcare - AI aplikace pro váš segment</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-blue-500 transition-colors">
                  <h4 className="font-semibold mb-2">Etika a bezpečnost AI</h4>
                  <p className="text-sm text-gray-400">Odpovědné využití AI, GDPR, bias a fairness v AI systémech</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits section */}
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold mb-6 text-center">Co získáte ze školení?</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">💡</div>
                <h4 className="font-semibold mb-2">Praktické znalosti</h4>
                <p className="text-sm text-gray-400">Hned použitelné dovednosti, ne jen teorii</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-semibold mb-2">Zvýšená produktivita</h4>
                <p className="text-sm text-gray-400">Zautomatizujte rutinní úkoly a ušetřete čas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📈</div>
                <h4 className="font-semibold mb-2">Konkurenční výhoda</h4>
                <p className="text-sm text-gray-400">Buďte napřed ve využívání AI technologií</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-semibold mb-2">Certifikát</h4>
                <p className="text-sm text-gray-400">Oficiální certifikát o absolvování školení</p>
              </div>
            </div>
          </div>

          {/* CTA for training */}
          <div className="text-center mt-12">
            <Link href="/kontakt">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg">
                Nezávazně poptat školení
              </button>
            </Link>
            <p className="text-gray-400 mt-4">Rádi vám připravíme školení na míru vašim potřebám</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Začněte s AI transformací ještě dnes</h2>
          <p className="text-xl mb-8 text-gray-200">
            Kontaktujte nás pro nezávaznou konzultaci a zjistěte, jak můžeme pomoci vašemu podnikání
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/kontakt">
              <button className="bg-white text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
                Objednat konzultaci
              </button>
            </Link>
            <Link href="/ukazky-projektu">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all">
                Ukázky projektů
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}