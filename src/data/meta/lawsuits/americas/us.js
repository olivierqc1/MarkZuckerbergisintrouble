// src/data/meta/lawsuits/americas/us.js

export const meta = {
  flag: "🇺🇸",
  name: "États-Unis",
  continent: "Amérique du Nord",
};

const lawsuits = [
  {
    id: "us-ftc-antitrust",
    title: { fr: "FTC v. Meta Platforms", en: "FTC v. Meta Platforms" },
    year: "2020–2025",
    status: "lost",
    category: "Antitrust",
    plaintiff: "FTC + 46 states",
    amount: null,
    summary: {
      fr: "Monopole allégué via rachat d'Instagram et WhatsApp. Le juge Boasberg a statué en faveur de Meta en novembre 2025.",
      en: "Alleged monopoly via acquisition of Instagram and WhatsApp. Judge Boasberg ruled in Meta's favor in November 2025.",
    },
    source: "https://en.wikipedia.org/wiki/Federal_Trade_Commission_v._Meta_Platforms,_Inc.",
  },
  {
    id: "us-cambridge-analytica",
    title: { fr: "Cambridge Analytica — Recours collectif", en: "Cambridge Analytica — Class Action" },
    year: "2018–2023",
    status: "settled",
    category: "Privacy",
    plaintiff: "17 million users",
    amount: "$725M",
    summary: {
      fr: "Données de 87M d'utilisateurs exploitées par Cambridge Analytica pour cibler des électeurs lors de l'élection de Trump en 2016.",
      en: "Data from 87M users exploited by Cambridge Analytica to target voters during the 2016 Trump election campaign.",
    },
    source: "https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal",
  },
  {
    id: "us-texas-biometrics",
    title: { fr: "Texas — Biométrie faciale", en: "Texas — Facial Biometrics" },
    year: "2022–2024",
    status: "settled",
    category: "Biometrics",
    plaintiff: "State of Texas",
    amount: "$1.4B",
    summary: {
      fr: "Collecte illégale de données biométriques de millions de Texans via Tag Suggestions pendant plus d'une décennie. Plus grande amende d'un seul État de l'histoire américaine.",
      en: "Illegal collection of biometric data from millions of Texans via Tag Suggestions for over a decade. Largest single-state settlement in US history.",
    },
    source: "https://www.texasattorneygeneral.gov",
  },
  {
    id: "us-illinois-biometrics",
    title: { fr: "Illinois — BIPA Biométrie", en: "Illinois — BIPA Biometrics" },
    year: "2015–2022",
    status: "settled",
    category: "Biometrics",
    plaintiff: "Illinois users",
    amount: "$650M",
    summary: {
      fr: "Collecte de données de reconnaissance faciale sans consentement explicite, violant le Biometric Information Privacy Act (BIPA) de l'Illinois.",
      en: "Collection of facial recognition data without explicit consent, violating the Illinois Biometric Information Privacy Act (BIPA).",
    },
    source: "https://en.wikipedia.org/wiki/Facebook",
  },
  {
    id: "us-new-mexico-minors",
    title: { fr: "Nouveau-Mexique — Prédateurs sur mineurs", en: "New Mexico — Child Predators" },
    year: "2023–2026",
    status: "won",
    category: "Child Safety",
    plaintiff: "State of New Mexico",
    amount: "$375M",
    summary: {
      fr: "Meta a intentionnellement induit les utilisateurs en erreur sur la sécurité de ses plateformes vis-à-vis des enfants. L'équipe du procureur s'est fait passer pour des enfants pour documenter les sollicitations sexuelles reçues. Verdict: mars 2026.",
      en: "Meta deliberately misled users about platform safety for children. The AG's team posed as children to document sexual solicitations received. Verdict: March 2026.",
    },
    source: "https://fortune.com/2026/03/25/meta-mark-zuckerberg-social-media-harmful-for-children-new-mexico-verdict/",
  },
  {
    id: "us-la-kgm-addiction",
    title: { fr: "Los Angeles — Addiction jeunes (KGM)", en: "Los Angeles — Youth Addiction (KGM)" },
    year: "2022–2026",
    status: "won",
    category: "Mental Health",
    plaintiff: "KGM (Kaley) — bellwether case",
    amount: "$6M",
    summary: {
      fr: "Procès bellwether: Meta et Google reconnus négligents pour avoir causé dépression et anxiété chez une femme exposée à Instagram dès l'âge de 6 ans. Ce verdict oriente l'issue de 2000+ poursuites similaires. Verdict: 26 mars 2026.",
      en: "Bellwether trial: Meta and Google found negligent for causing depression and anxiety in a woman exposed to Instagram from age 6. This verdict shapes 2000+ similar cases. Verdict: March 26, 2026.",
    },
    source: "https://www.npr.org/2026/03/25/nx-s1-5746125/meta-youtube-social-media-trial-verdict",
  },
  {
    id: "us-mdl-3047",
    title: { fr: "MDL #3047 — Addiction ados (fédéral)", en: "MDL #3047 — Teen Addiction (Federal)" },
    year: "2022–ongoing",
    status: "ongoing",
    category: "Mental Health",
    plaintiff: "Thousands of families + 250+ school districts",
    amount: "TBD",
    summary: {
      fr: "Méga-litige fédéral regroupant des milliers de poursuites contre Meta pour addiction et dommages psychologiques chez les jeunes. Comparé au procès du Big Tobacco des années 90.",
      en: "Federal mega-litigation consolidating thousands of lawsuits against Meta for addiction and psychological harm to youth. Compared to the Big Tobacco trials of the 1990s.",
    },
    source: "https://www.motleyrice.com/social-media-lawsuits/meta",
  },
];

export default lawsuits;
