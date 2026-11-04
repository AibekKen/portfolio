// Copy for the service landing pages /services/whatsapp-bot and /services/local-llm.
// Avoid the characters at-sign, pipe and curly braces in strings: vue-i18n treats them as syntax.

export const landingMessages = {
  ru: {
    whatsappBot: {
      seo: {
        title: 'ИИ-бот для WhatsApp и Telegram: отвечает клиентам и принимает заявки · kenzcore AI Studio',
        description: 'Разрабатываем ИИ-ботов для WhatsApp, Telegram и сайта: отвечают клиентам за секунды круглосуточно, принимают заказы, передают горячие заявки менеджеру в CRM. Понимают русский, казахский и английский. Бесплатная оценка.',
        ogTitle: 'ИИ-бот для WhatsApp и Telegram · kenzcore AI Studio',
        ogDescription: 'Бот отвечает клиентам круглосуточно, принимает заявки и передаёт сложные вопросы менеджеру.',
      },
      back: 'На главную',
      hero: {
        eyebrow: 'ИИ-бот для WhatsApp и Telegram',
        title: 'Бот отвечает клиентам за секунды, а менеджеры получают готовые заявки',
        text: 'ИИ-бот знает ваш прайс, условия доставки и частые вопросы. Он отвечает в WhatsApp, Telegram и на сайте круглосуточно, собирает данные заказа и передаёт горячих клиентов менеджеру.',
        primary: 'Обсудить бота',
        secondary: 'Написать в WhatsApp',
        note: 'Пилот на ваших реальных вопросах. Оценка бесплатно.',
      },
      chat: {
        label: 'Пример: вечер пятницы, менеджеры уже ушли',
        channel: 'WhatsApp · 21:40',
        messages: [
          { from: 'client', text: 'Здравствуйте, есть кондиционер на 30 квадратов? Нужна установка' },
          { from: 'bot', text: 'Здравствуйте! Для 30 м² подойдут две модели из наличия: 9 000 и 12 000 BTU. Установку делаем в течение 2 дней. Подсказать цены или сразу оформить заявку на замер?' },
          { from: 'client', text: 'Оформите, завтра после обеда удобно' },
          { from: 'bot', text: 'Записал: замер завтра после 14:00. Укажите, пожалуйста, адрес, и менеджер подтвердит время утром.' },
        ],
        handoff: 'Заявка передана менеджеру в CRM с историей переписки',
      },
      scenarios: {
        eyebrow: 'Что умеет бот',
        title: 'Работает как ваш лучший менеджер, только без выходных',
        items: [
          { title: 'Отвечает на частые вопросы', text: 'Цены, наличие, сроки, доставка, график работы. Ответы берёт из вашего прайса и базы знаний, а не придумывает.' },
          { title: 'Принимает заказы и записи', text: 'Собирает данные заказа или записи по шагам и не отпускает клиента, пока не получит всё нужное.' },
          { title: 'Квалифицирует клиентов', text: 'Задаёт уточняющие вопросы и отделяет горячие заявки от тех, кто просто узнаёт цену.' },
          { title: 'Передаёт менеджеру', text: 'Сложные вопросы и готовые заявки уходят живому сотруднику вместе со всей перепиской.' },
          { title: 'Говорит на языке клиента', text: 'Понимает и отвечает на русском, казахском и английском. Качество на нужных языках проверяем на пилоте.' },
          { title: 'Напоминает и возвращает', text: 'Пишет клиентам о статусе заказа, записи на завтра или брошенной заявке.' },
        ],
      },
      control: {
        eyebrow: 'Без сюрпризов',
        title: 'Бот не говорит лишнего',
        items: [
          { title: 'Отвечает только по вашим данным', text: 'Если ответа нет в прайсе или базе знаний, бот не выдумывает, а зовёт менеджера.' },
          { title: 'Вы видите все переписки', text: 'Диалоги сохраняются, их можно просмотреть и поправить ответы бота.' },
          { title: 'Подключается к вашей CRM', text: 'Заявки попадают туда, где менеджеры уже работают, а не в отдельную систему.' },
          { title: 'Работает в нескольких каналах', text: 'Один бот для WhatsApp, Telegram и виджета на сайте с общей базой знаний.' },
        ],
      },
      case: {
        eyebrow: 'Опыт',
        title: 'Делаем ИИ-интеграции и сервисы для бизнеса в Казахстане',
        text: 'Встраивали ИИ в сервис Good Deal, делали приложение для службы доставки moyadostavka.kz и собственные ИИ-продукты.',
        points: [
          'ИИ в действующем сервисе клиента, проект на поддержке',
          'Заявки с нашего сайта приходят в Telegram через собственного бота',
          'Работаем на русском, казахском и английском',
        ],
        more: 'Все кейсы',
      },
      process: {
        title: 'Как запускаем бота',
        subtitle: 'От ваших реальных вопросов к работающему боту.',
        steps: [
          { number: '01', label: 'Разбор', title: 'Собираем вопросы', text: 'Смотрим переписки с клиентами, прайс и частые вопросы. Решаем, что бот делает сам, а что передаёт менеджеру.' },
          { number: '02', label: 'Пилот', title: 'Проверяем на реальных диалогах', text: 'Прогоняем бота по вашим настоящим вопросам и показываем ответы до запуска.' },
          { number: '03', label: 'Запуск', title: 'Подключаем каналы и CRM', text: 'Подключаем номер WhatsApp, Telegram и сайт, настраиваем передачу заявок менеджерам.' },
          { number: '04', label: 'Поддержка', title: 'Улучшаем по переписке', text: 'Смотрим, где бот ошибся или позвал менеджера, и дополняем базу знаний.' },
        ],
      },
      faq: {
        title: 'Вопросы о ботах',
        items: [
          { question: 'Как бот подключается к WhatsApp?', answer: 'Через WhatsApp Business API. Поможем подключить ваш номер или новый. Для Telegram создаётся отдельный бот, для сайта ставится виджет.' },
          { question: 'Что если бот не знает ответа?', answer: 'Он не придумывает, а передаёт диалог менеджеру со всей перепиской. Такие вопросы мы потом добавляем в базу знаний.' },
          { question: 'Сколько стоит бот?', answer: 'Зависит от количества сценариев, каналов и интеграций. После разбора даём бесплатную оценку. Сообщения в WhatsApp Business API дополнительно оплачиваются по тарифам Meta.' },
          { question: 'Бот понимает казахский?', answer: 'Да, современные модели работают с русским, казахским и английским. На пилоте проверяем качество ответов на нужных вам языках.' },
          { question: 'Можно ли изменить ответы бота потом?', answer: 'Да. Прайс, условия и база знаний обновляются без переделки бота.' },
        ],
      },
      contact: {
        title: 'Расскажите, на какие вопросы должен отвечать бот',
        subtitle: 'Разберём ваши переписки, предложим сценарии и дадим бесплатную оценку.',
        descriptionPlaceholder: 'Где пишут клиенты (WhatsApp, Telegram, сайт), о чём чаще всего спрашивают, сколько обращений в день и есть ли CRM.',
      },
    },
    localLlm: {
      seo: {
        title: 'Установка локальной LLM на ваш сервер: ИИ без передачи данных в облако · kenzcore AI Studio',
        description: 'Устанавливаем и настраиваем локальные языковые модели (Llama, Qwen, Mistral, DeepSeek) на серверах компании: ИИ-чат для сотрудников, поиск по документам и API для ваших систем. Данные не покидают ваш контур. Бесплатная оценка.',
        ogTitle: 'Локальная LLM на вашем сервере · kenzcore AI Studio',
        ogDescription: 'ИИ для документов и данных, которые нельзя отправлять в ChatGPT. Модель работает внутри вашей инфраструктуры.',
      },
      back: 'На главную',
      hero: {
        eyebrow: 'Локальные LLM на серверах компании',
        title: 'ИИ для данных, которые нельзя отправлять в ChatGPT',
        text: 'Устанавливаем языковую модель на ваш сервер или в закрытый контур. Сотрудники работают с договорами, перепиской и клиентскими данными через ИИ, а данные не покидают компанию.',
        primary: 'Обсудить установку',
        secondary: 'Написать в WhatsApp',
        note: 'Подберём модель и сервер под задачу. Оценка бесплатно.',
      },
      server: {
        label: 'Как это устроено',
        insideLabel: 'Ваш контур',
        parts: [
          { title: 'Языковая модель', text: 'Открытая модель на вашем сервере с GPU' },
          { title: 'База ваших документов', text: 'Договоры, регламенты, переписка' },
          { title: 'Чат и API', text: 'Веб-чат для сотрудников и API для ваших систем' },
        ],
        outside: 'Внешние ИИ-сервисы',
        outsideNote: 'Не используются: запросы и документы никуда не уходят',
      },
      scenarios: {
        eyebrow: 'Что получаете',
        title: 'Возможности ИИ без риска утечки',
        items: [
          { title: 'ИИ-чат для сотрудников', text: 'Привычный интерфейс чата внутри компании: составить письмо, разобрать договор, сделать выжимку, перевести.' },
          { title: 'Ответы по вашим документам', text: 'Ассистент ищет ответы в регламентах, договорах и базе знаний и показывает, откуда взят ответ.' },
          { title: 'API для ваших систем', text: 'OpenAI-совместимый API: ваши программы и автоматизации подключаются к модели так же, как к облачной.' },
          { title: 'Работа без интернета', text: 'Модель может работать в полностью закрытой сети: в офисе, на производстве, во внутреннем контуре.' },
          { title: 'Подбор модели и железа', text: 'Сравниваем открытые модели на ваших примерах и подбираем сервер под нагрузку и бюджет.' },
          { title: 'Обучение и поддержка', text: 'Учим сотрудников работать с ИИ, обновляем модели и следим за качеством ответов.' },
        ],
      },
      control: {
        eyebrow: 'Честно о главном',
        title: 'Что важно знать до старта',
        items: [
          { title: 'Качество', text: 'Открытые модели немного уступают лучшим облачным, но с вашими документами справляются с большинством рабочих задач. Проверяем это на пилоте.' },
          { title: 'Железо', text: 'Нужен сервер с видеокартой. Подойдёт свой, арендованный или в частном облаке. Подбираем под нагрузку.' },
          { title: 'Расходы', text: 'Вы платите за сервер, а не за каждый запрос. При большом потоке запросов это часто выгоднее облака.' },
          { title: 'Не всегда нужно', text: 'Если данные не секретные, облачный API быстрее и дешевле на старте. Скажем честно и посчитаем оба варианта.' },
        ],
      },
      stack: {
        title: 'Технологии',
        items: ['Llama', 'Qwen', 'Mistral', 'DeepSeek', 'Ollama', 'vLLM', 'llama.cpp', 'bge-m3', 'Chroma', 'Qdrant', 'pgvector', 'Docker', 'Linux', 'NVIDIA GPU'],
      },
      case: {
        eyebrow: 'Наш опыт',
        title: 'Локальный ИИ, который работает без интернета',
        text: 'Собрали офлайн-ассистента по ПДД, Закону о дорожном движении и КоАП РК на локальной модели. И сделали Jasyr: сервис, который обезличивает документы перед отправкой в облачный ИИ.',
        points: [
          'Модель, поиск и база знаний работают полностью на локальной машине',
          'Каждое число в ответе код сверяет с текстом закона',
          'Jasyr обрабатывает файлы в браузере и никуда их не загружает',
        ],
        more: 'Все кейсы',
      },
      process: {
        title: 'Как проходит установка',
        subtitle: 'От задачи до работающей модели внутри вашего контура.',
        steps: [
          { number: '01', label: 'Разбор', title: 'Задача и данные', text: 'Определяем, что нужно делать с ИИ, какие документы и сколько пользователей.' },
          { number: '02', label: 'Пилот', title: 'Сравниваем модели', text: 'Проверяем несколько открытых моделей на ваших примерах и выбираем лучшую по качеству и скорости.' },
          { number: '03', label: 'Установка', title: 'Разворачиваем у вас', text: 'Ставим модель, базу документов, чат и API на ваш сервер, настраиваем доступы.' },
          { number: '04', label: 'Поддержка', title: 'Обучаем и сопровождаем', text: 'Обучаем сотрудников, обновляем модели и базу знаний.' },
        ],
      },
      faq: {
        title: 'Вопросы о локальных LLM',
        items: [
          { question: 'Какой сервер нужен?', answer: 'Зависит от размера модели и числа пользователей. Небольшим моделям хватает одного сервера с современной видеокартой, крупным нужно больше памяти GPU. Подберём конфигурацию и подскажем, где арендовать сервер, если своего нет.' },
          { question: 'Насколько локальная модель хуже ChatGPT?', answer: 'Лучшие облачные модели сильнее в сложных рассуждениях. Но для работы с вашими документами, письмами и типовыми задачами открытых моделей обычно достаточно. На пилоте сравниваем на ваших реальных примерах.' },
          { question: 'Какие модели устанавливаете?', answer: 'Открытые модели, например Llama, Qwen, Mistral и DeepSeek. Выбор зависит от языка, задачи и сервера.' },
          { question: 'Модель понимает казахский?', answer: 'Многие открытые модели понимают казахский, но хуже, чем русский и английский. Проверяем качество на ваших текстах на пилоте.' },
          { question: 'Можно ли подключить к ней наши программы?', answer: 'Да. Модель отдаёт OpenAI-совместимый API, поэтому ваши системы и автоматизации подключаются так же, как к облачному сервису.' },
        ],
      },
      contact: {
        title: 'Расскажите, с какими данными нужен ИИ',
        subtitle: 'Предложим модель и конфигурацию сервера и дадим бесплатную оценку.',
        descriptionPlaceholder: 'Какие данные (договоры, переписка, клиентская база), сколько сотрудников будет пользоваться и есть ли свой сервер с видеокартой.',
      },
    },
  },

  en: {
    whatsappBot: {
      seo: {
        title: 'AI Bot for WhatsApp and Telegram: Answers Customers and Takes Requests · kenzcore AI Studio',
        description: 'We build AI bots for WhatsApp, Telegram and websites: they answer customers in seconds around the clock, take orders and pass hot leads to a manager in the CRM. Russian, Kazakh and English. Free estimate.',
        ogTitle: 'AI bot for WhatsApp and Telegram · kenzcore AI Studio',
        ogDescription: 'The bot answers customers around the clock, takes requests and passes complex questions to a manager.',
      },
      back: 'Home',
      hero: {
        eyebrow: 'AI bot for WhatsApp and Telegram',
        title: 'The bot answers customers in seconds and managers get ready-made requests',
        text: 'The AI bot knows your price list, delivery terms and common questions. It answers on WhatsApp, Telegram and your website around the clock, collects order details and passes hot customers to a manager.',
        primary: 'Discuss a bot',
        secondary: 'Write on WhatsApp',
        note: 'A pilot on your real questions. The estimate is free.',
      },
      chat: {
        label: 'Example: Friday evening, the managers have gone home',
        channel: 'WhatsApp · 21:40',
        messages: [
          { from: 'client', text: 'Hi, do you have an air conditioner for 30 square meters? I need it installed' },
          { from: 'bot', text: 'Hello! Two models in stock fit 30 m²: 9,000 and 12,000 BTU. Installation takes up to 2 days. Shall I share prices or book a measurement visit right away?' },
          { from: 'client', text: 'Book it, tomorrow afternoon works' },
          { from: 'bot', text: 'Noted: measurement tomorrow after 2 pm. Please share your address and a manager will confirm the time in the morning.' },
        ],
        handoff: 'The request went to a manager in the CRM with the full chat history',
      },
      scenarios: {
        eyebrow: 'What the bot does',
        title: 'Works like your best manager, only with no days off',
        items: [
          { title: 'Answers common questions', text: 'Prices, stock, timing, delivery, opening hours. Answers come from your price list and knowledge base, not from guesswork.' },
          { title: 'Takes orders and bookings', text: 'Collects order or booking details step by step and keeps the customer until it has everything it needs.' },
          { title: 'Qualifies customers', text: 'Asks follow-up questions and separates hot leads from people just checking prices.' },
          { title: 'Hands over to a manager', text: 'Complex questions and ready requests go to a person together with the whole conversation.' },
          { title: 'Speaks the customer\'s language', text: 'Understands and replies in Russian, Kazakh and English. We check quality in your languages during the pilot.' },
          { title: 'Follows up', text: 'Messages customers about order status, tomorrow\'s booking or an abandoned request.' },
        ],
      },
      control: {
        eyebrow: 'No surprises',
        title: 'The bot does not make things up',
        items: [
          { title: 'Answers only from your data', text: 'If the answer is not in the price list or knowledge base, the bot does not invent one and calls a manager instead.' },
          { title: 'You see every conversation', text: 'Chats are saved so you can review them and correct the bot\'s answers.' },
          { title: 'Connects to your CRM', text: 'Requests land where your managers already work, not in a separate system.' },
          { title: 'Works across channels', text: 'One bot for WhatsApp, Telegram and a website widget with a shared knowledge base.' },
        ],
      },
      case: {
        eyebrow: 'Experience',
        title: 'We build AI integrations and services for businesses in Kazakhstan',
        text: 'We built AI into the Good Deal service, made an app for the moyadostavka.kz delivery service and our own AI products.',
        points: [
          'AI inside a client\'s live service, supported after launch',
          'Requests from our own website reach Telegram through our own bot',
          'We work in Russian, Kazakh and English',
        ],
        more: 'All cases',
      },
      process: {
        title: 'How we launch a bot',
        subtitle: 'From your real questions to a working bot.',
        steps: [
          { number: '01', label: 'Discovery', title: 'We collect questions', text: 'We review customer chats, the price list and common questions and decide what the bot handles and what goes to a manager.' },
          { number: '02', label: 'Pilot', title: 'We test on real chats', text: 'We run the bot through your real questions and show the answers before launch.' },
          { number: '03', label: 'Launch', title: 'We connect channels and the CRM', text: 'We connect the WhatsApp number, Telegram and your website and set up handover to managers.' },
          { number: '04', label: 'Support', title: 'We improve from the chats', text: 'We look at where the bot got it wrong or called a manager and extend the knowledge base.' },
        ],
      },
      faq: {
        title: 'Questions about bots',
        items: [
          { question: 'How does the bot connect to WhatsApp?', answer: 'Through the WhatsApp Business API. We help connect your number or a new one. Telegram gets its own bot and the website gets a widget.' },
          { question: 'What if the bot does not know the answer?', answer: 'It does not make one up. It passes the conversation to a manager with the full history, and we add such questions to the knowledge base later.' },
          { question: 'How much does a bot cost?', answer: 'It depends on the number of scenarios, channels and integrations. After a review we give a free estimate. WhatsApp Business API messages are billed separately at Meta\'s rates.' },
          { question: 'Does the bot understand Kazakh?', answer: 'Yes, modern models work with Russian, Kazakh and English. During the pilot we check answer quality in the languages you need.' },
          { question: 'Can the bot\'s answers be changed later?', answer: 'Yes. The price list, terms and knowledge base can be updated without rebuilding the bot.' },
        ],
      },
      contact: {
        title: 'Tell us what the bot should answer',
        subtitle: 'We will review your chats, suggest scenarios and give a free estimate.',
        descriptionPlaceholder: 'Where customers write (WhatsApp, Telegram, website), what they ask most, how many messages a day and whether you have a CRM.',
      },
    },
    localLlm: {
      seo: {
        title: 'Local LLM on Your Server: AI Without Sending Data to the Cloud · kenzcore AI Studio',
        description: 'We install and configure local language models (Llama, Qwen, Mistral, DeepSeek) on company servers: an AI chat for staff, search over documents and an API for your systems. Data never leaves your perimeter. Free estimate.',
        ogTitle: 'Local LLM on your server · kenzcore AI Studio',
        ogDescription: 'AI for documents and data that cannot go to ChatGPT. The model runs inside your infrastructure.',
      },
      back: 'Home',
      hero: {
        eyebrow: 'Local LLMs on company servers',
        title: 'AI for data you cannot send to ChatGPT',
        text: 'We install a language model on your server or inside a closed network. Staff work with contracts, correspondence and customer data through AI, and the data never leaves the company.',
        primary: 'Discuss an installation',
        secondary: 'Write on WhatsApp',
        note: 'We will pick the model and server for the task. The estimate is free.',
      },
      server: {
        label: 'How it works',
        insideLabel: 'Your perimeter',
        parts: [
          { title: 'Language model', text: 'An open model on your GPU server' },
          { title: 'Your documents', text: 'Contracts, regulations, correspondence' },
          { title: 'Chat and API', text: 'A web chat for staff and an API for your systems' },
        ],
        outside: 'External AI services',
        outsideNote: 'Not used: requests and documents go nowhere',
      },
      scenarios: {
        eyebrow: 'What you get',
        title: 'The power of AI without the risk of leaks',
        items: [
          { title: 'An AI chat for staff', text: 'A familiar chat inside the company: draft an email, review a contract, summarize, translate.' },
          { title: 'Answers from your documents', text: 'The assistant finds answers in regulations, contracts and the knowledge base and shows the source.' },
          { title: 'An API for your systems', text: 'An OpenAI-compatible API, so your programs and automations connect to the model the same way as to a cloud one.' },
          { title: 'Works offline', text: 'The model can run in a fully closed network: in an office, at a plant, inside an internal perimeter.' },
          { title: 'Model and hardware selection', text: 'We compare open models on your examples and size a server for your load and budget.' },
          { title: 'Training and support', text: 'We teach staff to work with AI, update models and monitor answer quality.' },
        ],
      },
      control: {
        eyebrow: 'Honest essentials',
        title: 'What to know before you start',
        items: [
          { title: 'Quality', text: 'Open models are slightly behind the best cloud ones, but with your documents they handle most work tasks. We check this during the pilot.' },
          { title: 'Hardware', text: 'You need a server with a graphics card: your own, rented or in a private cloud. We size it for your load.' },
          { title: 'Costs', text: 'You pay for a server, not for every request. With heavy usage this is often cheaper than the cloud.' },
          { title: 'Not always needed', text: 'If the data is not sensitive, a cloud API is faster and cheaper to start with. We will tell you honestly and price both options.' },
        ],
      },
      stack: {
        title: 'Technologies',
        items: ['Llama', 'Qwen', 'Mistral', 'DeepSeek', 'Ollama', 'vLLM', 'llama.cpp', 'bge-m3', 'Chroma', 'Qdrant', 'pgvector', 'Docker', 'Linux', 'NVIDIA GPU'],
      },
      case: {
        eyebrow: 'Our experience',
        title: 'Local AI that works without the internet',
        text: 'We built an offline assistant for Kazakhstan traffic rules, the Road Traffic Law and the Administrative Code on a local model. And we made Jasyr, a service that anonymizes documents before they go to cloud AI.',
        points: [
          'The model, search and knowledge base run entirely on a local machine',
          'Every number in an answer is checked by code against the text of the law',
          'Jasyr processes files in the browser and never uploads them',
        ],
        more: 'All cases',
      },
      process: {
        title: 'How the installation goes',
        subtitle: 'From the task to a working model inside your perimeter.',
        steps: [
          { number: '01', label: 'Discovery', title: 'Task and data', text: 'We define what AI should do, which documents are involved and how many users there are.' },
          { number: '02', label: 'Pilot', title: 'We compare models', text: 'We test several open models on your examples and pick the best on quality and speed.' },
          { number: '03', label: 'Install', title: 'We deploy on your side', text: 'We set up the model, document base, chat and API on your server and configure access.' },
          { number: '04', label: 'Support', title: 'We train and maintain', text: 'We train staff and update the models and the knowledge base.' },
        ],
      },
      faq: {
        title: 'Questions about local LLMs',
        items: [
          { question: 'What server is needed?', answer: 'It depends on the model size and the number of users. Small models run on one server with a modern graphics card; larger ones need more GPU memory. We will size a configuration and suggest where to rent a server if you have none.' },
          { question: 'How much worse is a local model than ChatGPT?', answer: 'The best cloud models are stronger at complex reasoning. For work with your documents, emails and routine tasks, open models are usually enough. During the pilot we compare them on your real examples.' },
          { question: 'Which models do you install?', answer: 'Open models such as Llama, Qwen, Mistral and DeepSeek. The choice depends on the language, the task and the server.' },
          { question: 'Does the model understand Kazakh?', answer: 'Many open models understand Kazakh, though worse than Russian and English. We check quality on your texts during the pilot.' },
          { question: 'Can our software connect to it?', answer: 'Yes. The model exposes an OpenAI-compatible API, so your systems and automations connect to it the same way as to a cloud service.' },
        ],
      },
      contact: {
        title: 'Tell us what data you need AI for',
        subtitle: 'We will suggest a model and server configuration and give a free estimate.',
        descriptionPlaceholder: 'What data (contracts, correspondence, a customer base), how many staff will use it and whether you have your own GPU server.',
      },
    },
  },

  kk: {
    whatsappBot: {
      seo: {
        title: 'WhatsApp пен Telegram-ға арналған ЖИ-бот: клиенттерге жауап беріп, өтінім қабылдайды · kenzcore AI Studio',
        description: 'WhatsApp, Telegram және сайтқа ЖИ-боттар жасаймыз: клиенттерге тәулік бойы бірнеше секундта жауап береді, тапсырыс қабылдайды, ыстық өтінімдерді CRM-дегі менеджерге береді. Орыс, қазақ және ағылшын тілдері. Тегін бағалау.',
        ogTitle: 'WhatsApp пен Telegram-ға арналған ЖИ-бот · kenzcore AI Studio',
        ogDescription: 'Бот клиенттерге тәулік бойы жауап беріп, өтінім қабылдайды және күрделі сұрақтарды менеджерге береді.',
      },
      back: 'Басты бетке',
      hero: {
        eyebrow: 'WhatsApp пен Telegram-ға арналған ЖИ-бот',
        title: 'Бот клиенттерге бірнеше секундта жауап береді, ал менеджерлер дайын өтінім алады',
        text: 'ЖИ-бот прайсыңызды, жеткізу шарттарын және жиі қойылатын сұрақтарды біледі. WhatsApp, Telegram және сайтта тәулік бойы жауап беріп, тапсырыс деректерін жинайды және ыстық клиенттерді менеджерге береді.',
        primary: 'Ботты талқылау',
        secondary: 'WhatsApp-қа жазу',
        note: 'Нақты сұрақтарыңыздағы пилот. Бағалау тегін.',
      },
      chat: {
        label: 'Мысал: жұма кеші, менеджерлер кетіп қалған',
        channel: 'WhatsApp · 21:40',
        messages: [
          { from: 'client', text: 'Сәлеметсіз бе, 30 шаршы метрге кондиционер бар ма? Орнату керек' },
          { from: 'bot', text: 'Сәлеметсіз бе! 30 м² үшін қоймадағы екі модель сәйкес келеді: 9 000 және 12 000 BTU. Орнату 2 күн ішінде. Бағасын айтайын ба, әлде өлшеуге бірден өтінім рәсімдейін бе?' },
          { from: 'client', text: 'Рәсімдеңіз, ертең түстен кейін ыңғайлы' },
          { from: 'bot', text: 'Жаздым: өлшеу ертең 14:00-ден кейін. Мекенжайыңызды жазыңызшы, менеджер таңертең уақытты растайды.' },
        ],
        handoff: 'Өтінім хат алмасу тарихымен бірге CRM-дегі менеджерге берілді',
      },
      scenarios: {
        eyebrow: 'Бот не істей алады',
        title: 'Ең жақсы менеджеріңіз сияқты жұмыс істейді, тек демалыссыз',
        items: [
          { title: 'Жиі сұрақтарға жауап береді', text: 'Бағалар, қоймадағы бар-жоғы, мерзімдер, жеткізу, жұмыс кестесі. Жауаптарды ойдан шығармай, прайсыңыз бен білім қорыңыздан алады.' },
          { title: 'Тапсырыс пен жазылуды қабылдайды', text: 'Тапсырыс немесе жазылу деректерін қадам сайын жинайды және қажеттінің бәрін алмайынша клиентті жібермейді.' },
          { title: 'Клиенттерді саралайды', text: 'Нақтылау сұрақтарын қойып, ыстық өтінімдерді тек баға сұрағандардан ажыратады.' },
          { title: 'Менеджерге береді', text: 'Күрделі сұрақтар мен дайын өтінімдер бүкіл хат алмасумен бірге қызметкерге өтеді.' },
          { title: 'Клиенттің тілінде сөйлейді', text: 'Орыс, қазақ және ағылшын тілдерінде түсініп, жауап береді. Қажетті тілдердегі сапаны пилотта тексереміз.' },
          { title: 'Еске салады және қайтарады', text: 'Клиенттерге тапсырыс мәртебесі, ертеңгі жазылу немесе тасталған өтінім туралы жазады.' },
        ],
      },
      control: {
        eyebrow: 'Тосын сыйсыз',
        title: 'Бот артық сөйлемейді',
        items: [
          { title: 'Тек сіздің деректеріңіз бойынша жауап береді', text: 'Жауап прайста немесе білім қорында болмаса, бот ойдан шығармай, менеджерді шақырады.' },
          { title: 'Барлық хат алмасуды көресіз', text: 'Диалогтар сақталады, оларды қарап, бот жауаптарын түзетуге болады.' },
          { title: 'CRM-ге қосылады', text: 'Өтінімдер жеке жүйеге емес, менеджерлер жұмыс істеп жүрген жерге түседі.' },
          { title: 'Бірнеше арнада жұмыс істейді', text: 'WhatsApp, Telegram және сайт виджеті үшін ортақ білім қоры бар бір бот.' },
        ],
      },
      case: {
        eyebrow: 'Тәжірибе',
        title: 'Қазақстандағы бизнеске ЖИ интеграциялары мен сервистер жасаймыз',
        text: 'Good Deal сервисіне ЖИ енгіздік, moyadostavka.kz жеткізу қызметіне қосымша жасадық және өз ЖИ-өнімдерімізді әзірледік.',
        points: [
          'Клиенттің жұмыс істеп тұрған сервисіндегі ЖИ, жоба сүйемелдеуде',
          'Сайтымыздан келетін өтінімдер өз ботымыз арқылы Telegram-ға түседі',
          'Орыс, қазақ және ағылшын тілдерінде жұмыс істейміз',
        ],
        more: 'Барлық кейстер',
      },
      process: {
        title: 'Ботты қалай іске қосамыз',
        subtitle: 'Нақты сұрақтарыңыздан жұмыс істейтін ботқа дейін.',
        steps: [
          { number: '01', label: 'Талдау', title: 'Сұрақтарды жинаймыз', text: 'Клиенттермен хат алмасуды, прайсты және жиі сұрақтарды қарап, бот өзі не істейтінін, менеджерге нені беретінін шешеміз.' },
          { number: '02', label: 'Пилот', title: 'Нақты диалогтарда тексереміз', text: 'Ботты нақты сұрақтарыңыз бойынша сынап, іске қосуға дейін жауаптарды көрсетеміз.' },
          { number: '03', label: 'Іске қосу', title: 'Арналар мен CRM-ді қосамыз', text: 'WhatsApp нөмірін, Telegram мен сайтты қосып, өтінімдерді менеджерлерге беруді баптаймыз.' },
          { number: '04', label: 'Қолдау', title: 'Хат алмасу бойынша жетілдіреміз', text: 'Бот қай жерде қателескенін немесе менеджерді шақырғанын қарап, білім қорын толықтырамыз.' },
        ],
      },
      faq: {
        title: 'Боттар туралы сұрақтар',
        items: [
          { question: 'Бот WhatsApp-қа қалай қосылады?', answer: 'WhatsApp Business API арқылы. Өз нөміріңізді немесе жаңа нөмірді қосуға көмектесеміз. Telegram үшін жеке бот жасалады, сайтқа виджет орнатылады.' },
          { question: 'Бот жауапты білмесе не болады?', answer: 'Ойдан шығармайды, диалогты бүкіл тарихымен менеджерге береді. Мұндай сұрақтарды кейін білім қорына қосамыз.' },
          { question: 'Бот қанша тұрады?', answer: 'Сценарийлер, арналар және интеграциялар санына байланысты. Талдаудан кейін тегін бағалау береміз. WhatsApp Business API хабарламалары Meta тарифтері бойынша бөлек төленеді.' },
          { question: 'Бот қазақша түсінеді ме?', answer: 'Иә, заманауи модельдер орыс, қазақ және ағылшын тілдерімен жұмыс істейді. Пилотта қажетті тілдердегі жауап сапасын тексереміз.' },
          { question: 'Бот жауаптарын кейін өзгертуге бола ма?', answer: 'Иә. Прайс, шарттар және білім қоры ботты қайта жасамай-ақ жаңартылады.' },
        ],
      },
      contact: {
        title: 'Бот қандай сұрақтарға жауап беруі керегін айтыңыз',
        subtitle: 'Хат алмасуыңызды талдап, сценарийлер ұсынамыз және тегін бағалау береміз.',
        descriptionPlaceholder: 'Клиенттер қайда жазады (WhatsApp, Telegram, сайт), көбіне не сұрайды, күніне қанша өтініш келеді және CRM бар ма.',
      },
    },
    localLlm: {
      seo: {
        title: 'Серверіңізге локалды LLM орнату: деректерді бұлтқа жібермей ЖИ · kenzcore AI Studio',
        description: 'Компания серверлеріне локалды тіл модельдерін (Llama, Qwen, Mistral, DeepSeek) орнатып, баптаймыз: қызметкерлерге ЖИ-чат, құжаттар бойынша іздеу және жүйелеріңізге API. Деректер контурыңыздан шықпайды. Тегін бағалау.',
        ogTitle: 'Серверіңіздегі локалды LLM · kenzcore AI Studio',
        ogDescription: 'ChatGPT-ге жіберуге болмайтын құжаттар мен деректерге арналған ЖИ. Модель сіздің инфрақұрылымыңыз ішінде жұмыс істейді.',
      },
      back: 'Басты бетке',
      hero: {
        eyebrow: 'Компания серверлеріндегі локалды LLM',
        title: 'ChatGPT-ге жіберуге болмайтын деректерге арналған ЖИ',
        text: 'Тіл моделін сіздің серверіңізге немесе жабық контурға орнатамыз. Қызметкерлер шарттармен, хат алмасумен және клиент деректерімен ЖИ арқылы жұмыс істейді, ал деректер компаниядан шықпайды.',
        primary: 'Орнатуды талқылау',
        secondary: 'WhatsApp-қа жазу',
        note: 'Міндетке сай модель мен сервер таңдаймыз. Бағалау тегін.',
      },
      server: {
        label: 'Бұл қалай құрылған',
        insideLabel: 'Сіздің контурыңыз',
        parts: [
          { title: 'Тіл моделі', text: 'GPU бар серверіңіздегі ашық модель' },
          { title: 'Құжаттарыңыздың қоры', text: 'Шарттар, регламенттер, хат алмасу' },
          { title: 'Чат және API', text: 'Қызметкерлерге веб-чат және жүйелеріңізге API' },
        ],
        outside: 'Сыртқы ЖИ-сервистер',
        outsideNote: 'Қолданылмайды: сұраулар мен құжаттар ешқайда кетпейді',
      },
      scenarios: {
        eyebrow: 'Не аласыз',
        title: 'Ағып кету қаупінсіз ЖИ мүмкіндіктері',
        items: [
          { title: 'Қызметкерлерге ЖИ-чат', text: 'Компания ішіндегі үйреншікті чат: хат құрастыру, шартты талдау, қысқаша мазмұн жасау, аудару.' },
          { title: 'Құжаттарыңыз бойынша жауаптар', text: 'Ассистент жауаптарды регламенттерден, шарттардан және білім қорынан іздеп, дереккөзді көрсетеді.' },
          { title: 'Жүйелеріңізге API', text: 'OpenAI-мен үйлесімді API: бағдарламаларыңыз бен автоматтандыруларыңыз модельге бұлттыққа қосылғандай қосылады.' },
          { title: 'Интернетсіз жұмыс', text: 'Модель толығымен жабық желіде жұмыс істей алады: кеңседе, өндірісте, ішкі контурда.' },
          { title: 'Модель мен жабдықты таңдау', text: 'Ашық модельдерді мысалдарыңызда салыстырып, жүктеме мен бюджетке сай сервер таңдаймыз.' },
          { title: 'Оқыту және қолдау', text: 'Қызметкерлерді ЖИ-мен жұмыс істеуге үйретеміз, модельдерді жаңартып, жауап сапасын бақылаймыз.' },
        ],
      },
      control: {
        eyebrow: 'Басты нәрсе туралы адал',
        title: 'Бастамас бұрын не білу маңызды',
        items: [
          { title: 'Сапа', text: 'Ашық модельдер ең үздік бұлттық модельдерден сәл қалады, бірақ құжаттарыңызбен жұмыс міндеттерінің көбін орындайды. Мұны пилотта тексереміз.' },
          { title: 'Жабдық', text: 'Бейнекартасы бар сервер қажет: өзіңіздікі, жалға алынған немесе жеке бұлттағы. Жүктемеге қарай таңдаймыз.' },
          { title: 'Шығындар', text: 'Әр сұрау үшін емес, сервер үшін төлейсіз. Сұраулар көп болғанда бұл бұлттан көбіне тиімдірек.' },
          { title: 'Әрдайым қажет емес', text: 'Деректер құпия болмаса, бұлттық API бастау үшін жылдамырақ және арзанырақ. Адал айтып, екі нұсқаны да есептейміз.' },
        ],
      },
      stack: {
        title: 'Технологиялар',
        items: ['Llama', 'Qwen', 'Mistral', 'DeepSeek', 'Ollama', 'vLLM', 'llama.cpp', 'bge-m3', 'Chroma', 'Qdrant', 'pgvector', 'Docker', 'Linux', 'NVIDIA GPU'],
      },
      case: {
        eyebrow: 'Біздің тәжірибе',
        title: 'Интернетсіз жұмыс істейтін локалды ЖИ',
        text: 'Локалды модельде ҚР ЖҚЕ, Жол жүрісі туралы заң және ӘҚБтК бойынша офлайн-ассистент жасадық. Сондай-ақ Jasyr-ды жасадық: құжаттарды бұлттық ЖИ-ге жібермес бұрын иесіздендіретін сервис.',
        points: [
          'Модель, іздеу және білім қоры толығымен жергілікті компьютерде жұмыс істейді',
          'Жауаптағы әрбір санды код заң мәтінімен салыстырады',
          'Jasyr файлдарды браузерде өңдейді және ешқайда жүктемейді',
        ],
        more: 'Барлық кейстер',
      },
      process: {
        title: 'Орнату қалай өтеді',
        subtitle: 'Міндеттен контурыңыз ішінде жұмыс істейтін модельге дейін.',
        steps: [
          { number: '01', label: 'Талдау', title: 'Міндет және деректер', text: 'ЖИ не істеуі керегін, қандай құжаттар және қанша пайдаланушы болатынын анықтаймыз.' },
          { number: '02', label: 'Пилот', title: 'Модельдерді салыстырамыз', text: 'Бірнеше ашық модельді мысалдарыңызда тексеріп, сапасы мен жылдамдығы бойынша үздігін таңдаймыз.' },
          { number: '03', label: 'Орнату', title: 'Сізде орнатамыз', text: 'Модельді, құжаттар қорын, чат пен API-ды серверіңізге орнатып, қол жеткізуді баптаймыз.' },
          { number: '04', label: 'Қолдау', title: 'Оқытамыз және сүйемелдейміз', text: 'Қызметкерлерді оқытамыз, модельдер мен білім қорын жаңартамыз.' },
        ],
      },
      faq: {
        title: 'Локалды LLM туралы сұрақтар',
        items: [
          { question: 'Қандай сервер керек?', answer: 'Модель көлемі мен пайдаланушылар санына байланысты. Шағын модельдерге заманауи бейнекартасы бар бір сервер жеткілікті, ірілеріне GPU жады көбірек керек. Конфигурация таңдап, серверіңіз болмаса, қайдан жалдауға болатынын айтамыз.' },
          { question: 'Локалды модель ChatGPT-ден қаншалықты нашар?', answer: 'Ең үздік бұлттық модельдер күрделі ойлауда күштірек. Бірақ құжаттарыңызбен, хаттармен және типтік міндеттермен жұмыс үшін ашық модельдер әдетте жеткілікті. Пилотта нақты мысалдарыңызда салыстырамыз.' },
          { question: 'Қандай модельдер орнатасыздар?', answer: 'Llama, Qwen, Mistral және DeepSeek сияқты ашық модельдер. Таңдау тілге, міндетке және серверге байланысты.' },
          { question: 'Модель қазақша түсінеді ме?', answer: 'Көптеген ашық модельдер қазақша түсінеді, бірақ орыс және ағылшын тілдерінен нашарлау. Сапаны мәтіндеріңізде пилотта тексереміз.' },
          { question: 'Оған бағдарламаларымызды қосуға бола ма?', answer: 'Иә. Модель OpenAI-мен үйлесімді API береді, сондықтан жүйелеріңіз бен автоматтандыруларыңыз оған бұлттық сервиске қосылғандай қосылады.' },
        ],
      },
      contact: {
        title: 'ЖИ қандай деректермен керек екенін айтыңыз',
        subtitle: 'Модель мен сервер конфигурациясын ұсынып, тегін бағалау береміз.',
        descriptionPlaceholder: 'Қандай деректер (шарттар, хат алмасу, клиенттер базасы), қанша қызметкер пайдаланады және бейнекартасы бар өз серверіңіз бар ма.',
      },
    },
  },
} as const
