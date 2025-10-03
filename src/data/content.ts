export type NavigationItem = {
  id: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type StepIcon =
  | "insights"
  | "design"
  | "build"
  | "care"
  | "logistics"
  | "quality"
  | "support";

export type CallToAction = {
  label: string;
  variant: "primary" | "secondary" | "ghost";
  href?: string;
  targetId?: string;
};

export type HeroContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  stats: Stat[];
  actions: CallToAction[];
};

export type Highlight = {
  title: string;
  description: string;
};

export type Service = {
  title: string;
  description: string;
  points: string[];
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  metrics: ProjectMetric[];
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: StepIcon;
};

export type Assurance = {
  title: string;
  description: string;
};

export type Advisor = {
  name: string;
  role: string;
  phone: string;
  email: string;
};

export type ContactBlock = {
  id: string;
  title: string;
  description: string;
  advisor: Advisor;
};

export type BusinessPageContent = {
  navItems: NavigationItem[];
  hero: HeroContent;
  highlights: Highlight[];
  services: Service[];
  projects: Project[];
  process: ProcessStep[];
  assurance: Assurance[];
  contact: ContactBlock;
};

export const brand = {
  name: "Currus Baldai",
  tagline: "Baldų gamyba ir baldų detalių gamyba verslui ir interjero studijoms",
  contact: {
    phone: "+370 620 12345",
    email: "info@currus.lt",
    address: "Žalgirio g. 88, Vilnius",
    workHours: "I–V 8:00–17:00"
  }
};

export const downloadLink = {
  label: "Atsisiųsti specifikacijos šabloną (Excel)",
  href: "/downloads/currus-specifikacija.xls"
};

export const landingContent = {
  eyebrow: "Du strateginiai keliai",
  title: "Pasirinkite, ko reikia jūsų verslui",
  description:
    "Dirbame su pilna baldų gamyba ir specializuotomis baldų detalėmis. Išsirinkite kryptį, kad parodytume tikslinius pajėgumus, įgyvendintus projektus ir atsakingą kontaktą.",
  options: [
    {
      id: "furniture",
      title: "Baldų gamyba",
      description:
        "Pilnas ciklas nuo koncepcijos iki montavimo, kai reikia sukurti funkcionalią, reprezentatyvią erdvę.",
      path: "/baldu-gamyba",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
      bullets: [
        "Individualūs baldų sprendimai",
        "Komercinės, biurų ir HoReCa erdvės",
        "Projektų valdymas ir montavimas"
      ]
    },
    {
      id: "parts",
      title: "Baldų detalių gamyba",
      description:
        "Serijinių ir nestandartinių detalių gamyba, kai svarbi terminų kontrolė ir kokybės sertifikatai.",
      path: "/baldu-detaliu-gamyba",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80",
      bullets: [
        "CNC apdirbimas ir furnitūra",
        "Plačios medžiagos ir apdailos",
        "Logistika ir kokybės protokolai"
      ]
    }
  ]
};

