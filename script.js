
/* ======================================================
   Vector Dynamics - Universal script
   - Multilanguage: RU/EN/UA/CZ/DE
   - Works for: index.html / test.html / company.html / portfolio.html
   - Animations: reveal + stagger
====================================================== */

const content = {
  ru: {
    /* NAV / BUTTONS */
    companyTopBtn: "Данные компании",
    companyLinkFooter: "Данные компании",
    portfolioTopBtn: "Портфолио",
    backToSite: "← Назад на сайт",

    /* PORTFOLIO PAGE */
    portfolioTitle: "Портфолио",
    portfolioSub: "Реальные фото выполненных работ. Выберите категорию ниже.",
    tabSolar: "Солнечные панели",
    tabFiber: "Оптоволокно и земляные работы",

    /* CONTACT LABELS */
    companyContactsTitle: "Контакты",
    contactEmailLabel: "Email:",
    contactTelCzLabel: "Тел CZ:",
    contactTelDeLabel: "Тел DE:",
    contactEmailLabelFooter: "Email:",
    contactTelCzLabelFooter: "Тел CZ:",
    contactTelDeLabelFooter: "Тел DE:",
    contactTelLtLabel: "Тел LT:",
    contactTelLtLabelFooter: "Тел LT:",

    /* MAIN SITE */
    heroTitle: "Технические, энергетические и инфраструктурные услуги в ЕС",
    heroText:
      "Vector Dynamics s.r.o. — техническо-монтажная компания, специализирующаяся на практической реализации энергетических и инфраструктурных проектов в странах Европейского Союза. Мы работаем как EPC-субподрядчик, обеспечивая точность, дисциплину и стабильное выполнение работ на строительной площадке.",

    solarTitle: "Монтаж солнечных электростанций",
    solarText:
      "Мы выполняем полный комплекс механических монтажных работ для наземных и коммерческих солнечных электростанций. Работаем по проектной документации, в рамках HSE требований, графиков строительства и внутренних стандартов EPC-подрядчиков.",
    solarList: [
      "Монтаж несущих металлических конструкций (ground-mounted / rooftop)",
      "Сборка, выравнивание и фиксация конструкций по инженерным чертежам",
      "Механическая установка и крепление фотомодулей и крепежных систем",
      "Подготовка монтажных рядов и организация рабочих зон",
      "Координация с EPC-подрядчиком и смежными командами на объекте",
      "Контроль качества, соблюдение HSE и требований техники безопасности"
    ],

    stagesTitle: "Этапы выполнения работ",
    stages: [
      ["Подготовка", "Анализ документации, вводный инструктаж, организация площадки, логистика материалов и инструмента."],
      ["Конструкции", "Монтаж несущих систем: установка, выравнивание, фиксация согласно инженерным требованиям и спецификациям."],
      ["Модули", "Установка фотомодулей: позиционирование, выравнивание, финальное крепление и визуальный контроль."],
      ["Контроль", "Постоянный контроль качества, HSE-нагляд, отчетность по прогрессу и оперативная координация."]
    ],

    fiberTitle: "Прокладка оптоволоконной инфраструктуры",
    fiberText:
      "Выполняем земляные и монтажные работы для строительства оптоволоконных трасс в рамках телекоммуникационных и инфраструктурных проектов. Работы ведутся в городских и сельских условиях с соблюдением требований по глубине/ширине траншей и требованиям заказчика.",
    fiberList: [
      "Разработка траншей: механизированная и ручная",
      "Подготовка маршрутов прокладки, организация рабочих зон и техники",
      "Монтаж защитных труб, каналов, гильз, переходов и вводов",
      "Обратная засыпка, трамбовка, восстановление поверхности и благоустройство",
      "Координация с техническим надзором и смежными подрядчиками"
    ],

    /* COMPANY PAGE */
    companyPageTitle: "Данные компании",
    companyPageSub:
      "Официальные реквизиты компании согласно выписке из Торгового реестра (Чешская Республика).",
    companyBlock1: "Основные данные",
    companyBlock2: "Реестр и управление",
    companyBlock3: "Предмет деятельности",

    c_name_k: "Фирма",
    c_address_k: "Адрес",
    c_ico_k: "IČO",
    c_legal_k: "Правовая форма",
    c_date_k: "Дата регистрации",
    c_file_k: "Списьова значка",

    c_court_k: "Реестр",
    c_section_k: "Отдел / Вложка",
    c_capital_k: "Уставный капитал",
    c_directors_k: "Статутарный орган",
    c_action_k: "Способ действия"
  },

  en: {
    companyTopBtn: "Company data",
    companyLinkFooter: "Company data",
    portfolioTopBtn: "Portfolio",
    backToSite: "← Back to website",

    portfolioTitle: "Portfolio",
    portfolioSub: "Real project photos from the field. Select a category below.",
    tabSolar: "Solar Installation",
    tabFiber: "Fiber & Earthworks",

    companyContactsTitle: "Contacts",
    contactEmailLabel: "Email:",
    contactTelCzLabel: "Tel CZ:",
    contactTelDeLabel: "Tel DE:",
    contactEmailLabelFooter: "Email:",
    contactTelCzLabelFooter: "Tel CZ:",
    contactTelDeLabelFooter: "Tel DE:",
    contactTelLtLabel: "Tel LT:",
contactTelLtLabelFooter: "Tel LT:",

    heroTitle: "Technical, Energy and Infrastructure Services in the EU",
    heroText:
      "Vector Dynamics s.r.o. is a technical installation company focused on the physical execution of energy and infrastructure projects across the European Union. We operate as an EPC subcontractor delivering reliable on-site execution, coordination, and safety-controlled workflows.",

    solarTitle: "Solar Power Plant Installation",
    solarText:
      "We provide full-scope mechanical installation works for utility-scale and commercial solar power plants within EPC projects. All works are executed according to drawings, HSE requirements and approved schedules.",
    solarList: [
      "Installation of steel/aluminum mounting structures (ground-mounted / rooftop)",
      "Assembly, alignment and fixing according to engineering drawings",
      "Mechanical installation of PV modules and fastening systems",
      "Preparation of installation rows and work zones",
      "On-site coordination with EPC and adjacent teams",
      "Quality control, reporting and strict safety compliance"
    ],

    stagesTitle: "Work Execution Stages",
    stages: [
      ["Preparation", "Documentation review, safety briefing, site setup and logistics planning."],
      ["Structures", "Mounting system installation: positioning, leveling, fixing as per drawings and specifications."],
      ["Modules", "Mechanical PV module installation: placement, alignment and final fastening with visual control."],
      ["Control", "Continuous quality control, HSE supervision, progress reporting and coordination."]
    ],

    fiberTitle: "Fiber Optic Infrastructure Works",
    fiberText:
      "We perform earthworks and installation works for fiber optic routes within telecom and infrastructure projects. Execution is provided in urban and rural environments under specified trench depth/width requirements.",
    fiberList: [
      "Trenching and excavation works (mechanical and manual)",
      "Route preparation and work zone organization",
      "Installation of protective ducts, sleeves, crossings and entries",
      "Backfilling, compaction and surface restoration after installation",
      "Coordination with engineers, supervision and adjacent contractors"
    ],

    companyPageTitle: "Company data",
    companyPageSub:
      "Official company details according to the extract from the Commercial Register (Czech Republic).",
    companyBlock1: "General information",
    companyBlock2: "Register & Management",
    companyBlock3: "Business activities",

    c_name_k: "Company name",
    c_address_k: "Registered address",
    c_ico_k: "Company ID (IČO)",
    c_legal_k: "Legal form",
    c_date_k: "Date of registration",
    c_file_k: "File number",

    c_court_k: "Register",
    c_section_k: "Section / Entry",
    c_capital_k: "Share capital",
    c_directors_k: "Statutory body",
    c_action_k: "Acting method"
  },

  ua: {
    companyTopBtn: "Дані компанії",
    companyLinkFooter: "Дані компанії",
    portfolioTopBtn: "Портфоліо",
    backToSite: "← Назад на сайт",

    portfolioTitle: "Портфоліо",
    portfolioSub: "Реальні фото виконаних робіт. Оберіть категорію нижче.",
    tabSolar: "Сонячні панелі",
    tabFiber: "Оптоволокно та земляні роботи",

    companyContactsTitle: "Контакти",
    contactEmailLabel: "Email:",
    contactTelCzLabel: "Тел CZ:",
    contactTelDeLabel: "Тел DE:",
    contactEmailLabelFooter: "Email:",
    contactTelCzLabelFooter: "Тел CZ:",
    contactTelDeLabelFooter: "Тел DE:",
    contactTelLtLabel: "Тел LT:",
contactTelLtLabelFooter: "Тел LT:",

    heroTitle: "Технічні, енергетичні та інфраструктурні послуги в ЄС",
    heroText:
      "Vector Dynamics s.r.o. — технічно-монтажна компанія, яка виконує практичну реалізацію енергетичних та інфраструктурних проєктів у країнах Європейського Союзу.",

    solarTitle: "Монтаж сонячних електростанцій",
    solarText:
      "Ми виконуємо повний комплекс механічних монтажних робіт для наземних та комерційних СЕС у рамках EPC-проєктів.",
    solarList: [
      "Монтаж несучих металевих конструкцій (ground-mounted / rooftop)",
      "Збірка, вирівнювання та фіксація конструкцій за кресленнями",
      "Механічне встановлення фотомодулів і кріплень",
      "Підготовка монтажних рядів і робочих зон",
      "Координація з EPC та суміжними командами",
      "Контроль якості та дотримання норм безпеки"
    ],

    stagesTitle: "Етапи виконання робіт",
    stages: [
      ["Підготовка", "Аналіз документації, інструктаж, організація майданчика та логістики."],
      ["Конструкції", "Монтаж несучих систем: позиціонування, вирівнювання, фіксація."],
      ["Модулі", "Монтаж фотомодулів: встановлення, вирівнювання, фінальне кріплення."],
      ["Контроль", "Контроль якості, HSE-нагляд, звітність та координація."]
    ],

    fiberTitle: "Прокладання оптоволоконної інфраструктури",
    fiberText:
      "Виконуємо земляні та монтажні роботи для будівництва оптоволоконних трас у межах телекомунікаційних проєктів.",
    fiberList: [
      "Розробка траншей: механізована та ручна",
      "Підготовка маршрутів прокладки",
      "Монтаж захисних труб, каналів, переходів",
      "Засипка, трамбування та відновлення поверхні",
      "Координація з технічним наглядом та підрядниками"
    ],

    companyPageTitle: "Дані компанії",
    companyPageSub:
      "Офіційні реквізити компанії згідно виписки з Торгового реєстру (Чеська Республіка).",
    companyBlock1: "Основні дані",
    companyBlock2: "Реєстр та управління",
    companyBlock3: "Види діяльності",

    c_name_k: "Компанія",
    c_address_k: "Адреса",
    c_ico_k: "IČO",
    c_legal_k: "Правова форма",
    c_date_k: "Дата реєстрації",
    c_file_k: "Номер справи",

    c_court_k: "Реєстр",
    c_section_k: "Розділ / Запис",
    c_capital_k: "Статутний капітал",
    c_directors_k: "Керівництво",
    c_action_k: "Спосіб представництва"
  },

  cz: {
    companyTopBtn: "Údaje o společnosti",
    companyLinkFooter: "Údaje o společnosti",
    portfolioTopBtn: "Portfolio",
    backToSite: "← Zpět na web",

    portfolioTitle: "Portfolio",
    portfolioSub: "Reálné fotografie z projektů. Vyberte kategorii níže.",
    tabSolar: "Solární montáž",
    tabFiber: "Optika & zemní práce",

    companyContactsTitle: "Kontakt",
    contactEmailLabel: "Email:",
    contactTelCzLabel: "Tel CZ:",
    contactTelDeLabel: "Tel DE:",
    contactEmailLabelFooter: "Email:",
    contactTelCzLabelFooter: "Tel CZ:",
    contactTelDeLabelFooter: "Tel DE:",
    contactTelLtLabel: "Tel LT:",
contactTelLtLabelFooter: "Tel LT:",

    heroTitle: "Technické, energetické a infrastrukturní služby v EU",
    heroText:
      "Vector Dynamics s.r.o. je technicko-montážní společnost zaměřená na fyzickou realizaci energetických a infrastrukturních projektů v Evropské unii.",

    solarTitle: "Montáž solárních elektráren",
    solarText:
      "Provádíme kompletní mechanické montážní práce pro solární elektrárny v rámci EPC projektů.",
    solarList: [
      "Montáž nosných ocelových/hliníkových konstrukcí (ground-mounted / rooftop)",
      "Sestavení, vyrovnání a fixace dle výkresů",
      "Mechanická instalace FV panelů a upevňovacích systémů",
      "Příprava montážních řad a pracovních zón",
      "Koordinace prací s EPC a dalšími týmy",
      "Kontrola kvality, reporting a dodržování bezpečnosti"
    ],

    stagesTitle: "Fáze realizace",
    stages: [
      ["Příprava", "Analýza dokumentace, BOZP instruktáž, organizace staveniště."],
      ["Konstrukce", "Instalace montážních systémů: pozice, vyrovnání, fixace."],
      ["Panely", "Mechanická instalace panelů: umístění, vyrovnání, finální uchycení."],
      ["Kontrola", "Průběžná kontrola kvality, HSE dohled, reporting a koordinace."]
    ],

    fiberTitle: "Optická infrastruktura",
    fiberText:
      "Zajišťujeme zemní práce a instalaci tras optických kabelů.",
    fiberList: [
      "Výkopové práce (strojní i ruční)",
      "Příprava tras a pracovních zón",
      "Instalace chrániček, potrubí, průchodů",
      "Zásyp, hutnění a obnova povrchů",
      "Koordinace s technickým dozorem"
    ],

    companyPageTitle: "Údaje o společnosti",
    companyPageSub:
      "Oficiální údaje společnosti dle výpisu z obchodního rejstříku (Česká republika).",
    companyBlock1: "Základní údaje",
    companyBlock2: "Rejstřík a řízení",
    companyBlock3: "Předmět podnikání",

    c_name_k: "Obchodní firma",
    c_address_k: "Sídlo",
    c_ico_k: "IČO",
    c_legal_k: "Právní forma",
    c_date_k: "Datum vzniku",
    c_file_k: "Spisová značka",

    c_court_k: "Rejstřík",
    c_section_k: "Oddíl / Vložka",
    c_capital_k: "Základní kapitál",
    c_directors_k: "Statutární orgán",
    c_action_k: "Způsob jednání"
  },

  de: {
    companyTopBtn: "Firmendaten",
    companyLinkFooter: "Firmendaten",
    portfolioTopBtn: "Portfolio",
    backToSite: "← Zurück zur Website",

    portfolioTitle: "Portfolio",
    portfolioSub: "Reale Projektfotos von der Baustelle. Bitte wählen Sie unten eine Kategorie.",
    tabSolar: "Solar-Montage",
    tabFiber: "Glasfaser & Tiefbau",

    companyContactsTitle: "Kontakt",
    contactEmailLabel: "E-Mail:",
    contactTelCzLabel: "Tel CZ:",
    contactTelDeLabel: "Tel DE:",
    contactEmailLabelFooter: "E-Mail:",
    contactTelCzLabelFooter: "Tel CZ:",
    contactTelDeLabelFooter: "Tel DE:",
    contactTelLtLabel: "Tel LT:",
contactTelLtLabelFooter: "Tel LT:",

    heroTitle: "Technische, Energie- und Infrastrukturleistungen in der EU",
    heroText:
      "Vector Dynamics s.r.o. ist ein technisches Montageunternehmen, das sich auf die praktische Umsetzung von Energie- und Infrastrukturprojekten innerhalb der Europäischen Union spezialisiert.",

    solarTitle: "Montage von Solarkraftwerken",
    solarText:
      "Wir führen mechanische Montagearbeiten für Freiflächen- und gewerbliche Solaranlagen im Rahmen von EPC-Projekten durch.",
    solarList: [
      "Montage von Stahl-/Alu-Unterkonstruktionen (ground-mounted / rooftop)",
      "Aufbau, Ausrichtung und Befestigung gemäß Montageplänen",
      "Mechanische Installation von PV-Modulen und Befestigungssystemen",
      "Vorbereitung der Montage-Reihen und Arbeitsbereiche",
      "Koordination mit EPC und Nachunternehmern vor Ort",
      "Qualitätskontrolle und Einhaltung der Sicherheitsstandards"
    ],

    stagesTitle: "Ablauf der Ausführung",
    stages: [
      ["Vorbereitung", "Dokumentenprüfung, Sicherheitsunterweisung, Baustelleneinrichtung und Logistik."],
      ["Konstruktion", "Montage der Tragkonstruktion: Positionierung, Nivellierung und Befestigung."],
      ["Module", "Mechanische PV-Montage: Platzierung, Ausrichtung und Endbefestigung."],
      ["Kontrolle", "Laufende Qualitätsprüfung, HSE-Überwachung, Reporting und Koordination."]
    ],

    fiberTitle: "Glasfaser-Infrastruktur",
    fiberText:
      "Wir führen Erdarbeiten und Installationsarbeiten für Glasfasertrassen im Rahmen von Telekommunikations- und Infrastrukturprojekten durch.",
    fiberList: [
      "Aushub/Trenching (maschinell und manuell)",
      "Vorbereitung der Trasse und Organisation der Arbeitsbereiche",
      "Einbau von Schutzrohren, Durchführungen und Querungen",
      "Verfüllung, Verdichtung und Wiederherstellung der Oberfläche",
      "Koordination mit Bauleitung und Aufsicht"
    ],

    companyPageTitle: "Firmendaten",
    companyPageSub:
      "Offizielle Unternehmensdaten gemäß Auszug aus dem Handelsregister (Tschechische Republik).",
    companyBlock1: "Grunddaten",
    companyBlock2: "Register & Geschäftsführung",
    companyBlock3: "Gegenstand der Tätigkeit",

    c_name_k: "Firma",
    c_address_k: "Sitz",
    c_ico_k: "IČO",
    c_legal_k: "Rechtsform",
    c_date_k: "Gründungsdatum",
    c_file_k: "Aktenzeichen",

    c_court_k: "Registergericht",
    c_section_k: "Abteilung / Eintrag",
    c_capital_k: "Stammkapital",
    c_directors_k: "Geschäftsführung",
    c_action_k: "Vertretungsregel"
  }
};

