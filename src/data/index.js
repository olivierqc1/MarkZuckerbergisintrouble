// src/data/index.js
// ─────────────────────────────────────────────────────────────
// Point d'entrée unique. App.jsx importe seulement ce fichier.
//
// Pour ajouter un nouveau pays :
//   1. Créer src/data/meta/lawsuits/<continent>/<code>.js
//   2. L'importer ici
//   3. L'ajouter dans le bon continent dans CONTINENTS
// ─────────────────────────────────────────────────────────────

// ── Imports poursuites ────────────────────────────────────────
import usLawsuits, { meta as usMeta } from "./meta/lawsuits/americas/us.js";
import caLawsuits, { meta as caMeta } from "./meta/lawsuits/americas/ca.js";
import euLawsuits, { meta as euMeta } from "./meta/lawsuits/europe/eu.js";
import ukLawsuits, { meta as ukMeta } from "./meta/lawsuits/europe/uk.js";
import auLawsuits, { meta as auMeta } from "./meta/lawsuits/asia-pacific/au.js";
import krLawsuits, { meta as krMeta } from "./meta/lawsuits/asia-pacific/kr.js";

// ── Autres données ────────────────────────────────────────────
import environment  from "./meta/environment.js";
import zuckStats    from "./mark/stats.js";
import zuckTimeline from "./mark/timeline.js";
import zuckPersonal from "./mark/personal-lawsuits.js";

export { statusConfig } from "./types.js";

// ─────────────────────────────────────────────────────────────
// STRUCTURE PRINCIPALE — hiérarchie explicite:
//   CONTINENTS
//     └── "Amérique du Nord"
//           └── "us" → { flag, name, lawsuits[] }
//           └── "ca" → { flag, name, lawsuits[] }
//     └── "Europe"
//           └── "eu" → ...
//           └── "uk" → ...
//     └── "Asie-Pacifique"
//           └── "au" → ...
//           └── "kr" → ...
// ─────────────────────────────────────────────────────────────
export const CONTINENTS = {
  "Amérique du Nord": {
    "us": { ...usMeta, lawsuits: usLawsuits },
    "ca": { ...caMeta, lawsuits: caLawsuits },
  },
  "Europe": {
    "eu": { ...euMeta, lawsuits: euLawsuits },
    "uk": { ...ukMeta, lawsuits: ukLawsuits },
  },
  "Asie-Pacifique": {
    "au": { ...auMeta, lawsuits: auLawsuits },
    "kr": { ...krMeta, lawsuits: krLawsuits },
  },
};

// Toutes les poursuites à plat — pour les stats globales
export const ALL_LAWSUITS = Object.values(CONTINENTS)
  .flatMap(continent => Object.values(continent))
  .flatMap(country => country.lawsuits);

export const META_ENV = environment;

export const ZUCKERBERG = {
  stats:         zuckStats,
  timeline:      zuckTimeline,
  personalSuits: zuckPersonal,
};
