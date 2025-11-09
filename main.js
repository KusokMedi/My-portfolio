document.addEventListener("DOMContentLoaded", () => {
  console.log("%cДобро пожаловать на сайт Матвея!", "color:#00b4d8;font-weight:bold;");

  // Легкий эффект анимации логотипа
  const logo = document.querySelector(".logo");
  setInterval(() => {
    logo.classList.toggle("pulse");
  }, 3000);

  // Анимация появления при скролле
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Наблюдаем за элементами с классом fade
  document.querySelectorAll('.fade').forEach(el => {
    observer.observe(el);
  });

  // Переключатель языков
  const langRu = document.getElementById('lang-ru');
  const langEn = document.getElementById('lang-en');

  const translations = {
    ru: {
      title: "Матвей",
      subtitle: "Python-разработчик • Создаю ботов, скрипты и сайты",
      heroTitle: "Привет! Я Матвей",
      heroText1: "Я — Python-разработчик, специализирующийся на создании Telegram-ботов, различных скриптов и автоматизаций. Также могу разрабатывать сайты (фронтенд и бэкенд).",
      heroText2: "Работаю над любыми задачами — от простых инструментов до сложных решений. Если нужно, обсудим индивидуальные проекты не только на Python.",
      portfolioTitle: "Портфолио",
      project1Title: "Telegram-боты",
      project1Desc: "Разработка автоматизированных ботов для различных задач: уведомления, управление контентом, интеграции с API.",
      project2Title: "Скрипты и автоматизации",
      project2Desc: "Создание скриптов для обработки данных, веб-скрапинга, автоматизации рутинных процессов.",
      project3Title: "Веб-разработка",
      project3Desc: "Фронтенд и бэкенд решения, от лендингов до сложных веб-приложений.",
      contactsTitle: "Контакты",
      contactsText: "Свяжитесь со мной для обсуждения проектов",
      telegram: "Telegram",
      github: "GitHub",
      email: "Email",
      youtube: "YouTube"
    },
    en: {
      title: "Matvey",
      subtitle: "Python Developer • Creating bots, scripts and websites",
      heroTitle: "Hello! I'm Matvey",
      heroText1: "I'm a Python developer specializing in creating Telegram bots, various scripts and automations. I can also develop websites (frontend and backend).",
      heroText2: "I work on any tasks — from simple tools to complex solutions. If needed, we can discuss individual projects not only in Python.",
      portfolioTitle: "Portfolio",
      project1Title: "Telegram Bots",
      project1Desc: "Development of automated bots for various tasks: notifications, content management, API integrations.",
      project2Title: "Scripts and Automations",
      project2Desc: "Creating scripts for data processing, web scraping, automating routine processes.",
      project3Title: "Web Development",
      project3Desc: "Frontend and backend solutions, from landing pages to complex web applications.",
      contactsTitle: "Contacts",
      contactsText: "Contact me to discuss projects",
      telegram: "Telegram",
      github: "GitHub",
      email: "Email",
      youtube: "YouTube"
    }
  };

  function setLanguage(lang) {
    document.querySelector('h1').textContent = translations[lang].title;
    document.querySelector('.subtitle').textContent = translations[lang].subtitle;
    document.querySelector('#hero h2').textContent = translations[lang].heroTitle;
    document.querySelector('#hero p:nth-child(2)').textContent = translations[lang].heroText1;
    document.querySelector('#hero p:nth-child(3)').textContent = translations[lang].heroText2;
    document.querySelector('#portfolio h2').textContent = translations[lang].portfolioTitle;
    document.querySelectorAll('.project h3')[0].textContent = translations[lang].project1Title;
    document.querySelectorAll('.project p')[0].textContent = translations[lang].project1Desc;
    document.querySelectorAll('.project h3')[1].textContent = translations[lang].project2Title;
    document.querySelectorAll('.project p')[1].textContent = translations[lang].project2Desc;
    document.querySelectorAll('.project h3')[2].textContent = translations[lang].project3Title;
    document.querySelectorAll('.project p')[2].textContent = translations[lang].project3Desc;
    document.querySelector('#contacts h2').textContent = translations[lang].contactsTitle;
    document.querySelector('#contacts p').textContent = translations[lang].contactsText;
    document.querySelectorAll('.contact-link span')[0].textContent = translations[lang].telegram;
    document.querySelectorAll('.contact-link span')[1].textContent = translations[lang].github;
    document.querySelectorAll('.contact-link span')[2].textContent = translations[lang].email;
    document.querySelectorAll('.contact-link span')[3].textContent = translations[lang].youtube;

    // Обновляем активную кнопку
    langRu.classList.toggle('active', lang === 'ru');
    langEn.classList.toggle('active', lang === 'en');
  }

  langRu.addEventListener('click', () => setLanguage('ru'));
  langEn.addEventListener('click', () => setLanguage('en'));

  // Устанавливаем русский по умолчанию
  setLanguage('ru');
});
