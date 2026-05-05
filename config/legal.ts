export type LegalLocale = 'en' | 'ru' | 'kk'

export type LegalSection = {
  title: string
  paragraphs: string[]
}

export type LegalPageContent = {
  eyebrow: string
  title: string
  description: string
  updated: string
  sections: LegalSection[]
}

export const privacyPolicyContent: Record<LegalLocale, LegalPageContent> = {
  en: {
    eyebrow: 'Legal information',
    title: 'Privacy Policy',
    description:
      'This policy explains what information Kenzcore Studio collects through the website and how it is used.',
    updated: 'Last updated: May 6, 2026',
    sections: [
      {
        title: 'Information we collect',
        paragraphs: [
          'When you submit the contact form or write to us directly, we may receive your name, email address, phone number, messenger username, company information, and a short description of your project or request.',
          'We may also process basic technical information that is normally sent by a browser, such as IP address, device type, browser type, language, pages viewed, and the date and time of the request.',
        ],
      },
      {
        title: 'How we use information',
        paragraphs: [
          'We use the information to respond to requests, discuss potential work, prepare estimates, provide services, prevent spam or abuse, and maintain the security and reliability of the website.',
          'We do not sell personal information. We share it only when needed to provide our services, comply with legal obligations, or protect our rights and the security of the website.',
        ],
      },
      {
        title: 'Storage and security',
        paragraphs: [
          'We keep information only for as long as reasonably necessary for communication, service delivery, accounting, legal compliance, and dispute prevention.',
          'We use reasonable technical and organizational measures to protect information, but no internet transmission or storage method can be guaranteed to be completely secure.',
        ],
      },
      {
        title: 'Your choices',
        paragraphs: [
          'You may ask us to access, correct, or delete personal information that we hold about you, subject to legal and operational requirements.',
          'To make a privacy request, contact us by email at kenzcorestudio@gmail.com.',
        ],
      },
    ],
  },
  ru: {
    eyebrow: 'Юридическая информация',
    title: 'Политика приватности',
    description:
      'В этой политике описано, какие данные Kenzcore Studio получает через сайт и как они используются.',
    updated: 'Обновлено: 6 мая 2026',
    sections: [
      {
        title: 'Какие данные мы получаем',
        paragraphs: [
          'Когда вы отправляете форму обратной связи или пишете нам напрямую, мы можем получить ваше имя, email, номер телефона, username в мессенджере, информацию о компании и краткое описание проекта или запроса.',
          'Также может обрабатываться базовая техническая информация, которую обычно передает браузер: IP-адрес, тип устройства, тип браузера, язык, просмотренные страницы, дата и время запроса.',
        ],
      },
      {
        title: 'Как мы используем данные',
        paragraphs: [
          'Мы используем данные, чтобы отвечать на заявки, обсуждать потенциальную работу, готовить оценки, оказывать услуги, предотвращать спам или злоупотребления, а также поддерживать безопасность и стабильность сайта.',
          'Мы не продаем персональные данные. Передача возможна только когда это необходимо для оказания услуг, выполнения юридических обязанностей, защиты наших прав или безопасности сайта.',
        ],
      },
      {
        title: 'Хранение и безопасность',
        paragraphs: [
          'Мы храним данные только столько, сколько разумно необходимо для коммуникации, оказания услуг, учета, соблюдения закона и предотвращения споров.',
          'Мы применяем разумные технические и организационные меры защиты, но ни один способ передачи или хранения данных в интернете не может быть полностью гарантированно безопасным.',
        ],
      },
      {
        title: 'Ваши возможности',
        paragraphs: [
          'Вы можете запросить доступ, исправление или удаление персональных данных, которые у нас есть, с учетом юридических и операционных требований.',
          'Для запроса по приватности напишите нам на email: kenzcorestudio@gmail.com.',
        ],
      },
    ],
  },
  kk: {
    eyebrow: 'Құқықтық ақпарат',
    title: 'Құпиялылық саясаты',
    description:
      'Бұл саясат Kenzcore Studio сайт арқылы қандай деректер алатынын және оларды қалай қолданатынын түсіндіреді.',
    updated: 'Жаңартылған күні: 2026 жылғы 6 мамыр',
    sections: [
      {
        title: 'Қандай деректер аламыз',
        paragraphs: [
          'Байланыс формасын жібергенде немесе бізге тікелей жазғанда, біз сіздің атыңызды, email мекенжайыңызды, телефон нөміріңізді, мессенджер username-ін, компания туралы ақпаратты және жоба не сұрау сипаттамасын алуымыз мүмкін.',
          'Сонымен қатар браузер әдетте жіберетін негізгі техникалық ақпарат өңделуі мүмкін: IP мекенжайы, құрылғы түрі, браузер түрі, тіл, қаралған беттер, сұрау күні мен уақыты.',
        ],
      },
      {
        title: 'Деректерді қалай қолданамыз',
        paragraphs: [
          'Деректерді өтінімдерге жауап беру, ықтимал жұмысты талқылау, бағалау дайындау, қызмет көрсету, спам мен теріс пайдалануды болдырмау, сайттың қауіпсіздігі мен тұрақтылығын сақтау үшін қолданамыз.',
          'Біз дербес деректерді сатпаймыз. Оларды тек қызмет көрсету, заңды міндеттерді орындау, құқықтарымызды немесе сайт қауіпсіздігін қорғау қажет болған жағдайда ғана бере аламыз.',
        ],
      },
      {
        title: 'Сақтау және қауіпсіздік',
        paragraphs: [
          'Деректерді байланыс, қызмет көрсету, есеп жүргізу, заң талаптарын орындау және даулардың алдын алу үшін ақылға қонымды қажет мерзімде ғана сақтаймыз.',
          'Біз ақылға қонымды техникалық және ұйымдастырушылық қорғау шараларын қолданамыз, бірақ интернет арқылы дерек жіберу немесе сақтау толық қауіпсіз деп кепілдендірілмейді.',
        ],
      },
      {
        title: 'Сіздің мүмкіндіктеріңіз',
        paragraphs: [
          'Сіз бізде бар дербес деректерге қол жеткізу, оларды түзету немесе жою туралы сұрай аласыз, бұл заңды және операциялық талаптарды ескере отырып орындалады.',
          'Құпиялылық бойынша сұрау үшін kenzcorestudio@gmail.com email мекенжайына жазыңыз.',
        ],
      },
    ],
  },
}

