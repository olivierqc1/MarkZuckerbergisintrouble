import { useState } from "react";

const lawsuits = {
  us: [
    {
      id: 1,
      title: "FTC v. Meta Platforms",
      year: "2020\u20132025",
      status: "lost",
      category: "Antitrust",
      plaintiff: "FTC + 46 \u00c9tats",
      amount: null,
      summary: "Monopole all\u00e9gu\u00e9 via rachat d'Instagram et WhatsApp. Le juge Boasberg a statu\u00e9 en faveur de Meta en novembre 2025.",
      source: "https://en.wikipedia.org/wiki/Federal_Trade_Commission_v._Meta_Platforms,_Inc."
    },
    {
      id: 2,
      title: "Cambridge Analytica \u2014 Class Action",
      year: "2018\u20132023",
      status: "settled",
      category: "Vie priv\u00e9e",
      plaintiff: "17 millions d'utilisateurs",
      amount: "$725M",
      summary: "Donn\u00e9es de 87M d'utilisateurs exploit\u00e9es pour cibler des \u00e9lecteurs lors de l'\u00e9lection de Trump en 2016.",
      source: "https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal"
    },
    {
      id: 3,
      title: "Texas \u2014 Biom\u00e9trie faciale",
      year: "2022\u20132024",
      status: "settled",
      category: "Biom\u00e9trie",
      plaintiff: "\u00c9tat du Texas",
      amount: "$1.4B",
      summary: "Collecte ill\u00e9gale de donn\u00e9es biom\u00e9triques (g\u00e9om\u00e9trie faciale) de millions de Texans via Facebook Tag Suggestions pendant plus d'une d\u00e9cennie.",
      source: "https://www.texasattorneygeneral.gov"
    },
    {
      id: 4,
      title: "Nouveau-Mexique \u2014 Pr\u00e9dateurs sur mineurs",
      year: "2023\u20132026",
      status: "won",
      category: "Protection des mineurs",
      plaintiff: "\u00c9tat du Nouveau-Mexique",
      amount: "$375M",
      summary: "Meta a intentionnellement induit les utilisateurs en erreur sur la s\u00e9curit\u00e9 de ses plateformes vis-\u00e0-vis des enfants. Verdict: mars 2026.",
      source: "https://fortune.com/2026/03/25/meta-mark-zuckerberg-social-media-harmful-for-children-new-mexico-verdict/"
    },
    {
      id: 5,
      title: "Los Angeles \u2014 Addiction chez les jeunes (KGM)",
      year: "2022\u20132026",
      status: "won",
      category: "Sant\u00e9 mentale",
      plaintiff: "KGM (Kaley) + 1600 cas",
      amount: "$6M",
      summary: "Proc\u00e8s bellwether: Meta et Google reconnus n\u00e9gligents pour avoir caus\u00e9 d\u00e9pression et anxi\u00e9t\u00e9 chez une femme expos\u00e9e d\u00e8s l'\u00e2ge de 6 ans. Verdict: 26 mars 2026.",
      source: "https://www.npr.org/2026/03/25/nx-s1-5746125/meta-youtube-social-media-trial-verdict"
    },
    {
      id: 6,
      title: "MDL #3047 \u2014 Addiction ados (f\u00e9d\u00e9ral)",
      year: "2022\u2013en cours",
      status: "ongoing",
      category: "Sant\u00e9 mentale",
      plaintiff: "Milliers de familles + districts scolaires",
      amount: "\u00c0 d\u00e9terminer",
      summary: "M\u00e9ga-litige f\u00e9d\u00e9ral regroupant des milliers de poursuites contre Meta et autres plateformes pour addiction et dommages psychologiques chez les jeunes.",
      source: "https://www.motleyrice.com/social-media-lawsuits/meta"
    },
  ],
  eu: [
    {
      id: 7,
      title: "RGPD \u2014 Transfert donn\u00e9es vers les USA",
      year: "2020\u20132023",
      status: "won",
      category: "RGPD",
      plaintiff: "DPC Irlande / Max Schrems",
      amount: "\u20ac1.2B",
      summary: "Plus grande amende RGPD de l'histoire. Meta transf\u00e9rait ill\u00e9galement les donn\u00e9es d'utilisateurs europ\u00e9ens vers les serveurs am\u00e9ricains sans protection ad\u00e9quate.",
      source: "https://www.dataprotection.ie/"
    },
    {
      id: 8,
      title: "RGPD \u2014 WhatsApp (transparence)",
      year: "2018\u20132021",
      status: "won",
      category: "RGPD",
      plaintiff: "DPC Irlande",
      amount: "\u20ac225M",
      summary: "Meta n'informait pas suffisamment les utilisateurs de WhatsApp sur la fa\u00e7on dont leurs donn\u00e9es personnelles \u00e9taient trait\u00e9es et partag\u00e9es.",
      source: "https://www.dataprotection.ie/"
    },
    {
      id: 9,
      title: "DSA \u2014 Investigation pratiques algorithmiques",
      year: "2024\u2013en cours",
      status: "ongoing",
      category: "DSA / Algorithmes",
      plaintiff: "Commission europ\u00e9enne",
      amount: "Jusqu'\u00e0 6% du CA mondial",
      summary: "Enqu\u00eate sur les syst\u00e8mes de recommandation algorithmique de Facebook et Instagram et leur impact sur les mineurs et la d\u00e9sinformation.",
      source: "https://ec.europa.eu/commission/presscorner/detail/en/ip_24_926"
    },
  ],
  ca: [
    {
      id: 10,
      title: "CPPA \u2014 Investigation vie priv\u00e9e",
      year: "2023\u2013en cours",
      status: "ongoing",
      category: "Vie priv\u00e9e",
      plaintiff: "Commissariat \u00e0 la protection de la vie priv\u00e9e",
      amount: "\u00c0 d\u00e9terminer",
      summary: "Enqu\u00eate sur les pratiques de collecte de donn\u00e9es de Meta aupr\u00e8s des Canadiens, incluant les donn\u00e9es comportementales pour la publicit\u00e9 cibl\u00e9e.",
      source: "https://www.priv.gc.ca/"
    },
  ],
};

