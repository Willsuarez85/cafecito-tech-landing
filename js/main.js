/**
 * Cafecito Tech - Main JavaScript
 * Handles: i18n translations, mobile menu, smooth scroll, navbar effects, scroll animations
 */

(function() {
  'use strict';

  // ==========================================================================
  // Translations
  // ==========================================================================

  const translations = {
    es: {
      // Navigation
      'nav.whatis': 'Qué es',
      'nav.why': 'Por qué ir',
      'nav.agenda': 'Agenda',
      'nav.events': 'Eventos',
      'nav.foryou': 'Es para ti',
      'nav.cta': 'Reserva tu lugar',

      // CTAs
      'cta.reserve': 'Reserva tu lugar gratis',
      'cta.viewEvents': 'Ver próximos eventos',
      'cta.register': 'Registrarme ahora',
      'cta.registerArrow': 'Registrarme →',
      'cta.viewCalendar': 'Ver calendario →',
      'cta.fullCalendar': '📆 Ver calendario completo en Luma',

      // Hero
      'hero.title': 'El primer <span class="hero__title-highlight">networking</span> de tecnología para latinos en Charlotte',
      'hero.subtitle': 'Conversaciones reales sobre tech, en español, con un cafecito en mano. Sin presión, sin tecnicismos, solo comunidad.',

      // Event
      'event.next': 'PRÓXIMO EVENTO',
      'event.session1.title': 'Session #1: La IA está aquí',
      'event.session1.date': 'Sábado, 7 de Marzo 2025',
      'event.session1.badge': '7 DE MARZO',
      'event.session1.desc': 'Nuestro primer encuentro. Hablaremos sobre cómo la IA está cambiando todo y qué significa para ti.',
      'event.session2.title': 'Session #2: Por anunciar',
      'event.session2.date': 'Sábado, 5 de Abril 2025',
      'event.session2.badge': 'ABRIL 2025',
      'event.session2.desc': 'El tema se anunciará pronto. Síguenos para enterarte primero.',

      // What Is Section
      'whatis.eyebrow': '¿Qué es?',
      'whatis.title': 'Un espacio para conversar sobre tecnología en español',
      'whatis.description': 'Cafecito Tech es un encuentro casual creado para conversar sobre las tecnologías que están transformando el mundo y navegar esta transición tecnológica juntos.',
      'whatis.feature1.title': 'Café + Amigos',
      'whatis.feature1.desc': 'Un ambiente relajado donde las conversaciones fluyen naturalmente, como cuando te juntas con amigos.',
      'whatis.feature2.title': 'En Español',
      'whatis.feature2.desc': 'Tecnología explicada en tu idioma. Sin barreras de lenguaje, sin tecnicismos innecesarios.',
      'whatis.feature3.title': 'Comunidad Real',
      'whatis.feature3.desc': 'Conexiones genuinas con otros latinos en tech. Networking sin el ambiente corporativo frío.',
      'whatis.quote': 'Aquí no vienes solo a escuchar una charla, vienes a hacer nuevas conexiones, compartir ideas, y conversar sobre tecnología en tu idioma.',

      // Why Section
      'why.eyebrow': '¿Por qué ir?',
      'why.title': '3 razones para unirte',
      'why.reason1.title': 'Conversaciones reales sobre tecnología',
      'why.reason1.desc': 'Hablamos de IA, automatización, herramientas y tendencias de una manera práctica. Todo en español, sin el hype vacío que ves en redes.',
      'why.reason2.title': 'Comunidad, no solo contenido',
      'why.reason2.desc': 'Las mejores oportunidades nacen de conexiones reales. Conoce a otros profesionales, emprendedores y curiosos que están navegando la misma transición que tú.',
      'why.reason3.title': 'Ideas aplicables para tu carrera o negocio',
      'why.reason3.desc': 'No es teoría abstracta. Compartimos herramientas, casos de uso y experiencias que puedes aplicar desde el lunes.',

      // Agenda Section
      'agenda.eyebrow': '¿Qué esperar?',
      'agenda.title': 'Estructura del evento',
      'agenda.description': 'Cada sesión dura aproximadamente 2 horas con un formato diseñado para maximizar las conexiones.',
      'agenda.item1.title': '☕ Llegada + Cafecito',
      'agenda.item1.desc': 'Llega, agarra tu café y empieza a conocer gente. Sin prisa, sin formalidades.',
      'agenda.item2.title': '🧠 Mini sesión práctica',
      'agenda.item2.desc': '30 minutos de contenido enfocado en el tema del mes. Demos, casos de uso, herramientas que puedes usar.',
      'agenda.item3.title': '🤝 Networking + Conversación',
      'agenda.item3.desc': 'La parte más importante. Conecta con otros asistentes, comparte ideas, haz preguntas, encuentra colaboradores.',

      // For You Section
      'foryou.eyebrow': '¿Es para ti?',
      'foryou.title': 'Cafecito Tech es para ti si...',
      'foryou.item1': 'Eres latino en Charlotte y te interesa la tecnología (aunque estés empezando)',
      'foryou.item2': 'Quieres aprender sobre IA, automatización y herramientas digitales en español',
      'foryou.item3': 'Buscas networking sin el ambiente corporativo frío',
      'foryou.item4': 'Quieres conocer gente construyendo cosas interesantes (tech, negocios, proyectos)',
      'foryou.item5': 'Quieres ser parte de algo más grande en tu ciudad',
      'foryou.cta': 'Si te interesa la tecnología, este espacio es para ti.',

      // Events Section
      'events.eyebrow': 'Calendario',
      'events.title': 'Próximos eventos',
      'events.description': 'Primer sábado de cada mes. Reserva tu lugar con anticipación - los cupos son limitados.',

      // Limited Spots Section
      'limited.prompt': '> Loading registro...',
      'limited.title': 'CUPOS LIMITADOS',
      'limited.description': 'Mantenemos cada sesión íntima para que las conversaciones sean de calidad. Reserva tu lugar ahora.',

      // Footer
      'footer.initiative': 'Una iniciativa de',
      'footer.tagline': 'El primer networking de tecnología para latinos en Charlotte.',
      'footer.register': 'Registro',
      'footer.made': 'Hecho con ☕ y 💚 en Charlotte, NC',

      // Ticker
      'ticker.ai': 'AI & Machine Learning',
      'ticker.gap': 'Brecha Digital',
      'ticker.thinking': 'Pensamiento Crítico',
      'ticker.civil': 'IA como Derecho Civil',
      'ticker.crypto': 'Bitcoin & Crypto',
      'ticker.automation': 'Automatización',
      'ticker.culture': 'Cultura Digital',

      // Founders
      'founders.eyebrow': 'Quiénes somos',
      'founders.title': 'Los fundadores',
      'founders.headline': 'Cafecito Tech nació de algo simple:',
      'founders.lead': 'queríamos un lugar para hablar entre amigos sobre AI y tecnología en nuestro idioma.',
      'founders.story1': 'Somos un grupo de amigos latinos que trabajamos en la industria de la tecnología, la creatividad y el marketing, y sentíamos la falta de un espacio real para reunirnos, conversar, aprender juntos y construir comunidad.',
      'founders.story2': '<strong>Cafecito Tech</strong> nace como una iniciativa de los fundadores de <strong>Link Foundation</strong>, como parte de una misión mayor – cerrar la brecha tecnológica en nuestra comunidad.',
      'founders.believe': 'Creemos que:',
      'founders.belief1': 'El conocimiento no debería tener barrera de idioma',
      'founders.belief2': 'Las mejores oportunidades nacen de conexiones reales',
      'founders.belief3': 'Nuestra comunidad merece un espacio para hablar de tecnología en español',
      'founders.story3': 'Creamos este evento para tener un espacio casual, para conocernos y hablar entre amigos sin la presión de tener que saberlo todo.',
      'founders.story4': 'Un lugar para llegar, conversar, aprender juntos y construir comunidad.',
      'founders.story5': 'Un espacio abierto para todos, sin importar si vienes del mundo corporativo, emprendedor, o si simplemente sientes curiosidad por el futuro de la tecnología y de la humanidad.',
      'founders.caption': 'Los fundadores de Cafecito Tech',

      // Blogs
      'blogs.eyebrow': 'Aprende',
      'blogs.title': 'Aprende con Link Foundation',
      'blogs.description': 'Explora nuestros artículos sobre tecnología, IA y el futuro digital',
      'blogs.post1.title': '¿Qué es la brecha digital latina?',
      'blogs.post1.author': 'Por William Suárez Mesa',
      'blogs.post2.title': 'En la era de la creatividad aumentada...',
      'blogs.post2.author': 'Por Luis Mata',
      'blogs.post3.title': 'Pensamiento Crítico: Un Superpoder...',
      'blogs.post3.author': 'Por Pedro Cordido',
      'blogs.post4.title': '¿Por qué el acceso a herramientas de IA es el nuevo derecho civil?',
      'blogs.post4.author': 'Por Isabella García',
      'blogs.readMore': 'Leer artículo →',
      'blogs.viewAll': 'Ver todos los artículos →'
    },

    en: {
      // Navigation
      'nav.whatis': 'What is it',
      'nav.why': 'Why attend',
      'nav.agenda': 'Agenda',
      'nav.events': 'Events',
      'nav.foryou': 'Is it for you',
      'nav.cta': 'Reserve your spot',

      // CTAs
      'cta.reserve': 'Reserve your spot free',
      'cta.viewEvents': 'See upcoming events',
      'cta.register': 'Register now',
      'cta.registerArrow': 'Register →',
      'cta.viewCalendar': 'View calendar →',
      'cta.fullCalendar': '📆 See full calendar on Luma',

      // Hero
      'hero.title': 'The first tech <span class="hero__title-highlight">networking</span> for Latinos in Charlotte',
      'hero.subtitle': 'Real conversations about tech, in Spanish, with a cup of coffee. No pressure, no jargon, just community.',

      // Event
      'event.next': 'NEXT EVENT',
      'event.session1.title': 'Session #1: AI is Here',
      'event.session1.date': 'Saturday, March 7, 2025',
      'event.session1.badge': 'MARCH 7',
      'event.session1.desc': 'Our first meetup. We\'ll talk about how AI is changing everything and what it means for you.',
      'event.session2.title': 'Session #2: To be announced',
      'event.session2.date': 'Saturday, April 5, 2025',
      'event.session2.badge': 'APRIL 2025',
      'event.session2.desc': 'Topic coming soon. Follow us to be the first to know.',

      // What Is Section
      'whatis.eyebrow': 'What is it?',
      'whatis.title': 'A space to talk about technology in Spanish',
      'whatis.description': 'Cafecito Tech is a casual meetup created to discuss the technologies transforming our world and navigate this tech transition together.',
      'whatis.feature1.title': 'Coffee + Friends',
      'whatis.feature1.desc': 'A relaxed environment where conversations flow naturally, like hanging out with friends.',
      'whatis.feature2.title': 'In Spanish',
      'whatis.feature2.desc': 'Technology explained in your language. No language barriers, no unnecessary jargon.',
      'whatis.feature3.title': 'Real Community',
      'whatis.feature3.desc': 'Genuine connections with other Latinos in tech. Networking without the cold corporate vibe.',
      'whatis.quote': 'You\'re not just here to listen to a talk. You\'re here to make new connections, share ideas, and discuss technology in your language.',

      // Why Section
      'why.eyebrow': 'Why attend?',
      'why.title': '3 reasons to join',
      'why.reason1.title': 'Real conversations about technology',
      'why.reason1.desc': 'We discuss AI, automation, tools and trends in a practical way. All in Spanish, without the empty hype you see on social media.',
      'why.reason2.title': 'Community, not just content',
      'why.reason2.desc': 'The best opportunities come from real connections. Meet other professionals, entrepreneurs and curious minds navigating the same transition as you.',
      'why.reason3.title': 'Actionable ideas for your career or business',
      'why.reason3.desc': 'This isn\'t abstract theory. We share tools, use cases and experiences you can apply starting Monday.',

      // Agenda Section
      'agenda.eyebrow': 'What to expect?',
      'agenda.title': 'Event structure',
      'agenda.description': 'Each session lasts approximately 2 hours with a format designed to maximize connections.',
      'agenda.item1.title': '☕ Arrival + Coffee',
      'agenda.item1.desc': 'Arrive, grab your coffee and start meeting people. No rush, no formalities.',
      'agenda.item2.title': '🧠 Mini practical session',
      'agenda.item2.desc': '30 minutes of focused content on the month\'s topic. Demos, use cases, tools you can use.',
      'agenda.item3.title': '🤝 Networking + Conversation',
      'agenda.item3.desc': 'The most important part. Connect with other attendees, share ideas, ask questions, find collaborators.',

      // For You Section
      'foryou.eyebrow': 'Is it for you?',
      'foryou.title': 'Cafecito Tech is for you if...',
      'foryou.item1': 'You\'re Latino in Charlotte and interested in technology (even if you\'re just starting)',
      'foryou.item2': 'You want to learn about AI, automation and digital tools in Spanish',
      'foryou.item3': 'You\'re looking for networking without the cold corporate atmosphere',
      'foryou.item4': 'You want to meet people building interesting things (tech, business, projects)',
      'foryou.item5': 'You want to be part of something bigger in your city',
      'foryou.cta': 'If you\'re interested in technology, this space is for you.',

      // Events Section
      'events.eyebrow': 'Calendar',
      'events.title': 'Upcoming events',
      'events.description': 'First Saturday of each month. Reserve your spot in advance - spaces are limited.',

      // Limited Spots Section
      'limited.prompt': '> Loading registration...',
      'limited.title': 'LIMITED SPOTS',
      'limited.description': 'We keep each session intimate so conversations can be quality. Reserve your spot now.',

      // Footer
      'footer.initiative': 'An initiative of',
      'footer.tagline': 'The first tech networking for Latinos in Charlotte.',
      'footer.register': 'Register',
      'footer.made': 'Made with ☕ and 💚 in Charlotte, NC',

      // Ticker
      'ticker.ai': 'AI & Machine Learning',
      'ticker.gap': 'Digital Gap',
      'ticker.thinking': 'Critical Thinking',
      'ticker.civil': 'AI as Civil Right',
      'ticker.crypto': 'Bitcoin & Crypto',
      'ticker.automation': 'Automation',
      'ticker.culture': 'Digital Culture',

      // Founders
      'founders.eyebrow': 'Who we are',
      'founders.title': 'The founders',
      'founders.headline': 'Cafecito Tech was born from something simple:',
      'founders.lead': 'we wanted a place to talk among friends about AI and technology in our language.',
      'founders.story1': 'We are a group of Latino friends who work in the technology, creativity, and marketing industry, and we felt the lack of a real space to meet, talk, learn together, and build community.',
      'founders.story2': '<strong>Cafecito Tech</strong> is born as an initiative of the founders of <strong>Link Foundation</strong>, as part of a greater mission – to close the technological gap in our community.',
      'founders.believe': 'We believe that:',
      'founders.belief1': 'Knowledge should not have a language barrier',
      'founders.belief2': 'The best opportunities come from real connections',
      'founders.belief3': 'Our community deserves a space to talk about technology in Spanish',
      'founders.story3': 'We created this event to have a casual space, to meet and talk among friends without the pressure of having to know everything.',
      'founders.story4': 'A place to arrive, converse, learn together, and build community.',
      'founders.story5': 'An open space for everyone, whether you come from the corporate world, entrepreneurship, or if you are simply curious about the future of technology and humanity.',
      'founders.caption': 'The founders of Cafecito Tech',

      // Blogs
      'blogs.eyebrow': 'Learn',
      'blogs.title': 'Learn with Link Foundation',
      'blogs.description': 'Explore our articles about technology, AI and the digital future',
      'blogs.post1.title': 'What is the Latino digital gap?',
      'blogs.post1.author': 'By William Suárez Mesa',
      'blogs.post2.title': 'In the age of enhanced creativity...',
      'blogs.post2.author': 'By Luis Mata',
      'blogs.post3.title': 'Critical Thinking: A Superpower...',
      'blogs.post3.author': 'By Pedro Cordido',
      'blogs.post4.title': 'Why Access to AI Tools Is the New Civil Right?',
      'blogs.post4.author': 'By Isabella García',
      'blogs.readMore': 'Read article →',
      'blogs.viewAll': 'View all articles →'
    }
  };

  // ==========================================================================
  // i18n Functions
  // ==========================================================================

  let currentLang = localStorage.getItem('cafecito-lang') || 'es';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cafecito-lang', lang);
    document.documentElement.lang = lang;
    document.getElementById('html-root').setAttribute('lang', lang);
    updateContent();
    updateToggleDisplay();
  }

  function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = translations[currentLang][key];
      if (translation) {
        if (el.hasAttribute('data-i18n-html')) {
          el.innerHTML = translation;
        } else {
          el.textContent = translation;
        }
      }
    });
  }

  function updateToggleDisplay() {
    const toggle = document.getElementById('lang-toggle');
    if (!toggle) return;

    const currentSpan = toggle.querySelector('.lang-toggle__current');
    const otherSpan = toggle.querySelector('.lang-toggle__other');

    if (currentLang === 'es') {
      currentSpan.textContent = 'ES';
      otherSpan.textContent = 'EN';
    } else {
      currentSpan.textContent = 'EN';
      otherSpan.textContent = 'ES';
    }
  }

  function toggleLanguage() {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
  }

  // Initialize language
  function initLanguage() {
    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', toggleLanguage);
    }

    // Set initial language from localStorage or default
    setLanguage(currentLang);
  }

  // ==========================================================================
  // Event Data (Easy to update for future sessions)
  // ==========================================================================

  const EVENTS = [
    {
      id: 1,
      title: 'Session #1: La IA está aquí',
      date: '2025-03-07',
      displayDate: 'Sábado, 7 de Marzo 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Charlotte, NC',
      description: 'Nuestro primer encuentro. Hablaremos sobre cómo la IA está cambiando todo y qué significa para ti.',
      lumaUrl: 'https://lu.ma/7b6ykm3k',
      status: 'upcoming' // 'upcoming', 'soldout', 'past'
    },
    {
      id: 2,
      title: 'Session #2: Por anunciar',
      date: '2025-04-05',
      displayDate: 'Sábado, 5 de Abril 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Charlotte, NC',
      description: 'El tema se anunciará pronto. Síguenos para enterarte primero.',
      lumaUrl: 'https://lu.ma/7b6ykm3k',
      status: 'upcoming'
    }
  ];

  // ==========================================================================
  // DOM Elements
  // ==========================================================================

  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = mobileMenu?.querySelectorAll('.mobile-menu__link');

  // ==========================================================================
  // Mobile Menu
  // ==========================================================================

  function openMobileMenu() {
    if (!mobileMenu || !menuToggle) return;

    mobileMenu.classList.add('mobile-menu--open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Focus trap - focus first link
    const firstLink = mobileMenu.querySelector('.mobile-menu__link');
    if (firstLink) firstLink.focus();
  }

  function closeMobileMenu() {
    if (!mobileMenu || !menuToggle) return;

    mobileMenu.classList.remove('mobile-menu--open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    // Return focus to toggle button
    menuToggle.focus();
  }

  // Event listeners for mobile menu
  menuToggle?.addEventListener('click', openMobileMenu);
  menuClose?.addEventListener('click', closeMobileMenu);

  // Close menu when clicking a link
  mobileMenuLinks?.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close menu with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu?.classList.contains('mobile-menu--open')) {
      closeMobileMenu();
    }
  });

  // Close menu when clicking outside
  mobileMenu?.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      closeMobileMenu();
    }
  });

  // ==========================================================================
  // Smooth Scroll
  // ==========================================================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#"
      if (href === '#') return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const navbarHeight = navbar?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL without jumping
        history.pushState(null, null, href);
      }
    });
  });

  // ==========================================================================
  // Navbar Scroll Effect
  // ==========================================================================

  let lastScrollY = 0;
  let ticking = false;

  function updateNavbar() {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      navbar?.classList.add('navbar--scrolled');
    } else {
      navbar?.classList.remove('navbar--scrolled');
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }, { passive: true });

  // Initial check
  updateNavbar();

  // ==========================================================================
  // Scroll Animations (Intersection Observer)
  // ==========================================================================

  const animatedElements = document.querySelectorAll('.fade-up, .stagger-children');

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once animated, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    animatedElements.forEach(el => el.classList.add('visible'));
  }

  // ==========================================================================
  // Utility: Debounce function
  // ==========================================================================

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ==========================================================================
  // Handle window resize
  // ==========================================================================

  const handleResize = debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768 && mobileMenu?.classList.contains('mobile-menu--open')) {
      closeMobileMenu();
    }
  }, 250);

  window.addEventListener('resize', handleResize, { passive: true });

  // ==========================================================================
  // Initialize
  // ==========================================================================

  // Initialize language system
  initLanguage();

  // ==========================================================================
  // Console welcome message
  // ==========================================================================

  console.log(
    '%c☕ Cafecito Tech',
    'font-size: 24px; font-weight: bold; color: #33FF33; background: #1A2A1A; padding: 10px 20px; border-radius: 8px;'
  );
  console.log(
    '%cEl primer networking de tecnología para latinos en Charlotte.\n' +
    'The first tech networking for Latinos in Charlotte.\n\n' +
    '¿Interesado en colaborar? → hola@linkfoundation.io',
    'font-size: 12px; color: #8B7355;'
  );

})();
