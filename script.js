/* ================= SAFE DOM SET ================= */
function safe(id, value, isList = false) {
  const el = document.getElementById(id);
  if (!el || value === undefined) return;

  if (isList && Array.isArray(value)) {
    el.innerHTML = value.map(i => `<li>${i}</li>`).join("");
  } else {
    el.textContent = value;
  }
}

/* ================= TRANSLATIONS ================= */
const content = {
  ru:{
    heroTitle:"Технические, энергетические и инфраструктурные услуги в ЕС",
    heroText:"Vector Dynamics s.r.o. — техническо-монтажная компания, специализирующаяся на практической реализации энергетических и инфраструктурных проектов в странах Европейского Союза. Мы работаем как EPC-субподрядчик, обеспечивая точность, дисциплину и стабильное выполнение работ на строительной площадке.",

    solarTitle:"Монтаж солнечных электростанций",
    solarText:"Мы выполняем полный комплекс механических монтажных работ для наземных и коммерческих солнечных электростанций. Работаем по проектной документации, в рамках HSE требований, графиков строительства и внутренних стандартов EPC-подрядчиков.",
    solarList:[
      "Монтаж несущих металлических конструкций (ground-mounted / rooftop)",
      "Сборка, выравнивание и фиксация конструкций по инженерным чертежам",
      "Механическая установка и крепление фотомодулей и крепежных систем",
      "Подготовка монтажных рядов и организация рабочих зон",
      "Координация с EPC-подрядчиком и смежными командами на объекте",
      "Контроль качества, соблюдение HSE и требований техники безопасности"
    ],

    stagesTitle:"Этапы выполнения работ",
    stages:[
      ["Подготовка","Анализ документации, вводный инструктаж, организация площадки, логистика материалов и инструмента."],
      ["Конструкции","Монтаж несущих систем: установка, выравнивание, фиксация согласно инженерным требованиям и спецификациям."],
      ["Модули","Установка фотомодулей: позиционирование, выравнивание, финальное крепление и визуальный контроль."],
      ["Контроль","Постоянный контроль качества, HSE-нагляд, отчетность по прогрессу и оперативная координация."]
    ],

    fiberTitle:"Прокладка оптоволоконной инфраструктуры",
    fiberText:"Выполняем земляные и монтажные работы для строительства оптоволоконных трасс в рамках телекоммуникационных и инфраструктурных проектов. Работы ведутся в городских и сельских условиях с соблюдением требований по глубине/ширине траншей и требованиям заказчика.",
    fiberList:[
      "Разработка траншей: механизированная и ручная",
      "Подготовка маршрутов прокладки, организация рабочих зон и техники",
      "Монтаж защитных труб, каналов, гильз, переходов и вводов",
      "Обратная засыпка, трамбовка, восстановление поверхности и благоустройство",
      "Координация с техническим надзором и смежными подрядчиками"
    ]
  },

  en:{
    heroTitle:"Technical, Energy and Infrastructure Services in the EU",
    heroText:"Vector Dynamics s.r.o. is a technical installation company focused on the physical execution of energy and infrastructure projects across the European Union. We operate as an EPC subcontractor, delivering reliable on-site execution, coordination, and safety-controlled workflows.",

    solarTitle:"Solar Power Plant Installation",
    solarText:"We provide full-scope mechanical installation works for utility-scale and commercial solar power plants within EPC projects. All works are executed according to drawings, HSE requirements, approved schedules and EPC standards.",
    solarList:[
      "Installation of steel/aluminum mounting structures (ground-mounted / rooftop)",
      "Assembly, alignment and fixing according to engineering drawings",
      "Mechanical installation of PV modules and fastening systems",
      "Preparation of installation rows and work zones",
      "On-site coordination with EPC and adjacent teams",
      "Quality control, reporting and strict safety compliance"
    ],

    stagesTitle:"Work Execution Stages",
    stages:[
      ["Preparation","Documentation review, safety briefing, site setup and logistics planning."],
      ["Structures","Mounting system installation: positioning, leveling, fixing as per drawings and specifications."],
      ["Modules","Mechanical PV module installation: placement, alignment and final fastening with visual control."],
      ["Control","Continuous quality control, HSE supervision, progress reporting and coordination."]
    ],

    fiberTitle:"Fiber Optic Infrastructure Works",
    fiberText:"We perform earthworks and installation works for fiber optic routes within telecom and infrastructure projects. Execution is provided in urban and rural environments under specified trench depth/width requirements and client standards.",
    fiberList:[
      "Trenching and excavation works (mechanical and manual)",
      "Route preparation, work zone organization and machinery coordination",
      "Installation of protective ducts, sleeves, crossings and entries",
      "Backfilling, compaction and surface restoration after installation",
      "Coordination with engineers, supervision and adjacent contractors"
    ]
  },

  ua:{
    heroTitle:"Технічні, енергетичні та інфраструктурні послуги в ЄС",
    heroText:"Vector Dynamics s.r.o. — технічно-монтажна компанія, яка виконує практичну реалізацію енергетичних та інфраструктурних проєктів у країнах Європейського Союзу. Ми працюємо як EPC-субпідрядник, забезпечуючи якість, безпеку та виконання робіт у встановлені строки.",

    solarTitle:"Монтаж сонячних електростанцій",
    solarText:"Ми виконуємо повний комплекс механічних монтажних робіт для наземних та комерційних сонячних електростанцій у рамках EPC-проєктів. Дотримуємось проєктної документації, стандартів HSE та затверджених графіків.",
    solarList:[
      "Монтаж несучих металевих конструкцій (ground-mounted / rooftop)",
      "Збірка та вирівнювання систем згідно креслень і специфікацій",
      "Механічне встановлення фотомодулів та кріплень",
      "Підготовка монтажних рядів і організація робочих зон",
      "Координація робіт з EPC та суміжними командами на об’єкті",
      "Контроль якості, звітність та дотримання норм безпеки"
    ],

    stagesTitle:"Етапи виконання робіт",
    stages:[
      ["Підготовка","Аналіз документації, інструктаж, організація майданчика та логістики матеріалів/інструменту."],
      ["Конструкції","Монтаж несучих систем: позиціонування, вирівнювання, фіксація згідно вимог."],
      ["Модулі","Монтаж фотомодулів: встановлення, вирівнювання, фінальне кріплення та візуальний контроль."],
      ["Контроль","Контроль якості, HSE-нагляд, звітність по прогресу та координація робіт."]
    ],

    fiberTitle:"Прокладання оптоволоконної інфраструктури",
    fiberText:"Виконуємо земляні та монтажні роботи для будівництва оптоволоконних трас у межах інфраструктурних і телекомунікаційних проєктів. Роботи проводяться у міських і сільських умовах із дотриманням вимог щодо глибини/ширини траншей.",
    fiberList:[
      "Розробка траншей: механізована та ручна",
      "Підготовка маршрутів прокладки, організація робочих зон і техніки",
      "Монтаж захисних труб, каналів, гільз, переходів та вводів",
      "Засипка, трамбування, відновлення поверхні та благоустрій",
      "Координація з технічним наглядом і суміжними підрядниками"
    ]
  },

  cz:{
    heroTitle:"Technické, energetické a infrastrukturní služby v EU",
    heroText:"Vector Dynamics s.r.o. je technicko-montážní společnost zaměřená na fyzickou realizaci energetických a infrastrukturních projektů v Evropské unii. Působíme jako EPC subdodavatel s důrazem na kvalitu, bezpečnost a dodržení termínů.",

    solarTitle:"Montáž solárních elektráren",
    solarText:"Provádíme kompletní mechanické montážní práce pro solární elektrárny v rámci EPC projektů. Pracujeme dle projektové dokumentace, harmonogramu a bezpečnostních požadavků HSE.",
    solarList:[
      "Montáž nosných ocelových/hliníkových konstrukcí (ground-mounted / rooftop)",
      "Sestavení, vyrovnání a fixace dle výkresů a specifikací",
      "Mechanická instalace FV panelů a upevňovacích systémů",
      "Příprava montážních řad a pracovních zón",
      "Koordinace prací s EPC a dalšími týmy na stavbě",
      "Kontrola kvality, reporting a dodržování bezpečnosti"
    ],

    stagesTitle:"Fáze realizace",
    stages:[
      ["Příprava","Analýza dokumentace, BOZP instruktáž, organizace staveniště a logistika materiálu/nářadí."],
      ["Konstrukce","Instalace montážních systémů: pozice, vyrovnání, fixace dle výkresů."],
      ["Panely","Mechanická instalace panelů: umístění, vyrovnání, finální uchycení a vizuální kontrola."],
      ["Kontrola","Průběžná kontrola kvality, HSE dohled, reporting a koordinace."]
    ],

    fiberTitle:"Optická infrastruktura",
    fiberText:"Zajišťujeme zemní práce a instalaci tras optických kabelů v rámci telekomunikačních a infrastrukturních projektů. Práce probíhají ve městě i na venkově dle požadované hloubky/šířky výkopů a standardů objednatele.",
    fiberList:[
      "Výkopové práce (strojní i ruční)",
      "Příprava tras, organizace pracovních zón a koordinace techniky",
      "Instalace chrániček, potrubí, průchodů a vstupů",
      "Zásyp, hutnění a obnova povrchů po instalaci",
      "Koordinace s technickým dozorem a projektovým týmem"
    ]
  }
};

function setLang(lang){
  const d = content[lang];

  // Text content
  heroTitle.textContent = d.heroTitle;
  heroText.textContent = d.heroText;

  solarTitle.textContent = d.solarTitle;
  solarText.textContent = d.solarText;
  solarList.innerHTML = d.solarList.map(i=>`<li>${i}</li>`).join("");

  stagesTitle.textContent = d.stagesTitle;
  stagesList.innerHTML = d.stages.map(s=>`
    <div class="stage">
      <h4>${s[0]}</h4>
      <p>${s[1]}</p>
    </div>
  `).join("");

  fiberTitle.textContent = d.fiberTitle;
  fiberText.textContent = d.fiberText;
  fiberList.innerHTML = d.fiberList.map(i=>`<li>${i}</li>`).join("");

  localStorage.setItem("lang", lang);

  // re-stagger after updates
  requestAnimationFrame(() => {
    document.querySelectorAll(".stagger").forEach(el => el.classList.add("show"));
  });
}

/* ================== SCROLL REVEAL ================== */
function initReveal(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("show");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal, .stagger").forEach(el => obs.observe(el));
}

document.addEventListener("DOMContentLoaded", ()=>{
  setLang(localStorage.getItem("lang") || "ru");
  initReveal();
});