export const furnitureContent: BusinessPageContent = {
  navItems: [
    { id: "sprendimai", label: "Kodėl mes" },
    { id: "paslaugos", label: "Paslaugos" },
    { id: "projektai", label: "Projektai" },
    { id: "procesas", label: "Procesas" },
    { id: "garantijos", label: "Garantijos" },
    { id: "kontaktai", label: "Kontaktai" }
  ],
  hero: {
    id: "pradzia",
    eyebrow: "Pilna baldų gamyba",
    title: "Modernios erdvės, kurias klientai prisimena",
    description:
      "Projektuojame ir gaminame verslo erdvėms pritaikytus baldus, kurie suderina ergonomiką, reprezentatyvumą ir ilgaamžiškumą.",
    image:
      "https://images.unsplash.com/photo-1484100356142-db1e5e35afcd?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "15+", label: "metų patirtis" },
      { value: "1200+", label: "įgyvendintų projektų" },
      { value: "98%", label: "klientų rekomenduoja" }
    ],
    actions: [
      { label: "Gauti Excel šabloną", variant: "primary", href: downloadLink.href },
      { label: "Peržiūrėti paslaugas", variant: "secondary", targetId: "paslaugos" }
    ]
  },
  highlights: [
    {
      title: "Vienas partneris visam procesui",
      description:
        "Architektai, inžinieriai ir gamyba dirba po vienu stogu – tai reiškia mažiau rizikos ir daugiau kontrolės."
    },
    {
      title: "Medžiagų biblioteka",
      description:
        "Turime daugiau nei 380 akredituotų medžiagų ir apdailų, todėl pasiūlome tinkamiausią kombinaciją jūsų biudžetui."
    },
    {
      title: "Montavimas visoje Europoje",
      description:
        "Mobilios montavimo komandos leidžia įgyvendinti projektus tiek Lietuvoje, tiek kituose ES miestuose."
    }
  ],
  services: [
    {
      title: "Strateginis projektavimas",
      description:
        "Analizuojame verslo tikslus ir erdvių scenarijus, kad baldai veiktų kaip jūsų prekės ženklo tęsinys.",
      points: ["Zonavimo ir srautų planavimas", "3D vizualizacijos ir VR sesijos", "Tvarumo auditai"]
    },
    {
      title: "Gamyba ir surinkimas",
      description:
        "Gaminame baldus savo dirbtuvėse, užtikriname kokybės patikrą ir montuojame pagal grafiką.",
      points: ["CNC apdirbimas ir lakavimas", "Metalo ir stiklo integracijos", "Transportas ir montavimas"]
    },
    {
      title: "Garantinė priežiūra",
      description:
        "Užtikriname baldų priežiūrą ir atnaujinimus, kad erdvės išliktų aktualios ir funkcionalios.",
      points: ["SLA sutartys", "Modulinių sprendimų papildymai", "Greita reakcija į garantinius klausimus"]
    }
  ],
  projects: [
    {
      title: "„NordicTech“ hibridinis centras",
      description:
        "Sujungėme bendradarbystės zonas su koncentruoto darbo kambariais, akustinėmis kapsulėmis ir moduline konferencijų infrastruktūra.",
      image:
        "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Modernus biuro interjeras",
      metrics: [
        { label: "Darbuotojai", value: "320" },
        { label: "Terminas", value: "6 mėn." }
      ]
    },
    {
      title: "Viešbučio „Amūnas“ foyer",
      description:
        "Prabangus, bet jaukus vestibiulis su specialiai gaminta recepcija, natūraliomis tekstilėmis ir apšvietimo scenarijais.",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Viešbučio prieangis su baldais",
      metrics: [
        { label: "Plotas", value: "450 m²" },
        { label: "Apšvietimo scenarijai", value: "12" }
      ]
    },
    {
      title: "Fintech HQ susitikimų erdvės",
      description:
        "Adaptavome erdves intensyviems susitikimams ir hibridiniam darbui su modulinių baldų sistema.",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Šiuolaikinė susitikimų erdvė",
      metrics: [
        { label: "Susitikimų kambariai", value: "14" },
        { label: "Pasitenkinimas", value: "+23%" }
      ]
    }
  ],
  process: [
    {
      title: "Įžvalgų sesija",
      description:
        "Išsigryniname verslo tikslus, srautų diagramas ir estetinius kriterijus, kad visi sprendimai būtų pamatuoti.",
      icon: "insights"
    },
    {
      title: "Dizaino ir prototipų studija",
      description:
        "Parengiame 3D vizualizacijas, medžiagų pavyzdžius ir prototipus – galite pajausti rezultatą dar prieš gamybą.",
      icon: "design"
    },
    {
      title: "Gamyba ir logistika",
      description:
        "Savo dirbtuvėse gaminame baldus, koordinuojame tiekėjus ir planuojame montavimą pagal jūsų grafiką.",
      icon: "build"
    },
    {
      title: "Priežiūra",
      description:
        "Po įdiegimo siūlome priežiūros planus, modulinius papildymus ir greitą reagavimą į pokyčius.",
      icon: "care"
    }
  ],
  assurance: [
    {
      title: "Kokybės kontrolė",
      description:
        "Kiekvienam projektui taikome 4 kontrolinius etapus ir pateikiame gamybos ataskaitas."
    },
    {
      title: "Medžiagų tvarumas",
      description:
        "Dirbame tik su FSC, PEFC ir OEKO-TEX sertifikuotais tiekėjais, pateikiame lydinčius dokumentus."
    },
    {
      title: "Serviso garantijos",
      description:
        "Siūlome išplėstines garantijas iki 5 metų ir papildomus priežiūros vizitus."
    }
  ],
  contact: {
    id: "kontaktai",
    title: "Pasikalbėkime apie jūsų erdves",
    description:
      "Susisiekite dėl pirminės konsultacijos ar projekto apimčių įvertinimo – atsakome per vieną darbo dieną.",
    advisor: {
      name: "Rasa Vaitkutė",
      role: "Projektų vadovė",
      phone: "+370 612 34567",
      email: "rasa@currus.lt"
    }
  }
};

