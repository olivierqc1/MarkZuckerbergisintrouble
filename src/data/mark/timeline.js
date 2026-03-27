// src/data/mark/timeline.js
// Types: founding | scandal | testimony | internal | whistleblower | political | pr | legal

const timeline = [
  { year: "2004", type: "founding",     event: { fr: "Fonde Facebook à Harvard. Accusé par les frères Winklevoss d'avoir volé leur idée — réglé à $65M.", en: "Founds Facebook at Harvard. Accused by the Winklevoss twins of stealing their idea — settled for $65M." } },
  { year: "2016", type: "scandal",      event: { fr: "Cambridge Analytica exploite les données de 87M d'utilisateurs pour cibler des électeurs américains. Zuckerberg dit ne pas être au courant.", en: "Cambridge Analytica exploits 87M users' data to target American voters. Zuckerberg claims no knowledge." } },
  { year: "2018", type: "testimony",    event: { fr: "Témoigne 2 jours au Congrès américain sur Cambridge Analytica. Admet que Facebook collecte des données même hors de la plateforme.", en: "Testifies for 2 days before US Congress on Cambridge Analytica. Admits Facebook collects data even off-platform." } },
  { year: "2019", type: "internal",     event: { fr: "Documents internes révèlent qu'il était informé des risques d'Instagram sur la santé mentale des adolescentes — et a choisi la croissance.", en: "Internal documents reveal he was informed of Instagram's mental health risks to teen girls — and chose growth." } },
  { year: "2020", type: "testimony",    event: { fr: "Témoigne une 2ème fois au Congrès sur la désinformation, les élections et le monopole de Meta.", en: "Testifies before Congress a 2nd time on disinformation, elections, and Meta's monopoly." } },
  { year: "2021", type: "whistleblower",event: { fr: "Frances Haugen publie les Facebook Papers. Zuckerberg qualifie les révélations de 'fausses' et 'sans sens logique'.", en: "Frances Haugen publishes the Facebook Papers. Zuckerberg calls the revelations 'false' and 'logically inconsistent'." } },
  { year: "2022", type: "testimony",    event: { fr: "Témoigne une 3ème fois au Congrès. Première tentative — rejetée — de le tenir personnellement responsable dans MDL #3047.", en: "Testifies before Congress a 3rd time. First — rejected — attempt to hold him personally liable in MDL #3047." } },
  { year: "2023", type: "pr",           event: { fr: "Lettre ouverte à des parents de victimes: 'je suis désolé pour ce que vous traversez'. Aucune admission de responsabilité légale.", en: "Open letter to parents of victims: 'I'm sorry for what you're going through.' No admission of legal liability." } },
  { year: "2024", type: "legal",        event: { fr: "Deuxième tentative rejetée de mise en cause personnelle dans MDL #3047. Document: 4M enfants <13 ans sur Instagram en 2015.", en: "Second rejected attempt at personal liability in MDL #3047. Document: 4M children under 13 on Instagram in 2015." } },
  { year: "2025", type: "political",    event: { fr: "Nommé au conseil consultatif IA de Trump. Supprime les programmes DEI chez Meta. Modifie les règles de fact-checking.", en: "Appointed to Trump's AI advisory council. Eliminates DEI programs at Meta. Changes fact-checking rules." } },
  { year: "2026", type: "testimony",    event: { fr: "Témoigne sous serment devant un jury à Los Angeles — PREMIÈRE FOIS devant des jurés. Document présenté: Meta savait que ~4M enfants <13 ans utilisaient Instagram.", en: "Testifies under oath before a Los Angeles jury — FIRST TIME before jurors. Document presented: Meta knew ~4M children under 13 used Instagram." } },
];

export default timeline;
