import Layout from '../components/Layout'
import Head from 'next/head'
import { motion } from 'framer-motion'

const references = [
  {
    quote: "Zynaptec nám pomohl automatizovat zpracování stovek faktur měsíčně. Jejich AI řešení snížilo chybovost o 95% a ušetřilo nám týdně desítky hodin manuální práce.",
    author: "Ing. Jana Dvořáková",
    position: "CFO",
    company: "TechFlow s.r.o.",
    industry: "IT služby",
    result: "95% snížení chybovosti"
  },
  {
    quote: "Díky prediktivnímu plánování materiálu od Zynaptec jsme optimalizovali naše skladové zásoby a snížili náklady na skladování o 40%. Systém předpovídá poptávku s neuvěřitelnou přesností.",
    author: "Mgr. Petr Novák",
    position: "Ředitel logistiky",
    company: "AutoParts CZ",
    industry: "Automotive",
    result: "40% snížení skladových nákladů"
  },
  {
    quote: "Integrace AI do našeho Helios ERP byla hladká a rychlá. Nyní máme automatickou kontrolu objednávek, která zachytí chyby ještě před odesláním. To nám ušetřilo desítky tisíc korun na reklamacích.",
    author: "Bc. Martin Svoboda",
    position: "IT manažer",
    company: "BuildMaster a.s.",
    industry: "Stavebnictví",
    result: "Eliminace chyb v objednávkách"
  },
  {
    quote: "Zynaptec nám vytvořil systém pro klasifikaci tisíců emailů denně. Naše zákaznická podpora je nyní 3x rychlejší a důležité požadavky se nikdy neztratí v hromadě zpráv.",
    author: "Ing. Lucie Málková",
    position: "Head of Customer Success",
    company: "E-commerce Hub",
    industry: "E-commerce",
    result: "3x rychlejší zákaznický servis"
  },
  {
    quote: "Implementace AI řešení od Zynaptec nám přinesla měřitelnou návratnost do 6 měsíců. Profesionální přístup, skvělá komunikace a především výsledky, které fungují v praxi.",
    author: "Mgr. Tomáš Procházka",
    position: "COO",
    company: "IndustryTech Group",
    industry: "Průmysl 4.0",
    result: "ROI do 6 měsíců"
  },
  {
    quote: "AI od Zynaptec analyzuje naše PDF faktury s 99% přesností a automaticky páruje s objednávkami. Ušetřili jsme 20 hodin týdně na manuálním zpracování a téměř eliminovali chyby při účtování.",
    author: "Bc. Kateřina Zemanová",
    position: "Vedoucí účtárny",
    company: "Retail Solutions s.r.o.",
    industry: "Retail",
    result: "20 hodin týdně ušetřeno"
  }
]

export default function Reference() {
  return (
    <Layout>
      <Head>
        <title>Reference – Zynaptec | Co o nás říkají klienti</title>
        <meta name="description" content="Přečtěte si reference od našich klientů. Zjistěte, jak jsme pomohli firmám automatizovat procesy a dosáhnout měřitelných výsledků." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hlavička */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display mb-6 pb-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Co o nás říkají klienti
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Měřitelné výsledky, spokojení klienti a dlouhodobá spolupráce
            </p>
          </motion.div>

          {/* Statistiky */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {[
              { number: "20+", label: "Spokojených klientů" },
              { number: "95%", label: "Úspěšnost projektů" },
              { number: "6 měs.", label: "Průměrný ROI" },
              { number: "24/7", label: "Podpora" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Reference */}
          <div className="grid lg:grid-cols-2 gap-8">
            {references.map((ref, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                {/* Uvozovky */}
                <div className="text-6xl text-cyan-500/20 font-serif leading-none mb-4">"</div>

                {/* Citát */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {ref.quote}
                </p>

                {/* Výsledek - zvýrazněný */}
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg px-4 py-2 mb-6 inline-block">
                  <span className="text-cyan-400 font-semibold">✓ {ref.result}</span>
                </div>

                {/* Autor */}
                <div className="border-t border-gray-800 pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold text-white text-lg">{ref.author}</div>
                      <div className="text-gray-400 text-sm">{ref.position}</div>
                      <div className="text-gray-500 text-sm mt-1">{ref.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full">
                        {ref.industry}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA sekce */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-display mb-4 text-white">
              Chcete být naší další success story?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Pojďme společně najít, jak AI pomůže vaší firmě dosáhnout měřitelných výsledků
            </p>
            <a
              href="/kontakt"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              Nezávazná konzultace zdarma
            </a>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
