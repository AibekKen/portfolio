// Copy for the AI process automation page (/services/ai-automation).
// Avoid the characters at-sign, pipe and curly braces in strings: vue-i18n treats them as syntax.

export const automationMessages = {
  ru: {
    seo: {
      title: 'ИИ-автоматизация бизнес-процессов: заявки, документы, отчёты · kenzcore AI Studio',
      description: 'Автоматизируем рутину с помощью ИИ: заявки из WhatsApp, Telegram и почты сами попадают в CRM, счета и договоры разбираются в таблицы, отчёты собираются без людей. Пилот на одном процессе, бесплатная оценка.',
      ogTitle: 'ИИ-автоматизация бизнес-процессов · kenzcore AI Studio',
      ogDescription: 'ИИ-агенты разбирают заявки, документы и почту по вашим правилам и передают спорные случаи человеку.',
    },
    back: 'На главную',
    hero: {
      eyebrow: 'ИИ-автоматизация бизнес-процессов',
      title: 'Заявки, документы и отчёты делает ИИ, а команда занимается клиентами',
      text: 'ИИ-агент читает письма, сообщения и файлы так же, как сотрудник: понимает, что в них, заполняет CRM и таблицы, готовит ответы. Работает по вашим правилам, а спорные случаи отдаёт человеку.',
      primary: 'Обсудить процесс',
      secondary: 'Написать в WhatsApp',
      note: 'Начинаем с пилота на одном процессе. Оценка бесплатно.',
    },
    flow: {
      label: 'Пример: заявка из почты',
      inLabel: 'Входящее письмо',
      input: 'Здравствуйте! Нужно 40 мешков цемента М500 с доставкой в Алмалинский район до пятницы. Оплата по счёту. ТОО «Пример», Айдос',
      agentLabel: 'ИИ-агент разобрал',
      fields: [
        { key: 'Товар', value: 'Цемент М500, 40 мешков' },
        { key: 'Доставка', value: 'Алмалинский район, до пятницы' },
        { key: 'Оплата', value: 'По счёту' },
        { key: 'Клиент', value: 'ТОО «Пример», Айдос' },
      ],
      outLabel: 'Результат',
      output: 'Сделка создана в CRM, менеджер получил задачу выставить счёт',
    },
    scenarios: {
      eyebrow: 'Что автоматизируем',
      title: 'Процессы, которые ИИ может взять на себя',
      items: [
        { title: 'Обработка заявок', text: 'Заявки из WhatsApp, Telegram, почты и с сайта агент разбирает, уточняет недостающее, создаёт сделку в CRM и ставит задачу менеджеру.' },
        { title: 'Документы', text: 'Из счетов, накладных, актов и договоров достаёт реквизиты, суммы и позиции и переносит их в таблицу или учётную систему.' },
        { title: 'Почта и ответы клиентам', text: 'Сортирует входящие, помечает срочное и готовит черновики ответов по вашей базе знаний. Сотрудник только проверяет и отправляет.' },
        { title: 'Отчёты', text: 'Собирает данные из нескольких систем и каждое утро присылает руководителю сводку в Telegram.' },
        { title: 'Сверка и контроль', text: 'Сравнивает данные между системами и находит расхождения, дубли и пропуски.' },
        { title: 'Сбор данных', text: 'Следит за сайтами, прайсами и акциями и обновляет ваши таблицы. Так мы сделали для сервиса Good Deal.' },
      ],
    },
    control: {
      eyebrow: 'Под контролем',
      title: 'ИИ работает по вашим правилам',
      items: [
        { title: 'Спорное решает человек', text: 'Агент действует в рамках сценария. Если он не уверен или сумма выше заданного порога, задача уходит сотруднику.' },
        { title: 'Каждое действие видно', text: 'Ведём журнал: что агент получил, что решил и что сделал. Ошибку легко найти, а правило уточнить.' },
        { title: 'Подключаем ваши системы', text: 'CRM, почта, мессенджеры, таблицы и любые системы с API. Менять привычные инструменты не нужно.' },
        { title: 'Данные можно не отдавать наружу', text: 'Агент может работать на локальной модели на вашем сервере, если документы нельзя отправлять в облако.' },
      ],
    },
    case: {
      eyebrow: 'Кейс · Good Deal',
      title: 'Сбор акций для сервиса Good Deal теперь идёт автоматически',
      text: 'Встроили ИИ в действующий сервис клиента, выполнили все требования к системе и сопровождаем проект после запуска.',
      more: 'Все кейсы',
    },
    process: {
      title: 'Как запускаем автоматизацию',
      subtitle: 'Сначала один процесс и понятный результат, потом масштабируем.',
      steps: [
        { number: '01', label: 'Разбор', title: 'Смотрим процесс', text: 'Разбираем, как задача делается сейчас, сколько времени на неё уходит и где возникают ошибки.' },
        { number: '02', label: 'Пилот', title: 'Автоматизируем один сценарий', text: 'Запускаем агента на реальных данных и сравниваем результат с ручной работой.' },
        { number: '03', label: 'Внедрение', title: 'Подключаем к системам', text: 'Интегрируем с CRM, почтой, таблицами и мессенджерами, настраиваем правила и доступы.' },
        { number: '04', label: 'Развитие', title: 'Сопровождаем и расширяем', text: 'Следим за качеством, дорабатываем правила и переносим подход на другие процессы.' },
      ],
    },
    faq: {
      title: 'Вопросы об ИИ-автоматизации',
      items: [
        { question: 'Какие процессы подходят для автоматизации?', answer: 'Повторяющиеся задачи с понятным результатом: разбор заявок, писем и документов, перенос данных между системами, отчёты, сверки. На первой встрече поможем выбрать процесс, где эффект будет заметнее всего.' },
        { question: 'Что будет, если ИИ ошибётся?', answer: 'Агент работает в рамках правил, а неуверенные и рискованные случаи передаёт человеку. Все действия записываются в журнал, поэтому ошибку легко найти и исправить, а правило уточнить.' },
        { question: 'С какими системами можно связать агента?', answer: 'С CRM, почтой, мессенджерами, таблицами и любыми системами, у которых есть API или выгрузка данных. Конкретный способ подключения обсудим после разбора процесса.' },
        { question: 'Нужен ли нам свой программист?', answer: 'Нет. Мы настраиваем, запускаем и сопровождаем агента. Вашей команде нужно описать процесс и проверить результат на пилоте.' },
        { question: 'Сколько стоит автоматизация?', answer: 'Зависит от процесса и количества систем. После разбора даём бесплатную оценку по этапам. Обычно начинаем с пилота на одном сценарии, чтобы вы увидели эффект до больших вложений.' },
        { question: 'Можно ли автоматизировать без отправки данных в облако?', answer: 'Да. Агент может работать на локальной языковой модели, установленной на вашем сервере.' },
      ],
    },
    contact: {
      title: 'Расскажите, какой процесс хотите автоматизировать',
      subtitle: 'Разберём процесс, предложим сценарий для пилота и дадим бесплатную оценку.',
      descriptionPlaceholder: 'Опишите процесс: откуда приходят данные, что с ними делают сейчас, куда они должны попасть и сколько времени это занимает.',
    },
  },

  en: {
    seo: {
      title: 'AI Business Process Automation: Requests, Documents, Reports · kenzcore AI Studio',
      description: 'We automate routine work with AI: requests from WhatsApp, Telegram and email land in your CRM on their own, invoices and contracts are parsed into spreadsheets, reports are compiled without people. A pilot on one process, free estimate.',
      ogTitle: 'AI business process automation · kenzcore AI Studio',
      ogDescription: 'AI agents handle requests, documents and email by your rules and pass unclear cases to a person.',
    },
    back: 'Home',
    hero: {
      eyebrow: 'AI business process automation',
      title: 'AI handles requests, documents and reports while your team handles customers',
      text: 'An AI agent reads emails, messages and files the way an employee does: it understands what is in them, fills in the CRM and spreadsheets and drafts replies. It works by your rules and hands unclear cases to a person.',
      primary: 'Discuss a process',
      secondary: 'Write on WhatsApp',
      note: 'We start with a pilot on one process. The estimate is free.',
    },
    flow: {
      label: 'Example: a request by email',
      inLabel: 'Incoming email',
      input: 'Hello! We need 40 bags of M500 cement delivered to Almaly district by Friday. Payment by invoice. Primer LLP, Aidos',
      agentLabel: 'The AI agent extracted',
      fields: [
        { key: 'Item', value: 'M500 cement, 40 bags' },
        { key: 'Delivery', value: 'Almaly district, by Friday' },
        { key: 'Payment', value: 'By invoice' },
        { key: 'Client', value: 'Primer LLP, Aidos' },
      ],
      outLabel: 'Result',
      output: 'A deal is created in the CRM and a manager got a task to issue the invoice',
    },
    scenarios: {
      eyebrow: 'What we automate',
      title: 'Processes AI can take off your team',
      items: [
        { title: 'Request handling', text: 'The agent reads requests from WhatsApp, Telegram, email and your website, asks for missing details, creates a deal in the CRM and assigns a manager.' },
        { title: 'Documents', text: 'It pulls bank details, amounts and line items from invoices, waybills, acts and contracts into a spreadsheet or accounting system.' },
        { title: 'Email and customer replies', text: 'It sorts incoming mail, flags urgent items and drafts replies from your knowledge base. An employee only checks and sends.' },
        { title: 'Reports', text: 'It gathers data from several systems and sends the manager a summary in Telegram every morning.' },
        { title: 'Reconciliation', text: 'It compares data across systems and finds mismatches, duplicates and gaps.' },
        { title: 'Data collection', text: 'It watches websites, price lists and promotions and updates your spreadsheets. We did this for the Good Deal service.' },
      ],
    },
    control: {
      eyebrow: 'Under control',
      title: 'AI works by your rules',
      items: [
        { title: 'A person decides unclear cases', text: 'The agent acts within the scenario. If it is not sure or an amount is above a set threshold, the task goes to an employee.' },
        { title: 'Every action is visible', text: 'We keep a log of what the agent received, decided and did. Mistakes are easy to find and rules easy to refine.' },
        { title: 'We connect your systems', text: 'CRM, email, messengers, spreadsheets and any system with an API. You do not have to change the tools you use.' },
        { title: 'Data can stay inside', text: 'The agent can run on a local model on your server if documents cannot be sent to the cloud.' },
      ],
    },
    case: {
      eyebrow: 'Case study · Good Deal',
      title: 'Promotions for the Good Deal service are now collected automatically',
      text: 'We built AI into the client\'s live service, met every requirement for the system and support the project after launch.',
      more: 'All cases',
    },
    process: {
      title: 'How we launch automation',
      subtitle: 'One process and a clear result first, then we scale.',
      steps: [
        { number: '01', label: 'Discovery', title: 'We study the process', text: 'We look at how the task is done today, how much time it takes and where mistakes happen.' },
        { number: '02', label: 'Pilot', title: 'We automate one scenario', text: 'We run the agent on real data and compare the result with manual work.' },
        { number: '03', label: 'Rollout', title: 'We connect your systems', text: 'We integrate with your CRM, email, spreadsheets and messengers and set up rules and access.' },
        { number: '04', label: 'Growth', title: 'We support and expand', text: 'We monitor quality, refine the rules and bring the approach to other processes.' },
      ],
    },
    faq: {
      title: 'Questions about AI automation',
      items: [
        { question: 'Which processes are a good fit?', answer: 'Repetitive tasks with a clear result: handling requests, emails and documents, moving data between systems, reports, reconciliations. At the first meeting we help you pick the process with the most visible effect.' },
        { question: 'What if the AI makes a mistake?', answer: 'The agent works within rules and passes uncertain or risky cases to a person. Every action is logged, so a mistake is easy to find and fix and the rule easy to refine.' },
        { question: 'Which systems can the agent connect to?', answer: 'CRMs, email, messengers, spreadsheets and any system with an API or data export. We agree on the exact connection after reviewing the process.' },
        { question: 'Do we need our own developer?', answer: 'No. We set up, launch and support the agent. Your team only needs to describe the process and check the result during the pilot.' },
        { question: 'How much does automation cost?', answer: 'It depends on the process and the number of systems. After the review we give a free estimate by stages. We usually start with a pilot on one scenario so you see the effect before a big investment.' },
        { question: 'Can we automate without sending data to the cloud?', answer: 'Yes. The agent can run on a local language model installed on your server.' },
      ],
    },
    contact: {
      title: 'Tell us which process you want to automate',
      subtitle: 'We will review the process, suggest a pilot scenario and give a free estimate.',
      descriptionPlaceholder: 'Describe the process: where the data comes from, what is done with it today, where it should end up and how long it takes.',
    },
  },

  kk: {
    seo: {
      title: 'Бизнес-процестерді ЖИ көмегімен автоматтандыру: өтінімдер, құжаттар, есептер · kenzcore AI Studio',
      description: 'Күнделікті жұмысты ЖИ көмегімен автоматтандырамыз: WhatsApp, Telegram және поштадан келген өтінімдер CRM-ге өзі түседі, шоттар мен шарттар кестелерге талданады, есептер адамсыз жиналады. Бір процестегі пилот, тегін бағалау.',
      ogTitle: 'Бизнес-процестерді ЖИ көмегімен автоматтандыру · kenzcore AI Studio',
      ogDescription: 'ЖИ-агенттер өтінімдерді, құжаттар мен поштаны сіздің ережелеріңіз бойынша өңдеп, күмәнді жағдайларды адамға береді.',
    },
    back: 'Басты бетке',
    hero: {
      eyebrow: 'Бизнес-процестерді ЖИ көмегімен автоматтандыру',
      title: 'Өтінімдерді, құжаттар мен есептерді ЖИ жасайды, ал команда клиенттермен айналысады',
      text: 'ЖИ-агент хаттарды, хабарламалар мен файлдарды қызметкер сияқты оқиды: ішінде не барын түсініп, CRM мен кестелерді толтырады, жауаптар дайындайды. Сіздің ережелеріңіз бойынша жұмыс істейді, ал күмәнді жағдайларды адамға береді.',
      primary: 'Процесті талқылау',
      secondary: 'WhatsApp-қа жазу',
      note: 'Бір процестегі пилоттан бастаймыз. Бағалау тегін.',
    },
    flow: {
      label: 'Мысал: поштадан келген өтінім',
      inLabel: 'Кіріс хат',
      input: 'Сәлеметсіз бе! Жұмаға дейін Алмалы ауданына жеткізумен М500 цементінің 40 қабы керек. Төлем шот бойынша. «Пример» ЖШС, Айдос',
      agentLabel: 'ЖИ-агент талдады',
      fields: [
        { key: 'Тауар', value: 'М500 цементі, 40 қап' },
        { key: 'Жеткізу', value: 'Алмалы ауданы, жұмаға дейін' },
        { key: 'Төлем', value: 'Шот бойынша' },
        { key: 'Клиент', value: '«Пример» ЖШС, Айдос' },
      ],
      outLabel: 'Нәтиже',
      output: 'CRM-де мәміле құрылды, менеджер шот жазу тапсырмасын алды',
    },
    scenarios: {
      eyebrow: 'Нені автоматтандырамыз',
      title: 'ЖИ өз мойнына ала алатын процестер',
      items: [
        { title: 'Өтінімдерді өңдеу', text: 'Агент WhatsApp, Telegram, пошта және сайттан келген өтінімдерді талдап, жетіспейтінін нақтылайды, CRM-де мәміле құрып, менеджерге тапсырма қояды.' },
        { title: 'Құжаттар', text: 'Шоттардан, жүкқұжаттардан, актілер мен шарттардан деректемелерді, сомалар мен позицияларды алып, кестеге немесе есеп жүйесіне көшіреді.' },
        { title: 'Пошта және клиенттерге жауап', text: 'Кіріс хаттарды сұрыптап, шұғылын белгілейді және білім қорыңыз бойынша жауаптардың жобасын дайындайды. Қызметкер тек тексеріп, жібереді.' },
        { title: 'Есептер', text: 'Бірнеше жүйеден деректерді жинап, әр таң сайын басшыға Telegram-да қорытынды жібереді.' },
        { title: 'Салыстыру және бақылау', text: 'Жүйелер арасындағы деректерді салыстырып, сәйкессіздіктерді, қайталанулар мен олқылықтарды табады.' },
        { title: 'Деректер жинау', text: 'Сайттарды, прайстар мен акцияларды қадағалап, кестелеріңізді жаңартады. Good Deal сервисі үшін осылай жасадық.' },
      ],
    },
    control: {
      eyebrow: 'Бақылауда',
      title: 'ЖИ сіздің ережелеріңіз бойынша жұмыс істейді',
      items: [
        { title: 'Күмәндіні адам шешеді', text: 'Агент сценарий аясында әрекет етеді. Сенімсіз болса немесе сома белгіленген шектен асса, тапсырма қызметкерге өтеді.' },
        { title: 'Әр әрекет көрінеді', text: 'Агент не алғанын, не шешкенін және не істегенін журналға жазамыз. Қатені табу және ережені нақтылау оңай.' },
        { title: 'Жүйелеріңізді қосамыз', text: 'CRM, пошта, мессенджерлер, кестелер және API бар кез келген жүйе. Үйреншікті құралдарды өзгертудің қажеті жоқ.' },
        { title: 'Деректерді сыртқа бермеуге болады', text: 'Құжаттарды бұлтқа жіберуге болмаса, агент сіздің серверіңіздегі локалды модельде жұмыс істей алады.' },
      ],
    },
    case: {
      eyebrow: 'Кейс · Good Deal',
      title: 'Good Deal сервисі үшін акцияларды жинау енді автоматты түрде жүреді',
      text: 'Клиенттің жұмыс істеп тұрған сервисіне ЖИ енгіздік, жүйеге қойылған барлық талаптарды орындадық және іске қосқаннан кейін жобаны сүйемелдейміз.',
      more: 'Барлық кейстер',
    },
    process: {
      title: 'Автоматтандыруды қалай іске қосамыз',
      subtitle: 'Алдымен бір процесс және түсінікті нәтиже, содан кейін кеңейтеміз.',
      steps: [
        { number: '01', label: 'Талдау', title: 'Процесті қараймыз', text: 'Тапсырма қазір қалай орындалатынын, қанша уақыт кететінін және қай жерде қателер болатынын талдаймыз.' },
        { number: '02', label: 'Пилот', title: 'Бір сценарийді автоматтандырамыз', text: 'Агентті нақты деректерде іске қосып, нәтижені қол еңбегімен салыстырамыз.' },
        { number: '03', label: 'Енгізу', title: 'Жүйелерге қосамыз', text: 'CRM, пошта, кестелер және мессенджерлермен біріктіріп, ережелер мен қол жеткізуді баптаймыз.' },
        { number: '04', label: 'Дамыту', title: 'Сүйемелдейміз және кеңейтеміз', text: 'Сапаны бақылап, ережелерді жетілдіреміз және тәсілді басқа процестерге көшіреміз.' },
      ],
    },
    faq: {
      title: 'ЖИ-автоматтандыру туралы сұрақтар',
      items: [
        { question: 'Қандай процестер автоматтандыруға жарайды?', answer: 'Нәтижесі түсінікті қайталанатын тапсырмалар: өтінімдерді, хаттар мен құжаттарды талдау, деректерді жүйелер арасында көшіру, есептер, салыстырулар. Алғашқы кездесуде әсері ең байқалатын процесті таңдауға көмектесеміз.' },
        { question: 'ЖИ қателессе не болады?', answer: 'Агент ережелер аясында жұмыс істейді, ал сенімсіз және тәуекелді жағдайларды адамға береді. Барлық әрекеттер журналға жазылады, сондықтан қатені табу және түзету, ережені нақтылау оңай.' },
        { question: 'Агентті қандай жүйелермен байланыстыруға болады?', answer: 'CRM, пошта, мессенджерлер, кестелер және API немесе деректерді шығаруы бар кез келген жүйемен. Нақты қосылу тәсілін процесті талдағаннан кейін келісеміз.' },
        { question: 'Бізге өз бағдарламашымыз керек пе?', answer: 'Жоқ. Агентті біз баптаймыз, іске қосамыз және сүйемелдейміз. Командаңызға процесті сипаттап, пилоттағы нәтижені тексеру ғана қажет.' },
        { question: 'Автоматтандыру қанша тұрады?', answer: 'Процеске және жүйелер санына байланысты. Талдаудан кейін кезеңдер бойынша тегін бағалау береміз. Әдетте бір сценарийдегі пилоттан бастаймыз, сонда үлкен шығынға дейін әсерді көресіз.' },
        { question: 'Деректерді бұлтқа жібермей автоматтандыруға бола ма?', answer: 'Иә. Агент сіздің серверіңізге орнатылған локалды тіл моделінде жұмыс істей алады.' },
      ],
    },
    contact: {
      title: 'Қандай процесті автоматтандырғыңыз келетінін айтыңыз',
      subtitle: 'Процесті талдап, пилотқа сценарий ұсынамыз және тегін бағалау береміз.',
      descriptionPlaceholder: 'Процесті сипаттаңыз: деректер қайдан келеді, қазір олармен не істейді, қайда түсуі керек және бұған қанша уақыт кетеді.',
    },
  },
} as const
