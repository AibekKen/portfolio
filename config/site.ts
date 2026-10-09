const whatsappMessages: Record<string, string> = {
  ru: 'Здравствуйте! Хочу обсудить разработку мобильного приложения',
  en: 'Hello! I would like to discuss a mobile app project',
  kk: 'Сәлеметсіз бе! Мобильді қосымша жасау жобасын талқылағым келеді',
}

// WhatsApp link with a prefilled message in the visitor's language
export const whatsappLink = (locale: string) =>
  `https://wa.me/77713856909?text=${encodeURIComponent(whatsappMessages[locale] ?? whatsappMessages.ru)}`

export const siteConfig = {
  name: 'Kenzcore Studio',
  url: 'https://kenzcore.com',
  logo: {
    src: '/brand/kenzcore-logo.jpg',
    alt: 'Kenzcore Studio',
    width: 576,
    height: 210,
  },
  // Full-size logo for structured data
  logoFull: '/brand/kenzcore-logo.png',
  // 1200×630 link preview image (Open Graph)
  ogImage: '/brand/og-image.jpg',
  tagline: 'Software Engineering for business',
  description:
    'CRM, admin panels, MVPs, integrations, and web application support for business.',
  phone: '+77713856909',
  contacts: {
    whatsapp: {
      label: 'WhatsApp',
      href: `https://wa.me/77713856909?text=${encodeURIComponent(whatsappMessages.ru)}`,
      display: '+7 771 385 69 09',
    },
    telegram: {
      label: 'Telegram',
      href: 'https://t.me/kenz_core',
      display: '@kenz_core',
    },
    email: {
      label: 'Email',
      href: 'mailto:kenzcorestudio@gmail.com',
      display: 'kenzcorestudio@gmail.com',
    },
  },
}