const zuckerbergTimeline = [
  { year: "2018", event: "T\u00e9moignage au Congr\u00e8s am\u00e9ricain \u2014 Cambridge Analytica", type: "testimony" },
  { year: "2019", event: "Documents internes r\u00e9v\u00e8lent qu'il savait qu'Instagram \u00e9tait dangereux pour les ados", type: "internal" },
  { year: "2020", event: "T\u00e9moignage au Congr\u00e8s sur la d\u00e9sinformation et le monopole", type: "testimony" },
  { year: "2021", event: "R\u00e9v\u00e9lations Frances Haugen (Facebook Papers)", type: "whistleblower" },
  { year: "2024", event: "Tentative de le tenir personnellement responsable dans MDL #3047 \u2014 rejet\u00e9e", type: "legal" },
  { year: "2026", event: "T\u00e9moigne sous serment devant un jury \u00e0 Los Angeles \u2014 premi\u00e8re fois", type: "testimony" },
];

const envData = [
  { label: "Data centers \u2014 consommation \u00e9lectrique 2023", value: "~22 TWh", note: "\u00c9quivalent de 2 millions de foyers am\u00e9ricains" },
  { label: "\u00c9missions CO\u2082 2023", value: "4.3M tonnes", note: "D\u00e9clar\u00e9es dans rapport ESG Meta" },
  { label: "Eau consomm\u00e9e pour refroidissement (2022)", value: "2.9B gallons", note: "+34% vs 2021 \u2014 explosion due \u00e0 l'IA" },
  { label: "Objectif neutralit\u00e9 carbone", value: "2030", note: "Mais consommation IA en forte hausse" },
];

const statusConfig = {
  won: { label: "Gagn\u00e9 \u2713", bg: "bg-emerald-900/60", text: "text-emerald-400", border: "border-emerald-700" },
  lost: { label: "Perdu \u2717", bg: "bg-zinc-800/60", text: "text-zinc-400", border: "border-zinc-600" },
  settled: { label: "R\u00e9gl\u00e9 $", bg: "bg-amber-900/60", text: "text-amber-400", border: "border-amber-700" },
  ongoing: { label: "En cours\u2026", bg: "bg-blue-900/60", text: "text-blue-400", border: "border-blue-700" },
};

const countryFlags = { us: "\ud83c\uddfa\ud83c\uddf8", eu: "\ud83c\uddea\ud83c\uddfa", ca: "\ud83c\udde8\ud83c\udde6" };
const countryNames = { us: "\u00c9tats-Unis", eu: "Union Europ\u00e9enne", ca: "Canada" };

