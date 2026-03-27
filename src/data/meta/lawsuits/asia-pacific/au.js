// src/data/meta/lawsuits/asia-pacific/au.js

export const meta = {
  flag: "🇦🇺",
  name: "Australie",
  continent: "Asie-Pacifique",
};

const lawsuits = [
  {
    id: "au-accc-onavo",
    title: { fr: "ACCC — Publicité trompeuse (Onavo VPN)", en: "ACCC — Misleading Advertising (Onavo VPN)" },
    year: "2020–2022",
    status: "settled",
    category: "Consumer Protection",
    plaintiff: "ACCC (competition regulator)",
    amount: "AUD $20M",
    summary: {
      fr: "Meta présentait son VPN Onavo comme un outil de sécurité et de protection de la vie privée, alors qu'il collectait en réalité les données de navigation des utilisateurs à des fins commerciales.",
      en: "Meta marketed its Onavo VPN as a privacy and security tool while it was actually collecting users' browsing data for commercial purposes.",
    },
    source: "https://www.accc.gov.au/",
  },
];

export default lawsuits;
