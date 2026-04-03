// src/data/meta/lawsuits/europe/uk.js

export const meta = {
  flag: "🇬🇧",
  name: "Royaume-Uni",
  continent: "Europe",
};

const lawsuits = [
  {
    id: "uk-ico-cambridge",
    title: { fr: "ICO — Cambridge Analytica UK", en: "ICO — Cambridge Analytica UK" },
    year: "2018–2019",
    status: "settled",
    category: "Privacy",
    plaintiff: "Information Commissioner's Office",
    amount: "£500K",
    summary: {
      fr: "Amende maximale permise par la loi britannique à l'époque pour le rôle de Facebook dans le scandale Cambridge Analytica et la violation des données d'utilisateurs britanniques.",
      en: "Maximum fine allowed under UK law at the time for Facebook's role in the Cambridge Analytica scandal and violation of British users' data.",
    },
    source: "https://ico.org.uk/",
  },
  {
    id: "uk-cma-giphy",
    title: { fr: "CMA — Rachat de Giphy", en: "CMA — Giphy Acquisition" },
    year: "2021–2022",
    status: "won",
    category: "Antitrust",
    plaintiff: "Competition and Markets Authority",
    amount: null,
    summary: {
      fr: "La CMA a ordonné à Meta de revendre Giphy, estimant que le rachat réduisait la concurrence dans la publicité display et les GIFs. Premier démantèlement imposé à Meta au Royaume-Uni.",
      en: "The CMA ordered Meta to divest Giphy, finding the acquisition reduced competition in display advertising and GIFs. First divestiture ordered against Meta in the UK.",
    },
    source: "https://www.gov.uk/cma-cases/meta-giphy-merger-inquiry",
  },
];

export default lawsuits;
