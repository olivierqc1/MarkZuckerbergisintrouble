// data.js — Toutes les données du site

export const lawsuits = {
  "Amérique du Nord": {
    "🇺🇸 États-Unis": [
      {
        id: "ftc-antitrust",
        title: "FTC v. Meta Platforms",
        year: "2020–2025",
        status: "lost",
        category: "Antitrust",
        plaintiff: "FTC + 46 États",
        amount: null,
        summary: "Monopole allégué via rachat Instagram et WhatsApp. Le juge Boasberg a statué en faveur de Meta en novembre 2025.",
        source: "https://en.wikipedia.org/wiki/Federal_Trade_Commission_v._Meta_Platforms,_Inc."
      },
      {
        id: "cambridge-analytica",
        title: "Cambridge Analytica — Class Action",
        year: "2018–2023",
        status: "settled",
        category: "Vie privée",
        plaintiff: "17 millions d'utilisateurs",
        amount: "$725M",
        summary: "Données de 87M d'utilisateurs exploitées pour cibler des électeurs lors de l'élection de Trump en 2016.",
        source: "https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal"
      },
      {
        id: "texas-biometrics",
        title: "Texas — Biométrie faciale",
        year: "2022–2024",
        status: "settled",
        category: "Biométrie",
        plaintiff: "État du Texas",
        amount: "$1.4B",
        summary: "Collecte illégale de données biométriques de millions de Texans via Tag Suggestions pendant plus d'une décennie. Plus grande amende d'un seul État de l'histoire.",
        source: "https://www.texasattorneygeneral.gov"
      },
      {
        id: "new-mexico-minors",
        title: "Nouveau-Mexique — Prédateurs sur mineurs",
        year: "2023–2026",
        status: "won",
        category: "Protection des mineurs",
        plaintiff: "État du Nouveau-Mexique",
        amount: "$375M",
        summary: "Meta a intentionnellement induit les utilisateurs en erreur sur la sécurité de ses plateformes vis-à-vis des enfants. L'équipe du procureur s'est fait passer pour des enfants pour documenter les sollicitations sexuelles reçues. Verdict: mars 2026.",
        source: "https://fortune.com/2026/03/25/meta-mark-zuckerberg-social-media-harmful-for-children-new-mexico-verdict/"
      },
      {
        id: "la-addiction",
        title: "Los Angeles — Addiction jeunes (KGM)",
        year: "2022–2026",
        status: "won",
        category: "Santé mentale",
        plaintiff: "KGM (Kaley) — cas bellwether",
        amount: "$6M",
        summary: "Meta et Google reconnus négligents pour avoir causé dépression et anxiété chez une femme exposée à Instagram dès l'âge de 6 ans. Cas test pour 2000+ poursuites similaires. Verdict: 26 mars 2026.",
        source: "https://www.npr.org/2026/03/25/nx-s1-5746125/meta-youtube-social-media-trial-verdict"
      },
      {
        id: "mdl-3047",
        title: "MDL #3047 — Addiction ados (fédéral)",
        year: "2022–en cours",
        status: "ongoing",
        category: "Santé mentale",
        plaintiff: "Milliers de familles + 250+ districts scolaires",
        amount: "À déterminer",
        summary: "Méga-litige fédéral regroupant des milliers de poursuites contre Meta pour addiction et dommages psychologiques chez les jeunes. Comparé au procès du tabac des années 90.",
        source: "https://www.motleyrice.com/social-media-lawsuits/meta"
      },
      {
        id: "il-biometrics",
        title: "Illinois — BIPA Biométrie",
        year: "2015–2022",
        status: "settled",
        category: "Biométrie",
        plaintiff: "Utilisateurs Illinois",
        amount: "$650M",
        summary: "Collecte de données de reconnaissance faciale sans consentement explicite, violant le Biometric Information Privacy Act de l'Illinois.",
        source: "https://en.wikipedia.org/wiki/Facebook"
      },
    ],
    "🇨🇦 Canada": [
      {
        id: "cppa-canada",
        title: "CPPA — Investigation vie privée",
        year: "2023–en cours",
        status: "ongoing",
        category: "Vie privée",
        plaintiff: "Commissariat vie privée du Canada",
        amount: "À déterminer",
        summary: "Enquête sur les pratiques de collecte de données de Meta auprès des Canadiens, incluant les données comportementales pour la publicité ciblée.",
        source: "https://www.priv.gc.ca/"
      },
    ],
  },
  "Europe": {
    "🇪🇺 Union Européenne": [
      {
        id: "gdpr-us-transfer",
        title: "RGPD — Transfert données vers les USA",
        year: "2020–2023",
        status: "won",
        category: "RGPD",
        plaintiff: "DPC Irlande / Max Schrems",
        amount: "€1.2B",
        summary: "Plus grande amende RGPD de l'histoire. Meta transférait illégalement les données d'utilisateurs européens vers des serveurs américains sans protection adéquate (décision Schrems II).",
        source: "https://www.dataprotection.ie/"
      },
      {
        id: "gdpr-whatsapp",
        title: "RGPD — WhatsApp (transparence)",
        year: "2018–2021",
        status: "won",
        category: "RGPD",
        plaintiff: "DPC Irlande",
        amount: "€225M",
        summary: "Meta n'informait pas suffisamment les utilisateurs de WhatsApp sur la façon dont leurs données personnelles étaient traitées et partagées avec d'autres entités Meta.",
        source: "https://www.dataprotection.ie/"
      },
      {
        id: "dsa-eu",
        title: "DSA — Algorithmes & désinformation",
        year: "2024–en cours",
        status: "ongoing",
        category: "DSA",
        plaintiff: "Commission européenne",
        amount: "Jusqu'à 6% du CA mondial",
        summary: "Enquête sur les systèmes de recommandation algorithmique de Facebook et Instagram et leur impact sur les mineurs et la propagation de la désinformation.",
        source: "https://ec.europa.eu/commission/presscorner/detail/en/ip_24_926"
      },
    ],
    "🇬🇧 Royaume-Uni": [
      {
        id: "ico-uk",
        title: "ICO — Cambridge Analytica UK",
        year: "2018–2019",
        status: "settled",
        category: "Vie privée",
        plaintiff: "Information Commissioner's Office",
        amount: "£500K",
        summary: "Amende maximale permise par la loi britannique à l'époque pour le rôle de Facebook dans le scandale Cambridge Analytica et la violation des données d'utilisateurs britanniques.",
        source: "https://ico.org.uk/"
      },
    ],
  },
  "Asie-Pacifique": {
    "🇦🇺 Australie": [
      {
        id: "accc-australia",
        title: "ACCC — Publicité trompeuse (Onavo)",
        year: "2020–2022",
        status: "settled",
        category: "Publicité trompeuse",
        plaintiff: "ACCC (régulateur de la concurrence)",
        amount: "AUD $20M",
        summary: "Meta présentait son VPN Onavo comme un outil de sécurité alors qu'il collectait les données de navigation des utilisateurs à des fins commerciales.",
        source: "https://www.accc.gov.au/"
      },
    ],
    "🇰🇷 Corée du Sud": [
      {
        id: "pipc-korea",
        title: "PIPC — Collecte illégale de données",
        year: "2021–2022",
        status: "settled",
        category: "Vie privée",
        plaintiff: "Commission de protection des données personnelles",
        amount: "₩6.7B (~$5M USD)",
        summary: "Meta collectait et partageait illégalement des informations personnelles sensibles d'utilisateurs coréens sans base légale adéquate.",
        source: "https://www.pipc.go.kr/"
      },
    ],
  },
};

