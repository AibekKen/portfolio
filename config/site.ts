const whatsappMessages: Record<string, string> = {
  ru: 'Здравствуйте! Хочу обсудить разработку мобильного приложения',
  en: 'Hello! I would like to discuss a mobile app project',
  kk: 'Сәлеметсіз бе! Мобильді қосымша жасау жобасын талқылағым келеді',
}

const aiWhatsappMessages: Record<string, string> = {
  ru: 'Здравствуйте! Хочу обсудить внедрение ИИ в бизнес',
  en: 'Hello! I would like to discuss bringing AI into my business',
  kk: 'Сәлеметсіз бе! Бизнеске ЖИ енгізуді талқылағым келеді',
}

// WhatsApp link with a prefilled message in the visitor's language
export const whatsappLink = (locale: string, topic: 'apps' | 'ai' = 'apps') => {
  const messages = topic === 'ai' ? aiWhatsappMessages : whatsappMessages
  return `https://wa.me/77713856909?text=${encodeURIComponent(messages[locale] ?? messages.ru)}`
}

export const siteConfig = {
  name: 'kenzcore AI Studio',
  url: 'https://kenzcore.com',
  logo: {
    src: '/brand/kenzcore-logo.jpg',
    alt: 'kenzcore AI Studio',
    width: 576,
    height: 210,
  },
  // Full-size logo for structured data
  logoFull: '/brand/kenzcore-logo.png',
  // 1200×630 link preview image (Open Graph)
  ogImage: '/brand/og-image.jpg',
  tagline: 'AI solutions and software for business',
  description:
    'AI chatbots, RAG over company documents, local LLM deployment, automation, and app development.',
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