export const partsContent: BusinessPageContent = {
  navItems: [
    { id: "kompetencijos", label: "Privalumai" },
    { id: "paslaugos", label: "Pajėgumai" },
    { id: "projektai", label: "Projektai" },
    { id: "procesas", label: "Procesas" },
    { id: "garantijos", label: "Kokybė" },
    { id: "kontaktai", label: "Kontaktai" }
  ],
  hero: {
    id: "pradzia",
    eyebrow: "Baldų detalių gamyba",
    title: "Tikslumas ir terminai, kuriais galima pasikliauti",
    description:
      "Gaminame serijines ir nestandartines baldų detales interjero gamintojams, prekybos tinklams ir pramoniniams užsakovams.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "24/7", label: "gamybos grafikas" },
      { value: "0.2 mm", label: "tikslumo tolerancija" },
      { value: "3 d.", label: "standartinis terminas" }
    ],
    actions: [
      { label: "Atsisiųsti Excel šabloną", variant: "primary", href: downloadLink.href },
      { label: "Matyti pajėgumus", variant: "secondary", targetId: "paslaugos" }
    ]
  },
  highlights: [
    {
      title: "CNC ir automatika",
      description:
        "6 ašių CNC centrai ir automatizuotos pjovimo linijos leidžia dirbti su sudėtingais kontūrais ir serijomis."
    },
    {
      title: "Atsekamumas",
      description:
        "Kiekviena detalė žymima QR kodais, todėl tiekimo grandinė matoma realiu laiku."
    },
    {
      title: "Tarptautinė logistika",
      description:
        "Reguliarūs reisai į Baltijos ir Skandinavijos šalis užtikrina greitą pristatymą."
    }
  ],
  services: [
    {
      title: "Plokščių apdirbimas",
      description:
        "Dirbame su MDF, LMDP, faneruote ir plokštėmis su specialiomis savybėmis – nuo atsparumo ugniai iki antibakterinio paviršiaus.",
      points: [
        "CNC frezavimas ir gręžimas",
        "Kraštų laminavimas lazeriu",
        "3D formavimas mažoms serijoms"
      ]
    },
    {
      title: "Metalo ir stiklo detalės",
      description:
        "Integruojame metalines konstrukcijas, stiklo intarpus ir furnitūrą, suderiname su jūsų tiekėjais.",
      points: ["Metalo pjovimas ir miltelinis dažymas", "Grūdinto stiklo parinkimas", "Furnitūros surinkimas"]
    },
    {
      title: "Paviršių apdaila",
      description:
        "Nuo dažymo iki natūralios faneruotės – parenkame apdailą, kuri atitinka projekto techninę specifikaciją.",
      points: ["Robotizuotas dažymas", "UV atsparios dangos", "Specialūs tekstūriniai paviršiai"]
    }
  ],
  projects: [
    {
      title: "Mažmeninės prekybos stendai",
      description:
        "Per 4 savaites pagaminome 180 modulių tinklo parduotuvėms, kartu su logistikos planavimu ir montavimo instrukcijomis.",
      image:
        "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Prekybos įrangos stendai",
      metrics: [
        { label: "Modulių kiekis", value: "180" },
        { label: "Pristatymo langas", value: "14 d." }
      ]
    },
    {
      title: "Premium virtuvės detalės",
      description:
        "Pagaminome faneruotas ir milteliniu būdu dažytas detales Vokietijos interjero studijai su 0.1 mm tolerancija.",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Virtuvės baldų detalės",
      metrics: [
        { label: "Serija", value: "350 rinkinių" },
        { label: "Sklandus pristatymas", value: "100%" }
      ]
    },
    {
      title: "Modulinės viešbučių spintos",
      description:
        "Sukūrėme modulinę spintų sistemą su iš anksto sumontuota furnitūra, kad montavimas vietoje užtruktų mažiau nei 20 min.",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Viešbučio kambario baldai",
      metrics: [
        { label: "Viešbučiai", value: "6" },
        { label: "Montavimo laikas", value: "18 min." }
      ]
    }
  ],
  process: [
    {
      title: "Specifikacijos analizė",
      description:
        "Per 24 valandas pateikiame pasiūlymą ir aptariame gamybos langus, alternatyvias medžiagas ar optimizacijas.",
      icon: "insights"
    },
    {
      title: "Techninis paruošimas",
      description:
        "Kuriame techninius brėžinius, parengiame bandomąją partiją ir suderiname kokybės parametrus.",
      icon: "design"
    },
    {
      title: "Serijinė gamyba",
      description:
        "Paleidžiame gamybą su automatizuotu planavimu, pateikiame gamybos ataskaitas ir QR žymų sąrašus.",
      icon: "build"
    },
    {
      title: "Logistika ir kokybė",
      description:
        "Organizuojame transportą, pasirūpiname muitiniais dokumentais ir pateikiame kokybės sertifikatų paketą.",
      icon: "logistics"
    }
  ],
  assurance: [
    {
      title: "Matavimo protokolai",
      description: "Kiekvienai partijai pateikiame matavimų ir medžiagų sertifikatų paketą."
    },
    {
      title: "ISO standartai",
      description:
        "Dirbame pagal ISO 9001 ir 14001 reikalavimus, todėl užtikriname kokybės ir aplinkosaugos rodiklius."
    },
    {
      title: "Operatyvus servisas",
      description:
        "Pagal SLA sutartis reaguojame per 12 valandų ir pradedame korekcijas per 48 valandas."
    }
  ],
  contact: {
    id: "kontaktai",
    title: "Kalbėkimės apie detales",
    description:
      "Sertifikuoti technologai padės suderinti medžiagas, tolerancijas ir logistiką – susisiekite dėl bandomosios partijos.",
    advisor: {
      name: "Darius Murauskas",
      role: "Gamybos direktorius",
      phone: "+370 698 45612",
      email: "darius@currus.lt"
    }
  }
};
