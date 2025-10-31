
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Domů', href: '/' },
  { label: 'Služby', href: '/sluzby' },
  { label: 'Tým', href: '/tym' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Layout({ children }) {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start py-0">
            <div className="pt-4">
              <Link href="/" className="hover:scale-105 transition-transform">
              <Image
                src="/logo-zynaptec.png"
                alt="Zynaptec"
                width={200}
                height={60}
                priority
                unoptimized
              />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 pt-4">
              {navItems.map(({ label, href }) => (
                <Link 
                  key={href} 
                  href={href} 
                  className={`relative text-sm font-medium transition-colors ${
                    router.pathname === href 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {label}
                  {router.pathname === href && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400" />
                  )}
                </Link>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              {navItems.map(({ label, href }) => (
                <Link 
                  key={href} 
                  href={href} 
                  className={`block py-2 text-sm font-medium ${
                    router.pathname === href 
                      ? 'text-blue-400' 
                      : 'text-gray-300'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      <main className="pt-0">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/logo-zynaptec.png"
                alt="Zynaptec"
                width={150}
                height={45}
                unoptimized
              />
            </div>
            <p className="text-sm text-gray-400">
              Transformujeme budoucnost pomocí AI
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Služby</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/sluzby#ml" className="hover:text-white transition-colors">Strojové učení</Link></li>
              <li><Link href="/sluzby#nlp" className="hover:text-white transition-colors">NLP řešení</Link></li>
              <li><Link href="/sluzby#cv" className="hover:text-white transition-colors">Computer Vision</Link></li>
              <li><Link href="/sluzby#automation" className="hover:text-white transition-colors">Automatizace</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Společnost</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/tym" className="hover:text-white transition-colors">O nás</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kariéra</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>info@zynaptec.cz</li>
              <li>+420 123 456 789</li>
              <li>Praha, Česká republika</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2024 Zynaptec. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </div>
  )
}
