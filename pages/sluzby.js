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
                icon: '🔍'
              },
              { 
                step: '02', 
                title: 'Návrh', 
                desc: 'Vývoj řešení na míru',
                icon: '📚'
              },
              { 
                step: '03', 
                title: 'Implementace', 
                desc: 'Nasazení a integrace',
                icon: '🚀'
              },
              { 
                step: '04', 
                title: 'Optimalizace', 
                desc: 'Průběžné vylepšování',
                icon: '📈'
              }
            ].map((phase, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{phase.icon}</div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-400 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-950">
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