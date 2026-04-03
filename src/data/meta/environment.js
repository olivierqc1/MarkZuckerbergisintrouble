// src/data/meta/environment.js

const environment = [
  {
    id: "electricity",
    label: { fr: "Consommation électrique data centers (2023)", en: "Data center electricity use (2023)" },
    value: "~22 TWh",
    note: { fr: "≈ 2 millions de foyers américains", en: "≈ 2 million US households" },
    trend: "up",
  },
  {
    id: "co2",
    label: { fr: "Émissions CO₂ déclarées (2023)", en: "Reported CO₂ emissions (2023)" },
    value: "4.3M T",
    note: { fr: "Source: rapport ESG Meta 2023", en: "Source: Meta 2023 ESG report" },
    trend: "up",
  },
  {
    id: "water",
    label: { fr: "Eau pour refroidissement (2022)", en: "Water for cooling (2022)" },
    value: "2.9B gal",
    note: { fr: "+34% vs 2021 — explosion due à l'IA", en: "+34% vs 2021 — AI-driven surge" },
    trend: "up",
  },
  {
    id: "capex",
    label: { fr: "Dépenses data centers prévues (2026)", en: "Planned data center spending (2026)" },
    value: "$135B",
    note: { fr: "Pendant que les émissions continuent d'augmenter", en: "While actual emissions keep rising" },
    trend: "up",
  },
  {
    id: "carbon-goal",
    label: { fr: "Objectif neutralité carbone annoncé", en: "Announced carbon neutrality target" },
    value: "2030",
    note: { fr: "Trajectoire actuelle incompatible avec cet objectif", en: "Current trajectory incompatible with this goal" },
    trend: "neutral",
  },
  {
    id: "renewables",
    label: { fr: "Énergie renouvelable déclarée (2023)", en: "Reported renewable energy (2023)" },
    value: "100%",
    note: { fr: "Via crédits carbone — pas de production directe", en: "Via carbon credits — not direct production" },
    trend: "neutral",
  },
];

export default environment;