export default function App() {
  const [tab, setTab] = useState("lawsuits");
  const [country, setCountry] = useState("us");
  const [expanded, setExpanded] = useState(null);

  const allLawsuits = Object.values(lawsuits).flat();
  const won = allLawsuits.filter(l => l.status === "won").length;
  const settled = allLawsuits.filter(l => l.status === "settled").length;
  const ongoing = allLawsuits.filter(l => l.status === "ongoing").length;

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#0a0a0a", minHeight: "100vh", color: "#e8e0d0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Sans+3:wght@300;400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0a; }
        .headline { font-family: 'Playfair Display', Georgia, serif; }
        .body-text { font-family: 'Source Sans 3', sans-serif; }
        .tab-btn { transition: all 0.2s; }
        .tab-btn:hover { opacity: 0.8; }
        .card { transition: all 0.25s; border: 1px solid #2a2a2a; }
        .card:hover { border-color: #c0392b; transform: translateY(-2px); }
        .pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        .ticker { animation: ticker 20s linear infinite; }
        @keyframes ticker { 0%{transform:translateX(100%)} 100%{transform:translateX(-100%)} }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #c0392b; }
      `}</style>

      {/* TICKER */}
      <div style={{ background: "#c0392b", padding: "6px 0", overflow: "hidden" }}>
        <div className="ticker body-text" style={{ whiteSpace: "nowrap", fontSize: "12px", letterSpacing: "0.1em", fontWeight: 600 }}>
          \ud83d\udd34 BREAKING: Meta perd 2 proc\u00e8s en 2 jours \u2014 Mars 2026 &nbsp;|&nbsp; $375M Nouveau-Mexique &nbsp;|&nbsp; $6M Los Angeles &nbsp;|&nbsp; Action chute de 8% &nbsp;|&nbsp; 2000+ poursuites en attente &nbsp;|&nbsp; Zuckerberg t\u00e9moigne sous serment pour la 1\u00e8re fois devant un jury &nbsp;|&nbsp;
        </div>
      </div>

      {/* HERO */}
      <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #0a0a0a 0%, #1a0505 50%, #0a0a0a 100%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(192,57,43,0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 32px", borderBottom: "1px solid #2a2a2a" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#c0392b" }} className="pulse" />
            <span className="body-text" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#888", textTransform: "uppercase" }}>Live \u2014 Mis \u00e0 jour en temps r\u00e9el</span>
          </div>
          <span className="body-text" style={{ fontSize: "11px", color: "#666", letterSpacing: "0.1em" }}>markzuckerbergisintrouble.com</span>
        </div>

        {/* Hero content */}
        <div style={{ padding: "60px 32px 40px", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div className="body-text" style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#c0392b", marginBottom: "20px", textTransform: "uppercase", fontWeight: 600 }}>
            Dossier d'int\u00e9r\u00eat public
          </div>
          <h1 className="headline" style={{ fontSize: "clamp(36px, 7vw, 80px)", lineHeight: 1.05, color: "#e8e0d0", marginBottom: "20px", fontWeight: 900 }}>
            Mark Zuckerberg<br />
            <span style={{ color: "#c0392b" }}>Is In Trouble.</span>
          </h1>
          <p className="body-text" style={{ fontSize: "18px", color: "#999", maxWidth: "600px", margin: "0 auto 40px", lineHeight: 1.7, fontWeight: 300 }}>
            Toutes les poursuites judiciaires, amendes et scandales document\u00e9s contre Meta et son fondateur. Uniquement des faits v\u00e9rifi\u00e9s, uniquement des sources primaires.
          </p>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", maxWidth: "700px", margin: "0 auto" }}>
            {[
              { n: allLawsuits.length, label: "Poursuites\ndocument\u00e9es", color: "#e8e0d0" },
              { n: won, label: "Victoires\ncontre Meta", color: "#2ecc71" },
              { n: settled, label: "R\u00e9gl\u00e9es\nhors cour", color: "#f39c12" },
              { n: ongoing, label: "En cours\nactuellemnt", color: "#3498db" },
            ].map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "20px 8px" }}>
                <div className="headline" style={{ fontSize: "42px", color: s.color, lineHeight: 1 }}>{s.n}</div>
                <div className="body-text" style={{ fontSize: "11px", color: "#666", marginTop: "6px", whiteSpace: "pre-line", lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image strip */}
        <div style={{ display: "flex", gap: "2px", height: "200px", overflow: "hidden", opacity: 0.4 }}>
          {[
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80",
            "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&q=80",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80",
          ].map((url, i) => (
            <div key={i} style={{ flex: 1, backgroundImage: `url(${url})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          ))}
        </div>
      </div>

      {/* NAV TABS */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "#111", borderBottom: "2px solid #c0392b" }}>
        <div style={{ display: "flex", maxWidth: "900px", margin: "0 auto" }}>
          {[
            { id: "lawsuits", label: "\u2696\ufe0f Poursuites" },
            { id: "zuckerberg", label: "\ud83d\udc64 Zuckerberg" },
            { id: "environment", label: "\ud83c\udf0d Environnement" },
          ].map(t => (
            <button
              key={t.id}
              className="tab-btn"
              onClick={() => setTab(t.id)}
              style={{
                flex: 1,
                padding: "16px",
                background: tab === t.id ? "#c0392b" : "transparent",
                color: tab === t.id ? "#fff" : "#888",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>

        {/* LAWSUITS TAB */}
        {tab === "lawsuits" && (
          <div>
            {/* Country selector */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "32px", flexWrap: "wrap" }}>
              {Object.keys(lawsuits).map(c => (
                <button
                  key={c}
                  onClick={() => setCountry(c)}
                  style={{
                    padding: "10px 20px",
                    background: country === c ? "#c0392b" : "#1a1a1a",
                    border: `1px solid ${country === c ? "#c0392b" : "#333"}`,
                    borderRadius: "4px",
                    color: country === c ? "#fff" : "#888",
                    cursor: "pointer",
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    transition: "all 0.2s",
                  }}
                >
                  {countryFlags[c]} {countryNames[c]} ({lawsuits[c].length})
                </button>
              ))}
            </div>

            {/* Lawsuit cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {lawsuits[country].map(l => {
                const s = statusConfig[l.status];
                const isOpen = expanded === l.id;
                return (
                  <div
                    key={l.id}
                    className="card"
                    style={{ background: "#111", borderRadius: "8px", overflow: "hidden", cursor: "pointer" }}
                    onClick={() => setExpanded(isOpen ? null : l.id)}
                  >
                    <div style={{ padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                      {/* Status badge */}
                      <div style={{ minWidth: "100px" }}>
                        <span className={`body-text ${s.bg} ${s.text}`} style={{ fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "3px", letterSpacing: "0.1em", display: "inline-block", border: `1px solid`, borderColor: s.border.replace("border-", "") }}>
                          {s.label}
                        </span>
                        <div className="body-text" style={{ fontSize: "12px", color: "#555", marginTop: "6px" }}>{l.year}</div>
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                          <h3 className="headline" style={{ fontSize: "20px", color: "#e8e0d0", lineHeight: 1.3 }}>{l.title}</h3>
                          {l.amount && (
                            <span className="headline" style={{ fontSize: "22px", color: "#c0392b", whiteSpace: "nowrap" }}>{l.amount}</span>
                          )}
                        </div>
                        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                          <span className="body-text" style={{ fontSize: "12px", color: "#666", background: "#1a1a1a", padding: "3px 8px", borderRadius: "3px" }}>{l.category}</span>
                          <span className="body-text" style={{ fontSize: "12px", color: "#555" }}>vs {l.plaintiff}</span>
                        </div>
                      </div>

                      <div style={{ color: "#555", fontSize: "18px", marginTop: "2px" }}>{isOpen ? "\u25b2" : "\u25bc"}</div>
                    </div>

                    {/* Expanded */}
                    {isOpen && (
                      <div style={{ padding: "0 24px 24px", borderTop: "1px solid #1e1e1e" }}>
                        <p className="body-text" style={{ fontSize: "15px", color: "#aaa", lineHeight: 1.7, marginTop: "16px", marginBottom: "16px" }}>
                          {l.summary}
                        </p>
                        <a
                          href={l.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          style={{ color: "#c0392b", fontSize: "13px", fontFamily: "'Source Sans 3', sans-serif", textDecoration: "none", fontWeight: 600 }}
                        >
                          \u2192 Source primaire
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ZUCKERBERG TAB */}
        {tab === "zuckerberg" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "48px" }}>
              <div>
                <h2 className="headline" style={{ fontSize: "36px", color: "#e8e0d0", marginBottom: "16px" }}>Le dossier<br /><span style={{ color: "#c0392b" }}>Zuckerberg</span></h2>
                <p className="body-text" style={{ color: "#777", lineHeight: 1.7, fontSize: "15px" }}>
                  Mark Zuckerberg contr\u00f4le ~60% des droits de vote de Meta via des actions de classe B, lui donnant un contr\u00f4le absolu sur l'entreprise malgr\u00e9 une participation minoritaire en capital. Cette structure bli