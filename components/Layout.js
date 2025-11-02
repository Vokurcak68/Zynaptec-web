
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Domů', href: '/' },
  { label: 'Služby', href: '/sluzby' },
  { label: 'Blog', href: '/blog' },
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
              <img
                src="/zynaptec-logo.png"
                alt="Zynaptec"
                width={200}
                height={60}
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
              <img
                src="/zynaptec-logo.png"
                alt="Zynaptec"
                width={150}
                height={45}
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
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kariéra</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>info@zynaptec.cz</li>
              <li>+420 773 788 244</li>
              <li>Školská 660/3</li>
              <li>110 00 Praha 1</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