/* ======= Company registry values (stable) ======= */
const COMPANY_VALUES = {
  c_name_v: "Vector Dynamics s.r.o.",
  c_address_v: "K cihelně 294, Satalice, 190 15 Praha 9",
  c_ico_v: "240 86 215",
  c_legal_v: "Společnost s ručením omezeným",
  c_date_v: "18. prosince 2025",
  c_file_v: "C 438583",
  c_court_v: "Městský soud v Praze",
  c_section_v: "oddíl C, vložka 438583",
  c_capital_v: "20 000,- Kč",
  c_directors_v: "2 jednatelé",
  c_action_v: "Každý jednatel zastupuje společnost samostatně",
  companyActivities: [
    "Výroba kovových konstrukcí a kovodělných výrobků",
    "Umělecko-řemeslné zpracování kovů",
    "Povrchové úpravy a svařování kovů a dalších materiálů",
    "Přípravné a dokončovací stavební práce, specializované stavební činnosti",
    "Zprostředkování obchodu a služeb",
    "Velkoobchod a maloobchod",
    "Skladování, balení zboží, manipulace s nákladem a technické činnosti v dopravě",
    "Ubytovací služby",
    "Nákup, prodej, správa a údržba nemovitostí",
    "Poradenská a konzultační činnost, zpracování odborných studií a posudků",
    "Projektování pozemkových úprav",
    "Příprava a vypracování technických návrhů, grafické a kresličské práce",
    "Testování, měření, analýzy a kontroly",
    "Poskytování technických služeb"
  ]
};

