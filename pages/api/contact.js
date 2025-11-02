import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, phone, company, service, message } = req.body

  // Validace povinných polí
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Vyplňte prosím všechna povinná pole' })
  }

  // Vytvoření transportéru pro odesílání emailů
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false, // true pro port 465, false pro ostatní porty
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  // Formátování služby
  const serviceNames = {
    ml: 'Strojové učení',
    nlp: 'Zpracování jazyka (NLP)',
    cv: 'Computer Vision',
    automation: 'Automatizace procesů',
    consulting: 'AI konzultace',
    training: 'Školení AI',
    other: 'Jiné'
  }

  const selectedService = service ? serviceNames[service] || service : 'Nevybráno'

  // Obsah emailu
  const mailOptions = {
    from: `"Zynaptec Web Contact" <${process.env.SMTP_USER}>`,
    to: 'myidea@email.cz',
    replyTo: email,
    subject: `Nový kontakt z webu: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          Nová zpráva z kontaktního formuláře
        </h2>

        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1f2937;">Kontaktní údaje</h3>
          <p style="margin: 10px 0;"><strong>Jméno:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p style="margin: 10px 0;"><strong>Telefon:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
          ${company ? `<p style="margin: 10px 0;"><strong>Firma:</strong> ${company}</p>` : ''}
          <p style="margin: 10px 0;"><strong>Zájem o službu:</strong> ${selectedService}</p>
        </div>

        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1f2937;">Zpráva</h3>
          <p style="line-height: 1.6; color: #374151; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
          <p>Tato zpráva byla odeslána z kontaktního formuláře na <a href="https://zynaptec.cz" style="color: #3b82f6;">zynaptec.cz</a></p>
        </div>
      </div>
    `,
    text: `
Nová zpráva z kontaktního formuláře

KONTAKTNÍ ÚDAJE:
Jméno: ${name}
Email: ${email}
${phone ? `Telefon: ${phone}` : ''}
${company ? `Firma: ${company}` : ''}
Zájem o službu: ${selectedService}

ZPRÁVA:
${message}

---
Tato zpráva byla odeslána z kontaktního formuláře na zynaptec.cz
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ message: 'Email byl úspěšně odeslán' })
  } catch (error) {
    console.error('Chyba při odesílání emailu:', error)
    return res.status(500).json({
      message: 'Nepodařilo se odeslat email',
      error: error.message
    })
  }
}