export const zuckerbergData = {
  stats: [
    { label: "Valeur nette estimée (2026)", value: "~$200B", color: "#c0392b" },
    { label: "Droits de vote chez Meta", value: "~60%", color: "#e67e22" },
    { label: "Témoignages au Congrès US", value: "4", color: "#3498db" },
    { label: "Tentatives de mise en cause personnelle", value: "2", color: "#9b59b6" },
  ],
  timeline: [
    { year: "2004", event: "Fonde Facebook à Harvard. Vole du code de ConnectU selon Winklevoss twins — réglé $65M.", type: "founding" },
    { year: "2016", event: "Cambridge Analytica exploite les données de 87M d'utilisateurs pour cibler des électeurs. Zuckerberg dit ne pas être au courant.", type: "scandal" },
    { year: "2018", event: "Témoigne 2 jours au Congrès américain sur Cambridge Analytica. Admet que Facebook collecte des données même hors de la plateforme.", type: "testimony" },
    { year: "2019", event: "Documents internes révèlent qu'il était informé des risques d'Instagram sur la santé mentale des ados — et a choisi la croissance.", type: "internal" },
    { year: "2020", event: "Témoigne au Congrès sur la désinformation, les élections et le monopole de Meta.", type: "testimony" },
    { year: "2021", event: "Frances Haugen publie les Facebook Papers. Zuckerberg qualifie les révélations de 'fausses' et 'sans sens'.", type: "whistleblower" },
    { year: "2022", event: "Témoigne une 3ème fois au Congrès. Première tentative échouée de le tenir personnellement responsable dans MDL #3047.", type: "testimony" },
    { year: "2023", event: "Lettre ouverte à des parents de victimes: 'je suis désolé pour ce que vous traversez'. Aucune admission de responsabilité.", type: "pr" },
    { year: "2025", event: "Nommé au conseil consultatif IA de Trump. Supprime les programmes DEI chez Meta.", type: "political" },
    { year: "2026", event: "Témoigne sous serment devant un jury à Los Angeles — PREMIÈRE FOIS devant un jury. Document interne: savait que 4M enfants <13 ans étaient sur Instagram.", type: "testimony" },
  ],
  personalLawsuits: [
    {
      title: "MDL #3047 — Tentative de mise en cause personnelle (1ère)",
      year: "2023",
      result: "Rejeté",
      reason: "Plainte jugée insuffisante pour établir la responsabilité personnelle d'un dirigeant d'entreprise.",
    },
    {
      title: "MDL #3047 — Tentative de mise en cause personnelle (2ème)",
      year: "2024",
      result: "Rejeté",
      reason: "Plainte révisée encore insuffisante. La juge Rogers maintient que les standards légaux pour responsabilité personnelle ne sont pas atteints.",
    },
  ],
};

