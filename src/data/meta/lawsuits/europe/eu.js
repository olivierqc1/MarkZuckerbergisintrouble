// src/data/meta/lawsuits/europe/eu.js

export const meta = {
  flag: "🇪🇺",
  name: "Union Européenne",
  continent: "Europe",
};

const lawsuits = [
  {
    id: "eu-gdpr-us-transfer",
    title: { fr: "RGPD — Transfert de données vers les USA", en: "GDPR — Data Transfer to the USA" },
    year: "2020–2023",
    status: "won",
    category: "GDPR",
    plaintiff: "DPC Ireland / Max Schrems (noyb)",
    amount: "€1.2B",
    summary: {
      fr: "Plus grande amende RGPD de l'histoire. Meta transférait illégalement les données d'utilisateurs européens vers des serveurs américains sans protection adéquate, violant la décision Schrems II de la CJUE.",
      en: "Largest GDPR fine in history. Meta was illegally transferring EU user data to US servers without adequate protection, violating the CJEU's Schrems II ruling.",
    },
    source: "https://www.dataprotection.ie/",
  },
  {
    id: "eu-gdpr-whatsapp",
    title: { fr: "RGPD — WhatsApp (transparence)", en: "GDPR — WhatsApp (Transparency)" },
    year: "2018–2021",
    status: "won",
    category: "GDPR",
    plaintiff: "DPC Ireland",
    amount: "€225M",
    summary: {
      fr: "Meta n'informait pas suffisamment les utilisateurs de WhatsApp sur la façon dont leurs données personnelles étaient traitées et partagées avec d'autres entités du groupe Meta.",
      en: "Meta failed to adequately inform WhatsApp users about how their personal data was processed and shared with other Meta entities.",
    },
    source: "https://www.dataprotection.ie/",
  },
  {
    id: "eu-gdpr-instagram-children",
    title: { fr: "RGPD — Instagram données d'enfants", en: "GDPR — Instagram Children's Data" },
    year: "2020–2022",
    status: "won",
    category: "GDPR",
    plaintiff: "DPC Ireland",
    amount: "€405M",
    summary: {
      fr: "Instagram exposait publiquement les numéros de téléphone et adresses email d'enfants via leurs paramètres de compte professionnel, accessibles à tous par défaut.",
      en: "Instagram publicly exposed children's phone numbers and email addresses through their business account settings, which were public by default.",
    },
    source: "https://www.dataprotection.ie/",
  },
  {
    id: "eu-dsa-investigation",
    title: { fr: "DSA — Algorithmes & désinformation", en: "DSA — Algorithms & Disinformation" },
    year: "2024–ongoing",
    status: "ongoing",
    category: "DSA",
    plaintiff: "European Commission",
    amount: "Up to 6% of global revenue",
    summary: {
      fr: "Enquête sur les systèmes de recommandation algorithmique de Facebook et Instagram et leur impact sur la propagation de la désinformation et les risques pour les mineurs.",
      en: "Investigation into Facebook and Instagram's algorithmic recommendation systems and their role in spreading disinformation and risks to minors.",
    },
    source: "https://ec.europa.eu/commission/presscorner/detail/en/ip_24_926",
  },
];

export default lawsuits;
