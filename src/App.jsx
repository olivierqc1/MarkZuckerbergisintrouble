// src/App.jsx — Editorial version complète
import { useState } from "react";
import { useData } from "./hooks/useData.js";
import T from "./data/translations.js";
import { statusConfig } from "./data/types.js";

const RED  = "#c0392b";
const DARK = "#0a0a0a";
const hl   = (s) => ({ fontFamily: "'Playfair Display', Georgia, serif", ...s });
const bd   = (s) => ({ fontFamily: "'Source Sans 3', sans-serif", ...s });
const tx   = (field, lang) => field && typeof field === "object" ? field[lang] : field;

const FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Source+Sans+3:wght@300;400;600&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: ${DARK}; }
  @keyframes ticker  { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:.35} }
  @keyframes fadeUp  { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-thumb { background: ${RED}; }
  button { cursor: pointer; border: none; transition: all .2s; }
  a { transition: opacity .2s; }
  a:hover { opacity: .75; }
`;

// Photos Unsplash libres de droits
const PHOTOS = {
  courthouse: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
  meta:       "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
  datacenter: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  hawaii:     "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
  congress:   "https://images.unsplash.com/photo-1562016600-ece13e8ba570?w=1200&q=80",
  privacy:    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
};

// ── Loading ─────────────────────────────────────────────────────────────────
function Loading() {
  return (
    <div style={{ background: DARK, minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 24 }}>
      <div style={hl({ fontSize: 28, color: "#e8e0d0", letterSpacing: ".05em" })}>Mark Zuckerberg</div>
      <div style={hl({ fontSize: 28, color: RED, fontStyle: "italic" })}>Is In Trouble.</div>
      <div style={{ width: 36, height: 36, border: `2px solid #222`,
        borderTop: `2px solid ${RED}`, borderRadius: "50%", animation: "spin .8s linear infinite" }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ── LawsuitCard — style magazine ────────────────────────────────────────────
function LawsuitCard({ l, expanded, onToggle, lang, tr }) {
  const s = statusConfig[l.status];
  const open = expanded === l.id;
  return (
    <div onClick={onToggle}
      onMouseEnter={e => e.currentTarget.style.borderColor = RED}
      onMouseLeave={e => e.currentTarget.style.borderColor = open ? RED : "#1e1e1e"}
      style={{ background: "#0f0f0f", border: `1px solid ${open ? RED : "#1e1e1e"}`,
        borderRadius: 2, marginBottom: 2, cursor: "pointer", transition: "border-color .2s" }}>
      <div style={{ display: "flex", gap: 0 }}>
        {/* Barre colorée statut */}
        <div style={{ width: 3, background: s.text, flexShrink: 0, borderRadius: "2px 0 0 2px" }} />
        <div style={{ flex: 1, padding: "16px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
          <div style={{ minWidth: 80 }}>
            <span style={bd({ fontSize: 10, fontWeight: 700, padding: "3px 7px", borderRadius: 2,
              letterSpacing: ".1em", textTransform: "uppercase", display: "inline-block",
              background: s.bg, color: s.text, border: `1px solid ${s.border}` })}>
              {tr[`status_${l.status}`]}
            </span>
            <div style={bd({ fontSize: 11, color: "#444", marginTop: 5, letterSpacing: ".05em" })}>{l.year}</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" }}>
              <h3 style={hl({ fontSize: 16, color: "#ddd", lineHeight: 1.35, margin: 0, fontWeight: 700 })}>
                {tx(l.title, lang)}
              </h3>
              {l.amount && l.amount !== "TBD" && (
                <span style={hl({ fontSize: 17, color: RED, whiteSpace: "nowrap", fontWeight: 900 })}>{l.amount}</span>
              )}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 7, flexWrap: "wrap", alignItems: "center" }}>
              <span style={bd({ fontSize: 10, color: "#555", background: "#161616", padding: "2px 7px",
                borderRadius: 2, letterSpacing: ".08em", textTransform: "uppercase" })}>{tr.categories[l.category] || l.category}</span>
              <span style={bd({ fontSize: 11, color: "#444" })}>vs {l.plaintiff}</span>
            </div>
          </div>
          <span style={{ color: "#333", fontSize: 11, marginTop: 3, flexShrink: 0 }}>{open ? "▲" : "▼"}</span>
        </div>
      </div>
      {open && (
        <div style={{ padding: "0 18px 18px 37px", borderTop: "1px solid #141414" }}>
          <p style={bd({ fontSize: 14, color: "#999", lineHeight: 1.75, margin: "14px 0 12px",
            fontWeight: 300, fontStyle: "italic", borderLeft: `2px solid #222`, paddingLeft: 14 })}>
            {tx(l.summary, lang)}
          </p>
          <a href={l.source} target="_blank" rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={bd({ color: RED, fontSize: 12, textDecoration: "none", fontWeight: 600,
              letterSpacing: ".08em", textTransform: "uppercase" })}>
            {tr.label_source}
          </a>
        </div>
      )}
    </div>
  );
}

