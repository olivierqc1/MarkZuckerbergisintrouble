// src/data/mark/personal-lawsuits.js

const personalLawsuits = [
  {
    id: "mdl-personal-1",
    title: { fr: "MDL #3047 — Mise en cause personnelle (1ère tentative)", en: "MDL #3047 — Personal Liability (1st attempt)" },
    year: "2023",
    result: { fr: "Rejeté", en: "Dismissed" },
    court: "U.S. District Court — Judge Yvonne Gonzalez Rogers",
    reason: {
      fr: "La plainte originale jugée insuffisante pour établir la responsabilité personnelle d'un dirigeant d'entreprise selon les standards légaux américains.",
      en: "The original complaint deemed insufficient to establish personal liability for a corporate officer under US legal standards.",
    },
  },
  {
    id: "mdl-personal-2",
    title: { fr: "MDL #3047 — Mise en cause personnelle (2ème tentative)", en: "MDL #3047 — Personal Liability (2nd attempt)" },
    year: "2024",
    result: { fr: "Rejeté", en: "Dismissed" },
    court: "U.S. District Court — Judge Yvonne Gonzalez Rogers",
    reason: {
      fr: "La plainte révisée encore insuffisante. La juge maintient que les standards pour la responsabilité personnelle d'un CEO ne sont pas atteints, malgré les documents internes montrant sa connaissance des risques.",
      en: "The revised complaint still insufficient. The judge maintains that standards for CEO personal liability are not met, despite internal documents showing his awareness of risks.",
    },
  },
];

export default personalLawsuits;