/* ================= HELPERS ================= */
function safe(id, value) {
  const el = document.getElementById(id);
  if (!el || value === undefined || value === null) return;
  el.textContent = value;
}

function safeList(id, arr) {
  const el = document.getElementById(id);
  if (!el || !Array.isArray(arr)) return;
  el.innerHTML = arr.map(i => `<li>${i}</li>`).join("");
}

function getLang() {
  return localStorage.getItem("lang") || "ru";
}

/* ================= APPLY LANGUAGE ================= */
function setLang(lang) {
  const d = content[lang] || content.ru;

  // NAV
  safe("contactTelLtLabel", d.contactTelLtLabel);
safe("contactTelLtLabelFooter", d.contactTelLtLabelFooter);
  safe("companyTopBtn", d.companyTopBtn);
  safe("companyLinkFooter", d.companyLinkFooter);
  safe("portfolioTopBtn", d.portfolioTopBtn);
  safe("backToSite", d.backToSite);

  // PORTFOLIO PAGE
  safe("portfolioTitle", d.portfolioTitle);
  safe("portfolioSub", d.portfolioSub);
  safe("tabSolar", d.tabSolar);
  safe("tabFiber", d.tabFiber);

  // CONTACT LABELS
  safe("companyContactsTitle", d.companyContactsTitle);

  safe("contactEmailLabel", d.contactEmailLabel);
  safe("contactTelCzLabel", d.contactTelCzLabel);
  safe("contactTelDeLabel1", d.contactTelDeLabel);
  safe("contactTelDeLabel2", d.contactTelDeLabel);

  safe("contactEmailLabelFooter", d.contactEmailLabelFooter);
  safe("contactTelCzLabelFooter", d.contactTelCzLabelFooter);
  safe("contactTelDeLabelFooter1", d.contactTelDeLabelFooter);
  safe("contactTelDeLabelFooter2", d.contactTelDeLabelFooter);

  // MAIN SITE
  safe("heroTitle", d.heroTitle);
  safe("heroText", d.heroText);

  safe("solarTitle", d.solarTitle);
  safe("solarText", d.solarText);
  safeList("solarList", d.solarList);

  safe("stagesTitle", d.stagesTitle);
  const stagesEl = document.getElementById("stagesList");
  if (stagesEl && Array.isArray(d.stages)) {
    stagesEl.innerHTML = d.stages.map(s => `
      <div class="stage">
        <h4>${s[0]}</h4>
        <p>${s[1]}</p>
      </div>
    `).join("");
  }

  safe("fiberTitle", d.fiberTitle);
  safe("fiberText", d.fiberText);
  safeList("fiberList", d.fiberList);

  // COMPANY PAGE TEXTS
  safe("companyPageTitle", d.companyPageTitle);
  safe("companyPageSub", d.companyPageSub);
  safe("companyBlock1", d.companyBlock1);
  safe("companyBlock2", d.companyBlock2);
  safe("companyBlock3", d.companyBlock3);

  safe("c_name_k", d.c_name_k);
  safe("c_address_k", d.c_address_k);
  safe("c_ico_k", d.c_ico_k);
  safe("c_legal_k", d.c_legal_k);
  safe("c_date_k", d.c_date_k);
  safe("c_file_k", d.c_file_k);

  safe("c_court_k", d.c_court_k);
  safe("c_section_k", d.c_section_k);
  safe("c_capital_k", d.c_capital_k);
  safe("c_directors_k", d.c_directors_k);
  safe("c_action_k", d.c_action_k);

  // COMPANY VALUES
  Object.entries(COMPANY_VALUES).forEach(([key, val]) => {
    if (key === "companyActivities") return;
    safe(key, val);
  });
  safeList("companyActivities", COMPANY_VALUES.companyActivities);

  localStorage.setItem("lang", lang);

  // re-stagger after language change
  requestAnimationFrame(() => {
    document.querySelectorAll(".stagger").forEach(el => el.classList.add("show"));
  });
}

/* ================= REVEAL ================= */
function initReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    document.querySelectorAll(".reveal, .stagger").forEach(el => el.classList.add("show"));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal, .stagger").forEach(el => obs.observe(el));
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
  setLang(getLang());
  initReveal();
});

window.setLang = setLang;

