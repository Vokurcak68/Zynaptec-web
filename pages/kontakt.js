import Layout from '../components/Layout'
import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'

export default function Kontakt() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    company: '',
    service: '',
    message: '' 
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      alert('Vyplňte prosím povinná pole')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
      } else {
        alert(data.message || 'Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.')
      }
    } catch (error) {
      console.error('Chyba při odesílání:', error)
      alert('Nepodařilo se odeslat zprávu. Zkontrolujte prosím připojení k internetu a zkuste to znovu.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <Head>
        <title>Kontakt - Zynaptec | Spojte se s námi</title>
        <meta name="description" content="Kontaktujte nás pro nezávaznou konzultaci o AI řešeních pro vaši firmu" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Pojďme spolupracovat
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Máte projekt nebo nápad? Rádi vám pomůžeme s implementací AI řešení na míru
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8">Napište nám</h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Zpráva byla úspěšně odeslána!</h3>
                <p className="text-gray-300 mb-6">Ozveme se vám co nejdříve.</p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Odeslat další zprávu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Jméno *</label>
                    <input 
                      name="name" 
                      type="text" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors" 
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon</label>
                    <input 
                      name="phone" 
                      type="tel" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Firma</label>
                    <input 
                      name="company" 
                      type="text" 
                      value={formData.company} 
                      onChange={handleChange} 
                      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Zájem o službu</label>
                  <select 
                    name="service" 
                    value={formData.service} 
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Vyberte službu</option>
                    <option value="ml">Strojové učení</option>
                    <option value="nlp">Zpracování jazyka (NLP)</option>
                    <option value="cv">Computer Vision</option>
                    <option value="automation">Automatizace procesů</option>
                    <option value="consulting">AI konzultace</option>
                    <option value="other">Jiné</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Zpráva *</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows="5"
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors resize-none" 
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Odesílám...
                    </span>
                  ) : 'Odeslat zprávu'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Kontaktní informace</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@zynaptec.cz" className="text-blue-400 hover:text-blue-300 transition-colors">
                      info@zynaptec.cz
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <a href="tel:+420773788244" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +420 773 788 244
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <p className="font-semibold">Adresa</p>
                    <p className="text-gray-300">
                      Václavské náměstí 123<br />
                      110 00 Praha 1<br />
                      Česká republika
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Užitečné odkazy</h3>
              <div className="space-y-3">
                <Link href="/sluzby" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <span>→</span> Naše služby
                </Link>
                <Link href="/reference" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <span>→</span> Reference a případové studie
                </Link>
                <Link href="/tym" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <span>→</span> Náš tým
                </Link>
                <Link href="/blog" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <span>→</span> Blog a novinky
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Sledujte nás</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Kde nás najdete</h2>
          <div className="bg-gray-800 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-gray-400">Interaktivní mapa</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}