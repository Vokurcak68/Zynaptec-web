# SEO Optimalizace - Zynaptec Web

## ✅ Co jsme implementovali

### 1. Meta Tags & Strukturovaná data
- ✅ SEO komponenta s dynamickými meta tagy
- ✅ Open Graph tagy pro sdílení na sociálních sítích
- ✅ Twitter Card metadata
- ✅ Structured Data (JSON-LD) pro Google
- ✅ Canonical URLs

### 2. Technické SEO
- ✅ `robots.txt` - povoluje všem crawlerům
- ✅ `sitemap.xml` - mapa všech stránek
- ✅ Správný HTML lang atribut (`cs`)
- ✅ Meta viewport pro mobilní zařízení

### 3. Performance
- ✅ Next.js Image optimization vypnuta (kvůli Vercel free tier)
- ✅ Static page generation
- ✅ Font optimization s `display=swap`

## 📋 Další doporučené kroky

### 1. Přidejte vlastní doménu
```bash
# V Vercel Dashboard:
Settings → Domains → Add Domain
```

Pak aktualizujte v souborech:
- `lib/seo.js` - změňte `siteUrl`
- `public/sitemap.xml` - změňte všechny URLs
- `public/robots.txt` - změňte Sitemap URL

### 2. Google Search Console
1. Přejděte na https://search.google.com/search-console
2. Přidejte vaši doménu
3. Nahrajte `sitemap.xml`
4. Sledujte indexaci a výkon

### 3. Google Analytics / Vercel Analytics
```bash
# Vercel Analytics (doporučeno)
npm install @vercel/analytics
```

V `pages/_app.js`:
```javascript
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
```

### 4. Vytvořte favicon
Vytvořte tyto soubory v `/public`:
- `favicon.ico` (32x32)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)

Online nástroj: https://favicon.io/

### 5. Přidejte meta keywords na každou stránku
V každé stránce použijte `SEOHead` komponentu:
```javascript
import SEOHead from '../components/SEOHead'

<SEOHead
  title="Název stránky"
  description="Popis pro tuto konkrétní stránku"
  url="https://www.zynaptec.cz/nazev-stranky"
/>
```

### 6. Optimalizujte obrázky
- Použijte WebP formát místo PNG/JPG
- Komprimujte obrázky (https://tinypng.com/)
- Přidejte `alt` text všem obrázkům

### 7. Core Web Vitals
Otestujte na:
- https://pagespeed.web.dev/
- https://web.dev/measure/

Cíl:
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

### 8. Sociální sítě
Aktualizujte v `lib/seo.js`:
- Twitter handle
- Přidejte LinkedIn, Facebook odkazy do `StructuredData.js`

### 9. Lokální SEO (pokud máte fyzickou kancelář)
Přidejte LocalBusiness schema do `StructuredData.js`:
```javascript
{
  "@type": "LocalBusiness",
  "name": "Zynaptec",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vaše ulice 123",
    "addressLocality": "Praha",
    "postalCode": "110 00",
    "addressCountry": "CZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.0755,
    "longitude": 14.4378
  }
}
```

### 10. Pravidelná údržba
- ✅ Aktualizujte datum v `sitemap.xml` při změnách
- ✅ Sledujte Google Search Console pro chyby
- ✅ Testujte rychlost stránky měsíčně
- ✅ Přidávejte nový obsah (blog)

## 🔍 SEO Checklist pro nové stránky

Při vytváření nové stránky:
- [ ] Přidejte `<SEOHead>` komponentu
- [ ] Unikátní `title` (50-60 znaků)
- [ ] Unikátní `description` (150-160 znaků)
- [ ] Přidejte URL do `sitemap.xml`
- [ ] H1 tag na stránce (jen jeden!)
- [ ] Alt text pro všechny obrázky
- [ ] Interní odkazy na relevantní stránky

## 📊 Nástroje pro monitoring

1. **Google Search Console** - indexace, klíčová slova
2. **Google Analytics** - návštěvnost, chování
3. **Vercel Analytics** - rychlost, Core Web Vitals
4. **Ahrefs / Semrush** - konkurence, backlinky (placené)

## 🎯 Klíčová slova pro Zynaptec

Zaměřte se na:
- "AI consulting Praha"
- "machine learning řešení"
- "automatizace pomocí AI"
- "NLP služby Česko"
- "computer vision aplikace"
- "AI konzultace"
- "umělá inteligence pro firmy"
