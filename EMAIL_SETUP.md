# Nastavení odesílání emailů z kontaktního formuláře

## Jak to funguje

Kontaktní formulář na stránce `/kontakt` odesílá zprávy přes API endpoint `/api/contact`, který použije SMTP server pro odeslání emailu na adresu **myidea@email.cz**.

## Nastavení SMTP přihlašovacích údajů

### Pro lokální testování:

1. Otevřete soubor `.env.local` v kořenové složce projektu
2. Vyplňte vaše SMTP přihlašovací údaje:

#### Option A: Gmail (doporučeno pro testování)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=vaseemail@gmail.com
SMTP_PASSWORD=vase-app-specific-password
```

**Jak získat App Password pro Gmail:**
1. Jděte na [Google Account Security](https://myaccount.google.com/security)
2. Zapněte "2-Step Verification" pokud ještě není zapnutá
3. Jděte na "App passwords" (Hesla aplikací)
4. Vyberte "Mail" a "Windows Computer" (nebo Other)
5. Google vygeneruje 16-místné heslo
6. Toto heslo použijte jako `SMTP_PASSWORD` v `.env.local`

#### Option B: Seznam.cz

```env
SMTP_HOST=smtp.seznam.cz
SMTP_PORT=587
SMTP_USER=vaseemail@seznam.cz
SMTP_PASSWORD=vase-heslo
```

#### Option C: Jiný poskytovatel

Najděte SMTP nastavení vašeho emailového poskytovatele a vyplňte odpovídající hodnoty.

### Pro Vercel (produkce):

1. Jděte do Vercel Dashboard → Settings → Environment Variables
2. Přidejte tyto proměnné:
   - `SMTP_HOST` - např. `smtp.gmail.com`
   - `SMTP_PORT` - např. `587`
   - `SMTP_USER` - váš email
   - `SMTP_PASSWORD` - vaše heslo nebo app password

## Testování

1. Spusťte dev server: `npm run dev`
2. Jděte na http://localhost:3000/kontakt
3. Vyplňte a odešlete kontaktní formulář
4. Zkontrolujte inbox na **myidea@email.cz**

## Kam se odesílají zprávy

Emaily se odesílají na **myidea@email.cz** (definováno v `pages/api/contact.js` na řádku 41)

Pro změnu cílové adresy upravte řádek:
```javascript
to: 'myidea@email.cz',
```

## Bezpečnost

⚠️ **DŮLEŽITÉ:**
- Soubor `.env.local` je v `.gitignore` a **NIKDY** nebude commitován do gitu
- Nikdy nesdílejte vaše SMTP přihlašovací údaje veřejně
- Používejte App Password pro Gmail (ne běžné heslo)
- Na produkci (Vercel) použijte Environment Variables

## Řešení problémů

### Email se neodesílá

1. Zkontrolujte konzoli v prohlížeči (F12) - měli byste vidět chyby
2. Zkontrolujte server logy (`npm run dev` terminál)
3. Ověřte, že máte správně vyplněné `.env.local`
4. Pro Gmail - ověřte, že používáte App Password, ne běžné heslo
5. Zkontrolujte, že váš SMTP server povoluje odesílání emailů

### "535 Authentication failed"

- Špatné přihlašovací údaje
- Pro Gmail - musíte použít App Password, ne běžné heslo

### "connect ETIMEDOUT"

- Problém s internetovým připojením
- SMTP server je nedostupný
- Zkontrolujte firewall

## Struktura souborů

```
├── pages/
│   ├── api/
│   │   └── contact.js          # API endpoint pro odesílání emailů
│   └── kontakt.js              # Kontaktní formulář
├── .env.local                  # SMTP přihlašovací údaje (lokálně)
└── EMAIL_SETUP.md             # Tento soubor
```

## Formát odeslaného emailu

Email obsahuje:
- Jméno odesílatele
- Email odesílatele (nastavený jako Reply-To)
- Telefon (pokud vyplněno)
- Firma (pokud vyplněno)
- Zájem o službu
- Zpráva
- Pěkně naformátovaný HTML a plain text

Příjemce může přímo odpovědět na email a zpráva půjde na adresu odesílatele.
