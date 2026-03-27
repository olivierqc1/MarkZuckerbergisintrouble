// src/data/meta/lawsuits/asia-pacific/kr.js

export const meta = {
  flag: "🇰🇷",
  name: "Corée du Sud",
  continent: "Asie-Pacifique",
};

const lawsuits = [
  {
    id: "kr-pipc-data",
    title: { fr: "PIPC — Collecte illégale de données", en: "PIPC — Illegal Data Collection" },
    year: "2021–2022",
    status: "settled",
    category: "Privacy",
    plaintiff: "Personal Information Protection Commission",
    amount: "₩6.7B (~$5M USD)",
    summary: {
      fr: "Meta collectait et partageait illégalement des informations personnelles sensibles d'utilisateurs coréens — incluant orientation sexuelle et religion — sans base légale adéquate.",
      en: "Meta illegally collected and shared sensitive personal information from Korean users — including sexual orientation and religion — without adequate legal basis.",
    },
    source: "https://www.pipc.go.kr/",
  },
];

export default lawsuits;