export const envData = [
  { label: "Consommation électrique data centers (2023)", value: "~22 TWh", note: "≈ 2 millions de foyers américains" },
  { label: "Émissions CO₂ déclarées (2023)", value: "4.3M T", note: "Source: rapport ESG Meta 2023" },
  { label: "Eau pour refroidissement (2022)", value: "2.9B gal", note: "+34% vs 2021 — explosion due à l'IA" },
  { label: "Dépenses data centers prévues (2026)", value: "$135B", note: "Pendant que les émissions continuent d'augmenter" },
  { label: "Objectif neutralité carbone", value: "2030", note: "Mais trajectoire actuelle incompatible" },
  { label: "Énergie renouvelable (2023)", value: "100%", note: "Déclaré — via crédits, pas production directe" },
];

export const statusConfig = {
  won:     { label: "✓ Gagné",    bg: "#0d2b1a", text: "#2ecc71", border: "#1a5c35" },
  lost:    { label: "✗ Perdu",    bg: "#1a1a1a", text: "#888",    border: "#333" },
  settled: { label: "$ Réglé",   bg: "#2b1f0a", text: "#f39c12", border: "#5c3d0a" },
  ongoing: { label: "… En cours", bg: "#0a1a2b", text: "#3498db", border: "#0a3a5c" },
};