// ── MetaTab ─────────────────────────────────────────────────────────────────
function MetaTab({ lang, CONTINENTS, ALL_LAWSUITS }) {
  const tr = T[lang];
  const contNames = Object.keys(CONTINENTS);
  const [activeCont, setActiveCont] = useState(contNames[0]);
  const [activeCountry, setActiveCountry] = useState(Object.keys(CONTINENTS[contNames[0]])[0]);
  const [expanded, setExpanded] = useState(null);

  const handleCont = (c) => { setActiveCont(c); setActiveCountry(Object.keys(CONTINENTS[c])[0]); setExpanded(null); };
  const handleCountry = (c) => { setActiveCountry(c); setExpanded(null); };

  const current = CONTINENTS[activeCont]?.[activeCountry];
  const totalCountries = Object.values(CONTINENTS).flatMap(c => Object.keys(c)).length;

  if (!current) return null;

  return (
    <div>
      {/* Hero éditorial META */}
      <div style={{ position: "relative", borderRadius: 2, overflow: "hidden", marginBottom: 32, height: 220 }}>
        <img src={PHOTOS.meta} alt="Meta" style={{ width: "100%", height: "100%", objectFit: "cover",
          objectPosition: "center", filter: "grayscale(60%) contrast(1.1)" }} />
        <div style={{ position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,.92) 0%, rgba(0,0,0,.5) 60%, rgba(0,0,0,.1) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, padding: "28px 32px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={bd({ fontSize: 10, letterSpacing: ".3em", color: RED, textTransform: "uppercase", marginBottom: 8, fontWeight: 600 })}>
            DOSSIER META PLATFORMS
          </div>
          <div style={hl({ fontSize: "clamp(22px,4vw,32px)", color: "#fff", lineHeight: 1.2, marginBottom: 6 })}>
            {ALL_LAWSUITS.length} {tr.banner_meta}<br />
            <span style={{ color: RED }}>{totalCountries} {tr.banner_countries}</span>
          </div>
          <div style={bd({ fontSize: 12, color: "#aaa", fontStyle: "italic" })}>
            {lang === "fr" ? "Amendes cumulées documentées : +$3.5B" : "Documented cumulative fines: +$3.5B"}
          </div>
        </div>
      </div>

      {/* Niveau 1 — Continents */}
      <div style={bd({ fontSize: 10, color: "#444", letterSpacing: ".2em", textTransform: "uppercase",
        marginBottom: 10, borderBottom: "1px solid #161616", paddingBottom: 8 })}>{tr.label_continent}</div>
      <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
        {contNames.map(c => (
          <button key={c} onClick={() => handleCont(c)} style={{
            padding: "7px 16px",
            background: activeCont === c ? RED : "transparent",
            border: `1px solid ${activeCont === c ? RED : "#222"}`,
            borderRadius: 2, color: activeCont === c ? "#fff" : "#555",
            fontFamily: "'Source Sans 3', sans-serif", fontSize: 12, fontWeight: 600,
            letterSpacing: ".05em"
          }}>
            {c} ({Object.values(CONTINENTS[c]).reduce((n, p) => n + p.lawsuits.length, 0)})
          </button>
        ))}
      </div>

      {/* Niveau 2 — Pays */}
      <div style={bd({ fontSize: 10, color: "#444", letterSpacing: ".2em", textTransform: "uppercase",
        marginBottom: 10, borderBottom: "1px solid #161616", paddingBottom: 8 })}>{tr.label_country}</div>
      <div style={{ display: "flex", gap: 6, marginBottom: 28, flexWrap: "wrap" }}>
        {Object.entries(CONTINENTS[activeCont]).map(([code, country]) => (
          <button key={code} onClick={() => handleCountry(code)} style={{
            padding: "6px 14px",
            background: activeCountry === code ? "#1a0505" : "transparent",
            border: `1px solid ${activeCountry === code ? RED : "#1e1e1e"}`,
            borderRadius: 2, color: activeCountry === code ? "#e8e0d0" : "#444",
            fontFamily: "'Source Sans 3', sans-serif", fontSize: 12,
          }}>
            {country.flag} {country.name} ({country.lawsuits.length})
          </button>
        ))}
      </div>

      {/* Niveau 3 — Poursuites */}
      <div style={bd({ fontSize: 10, color: "#444", letterSpacing: ".2em", textTransform: "uppercase",
        marginBottom: 12, borderBottom: "1px solid #161616", paddingBottom: 8 })}>
        {tr.label_lawsuits} — {current.flag} {current.name}
      </div>
      {current.lawsuits.map(l => (
        <LawsuitCard key={l.id} l={l} expanded={expanded} lang={lang} tr={tr}
          onToggle={() => setExpanded(expanded === l.id ? null : l.id)} />
      ))}
    </div>
  );
}

// ── EnvTab ───────────────────────────────────────────────────────────────────
function EnvTab({ lang, META_ENV }) {
  const tr = T[lang];
  return (
    <div>
      {/* Hero data center */}
      <div style={{ position: "relative", borderRadius: 2, overflow: "hidden", marginBottom: 32, height: 220 }}>
        <img src={PHOTOS.datacenter} alt="Data center"
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(40%) hue-rotate(120deg) saturate(0.6)" }} />
        <div style={{ position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,.92) 0%, rgba(0,0,0,.4) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, padding: "28px 32px", display: "flex",
          flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={bd({ fontSize: 10, letterSpacing: ".3em", color: "#2ecc71",
            textTransform: "uppercase", marginBottom: 8, fontWeight: 600 })}>{tr.env_label}</div>
          <div style={hl({ fontSize: "clamp(20px,4vw,30px)", color: "#fff", lineHeight: 1.25 })}>
            {tr.env_title}<br /><span style={{ color: RED, fontStyle: "italic" }}>{tr.env_subtitle}</span>
          </div>
        </div>
      </div>

      <p style={bd({ fontSize: 15, color: "#666", lineHeight: 1.85, marginBottom: 32,
        fontWeight: 300, borderLeft: `2px solid #1e1e1e`, paddingLeft: 16 })}>{tr.env_body}</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        {META_ENV.map(d => (
          <div key={d.id} style={{ background: "#0f0f0f", border: "1px solid #161616",
            borderRadius: 2, padding: "20px 18px" }}>
            <div style={bd({ fontSize: 10, color: "#444", letterSpacing: ".15em",
              textTransform: "uppercase", marginBottom: 10, lineHeight: 1.5 })}>{tx(d.label, lang)}</div>
            <div style={hl({ fontSize: 26, color: "#2ecc71", lineHeight: 1, fontWeight: 900 })}>{d.value}</div>
            <div style={bd({ fontSize: 11, color: "#444", marginTop: 8, fontStyle: "italic" })}>{tx(d.note, lang)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


// src/App.jsx — PARTIE 2 sur 2
// Colle ce contenu APRÈS la partie 1 dans le même fichier src/App.jsx
// (remplace tout ce qui suit la fonction EnvTab)

// ── MarkTab ──────────────────────────────────────────────────────────────────
function MarkTab({ lang, ZUCKERBERG }) {
  const tr = T[lang];
  const { stats, timeline, personalSuits, controversies } = ZUCKERBERG;
  const typeColor = {
    testimony: RED, scandal: "#e67e22", whistleblower: "#9b59b6",
    political: "#3498db", internal: "#e74c3c", legal: "#e67e22",
    founding: "#444", pr: "#333"
  };

  return (
    <div>
      {/* Hero tribunal */}
      <div style={{ position: "relative", borderRadius: 2, overflow: "hidden", marginBottom: 32, height: 220 }}>
        <img src={PHOTOS.courthouse} alt="Tribunal"
          style={{ width: "100%", height: "100%", objectFit: "cover",
            objectPosition: "center top", filter: "grayscale(50%) contrast(1.15)" }} />
        <div style={{ position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,.92) 0%, rgba(0,0,0,.3) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, padding: "28px 32px",
          display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={bd({ fontSize: 10, letterSpacing: ".3em", color: RED,
            textTransform: "uppercase", marginBottom: 8, fontWeight: 600 })}>{tr.mark_section}</div>
          <div style={hl({ fontSize: "clamp(22px,4vw,34px)", color: "#fff", lineHeight: 1.2 })}>
            Mark Zuckerberg
          </div>
          <div style={bd({ fontSize: 12, color: "#aaa", marginTop: 6, fontStyle: "italic" })}>
            {lang === "fr"
              ? "~$200B de valeur nette · ~60% des droits de vote Meta · 4 témoignages au Congrès"
              : "~$200B net worth · ~60% Meta voting rights · 4 Congressional testimonies"}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2, marginBottom: 32 }}>
        {stats.map(s => (
          <div key={s.id} style={{ background: "#0f0f0f", border: "1px solid #161616",
            borderRadius: 2, padding: "18px 16px" }}>
            <div style={bd({ fontSize: 10, color: "#444", letterSpacing: ".15em",
              textTransform: "uppercase", marginBottom: 8 })}>{tx(s.label, lang)}</div>
            <div style={hl({ fontSize: 28, color: s.color, fontWeight: 900 })}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Controverses personnelles — avec photo Hawaï */}
      <div style={{ marginBottom: 32 }}>
        <div style={bd({ fontSize: 10, color: "#444", letterSpacing: ".2em", textTransform: "uppercase",
          marginBottom: 12, borderBottom: "1px solid #161616", paddingBottom: 8 })}>
          {lang === "fr" ? "Controverses personnelles" : "Personal Controversies"}
        </div>

        {/* Photo Hawaï en banner */}
        <div style={{ position: "relative", height: 140, borderRadius: 2, overflow: "hidden", marginBottom: 12 }}>
          <img src={PHOTOS.hawaii} alt="Hawaii"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%)" }} />
          <div style={{ position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,.85) 0%, rgba(0,0,0,.2) 100%)" }} />
          <div style={{ position: "absolute", bottom: 16, left: 20 }}>
            <div style={bd({ fontSize: 10, color: "#e67e22", letterSpacing: ".2em",
              textTransform: "uppercase", marginBottom: 4 })}>KAUAI, HAWAII</div>
            <div style={hl({ fontSize: 18, color: "#fff" })}>
              {lang === "fr" ? "Terres ancestrales & bunker à $270M" : "Ancestral Lands & $270M Bunker"}
            </div>
          </div>
        </div>

        {controversies && controversies.map(c => (
          <div key={c.id} style={{ background: "#0f0f0f", border: "1px solid #1e1e1e",
            borderLeft: `3px solid #e67e22`, borderRadius: 2, padding: "14px 16px", marginBottom: 2 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10,
              marginBottom: 8, flexWrap: "wrap", alignItems: "flex-start" }}>
              <span style={hl({ fontSize: 15, color: "#ddd", fontWeight: 700 })}>{tx(c.title, lang)}</span>
              <span style={bd({ fontSize: 10, color: "#555", background: "#161616",
                padding: "2px 7px", borderRadius: 2, letterSpacing: ".08em" })}>{c.year}</span>
            </div>
            <p style={bd({ fontSize: 13, color: "#777", lineHeight: 1.7, marginBottom: 10,
              fontWeight: 300, fontStyle: "italic" })}>{tx(c.summary, lang)}</p>
            <a href={c.source} target="_blank" rel="noopener noreferrer"
              style={bd({ color: "#e67e22", fontSize: 11, textDecoration: "none",
                fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase" })}>
              → {lang === "fr" ? "Source" : "Source"} ↗
            </a>
          </div>
        ))}
      </div>

      {/* Mises en cause personnelles */}
      <div style={bd({ fontSize: 10, color: "#444", letterSpacing: ".2em", textTransform: "uppercase",
        marginBottom: 12, borderBottom: "1px solid #161616", paddingBottom: 8 })}>{tr.mark_personal}</div>
      {personalSuits.map(p => (
        <div key={p.id} style={{ background: "#0f0f0f", border: "1px solid #1e1e1e",
          borderLeft: `3px solid ${RED}`, borderRadius: 2, padding: "14px 16px", marginBottom: 2 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10,
            marginBottom: 6, flexWrap: "wrap" }}>
            <span style={hl({ fontSize: 15, color: "#ddd" })}>{tx(p.title, lang)}</span>
            <span style={bd({ fontSize: 10, color: "#555", background: "#161616",
              padding: "2px 7px", borderRadius: 2 })}>{p.year} — {tx(p.result, lang)}</span>
          </div>
          <div style={bd({ fontSize: 11, color: "#444", marginBottom: 6, letterSpacing: ".05em" })}>{p.court}</div>
          <p style={bd({ fontSize: 13, color: "#666", lineHeight: 1.65, fontStyle: "italic" })}>{tx(p.reason, lang)}</p>
        </div>
      ))}

      {/* Timeline avec photo Congrès */}
      <div style={{ marginTop: 36 }}>
        <div style={{ position: "relative", height: 120, borderRadius: 2, overflow: "hidden", marginBottom: 24 }}>
          <img src={PHOTOS.congress} alt="Congrès"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(60%)" }} />
          <div style={{ position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,.88) 0%, rgba(0,0,0,.2) 100%)" }} />
          <div style={{ position: "absolute", bottom: 16, left: 20 }}>
            <div style={hl({ fontSize: 20, color: "#fff" })}>{tr.mark_timeline}</div>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 42, top: 0, bottom: 0, width: 1, background: "#161616" }} />
          {timeline.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 14, marginBottom: 16, alignItems: "flex-start" }}>
              <div style={hl({ minWidth: 36, color: RED, fontSize: 13, textAlign: "right",
                paddingTop: 5, fontWeight: 700 })}>{item.year}</div>
              <div style={{ width: 12, height: 12, borderRadius: "50%",
                background: typeColor[item.type] || "#333",
                border: `2px solid ${DARK}`, marginTop: 7, flexShrink: 0, zIndex: 1 }} />
              <div style={{ background: "#0f0f0f", border: "1px solid #161616",
                borderRadius: 2, padding: "10px 14px", flex: 1 }}>
                <p style={bd({ fontSize: 13, color: "#888", lineHeight: 1.65, margin: 0,
                  fontStyle: "italic", fontWeight: 300 })}>
                  {tx(item.event, lang)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang]             = useState("fr");
  const [section, setSection]       = useState("meta");
  const [metaSubTab, setMetaSubTab] = useState("lawsuits");
  const { data, loading, error }    = useData();
  const tr = T[lang];

  if (loading) return <Loading />;
  if (error) return (
    <div style={{ background: DARK, minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", flexDirection: "column", gap: 12 }}>
      <div style={hl({ fontSize: 22, color: RED })}>Erreur de chargement</div>
      <div style={bd({ fontSize: 14, color: "#555" })}>{error}</div>
    </div>
  );

  const { CONTINENTS, ALL_LAWSUITS, META_ENV, ZUCKERBERG } = data;
  const won     = ALL_LAWSUITS.filter(l => l.status === "won").length;
  const settled = ALL_LAWSUITS.filter(l => l.status === "settled").length;
  const ongoing = ALL_LAWSUITS.filter(l => l.status === "ongoing").length;

  return (
    <div style={{ fontFamily: "Georgia, serif", background: DARK, minHeight: "100vh", color: "#e8e0d0" }}>
      <style>{FONTS}</style>

      {/* TICKER */}
      <div style={{ background: RED, padding: "6px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
        <div style={{ display: "inline-block", animation: "ticker 35s linear infinite" }}>
          <span style={bd({ fontSize: 11, letterSpacing: ".1em", fontWeight: 600 })}>
            {tr.ticker}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tr.ticker}
          </span>
        </div>
      </div>

      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "12px 20px", borderBottom: "1px solid #111" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: RED,
            animation: "pulse 2s infinite" }} />
          <span style={bd({ fontSize: 10, color: "#333", letterSpacing: ".25em",
            textTransform: "uppercase" })}>markzuckerbergisintrouble.com</span>
        </div>
        <div style={{ display: "flex", gap: 0, border: "1px solid #1e1e1e", borderRadius: 2, overflow: "hidden" }}>
          {["fr", "en"].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              padding: "5px 12px", background: lang === l ? RED : "transparent",
              color: lang === l ? "#fff" : "#444",
              fontFamily: "'Source Sans 3', sans-serif", fontSize: 11,
              fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase"
            }}>{l}</button>
          ))}
        </div>
      </div>

      {/* HERO — style couverture magazine */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src={PHOTOS.privacy} alt="Hero"
          style={{ width: "100%", height: "55vw", maxHeight: 420, objectFit: "cover",
            objectPosition: "center", filter: "grayscale(70%) contrast(1.2)" }} />
        <div style={{ position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(10,10,10,.3) 0%, rgba(10,10,10,.97) 85%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column",
          justifyContent: "flex-end", padding: "0 20px 36px", textAlign: "center", alignItems: "center" }}>
          <div style={bd({ fontSize: 10, letterSpacing: ".35em", color: RED,
            textTransform: "uppercase", marginBottom: 14, fontWeight: 600 })}>{tr.tagline}</div>
          <h1 style={hl({ fontSize: "clamp(34px,9vw,78px)", lineHeight: 1.02, color: "#f0ebe0",
            fontWeight: 900, marginBottom: 12, textShadow: "0 2px 20px rgba(0,0,0,.5)" })}>
            Mark Zuckerberg<br />
            <span style={{ color: RED, fontStyle: "italic" }}>Is In Trouble.</span>
          </h1>
          <p style={bd({ fontSize: 14, color: "#666", maxWidth: 480, margin: "0 auto 28px",
            lineHeight: 1.8, fontWeight: 300 })}>{tr.subtitle}</p>

          {/* Stats bar */}
          <div style={{ display: "inline-flex", border: "1px solid #1e1e1e", borderRadius: 2,
            overflow: "hidden", background: "rgba(10,10,10,.8)" }}>
            {[
              { n: ALL_LAWSUITS.length, label: tr.stat_total,   color: "#e8e0d0" },
              { n: won,                 label: tr.stat_won,      color: "#2ecc71" },
              { n: settled,             label: tr.stat_settled,  color: "#f39c12" },
              { n: ongoing,             label: tr.stat_ongoing,  color: "#3498db" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "12px 18px", borderRight: i < 3 ? "1px solid #1a1a1a" : "none" }}>
                <div style={hl({ fontSize: 26, color: s.color, lineHeight: 1, fontWeight: 900 })}>{s.n}</div>
                <div style={bd({ fontSize: 10, color: "#444", marginTop: 4, letterSpacing: ".08em",
                  textTransform: "uppercase" })}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NAV PRINCIPALE */}
      <div style={{ borderBottom: `1px solid ${RED}`, background: "#080808",
        position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex" }}>
          {[{ id: "meta", label: tr.nav_meta }, { id: "mark", label: tr.nav_mark }].map(s => (
            <button key={s.id} onClick={() => setSection(s.id)} style={{
              flex: 1, padding: "13px",
              background: section === s.id ? RED : "transparent",
              color: section === s.id ? "#fff" : "#444",
              fontFamily: "'Source Sans 3', sans-serif", fontSize: 12,
              fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase",
              borderBottom: section === s.id ? "none" : "none"
            }}>{s.label}</button>
          ))}
        </div>
        {section === "meta" && (
          <div style={{ maxWidth: 860, margin: "0 auto", display: "flex",
            borderTop: "1px solid #111" }}>
            {[{ id: "lawsuits", label: tr.tab_lawsuits }, { id: "env", label: tr.tab_env }].map(t => (
              <button key={t.id} onClick={() => setMetaSubTab(t.id)} style={{
                padding: "9px 18px",
                background: metaSubTab === t.id ? "#0f0f0f" : "transparent",
                color: metaSubTab === t.id ? RED : "#444",
                fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, fontWeight: 600,
                letterSpacing: ".1em", textTransform: "uppercase",
                borderBottom: metaSubTab === t.id ? `2px solid ${RED}` : "2px solid transparent"
              }}>{t.label}</button>
            ))}
          </div>
        )}
      </div>

      {/* CONTENU */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 16px 64px" }}>
        {section === "meta" && metaSubTab === "lawsuits" &&
          <MetaTab lang={lang} CONTINENTS={CONTINENTS} ALL_LAWSUITS={ALL_LAWSUITS} />}
        {section === "meta" && metaSubTab === "env" &&
          <EnvTab lang={lang} META_ENV={META_ENV} />}
        {section === "mark" &&
          <MarkTab lang={lang} ZUCKERBERG={ZUCKERBERG} />}
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid #111", padding: "24px 16px", textAlign: "center" }}>
        <div style={hl({ fontSize: 16, color: "#1e1e1e", marginBottom: 8, letterSpacing: ".05em" })}>
          markzuckerbergisintrouble.com
        </div>
        <p style={bd({ fontSize: 11, color: "#2a2a2a", lineHeight: 1.7, maxWidth: 500, margin: "0 auto" })}>
          {tr.footer_disclaimer}
        </p>
      </div>
    </div>
  );
}