export const termsOfUseContent: Record<LegalLocale, LegalPageContent> = {
  en: {
    eyebrow: 'Legal information',
    title: 'Terms of Use',
    description:
      'These terms describe the basic rules for using the Kenzcore Studio website and contacting us through it.',
    updated: 'Last updated: May 6, 2026',
    sections: [
      {
        title: 'Website use',
        paragraphs: [
          'You may use this website to learn about Kenzcore Studio services and contact us about potential projects.',
          'You agree not to misuse the website, attempt unauthorized access, interfere with its operation, send spam, or submit unlawful, harmful, or misleading content.',
        ],
      },
      {
        title: 'Information on the website',
        paragraphs: [
          'The website content is provided for general informational purposes. It does not create a service agreement, partnership, employment relationship, or binding offer by itself.',
          'Project scope, timelines, prices, responsibilities, and deliverables are agreed separately in writing before work begins.',
        ],
      },
      {
        title: 'Intellectual property',
        paragraphs: [
          'The website design, text, branding, and other materials belong to Kenzcore Studio or are used with permission, unless otherwise stated.',
          'You may not copy, republish, or commercially use website materials without prior written permission, except where allowed by law.',
        ],
      },
      {
        title: 'Limitation of liability',
        paragraphs: [
          'We try to keep the website accurate and available, but we do not guarantee uninterrupted access, error-free operation, or that all information is always complete and current.',
          'To the maximum extent permitted by law, Kenzcore Studio is not liable for indirect, incidental, or consequential losses related to website use.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [
          'Questions about these terms can be sent to kenzcorestudio@gmail.com.',
        ],
      },
    ],
  },
  ru: {
    eyebrow: 'Юридическая информация',
    title: 'Условия использования',
    description:
      'Эти условия описывают базовые правила использования сайта Kenzcore Studio и связи с нами через сайт.',
    updated: 'Обновлено: 6 мая 2026',
    sections: [
      {
        title: 'Использование сайта',
        paragraphs: [
          'Вы можете использовать сайт, чтобы узнать об услугах Kenzcore Studio и связаться с нами по поводу потенциальных проектов.',
          'Вы соглашаетесь не злоупотреблять сайтом, не пытаться получить несанкционированный доступ, не мешать его работе, не отправлять спам и не передавать незаконный, вредоносный или вводящий в заблуждение контент.',
        ],
      },
      {
        title: 'Информация на сайте',
        paragraphs: [
          'Контент сайта предоставляется в информационных целях. Сам по себе он не создает договор на оказание услуг, партнерство, трудовые отношения или обязательное предложение.',
          'Объем проекта, сроки, стоимость, ответственность и результаты работ согласуются отдельно в письменной форме до начала работы.',
        ],
      },
      {
        title: 'Интеллектуальная собственность',
        paragraphs: [
          'Дизайн сайта, тексты, бренд и другие материалы принадлежат Kenzcore Studio или используются с разрешения, если не указано иное.',
          'Нельзя копировать, публиковать повторно или использовать материалы сайта в коммерческих целях без предварительного письменного разрешения, кроме случаев, разрешенных законом.',
        ],
      },
      {
        title: 'Ограничение ответственности',
        paragraphs: [
          'Мы стараемся поддерживать точность и доступность сайта, но не гарантируем непрерывный доступ, работу без ошибок или то, что вся информация всегда полная и актуальная.',
          'В максимальной степени, разрешенной законом, Kenzcore Studio не несет ответственности за косвенные, случайные или последующие убытки, связанные с использованием сайта.',
        ],
      },
      {
        title: 'Контакты',
        paragraphs: [
          'Вопросы по этим условиям можно отправить на kenzcorestudio@gmail.com.',
        ],
      },
    ],
  },
  kk: {
    eyebrow: 'Құқықтық ақпарат',
    title: 'Пайдалану шарттары',
    description:
      'Бұл шарттар Kenzcore Studio сайтын қолданудың және сайт арқылы бізбен байланысудың негізгі ережелерін сипаттайды.',
    updated: 'Жаңартылған күні: 2026 жылғы 6 мамыр',
    sections: [
      {
        title: 'Сайтты пайдалану',
        paragraphs: [
          'Сайтты Kenzcore Studio қызметтері туралы білу және ықтимал жобалар бойынша бізбен байланысу үшін пайдалана аласыз.',
          'Сайтты теріс пайдаланбауға, рұқсатсыз қол жеткізуге тырыспауға, жұмысына кедергі жасамауға, спам жібермеуге және заңсыз, зиянды немесе жаңылыстыратын контент жолдамауға келісесіз.',
        ],
      },
      {
        title: 'Сайттағы ақпарат',
        paragraphs: [
          'Сайттағы контент жалпы ақпарат үшін берілген. Ол өздігінен қызмет көрсету келісімін, серіктестікті, еңбек қатынасын немесе міндетті ұсынысты тудырмайды.',
          'Жоба көлемі, мерзімдер, баға, жауапкершілік және нәтижелер жұмыс басталғанға дейін жазбаша түрде бөлек келісіледі.',
        ],
      },
      {
        title: 'Зияткерлік меншік',
        paragraphs: [
          'Сайт дизайны, мәтіндер, бренд және басқа материалдар Kenzcore Studio-ға тиесілі немесе рұқсатпен қолданылады, егер басқаша көрсетілмесе.',
          'Заң рұқсат еткен жағдайларды қоспағанда, сайт материалдарын алдын ала жазбаша рұқсатсыз көшіруге, қайта жариялауға немесе коммерциялық мақсатта пайдалануға болмайды.',
        ],
      },
      {
        title: 'Жауапкершілікті шектеу',
        paragraphs: [
          'Біз сайттың дәлдігі мен қолжетімділігін сақтауға тырысамыз, бірақ үздіксіз қолжетімділікке, қатесіз жұмысқа немесе барлық ақпараттың әрдайым толық әрі өзекті болуына кепілдік бермейміз.',
          'Заңмен рұқсат етілген ең жоғары шекте Kenzcore Studio сайтты пайдалануға байланысты жанама, кездейсоқ немесе салдарлық шығындар үшін жауап бермейді.',
        ],
      },
      {
        title: 'Байланыс',
        paragraphs: [
          'Осы шарттар бойынша сұрақтарды kenzcorestudio@gmail.com мекенжайына жіберуге болады.',
        ],
      },
    ],
  },
}
