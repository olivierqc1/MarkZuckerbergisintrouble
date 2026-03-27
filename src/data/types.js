// src/data/types.js
// Constantes partagées — statuts, couleurs, etc.

export const STATUS = {
  WON:     "won",
  LOST:    "lost",
  SETTLED: "settled",
  ONGOING: "ongoing",
};

export const statusConfig = {
  won:     { label: "✓ Gagné",     bg: "#0d2b1a", text: "#2ecc71", border: "#1a5c35" },
  lost:    { label: "✗ Perdu",     bg: "#1a1a1a", text: "#888",    border: "#333"    },
  settled: { label: "$ Réglé",    bg: "#2b1f0a", text: "#f39c12", border: "#5c3d0a" },
  ongoing: { label: "… En cours",  bg: "#0a1a2b", text: "#3498db", border: "#0a3a5c" },
};

export const CATEGORIES = {
  ANTITRUST:  "Antitrust",
  PRIVACY:    "Vie privée",
  BIOMETRICS: "Biométrie",
  YOUTH:      "Protection des mineurs",
  MENTAL:     "Santé mentale",
  GDPR:       "RGPD",
  DSA:        "DSA",
  ELECTORAL:  "Élections",
  CONSUMER:   "Protection consommateurs",
};
