const TRANSLATIONS = {
  ar: {
    dir: "rtl",
    lang: "ar",
    siteName: "كاتب مراكش",
    tagline: "كاتبك العمومي الموثوق في مراكش",
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      blog: "المدونة",
      testimonials: "آراء العملاء",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا"
    },
    hero: {
      title: "كاتبك العمومي في مراكش",
      subtitle: "خدمات كتابة احترافية للوثائق الإدارية، الشكايات، الطلبات، السيرة الذاتية والترجمة",
      cta: "تواصل عبر واتساب الآن",
      cta2: "اكتشف خدماتنا"
    },
    whatsapp: {
      floating: "واتساب",
      cta: "تواصل عبر واتساب",
      message: "مرحبا، أريد الاستفسار عن خدماتكم"
    },
    services: {
      title: "خدماتنا",
      subtitle: "نقدم طيفاً واسعاً من خدمات الكتابة الإدارية والقانونية الاحترافية",
      list: [
        { icon: "📄", title: "كتابة الشكايات", desc: "نكتب شكايتك بصياغة قانونية احترافية موجهة للجهات المختصة" },
        { icon: "📝", title: "كتابة الطلبات", desc: "طلبات خطية رسمية لكافة المصالح الإدارية والمؤسسات" },
        { icon: "✍️", title: "كتابة المقالات", desc: "مقالات أكاديمية وصحفية بأسلوب احترافي ومميز" },
        { icon: "👤", title: "السيرة الذاتية CV", desc: "سيرة ذاتية احترافية تبرز كفاءاتك وتزيد فرص القبول" },
        { icon: "🌐", title: "الترجمة", desc: "ترجمة الوثائق من وإلى العربية والفرنسية والإسبانية والإنجليزية" },
        { icon: "📃", title: "العقود", desc: "صياغة وتحرير العقود التجارية والإيجارية بدقة قانونية" },
        { icon: "🏛️", title: "الرسائل الإدارية", desc: "مراسلات رسمية احترافية مع الجهات الحكومية والخاصة" },
        { icon: "✈️", title: "طلبات التأشيرة", desc: "تحرير ملفات طلب التأشيرة وخطابات الدعوة والتغطية" },
        { icon: "💼", title: "طلبات العمل", desc: "رسائل تحفيزية وطلبات توظيف تزيد فرصك في الحصول على الوظيفة" },
        { icon: "📋", title: "المساعدة الإدارية", desc: "مساعدة في فهم وإتمام الإجراءات الإدارية المعقدة" },
        { icon: "🔍", title: "تصحيح الوثائق", desc: "مراجعة وتصحيح الأخطاء الإملائية والنحوية في وثائقك" },
        { icon: "📊", title: "تعبئة الاستمارات", desc: "مساعدة في تعبئة الاستمارات الرسمية والإدارية بشكل صحيح" }
      ]
    },
    testimonials: {
      title: "آراء عملائنا",
      subtitle: "ثقة آلاف العملاء في مراكش والمغرب",
      list: [
        { name: "فاطمة أزروال", city: "مراكش", text: "خدمة ممتازة وسريعة، ساعدني في كتابة شكايتي وحصلت على حقي. أنصح به بشدة.", rating: 5 },
        { name: "محمد البوعناني", city: "مراكش", text: "أنجز لي سيرتي الذاتية باحترافية عالية وحصلت على وظيفة في أقل من شهر!", rating: 5 },
        { name: "خديجة الإدريسي", city: "مراكش", text: "ترجمة دقيقة وسريعة لوثائقي الفرنسية. سعر معقول وخدمة رائعة.", rating: 5 },
        { name: "يوسف المنصوري", city: "مراكش", text: "ساعدني في كتابة طلب التأشيرة وتنظيم الملف كاملاً. شكراً جزيلاً.", rating: 5 },
        { name: "آمنة الحسني", city: "مراكش", text: "كتب لي عقد الإيجار بصياغة قانونية محكمة. أنصح به لكل أهل مراكش.", rating: 5 },
        { name: "عبد الرحيم الزياني", city: "مراكش", text: "مهني جداً ومتفانٍ في عمله. ساعدني في جميع أوراقي الإدارية.", rating: 5 }
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات على أكثر الأسئلة شيوعاً حول خدماتنا",
      list: [
        { q: "ما هي خدمات الكاتب العمومي؟", a: "الكاتب العمومي متخصص في تحرير الوثائق الرسمية والإدارية كالشكايات والطلبات والعقود والسيرة الذاتية والترجمة وجميع المراسلات الرسمية." },
        { q: "كم تكلف الخدمات؟", a: "تتفاوت الأسعار حسب نوع الخدمة وتعقيدها. تواصل معنا عبر واتساب للحصول على سعر فوري ومجاني." },
        { q: "ما هي مدة إنجاز الطلب؟", a: "تنجز معظم الطلبات البسيطة في نفس اليوم. الوثائق المعقدة قد تستغرق يوماً أو يومين حسب الحجم." },
        { q: "هل تقدمون خدمة الترجمة المعتمدة؟", a: "نقدم ترجمة احترافية للوثائق من وإلى العربية والفرنسية والإسبانية والإنجليزية." },
        { q: "هل يمكن إرسال الوثائق عن بُعد؟", a: "نعم، يمكنك إرسال وثائقك عبر واتساب أو البريد الإلكتروني وسنرسل لك النتيجة عبر نفس القناة." },
        { q: "هل تحافظون على سرية المعلومات؟", a: "نعم، نلتزم بالسرية التامة لجميع المعلومات والوثائق التي يقدمها العملاء." },
        { q: "هل تساعدون في طلبات التأشيرة؟", a: "نعم، نساعدك في كتابة خطاب التغطية، تنظيم الملف، وترجمة الوثائق المطلوبة لأي سفارة." },
        { q: "ما هي لغات العمل لديكم؟", a: "نعمل باللغات الأربع: العربية والفرنسية والإسبانية والإنجليزية." }
      ]
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "نحن هنا لمساعدتك في جميع احتياجاتك الكتابية",
      whatsapp: "تواصل عبر واتساب",
      email: "راسلنا بالبريد",
      address: "مراكش، المغرب",
      hours: "من الإثنين إلى السبت: 9 صباحاً – 7 مساءً",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        service: "نوع الخدمة",
        message: "رسالتك",
        send: "إرسال الرسالة"
      }
    },
    footer: {
      rights: "جميع الحقوق محفوظة",
      privacy: "سياسة الخصوصية"
    }
  },
  fr: {
    dir: "ltr",
    lang: "fr",
    siteName: "Katib Marrakech",
    tagline: "Votre Écrivain Public de Confiance à Marrakech",
    nav: {
      home: "Accueil",
      services: "Services",
      blog: "Blog",
      testimonials: "Témoignages",
      faq: "FAQ",
      contact: "Contact"
    },
    hero: {
      title: "Écrivain Public à Marrakech",
      subtitle: "Services professionnels de rédaction administrative, plaintes, demandes, CV et traduction",
      cta: "Contacter via WhatsApp",
      cta2: "Voir nos services"
    },
    whatsapp: {
      floating: "WhatsApp",
      cta: "Contacter via WhatsApp",
      message: "Bonjour, je souhaite renseignements sur vos services"
    },
    services: {
      title: "Nos Services",
      subtitle: "Une gamme complète de services de rédaction administrative et juridique",
      list: [
        { icon: "📄", title: "Rédaction de plaintes", desc: "Nous rédigeons votre plainte avec une formulation juridique professionnelle" },
        { icon: "📝", title: "Rédaction de demandes", desc: "Demandes formelles pour toutes les administrations et institutions" },
        { icon: "✍️", title: "Rédaction d'articles", desc: "Articles académiques et journalistiques de style professionnel" },
        { icon: "👤", title: "CV professionnel", desc: "Un CV professionnel qui met en valeur vos compétences" },
        { icon: "🌐", title: "Traduction", desc: "Traduction de documents vers et depuis l'arabe, français, espagnol et anglais" },
        { icon: "📃", title: "Contrats", desc: "Rédaction et édition de contrats commerciaux et de location" },
        { icon: "🏛️", title: "Courrier administratif", desc: "Correspondances officielles avec les administrations" },
        { icon: "✈️", title: "Demandes de visa", desc: "Rédaction de dossiers de demande de visa et lettres d'invitation" },
        { icon: "💼", title: "Lettres de motivation", desc: "Lettres de motivation qui augmentent vos chances d'embauche" },
        { icon: "📋", title: "Aide administrative", desc: "Aide à la compréhension et l'accomplissement des démarches administratives" },
        { icon: "🔍", title: "Correction de documents", desc: "Révision et correction des fautes orthographiques et grammaticales" },
        { icon: "📊", title: "Remplissage de formulaires", desc: "Aide au remplissage correct de formulaires officiels" }
      ]
    },
    testimonials: {
      title: "Témoignages Clients",
      subtitle: "La confiance de milliers de clients à Marrakech et au Maroc",
      list: [
        { name: "Fatima Azrouwal", city: "Marrakech", text: "Service excellent et rapide, il m'a aidée à rédiger ma plainte et j'ai obtenu gain de cause.", rating: 5 },
        { name: "Mohammed Bouanani", city: "Marrakech", text: "Il a réalisé mon CV avec un grand professionnalisme et j'ai trouvé un emploi en moins d'un mois!", rating: 5 },
        { name: "Khadija Idrissi", city: "Marrakech", text: "Traduction précise et rapide de mes documents français. Prix raisonnable et excellent service.", rating: 5 },
        { name: "Youssef Mansouri", city: "Marrakech", text: "Il m'a aidé à rédiger la demande de visa et organiser le dossier complet. Merci beaucoup.", rating: 5 },
        { name: "Amina Hassani", city: "Marrakech", text: "Il a rédigé mon contrat de location avec une formulation juridique solide. Je le recommande.", rating: 5 },
        { name: "Abderahim Ziyani", city: "Marrakech", text: "Très professionnel et dévoué. Il m'a aidé avec tous mes papiers administratifs.", rating: 5 }
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Réponses aux questions les plus courantes sur nos services",
      list: [
        { q: "Quels sont les services d'un écrivain public?", a: "L'écrivain public est spécialisé dans la rédaction de documents officiels et administratifs: plaintes, demandes, contrats, CV, traductions et toute correspondance officielle." },
        { q: "Combien coûtent les services?", a: "Les prix varient selon le type et la complexité du service. Contactez-nous via WhatsApp pour un devis gratuit et immédiat." },
        { q: "Quel est le délai d'exécution?", a: "La plupart des demandes simples sont traitées le jour même. Les documents complexes peuvent prendre un à deux jours." },
        { q: "Proposez-vous des traductions certifiées?", a: "Nous proposons des traductions professionnelles vers et depuis l'arabe, le français, l'espagnol et l'anglais." },
        { q: "Peut-on envoyer les documents à distance?", a: "Oui, vous pouvez envoyer vos documents via WhatsApp ou email et nous vous enverrons le résultat par le même canal." },
        { q: "Garantissez-vous la confidentialité?", a: "Oui, nous respectons la confidentialité totale de toutes les informations et documents fournis par les clients." },
        { q: "Aidez-vous pour les demandes de visa?", a: "Oui, nous vous aidons à rédiger la lettre de couverture, organiser le dossier et traduire les documents requis." },
        { q: "Quelles langues maîtrisez-vous?", a: "Nous travaillons en quatre langues: arabe, français, espagnol et anglais." }
      ]
    },
    contact: {
      title: "Contactez-Nous",
      subtitle: "Nous sommes là pour vous aider dans tous vos besoins de rédaction",
      whatsapp: "Contacter via WhatsApp",
      email: "Nous écrire par email",
      address: "Marrakech, Maroc",
      hours: "Lundi au Samedi: 9h – 19h",
      form: {
        name: "Nom complet",
        email: "Email",
        service: "Type de service",
        message: "Votre message",
        send: "Envoyer le message"
      }
    },
    footer: {
      rights: "Tous droits réservés",
      privacy: "Politique de confidentialité"
    }
  },
  en: {
    dir: "ltr",
    lang: "en",
    siteName: "Katib Marrakech",
    tagline: "Your Trusted Public Writer in Marrakech",
    nav: {
      home: "Home",
      services: "Services",
      blog: "Blog",
      testimonials: "Reviews",
      faq: "FAQ",
      contact: "Contact"
    },
    hero: {
      title: "Public Writer in Marrakech",
      subtitle: "Professional document writing, complaints, applications, CV and translation services",
      cta: "Contact via WhatsApp",
      cta2: "Explore Services"
    },
    whatsapp: {
      floating: "WhatsApp",
      cta: "Contact via WhatsApp",
      message: "Hello, I'd like to inquire about your services"
    },
    services: {
      title: "Our Services",
      subtitle: "A complete range of professional administrative and legal writing services",
      list: [
        { icon: "📄", title: "Complaint Writing", desc: "We write your complaint with professional legal phrasing directed to the relevant authorities" },
        { icon: "📝", title: "Application Writing", desc: "Formal written applications for all administrative departments and institutions" },
        { icon: "✍️", title: "Article Writing", desc: "Academic and journalistic articles in a professional and distinctive style" },
        { icon: "👤", title: "Professional CV", desc: "A professional CV that highlights your competencies and increases acceptance chances" },
        { icon: "🌐", title: "Translation", desc: "Document translation to and from Arabic, French, Spanish and English" },
        { icon: "📃", title: "Contracts", desc: "Drafting and editing commercial and rental contracts with legal precision" },
        { icon: "🏛️", title: "Administrative Letters", desc: "Professional official correspondence with government and private entities" },
        { icon: "✈️", title: "Visa Applications", desc: "Drafting visa application files, invitation letters and cover letters" },
        { icon: "💼", title: "Job Applications", desc: "Motivation letters and job applications that increase your hiring chances" },
        { icon: "📋", title: "Administrative Assistance", desc: "Help understanding and completing complex administrative procedures" },
        { icon: "🔍", title: "Document Proofreading", desc: "Review and correction of spelling and grammar errors in your documents" },
        { icon: "📊", title: "Form Filling", desc: "Assistance filling in official and administrative forms correctly" }
      ]
    },
    testimonials: {
      title: "Client Reviews",
      subtitle: "Trusted by thousands of clients in Marrakech and Morocco",
      list: [
        { name: "Fatima Azrouwal", city: "Marrakech", text: "Excellent and fast service, helped me write my complaint and I got my rights back. Highly recommend.", rating: 5 },
        { name: "Mohammed Bouanani", city: "Marrakech", text: "He wrote my CV with high professionalism and I got a job in less than a month!", rating: 5 },
        { name: "Khadija Idrissi", city: "Marrakech", text: "Accurate and fast translation of my French documents. Reasonable price and great service.", rating: 5 },
        { name: "Youssef Mansouri", city: "Marrakech", text: "Helped me write the visa application and organize the complete file. Many thanks.", rating: 5 },
        { name: "Amina Hassani", city: "Marrakech", text: "He wrote my rental contract with solid legal wording. Recommend to everyone in Marrakech.", rating: 5 },
        { name: "Abderahim Ziyani", city: "Marrakech", text: "Very professional and dedicated. Helped me with all my administrative paperwork.", rating: 5 }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to the most common questions about our services",
      list: [
        { q: "What services does a public writer offer?", a: "A public writer specializes in drafting official and administrative documents: complaints, applications, contracts, CVs, translations and all official correspondence." },
        { q: "How much do the services cost?", a: "Prices vary depending on the type and complexity of the service. Contact us via WhatsApp for a free immediate quote." },
        { q: "How long does it take to complete a request?", a: "Most simple requests are completed the same day. Complex documents may take one or two days depending on volume." },
        { q: "Do you offer certified translations?", a: "We offer professional translations to and from Arabic, French, Spanish and English." },
        { q: "Can documents be sent remotely?", a: "Yes, you can send your documents via WhatsApp or email and we will send you the result through the same channel." },
        { q: "Do you maintain confidentiality?", a: "Yes, we maintain complete confidentiality of all information and documents provided by clients." },
        { q: "Do you help with visa applications?", a: "Yes, we help you write the cover letter, organize the file, and translate required documents for any embassy." },
        { q: "What languages do you work in?", a: "We work in four languages: Arabic, French, Spanish and English." }
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "We are here to help you with all your writing needs",
      whatsapp: "Contact via WhatsApp",
      email: "Email Us",
      address: "Marrakech, Morocco",
      hours: "Monday to Saturday: 9am – 7pm",
      form: {
        name: "Full Name",
        email: "Email",
        service: "Service Type",
        message: "Your message",
        send: "Send Message"
      }
    },
    footer: {
      rights: "All rights reserved",
      privacy: "Privacy Policy"
    }
  },
  es: {
    dir: "ltr",
    lang: "es",
    siteName: "Katib Marrakech",
    tagline: "Su Escritor Público de Confianza en Marrakech",
    nav: {
      home: "Inicio",
      services: "Servicios",
      blog: "Blog",
      testimonials: "Opiniones",
      faq: "Preguntas",
      contact: "Contacto"
    },
    hero: {
      title: "Escritor Público en Marrakech",
      subtitle: "Servicios profesionales de redacción administrativa, quejas, solicitudes, CV y traducción",
      cta: "Contactar por WhatsApp",
      cta2: "Ver nuestros servicios"
    },
    whatsapp: {
      floating: "WhatsApp",
      cta: "Contactar por WhatsApp",
      message: "Hola, me gustaría información sobre sus servicios"
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Una gama completa de servicios profesionales de redacción administrativa y legal",
      list: [
        { icon: "📄", title: "Redacción de quejas", desc: "Redactamos su queja con formulación jurídica profesional" },
        { icon: "📝", title: "Redacción de solicitudes", desc: "Solicitudes formales para todas las administraciones e instituciones" },
        { icon: "✍️", title: "Redacción de artículos", desc: "Artículos académicos y periodísticos de estilo profesional" },
        { icon: "👤", title: "CV profesional", desc: "Un CV profesional que destaca sus competencias" },
        { icon: "🌐", title: "Traducción", desc: "Traducción de documentos hacia y desde árabe, francés, español e inglés" },
        { icon: "📃", title: "Contratos", desc: "Redacción y edición de contratos comerciales y de alquiler" },
        { icon: "🏛️", title: "Cartas administrativas", desc: "Correspondencia oficial profesional con entidades gubernamentales" },
        { icon: "✈️", title: "Solicitudes de visado", desc: "Redacción de expedientes de solicitud de visado y cartas de invitación" },
        { icon: "💼", title: "Solicitudes de empleo", desc: "Cartas de motivación y solicitudes de empleo que aumentan sus posibilidades" },
        { icon: "📋", title: "Asistencia administrativa", desc: "Ayuda para comprender y completar trámites administrativos complejos" },
        { icon: "🔍", title: "Corrección de documentos", desc: "Revisión y corrección de errores ortográficos y gramaticales" },
        { icon: "📊", title: "Relleno de formularios", desc: "Asistencia para rellenar correctamente formularios oficiales" }
      ]
    },
    testimonials: {
      title: "Opiniones de Clientes",
      subtitle: "La confianza de miles de clientes en Marrakech y Marruecos",
      list: [
        { name: "Fatima Azrouwal", city: "Marrakech", text: "Servicio excelente y rápido, me ayudó a redactar mi queja y obtuve mis derechos. Lo recomiendo.", rating: 5 },
        { name: "Mohammed Bouanani", city: "Marrakech", text: "Hizo mi CV con gran profesionalismo y encontré trabajo en menos de un mes!", rating: 5 },
        { name: "Khadija Idrissi", city: "Marrakech", text: "Traducción precisa y rápida de mis documentos en francés. Precio razonable.", rating: 5 },
        { name: "Youssef Mansouri", city: "Marrakech", text: "Me ayudó a redactar la solicitud de visado y organizar el expediente completo.", rating: 5 },
        { name: "Amina Hassani", city: "Marrakech", text: "Redactó mi contrato de alquiler con sólida formulación jurídica. Lo recomiendo.", rating: 5 },
        { name: "Abderahim Ziyani", city: "Marrakech", text: "Muy profesional y dedicado. Me ayudó con todos mis trámites administrativos.", rating: 5 }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Respuestas a las preguntas más comunes sobre nuestros servicios",
      list: [
        { q: "¿Qué servicios ofrece un escritor público?", a: "Un escritor público se especializa en redactar documentos oficiales y administrativos: quejas, solicitudes, contratos, CVs, traducciones y toda correspondencia oficial." },
        { q: "¿Cuánto cuestan los servicios?", a: "Los precios varían según el tipo y complejidad del servicio. Contáctenos por WhatsApp para un presupuesto gratuito e inmediato." },
        { q: "¿Cuánto tiempo tarda completar una solicitud?", a: "La mayoría de solicitudes simples se completan el mismo día. Los documentos complejos pueden tardar uno o dos días." },
        { q: "¿Ofrecen traducciones certificadas?", a: "Ofrecemos traducciones profesionales hacia y desde árabe, francés, español e inglés." },
        { q: "¿Se pueden enviar documentos a distancia?", a: "Sí, puede enviarnos sus documentos por WhatsApp o email y le enviaremos el resultado por el mismo canal." },
        { q: "¿Garantizan la confidencialidad?", a: "Sí, mantenemos total confidencialidad de toda la información y documentos proporcionados por los clientes." },
        { q: "¿Ayudan con solicitudes de visado?", a: "Sí, le ayudamos a redactar la carta de presentación, organizar el expediente y traducir los documentos requeridos." },
        { q: "¿En qué idiomas trabajan?", a: "Trabajamos en cuatro idiomas: árabe, francés, español e inglés." }
      ]
    },
    contact: {
      title: "Contáctenos",
      subtitle: "Estamos aquí para ayudarle con todas sus necesidades de redacción",
      whatsapp: "Contactar por WhatsApp",
      email: "Enviarnos un email",
      address: "Marrakech, Marruecos",
      hours: "Lunes a Sábado: 9h – 19h",
      form: {
        name: "Nombre completo",
        email: "Email",
        service: "Tipo de servicio",
        message: "Su mensaje",
        send: "Enviar mensaje"
      }
    },
    footer: {
      rights: "Todos los derechos reservados",
      privacy: "Política de privacidad"
    }
  }
};

// Blog articles database
const BLOG_ARTICLES = {
  ar: [
    { id: "ar-1", slug: "katib-omomi-marrakech", title: "الكاتب العمومي في مراكش: دليلك الشامل", excerpt: "تعرف على دور الكاتب العمومي في مراكش وكيف يمكنه مساعدتك في جميع إجراءاتك الإدارية.", category: "عام", date: "2025-01-15", readTime: "5 دقائق" },
    { id: "ar-2", slug: "kitabat-shakawa-marrakech", title: "كيف تكتب شكاية فعّالة في المغرب", excerpt: "دليل خطوة بخطوة لكتابة شكاية قانونية ناجحة موجهة للجهات المختصة في المغرب.", category: "شكايات", date: "2025-01-20", readTime: "7 دقائق" },
    { id: "ar-3", slug: "cv-احترافي-مراكش", title: "كيف تكتب سيرة ذاتية احترافية تفتح لك الأبواب", excerpt: "نصائح ذهبية لكتابة CV يجذب أصحاب العمل ويزيد فرصك في الحصول على وظيفة أحلامك.", category: "سيرة ذاتية", date: "2025-01-25", readTime: "6 دقائق" },
    { id: "ar-4", slug: "tarjama-wathaiq-marrakech", title: "خدمة الترجمة الاحترافية في مراكش", excerpt: "أهمية الترجمة الدقيقة للوثائق الرسمية وكيف تختار مترجماً موثوقاً في مراكش.", category: "ترجمة", date: "2025-02-01", readTime: "4 دقائق" },
    { id: "ar-5", slug: "uqood-eijaria-marrakech", title: "أهمية العقود المكتوبة في المعاملات اليومية", excerpt: "لماذا تحتاج إلى عقد مكتوب محكم الصياغة وكيف يحميك من النزاعات القانونية.", category: "عقود", date: "2025-02-05", readTime: "5 دقائق" },
    { id: "ar-6", slug: "talabat-tashira-daleel", title: "دليل تقديم طلب التأشيرة: الأوراق والإجراءات", excerpt: "كل ما تحتاج معرفته لتقديم طلب تأشيرة ناجح: الوثائق المطلوبة وكيفية ترتيب الملف.", category: "تأشيرة", date: "2025-02-10", readTime: "8 دقائق" },
    { id: "ar-7", slug: "rasail-idariya-rasmi", title: "فن كتابة الرسائل الإدارية الرسمية", excerpt: "قواعد وأساليب كتابة المراسلات الرسمية مع الجهات الحكومية والإدارية في المغرب.", category: "رسائل", date: "2025-02-15", readTime: "6 دقائق" },
    { id: "ar-8", slug: "talabat-amal-marrakech", title: "كيف تكتب طلب عمل احترافي يُقبل فوراً", excerpt: "عناصر طلب التوظيف المثالي ورسالة التحفيز التي تجعلك تتميز عن باقي المتقدمين.", category: "عمل", date: "2025-02-20", readTime: "7 دقائق" },
    { id: "ar-9", slug: "mosaada-idariya-marrakech", title: "المساعدة الإدارية للمواطنين في مراكش", excerpt: "خدمات الكاتب العمومي في مراعاة المواطنين لإتمام إجراءاتهم الإدارية بسهولة.", category: "إداري", date: "2025-02-25", readTime: "5 دقائق" },
    { id: "ar-10", slug: "tashih-wathaiq-marrakech", title: "أهمية تصحيح الوثائق قبل تقديمها", excerpt: "لماذا تحتاج إلى مراجعة وثائقك قبل تقديمها وما الفرق الذي يصنعه التدقيق اللغوي.", category: "تصحيح", date: "2025-03-01", readTime: "4 دقائق" },
    { id: "ar-11", slug: "katib-omomi-khedmat", title: "خدمات الكاتب العمومي: ما لا تعرفه", excerpt: "خدمات مخفية يقدمها الكاتب العمومي كثيرون لا يعلمون عنها ويمكنها توفير وقتك ومالك.", category: "عام", date: "2025-03-05", readTime: "5 دقائق" },
    { id: "ar-12", slug: "istimarat-rasmi-marrakech", title: "كيف تملأ الاستمارات الرسمية بشكل صحيح", excerpt: "أخطاء شائعة في تعبئة الاستمارات الإدارية وكيف تتجنبها لتسريع معاملاتك.", category: "استمارات", date: "2025-03-10", readTime: "6 دقائق" },
    { id: "ar-13", slug: "hoquq-moustahlik-marrakech", title: "حقوق المستهلك في المغرب وكيف تطالب بها", excerpt: "دليل شامل لحقوق المستهلك المغربي وطرق تقديم الشكاوى والمطالبة بالحقوق.", category: "شكايات", date: "2025-03-15", readTime: "7 دقائق" },
    { id: "ar-14", slug: "tarjama-wathaiq-rasmi", title: "ترجمة الوثائق الرسمية: متى وكيف؟", excerpt: "متى تحتاج لترجمة وثائقك الرسمية وما هي الجهات التي تطلب وثائق مترجمة.", category: "ترجمة", date: "2025-03-20", readTime: "5 دقائق" },
    { id: "ar-15", slug: "uqood-tijariya-marrakech", title: "العقود التجارية: حماية أعمالك في مراكش", excerpt: "أهمية العقود التجارية المحكمة لحماية أعمالك وحقوقك في حال النزاعات.", category: "عقود", date: "2025-03-25", readTime: "6 دقائق" },
    { id: "ar-16", slug: "katib-qarbi-marrakech", title: "ابحث عن كاتب عمومي قريب منك في مراكش", excerpt: "كيف تجد كاتباً عمومياً موثوقاً في حيك أو منطقتك بمراكش وما الذي تبحث عنه.", category: "عام", date: "2025-04-01", readTime: "4 دقائق" },
    { id: "ar-17", slug: "khedmat-kataba-marakech", title: "خدمات الكتابة الإدارية في مراكش: مقارنة شاملة", excerpt: "مقارنة بين خيارات الحصول على خدمات الكتابة الإدارية في مراكش واختيار الأفضل.", category: "عام", date: "2025-04-05", readTime: "5 دقائق" },
    { id: "ar-18", slug: "wasaiq-tashrihiya-marrakech", title: "الوثائق اللازمة للإجراءات الإدارية في المغرب", excerpt: "قائمة شاملة بالوثائق المطلوبة للإجراءات الإدارية الشائعة في المغرب.", category: "إداري", date: "2025-04-10", readTime: "6 دقائق" },
    { id: "ar-19", slug: "shakawa-amal-marrakech", title: "شكاوى العمل: كيف تطالب بحقوقك العمالية", excerpt: "دليل عملي لتقديم شكاوى العمل والمطالبة بحقوقك العمالية في المغرب.", category: "شكايات", date: "2025-04-15", readTime: "7 دقائق" },
    { id: "ar-20", slug: "muqaddima-sira-zatiya", title: "كيف تكتب مقدمة سيرة ذاتية جذابة", excerpt: "أسرار كتابة مقدمة CV تجذب انتباه مدير التوظيف من أول جملة.", category: "سيرة ذاتية", date: "2025-04-20", readTime: "5 دقائق" },
    { id: "ar-21", slug: "roukhsa-tijariya-marrakech", title: "إجراءات الحصول على الرخصة التجارية في مراكش", excerpt: "خطوات استخراج الرخصة التجارية في مراكش والوثائق المطلوبة لذلك.", category: "إداري", date: "2025-04-25", readTime: "6 دقائق" },
    { id: "ar-22", slug: "istimarat-bank-marrakech", title: "مساعدة في تعبئة الاستمارات البنكية", excerpt: "كيف يساعدك الكاتب العمومي في تعبئة الاستمارات البنكية بشكل صحيح وكامل.", category: "استمارات", date: "2025-05-01", readTime: "4 دقائق" },
    { id: "ar-23", slug: "tarjama-fransi-arabi-marrakech", title: "ترجمة من الفرنسية إلى العربية في مراكش", excerpt: "خدمة ترجمة احترافية من الفرنسية إلى العربية للوثائق الإدارية والرسمية.", category: "ترجمة", date: "2025-05-05", readTime: "5 دقائق" },
    { id: "ar-24", slug: "uqood-bay-marrakech", title: "عقود البيع والشراء: حقوقك وواجباتك", excerpt: "ما يجب أن تعرفه عن عقود البيع والشراء وكيف تضمن حقوقك في المعاملات التجارية.", category: "عقود", date: "2025-05-10", readTime: "6 دقائق" },
    { id: "ar-25", slug: "taqarir-marrakech", title: "كتابة التقارير المهنية والإدارية", excerpt: "أسلوب كتابة التقارير المهنية بشكل منظم ومؤثر يعكس الاحترافية.", category: "كتابة", date: "2025-05-15", readTime: "5 دقائق" },
    { id: "ar-26", slug: "shakawa-idari-marrakech", title: "كيف تتعامل مع الشكاوى الإدارية في المغرب", excerpt: "خطوات تقديم شكوى ضد جهة إدارية وكيفية متابعتها حتى الحصول على نتيجة.", category: "شكايات", date: "2025-05-20", readTime: "7 دقائق" },
    { id: "ar-27", slug: "khedmat-omomi-thaqa", title: "ثقافة الكتابة الإدارية في المجتمع المغربي", excerpt: "تاريخ الكتابة الإدارية في المغرب ودور الكاتب العمومي في المجتمع.", category: "ثقافة", date: "2025-05-25", readTime: "4 دقائق" },
    { id: "ar-28", slug: "wasiat-marrakech", title: "كيف تكتب وصية قانونية في المغرب", excerpt: "إجراءات وشروط كتابة الوصية القانونية المعتمدة في القانون المغربي.", category: "قانوني", date: "2025-06-01", readTime: "6 دقائق" },
    { id: "ar-29", slug: "khitta-amal-marrakech", title: "كيف تكتب خطة عمل لمشروعك الخاص", excerpt: "مكونات خطة العمل الناجحة وكيف تكتب خطة عمل جاذبة للمستثمرين.", category: "كتابة", date: "2025-06-05", readTime: "7 دقائق" },
    { id: "ar-30", slug: "risala-tadiya-marrakech", title: "فن كتابة رسالة تعذر واعتذار رسمية", excerpt: "كيف تكتب رسالة اعتذار أو تعذر رسمية للجهات الحكومية أو أصحاب العمل.", category: "رسائل", date: "2025-06-10", readTime: "5 دقائق" },
    { id: "ar-31", slug: "nasih-talaba-marrakech", title: "نصائح للطلاب في كتابة الطلبات الجامعية", excerpt: "كيف تكتب طلب قبول جامعي أو منحة دراسية يتميز ويزيد فرصك.", category: "تعليم", date: "2025-06-15", readTime: "6 دقائق" },
    { id: "ar-32", slug: "iqama-marrakech", title: "أوراق الإقامة: كيف تحضر ملفك", excerpt: "الوثائق المطلوبة لتجديد بطاقة الإقامة وكيف تنظم ملفك بشكل صحيح.", category: "إداري", date: "2025-06-20", readTime: "5 دقائق" },
    { id: "ar-33", slug: "tarjama-hispaniya-marrakech", title: "ترجمة من الإسبانية إلى العربية في مراكش", excerpt: "خدمة ترجمة احترافية من الإسبانية إلى العربية وبالعكس للوثائق الرسمية.", category: "ترجمة", date: "2025-07-01", readTime: "4 دقائق" },
    { id: "ar-34", slug: "uqood-imtiaz-marrakech", title: "عقود الامتياز والوكالة في القانون المغربي", excerpt: "كل ما تحتاج معرفته عن عقود الامتياز والوكالة التجارية في المغرب.", category: "عقود", date: "2025-07-05", readTime: "6 دقائق" },
    { id: "ar-35", slug: "kataba-ihtijajiya-marrakech", title: "كيف تكتب خطاباً احتجاجياً فعّالاً", excerpt: "فن كتابة خطابات الاحتجاج والمطالبة التي تصل إلى الجهة المعنية وتحقق نتيجة.", category: "شكايات", date: "2025-07-10", readTime: "5 دقائق" },
    { id: "ar-36", slug: "sira-zatiya-digital-marrakech", title: "السيرة الذاتية الرقمية: كيف تبرز في عالم التوظيف", excerpt: "كيف تحول سيرتك الذاتية إلى نسخة رقمية جذابة للمنصات الاحترافية.", category: "سيرة ذاتية", date: "2025-07-15", readTime: "6 دقائق" },
    { id: "ar-37", slug: "talabat-munja-marrakech", title: "كيف تكتب طلب منحة دراسية ناجح", excerpt: "عناصر طلب المنحة الدراسية الناجح وكيف تقنع لجنة الانتقاء باختيارك.", category: "تعليم", date: "2025-07-20", readTime: "7 دقائق" },
    { id: "ar-38", slug: "tarjama-inglizi-arabi", title: "ترجمة من الإنجليزية إلى العربية: أهمية الدقة", excerpt: "كيف تؤثر الترجمة الدقيقة للوثائق الإنجليزية على قبولها لدى الجهات الرسمية.", category: "ترجمة", date: "2025-07-25", readTime: "5 دقائق" },
    { id: "ar-39", slug: "istimarat-tahkim-marrakech", title: "أخطاء شائعة في تعبئة الاستمارات الإدارية", excerpt: "أبرز الأخطاء التي يقع فيها الناس عند تعبئة الاستمارات الإدارية وكيف تتجنبها.", category: "استمارات", date: "2025-08-01", readTime: "5 دقائق" },
    { id: "ar-40", slug: "rasail-shakwa-bank", title: "كيف تكتب شكوى للبنك بشكل فعّال", excerpt: "خطوات كتابة شكوى للبنك أو شركة التأمين وكيف تضمن الرد السريع.", category: "شكايات", date: "2025-08-05", readTime: "6 دقائق" },
    { id: "ar-41", slug: "khedmat-kataba-ain-3", title: "خدمات الكاتب العمومي في حي جليز مراكش", excerpt: "استفد من خدمات الكاتب العمومي في أحياء مراكش المختلفة وخاصة حي جليز.", category: "محلي", date: "2025-08-10", readTime: "4 دقائق" },
    { id: "ar-42", slug: "uqood-chirakat-marrakech", title: "عقد الشراكة التجارية: ما يجب أن تعرفه", excerpt: "عناصر عقد الشراكة الناجح وما يجب أن يتضمنه لحماية حقوق الشركاء.", category: "عقود", date: "2025-08-15", readTime: "6 دقائق" },
    { id: "ar-43", slug: "tasrih-ghiyab-marrakech", title: "كيف تحصل على تصريح الغياب الرسمي", excerpt: "الإجراءات الرسمية للحصول على تصريح الغياب وما هي الحالات التي تستوجبه.", category: "إداري", date: "2025-08-20", readTime: "5 دقائق" },
    { id: "ar-44", slug: "rasail-tawsiya-marrakech", title: "كيف تطلب ومتى تحتاج رسالة توصية", excerpt: "متى تحتاج رسالة توصية وكيف تطلبها من مشغلك أو أستاذك بشكل لائق.", category: "رسائل", date: "2025-08-25", readTime: "5 دقائق" },
    { id: "ar-45", slug: "tarjama-wasf-wazifa", title: "ترجمة بطاقة الوصف الوظيفي للمغتربين", excerpt: "كيف تترجم وصفك الوظيفي وشهاداتك للحصول على اعتراف دولي بكفاءاتك.", category: "ترجمة", date: "2025-09-01", readTime: "5 دقائق" },
    { id: "ar-46", slug: "maqal-tadamun-marrakech", title: "مقالات التضامن: كيف تعبر عن موقفك الاجتماعي", excerpt: "فن كتابة المقالات الاجتماعية والتضامنية التي تؤثر في الرأي العام.", category: "كتابة", date: "2025-09-05", readTime: "5 دقائق" },
    { id: "ar-47", slug: "istimarat-dhaman-marrakech", title: "تعبئة استمارات الضمان الاجتماعي في المغرب", excerpt: "دليل تعبئة استمارات الضمان الاجتماعي والتأمين الصحي بالمغرب.", category: "استمارات", date: "2025-09-10", readTime: "6 دقائق" },
    { id: "ar-48", slug: "wasaiq-amlak-marrakech", title: "وثائق الملكية العقارية: ما تحتاج معرفته", excerpt: "الوثائق الضرورية في معاملات الملكية العقارية والتسجيل في المحافظة العقارية.", category: "عقاري", date: "2025-09-15", readTime: "6 دقائق" },
    { id: "ar-49", slug: "khedmat-omomi-moqarin", title: "الكاتب العمومي مقارنة بالمحامي: ما الفرق؟", excerpt: "متى تحتاج لكاتب عمومي ومتى تلجأ لمحامٍ، فهم الفرق يوفر عليك الوقت والمال.", category: "ثقافة", date: "2025-09-20", readTime: "5 دقائق" },
    { id: "ar-50", slug: "mostaqbal-kataba-raqmi", title: "مستقبل الكتابة الإدارية في العصر الرقمي", excerpt: "كيف تتطور خدمات الكاتب العمومي في ظل التحول الرقمي والإدارة الإلكترونية.", category: "ثقافة", date: "2025-09-25", readTime: "5 دقائق" }
  ],
  fr: [
    { id: "fr-1", slug: "ecrivain-public-marrakech", title: "Écrivain public à Marrakech: Tout ce qu'il faut savoir", excerpt: "Guide complet sur les services d'un écrivain public à Marrakech et comment il peut vous aider dans vos démarches administratives.", category: "Général", date: "2025-01-15", readTime: "5 min" },
    { id: "fr-2", slug: "redaction-plainte-maroc", title: "Comment rédiger une plainte efficace au Maroc", excerpt: "Guide étape par étape pour rédiger une plainte juridique réussie au Maroc.", category: "Plaintes", date: "2025-01-22", readTime: "7 min" },
    { id: "fr-3", slug: "cv-professionnel-marrakech", title: "Rédigez un CV professionnel qui décroche des entretiens", excerpt: "Conseils d'or pour créer un CV attractif qui vous distingue des autres candidats.", category: "CV", date: "2025-01-30", readTime: "6 min" },
    { id: "fr-4", slug: "traduction-documents-marrakech", title: "Services de traduction professionnelle à Marrakech", excerpt: "L'importance de la traduction précise des documents officiels et comment choisir un traducteur fiable.", category: "Traduction", date: "2025-02-07", readTime: "5 min" },
    { id: "fr-5", slug: "lettre-motivation-maroc", title: "La lettre de motivation parfaite pour le marché marocain", excerpt: "Comment rédiger une lettre de motivation convaincante adaptée aux employeurs marocains.", category: "Emploi", date: "2025-02-14", readTime: "6 min" },
    { id: "fr-6", slug: "demande-visa-marrakech", title: "Préparer votre dossier de demande de visa: Guide complet", excerpt: "Tout ce qu'il faut savoir pour constituer un dossier de visa solide et éviter les refus.", category: "Visa", date: "2025-02-21", readTime: "8 min" },
    { id: "fr-7", slug: "contrats-location-marrakech", title: "Contrats de location à Marrakech: Protégez vos droits", excerpt: "Comment rédiger un contrat de location béton qui protège à la fois le propriétaire et le locataire.", category: "Contrats", date: "2025-03-01", readTime: "6 min" },
    { id: "fr-8", slug: "courrier-administratif-maroc", title: "Rédiger un courrier administratif en arabe et français", excerpt: "Les règles essentielles pour rédiger des courriers administratifs bilingues au Maroc.", category: "Administratif", date: "2025-03-08", readTime: "5 min" },
    { id: "fr-9", slug: "services-ecrivain-public-maroc", title: "Les services méconnus de l'écrivain public au Maroc", excerpt: "Découvrez tous les services que peut vous rendre un écrivain public et que beaucoup ignorent.", category: "Général", date: "2025-03-15", readTime: "5 min" },
    { id: "fr-10", slug: "traduction-arabe-francais-marrakech", title: "Traduction arabe-français à Marrakech: Qualité et rapidité", excerpt: "Service de traduction professionnelle arabe-français pour vos documents administratifs.", category: "Traduction", date: "2025-03-22", readTime: "4 min" },
    { id: "fr-11", slug: "formulaires-administratifs-maroc", title: "Aide au remplissage de formulaires administratifs au Maroc", excerpt: "Les erreurs courantes lors du remplissage des formulaires officiels et comment les éviter.", category: "Formulaires", date: "2025-04-01", readTime: "5 min" },
    { id: "fr-12", slug: "dossier-emploi-marrakech", title: "Constituer un dossier de candidature solide à Marrakech", excerpt: "Comment assembler un dossier de candidature complet et professionnel.", category: "Emploi", date: "2025-04-10", readTime: "6 min" },
    { id: "fr-13", slug: "attestations-administratives-maroc", title: "Les attestations administratives au Maroc: Comment les obtenir", excerpt: "Guide pratique pour obtenir les attestations administratives courantes au Maroc.", category: "Administratif", date: "2025-04-18", readTime: "5 min" },
    { id: "fr-14", slug: "correction-documents-marrakech", title: "Correction professionnelle de documents en arabe et français", excerpt: "Pourquoi faire corriger vos documents avant soumission et les avantages d'un œil professionnel.", category: "Correction", date: "2025-04-25", readTime: "4 min" },
    { id: "fr-15", slug: "recours-administratifs-maroc", title: "Les recours administratifs au Maroc: Vos droits", excerpt: "Comment exercer vos droits de recours face aux décisions administratives au Maroc.", category: "Plaintes", date: "2025-05-05", readTime: "7 min" },
    { id: "fr-16", slug: "ecrivain-public-quartier-marrakech", title: "Trouver un écrivain public près de chez vous à Marrakech", excerpt: "Comment trouver un écrivain public fiable dans votre quartier à Marrakech.", category: "Général", date: "2025-05-12", readTime: "4 min" },
    { id: "fr-17", slug: "documents-immobiliers-marrakech", title: "Documents immobiliers à Marrakech: Ce qu'il faut préparer", excerpt: "Les documents nécessaires pour les transactions immobilières à Marrakech.", category: "Immobilier", date: "2025-05-20", readTime: "6 min" },
    { id: "fr-18", slug: "traduction-espagnol-arabe-marrakech", title: "Traduction espagnol-arabe à Marrakech", excerpt: "Service de traduction professionnelle entre l'espagnol et l'arabe pour vos besoins.", category: "Traduction", date: "2025-05-28", readTime: "5 min" },
    { id: "fr-19", slug: "redaction-contrats-commerciaux", title: "Rédaction de contrats commerciaux professionnels", excerpt: "Les éléments essentiels d'un contrat commercial solide qui protège vos intérêts.", category: "Contrats", date: "2025-06-05", readTime: "6 min" },
    { id: "fr-20", slug: "avenir-ecrivain-public-digital", title: "L'avenir de l'écrivain public à l'ère du numérique", excerpt: "Comment les services d'écriture publique évoluent face à la transformation numérique.", category: "Général", date: "2025-06-12", readTime: "5 min" }
  ],
  en: [
    { id: "en-1", slug: "public-writer-marrakech-guide", title: "Public Writer in Marrakech: Complete Guide", excerpt: "Everything you need to know about public writing services in Marrakech and how they can help you.", category: "General", date: "2025-01-15", readTime: "5 min" },
    { id: "en-2", slug: "complaint-writing-morocco", title: "How to Write an Effective Complaint in Morocco", excerpt: "Step-by-step guide to writing a successful legal complaint in Morocco.", category: "Complaints", date: "2025-01-22", readTime: "7 min" },
    { id: "en-3", slug: "professional-cv-marrakech", title: "Write a Professional CV That Gets You Hired", excerpt: "Golden tips for creating an attractive CV that makes you stand out from other candidates.", category: "CV", date: "2025-01-30", readTime: "6 min" },
    { id: "en-4", slug: "document-translation-marrakech", title: "Professional Document Translation Services in Marrakech", excerpt: "The importance of accurate official document translation and how to choose a reliable translator.", category: "Translation", date: "2025-02-07", readTime: "5 min" },
    { id: "en-5", slug: "visa-application-morocco", title: "Visa Application Guide for Morocco: Documents and Process", excerpt: "Everything you need to successfully apply for a visa from Morocco.", category: "Visa", date: "2025-02-14", readTime: "8 min" },
    { id: "en-6", slug: "cover-letter-morocco-jobs", title: "Write a Cover Letter That Gets You Interviews in Morocco", excerpt: "How to write a compelling cover letter tailored to Moroccan employers.", category: "Jobs", date: "2025-02-21", readTime: "6 min" },
    { id: "en-7", slug: "rental-contracts-marrakech", title: "Rental Contracts in Marrakech: Protect Your Rights", excerpt: "How to draft a solid rental contract protecting both landlord and tenant in Marrakech.", category: "Contracts", date: "2025-03-01", readTime: "6 min" },
    { id: "en-8", slug: "administrative-letters-morocco", title: "Writing Administrative Letters in Morocco: The Rules", excerpt: "Essential rules for writing effective administrative correspondence in Morocco.", category: "Administrative", date: "2025-03-08", readTime: "5 min" },
    { id: "en-9", slug: "public-writer-services-morocco", title: "Hidden Services of a Public Writer in Morocco", excerpt: "Discover all the services a public writer can offer that many people don't know about.", category: "General", date: "2025-03-15", readTime: "5 min" },
    { id: "en-10", slug: "arabic-french-translation-marrakech", title: "Arabic-French Translation in Marrakech: Quality and Speed", excerpt: "Professional Arabic-French translation service for your administrative documents.", category: "Translation", date: "2025-03-22", readTime: "4 min" },
    { id: "en-11", slug: "form-filling-help-morocco", title: "Help Filling Official Forms in Morocco", excerpt: "Common mistakes when filling administrative forms and how to avoid them.", category: "Forms", date: "2025-04-01", readTime: "5 min" },
    { id: "en-12", slug: "job-application-marrakech", title: "Build a Strong Job Application in Marrakech", excerpt: "How to assemble a complete and professional job application package.", category: "Jobs", date: "2025-04-10", readTime: "6 min" },
    { id: "en-13", slug: "administrative-certificates-morocco", title: "Administrative Certificates in Morocco: How to Get Them", excerpt: "Practical guide to obtaining common administrative certificates in Morocco.", category: "Administrative", date: "2025-04-18", readTime: "5 min" },
    { id: "en-14", slug: "document-proofreading-marrakech", title: "Professional Document Proofreading in Arabic and French", excerpt: "Why proofreading your documents before submission matters and the benefits of a professional eye.", category: "Proofreading", date: "2025-04-25", readTime: "4 min" },
    { id: "en-15", slug: "administrative-appeals-morocco", title: "Administrative Appeals in Morocco: Your Rights", excerpt: "How to exercise your right of appeal against administrative decisions in Morocco.", category: "Complaints", date: "2025-05-05", readTime: "7 min" },
    { id: "en-16", slug: "find-public-writer-marrakech", title: "How to Find a Trusted Public Writer in Marrakech", excerpt: "Tips for finding a reliable public writer in your neighborhood in Marrakech.", category: "General", date: "2025-05-12", readTime: "4 min" },
    { id: "en-17", slug: "real-estate-documents-marrakech", title: "Real Estate Documents in Marrakech: What to Prepare", excerpt: "The documents needed for real estate transactions in Marrakech.", category: "Real Estate", date: "2025-05-20", readTime: "6 min" },
    { id: "en-18", slug: "spanish-arabic-translation-marrakech", title: "Spanish-Arabic Translation in Marrakech", excerpt: "Professional translation service between Spanish and Arabic for your needs.", category: "Translation", date: "2025-05-28", readTime: "5 min" },
    { id: "en-19", slug: "commercial-contracts-drafting", title: "Drafting Professional Commercial Contracts in Morocco", excerpt: "Essential elements of a solid commercial contract that protects your interests.", category: "Contracts", date: "2025-06-05", readTime: "6 min" },
    { id: "en-20", slug: "public-writer-digital-era", title: "The Future of Public Writing in the Digital Age", excerpt: "How public writing services are evolving in the face of digital transformation.", category: "General", date: "2025-06-12", readTime: "5 min" }
  ],
  es: [
    { id: "es-1", slug: "escritor-publico-marrakech-guia", title: "Escritor Público en Marrakech: Guía Completa", excerpt: "Todo lo que necesitas saber sobre los servicios de escritura pública en Marrakech.", category: "General", date: "2025-01-15", readTime: "5 min" },
    { id: "es-2", slug: "redaccion-queja-marruecos", title: "Cómo Redactar una Queja Efectiva en Marruecos", excerpt: "Guía paso a paso para redactar una queja jurídica exitosa en Marruecos.", category: "Quejas", date: "2025-01-22", readTime: "7 min" },
    { id: "es-3", slug: "cv-profesional-marrakech", title: "Escribe un CV Profesional que Consiga Entrevistas", excerpt: "Consejos de oro para crear un CV atractivo que te distinga de los demás candidatos.", category: "CV", date: "2025-01-30", readTime: "6 min" },
    { id: "es-4", slug: "traduccion-documentos-marrakech", title: "Servicios de Traducción Profesional en Marrakech", excerpt: "La importancia de la traducción precisa de documentos oficiales.", category: "Traducción", date: "2025-02-07", readTime: "5 min" },
    { id: "es-5", slug: "solicitud-visado-marruecos", title: "Guía de Solicitud de Visado desde Marruecos", excerpt: "Todo lo necesario para solicitar un visado con éxito desde Marruecos.", category: "Visado", date: "2025-02-14", readTime: "8 min" },
    { id: "es-6", slug: "carta-motivacion-marruecos", title: "Carta de Motivación Perfecta para el Mercado Marroquí", excerpt: "Cómo redactar una carta de motivación convincente adaptada a empleadores marroquíes.", category: "Empleo", date: "2025-02-21", readTime: "6 min" },
    { id: "es-7", slug: "contratos-alquiler-marrakech", title: "Contratos de Alquiler en Marrakech: Protege tus Derechos", excerpt: "Cómo redactar un contrato de alquiler sólido que proteja a propietario e inquilino.", category: "Contratos", date: "2025-03-01", readTime: "6 min" },
    { id: "es-8", slug: "cartas-administrativas-marruecos", title: "Redacción de Cartas Administrativas en Marruecos", excerpt: "Reglas esenciales para escribir correspondencia administrativa efectiva.", category: "Administrativo", date: "2025-03-08", readTime: "5 min" },
    { id: "es-9", slug: "servicios-escritor-publico-marruecos", title: "Servicios Desconocidos del Escritor Público en Marruecos", excerpt: "Descubre todos los servicios que puede ofrecerte un escritor público.", category: "General", date: "2025-03-15", readTime: "5 min" },
    { id: "es-10", slug: "traduccion-arabe-espanol-marrakech", title: "Traducción Árabe-Español en Marrakech: Calidad y Rapidez", excerpt: "Servicio de traducción profesional árabe-español para tus documentos administrativos.", category: "Traducción", date: "2025-03-22", readTime: "4 min" },
    { id: "es-11", slug: "rellenar-formularios-marruecos", title: "Ayuda para Rellenar Formularios Oficiales en Marruecos", excerpt: "Errores comunes al rellenar formularios administrativos y cómo evitarlos.", category: "Formularios", date: "2025-04-01", readTime: "5 min" },
    { id: "es-12", slug: "solicitud-empleo-marrakech", title: "Construir una Solicitud de Empleo Sólida en Marrakech", excerpt: "Cómo montar un expediente de candidatura completo y profesional.", category: "Empleo", date: "2025-04-10", readTime: "6 min" },
    { id: "es-13", slug: "certificados-administrativos-marruecos", title: "Certificados Administrativos en Marruecos: Cómo Obtenerlos", excerpt: "Guía práctica para obtener los certificados administrativos comunes.", category: "Administrativo", date: "2025-04-18", readTime: "5 min" },
    { id: "es-14", slug: "correccion-documentos-marrakech", title: "Corrección Profesional de Documentos en Árabe y Francés", excerpt: "Por qué corregir tus documentos antes de presentarlos y los beneficios.", category: "Corrección", date: "2025-04-25", readTime: "4 min" },
    { id: "es-15", slug: "recursos-administrativos-marruecos", title: "Recursos Administrativos en Marruecos: Tus Derechos", excerpt: "Cómo ejercer tu derecho de recurso frente a decisiones administrativas.", category: "Quejas", date: "2025-05-05", readTime: "7 min" },
    { id: "es-16", slug: "encontrar-escritor-publico-marrakech", title: "Cómo Encontrar un Escritor Público de Confianza en Marrakech", excerpt: "Consejos para encontrar un escritor público fiable en tu barrio.", category: "General", date: "2025-05-12", readTime: "4 min" },
    { id: "es-17", slug: "documentos-inmobiliarios-marrakech", title: "Documentos Inmobiliarios en Marrakech: Qué Preparar", excerpt: "Los documentos necesarios para transacciones inmobiliarias en Marrakech.", category: "Inmobiliario", date: "2025-05-20", readTime: "6 min" },
    { id: "es-18", slug: "traduccion-espanol-arabe-marrakech", title: "Traducción Español-Árabe en Marrakech: Servicio Profesional", excerpt: "Servicio de traducción profesional entre español y árabe para tus necesidades.", category: "Traducción", date: "2025-05-28", readTime: "5 min" },
    { id: "es-19", slug: "contratos-comerciales-marruecos", title: "Redacción de Contratos Comerciales Profesionales en Marruecos", excerpt: "Elementos esenciales de un contrato comercial sólido que protege tus intereses.", category: "Contratos", date: "2025-06-05", readTime: "6 min" },
    { id: "es-20", slug: "escritor-publico-era-digital", title: "El Futuro del Escritor Público en la Era Digital", excerpt: "Cómo evolucionan los servicios de escritura pública ante la transformación digital.", category: "General", date: "2025-06-12", readTime: "5 min" }
  ]
};
