// src/App.jsx
import { useState } from "react";
import { CONTINENTS, ALL_LAWSUITS, META_ENV, ZUCKERBERG, statusConfig } from "./data/index.js";
import T from "./data/translations.js";

const RED  = "#c0392b";
const hl   = (s) => ({ fontFamily: "Playfair Display, Georgia, serif", ...s });
const bd   = (s) => ({ fontFamily: "Source Sans 3, sans-serif", ...s });
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Sans+3:wght@300;400;600&display=swap');`;

// Helper — résout une string bilingue ou mono
const tx = (field, lang) => (field && typeof field === "object" ? field[lang] : field);

// ── LawsuitCard ─────────────────────────────────────────────────────────────
function LawsuitCard({ l, expanded, onToggle, lang, tr }) {
  const s = statusConfig[l.status];
  const open = expanded === l.id;
  const statusLabel = tr[`status_${l.status}`];
  const category = tr.categories[l.category] || l.category;

  return (
    <div
      onClick={onToggle}
      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-1px)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
      style={{ background: "#111", border: `1px solid ${open ? RED : "#222"}`, borderRadius: 8, marginBottom: 10, cursor: "pointer", transition: "border-color .2s, transform .15s" }}
    >
      {/* Header */}
      <div style={{ padding: "16px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
        <div style={{ minWidth: 90 }}>
          <span style={bd({ fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 3, letterSpacing: ".07em", display: "inline-block", background: s.bg, color: s.text, border: `1px solid ${s.border}` })}>
            {statusLabel}
          </span>
          <div style={bd({ fontSize: 12, color: "#555", marginTop: 5 })}>{l.year}</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
            <h3 style={hl({ fontSize: 17, color: "#e8e0d0", lineHeight: 1.3, margin: 0 })}>{tx(l.title, lang)}</h3>
            {l.amount && <span style={hl({ fontSize: 19, color: RED, whiteSpace: "nowrap" })}>{l.amount}</span>}
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 7, flexWrap: "wrap" }}>
            <span style={bd({ fontSize: 11, color: "#666", background: "#1a1a1a", padding: "2px 7px", borderRadius: 3 })}>{category}</span>
            <span style={bd({ fontSize: 12, color: "#555" })}>vs {l.plaintiff}</span>
          </div>
        </div>
        <span style={{ color: "#444", fontSize: 12, marginTop: 4 }}>{open ? "▲" : "▼"}</span>
      </div>

      {/* Expanded */}
      {open && (
        <div style={{ padding: "0 18px 18px", borderTop: "1px solid #1e1e1e" }}>
          <p style={bd({ fontSize: 14, color: "#aaa", lineHeight: 1.7, margin: "14px 0" })}>{tx(l.summary, lang)}</p>
          <a href={l.source} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
            style={bd({ color: RED, fontSize: 13, textDecoration: "none", fontWeight: 600 })}>
            {tr.label_source}
          </a>
        </div>
      )}
    </div>
  );
}

// ── MetaTab ─────────────────────────────────────────────────────────────────
function MetaTab({ lang }) {
  const tr = T[lang];
  const contNames = Object.keys(CONTINENTS);
  const [activeCont, setActiveCont] = useState(contNames[0]);
  const countryKeys = Object.keys(CONTINENTS[activeCont]);
  const [activeCountry, setActiveCountry] = useState(countryKeys[0]);
  const [expanded, setExpanded] = useState(null);

  const handleCont = (c) => { setActiveCont(c); setActiveCountry(Object.keys(CONTINENTS[c])[0]); setExpanded(null); };
  const handleCountry = (c) => { setActiveCountry(c); setExpanded(null); };

  const current = CONTINENTS[activeCont][activeCountry];
  const totalCountries = Object.values(CONTINENTS).flatMap(c => Object.keys(c)).length;

  return (
    <div>
      {/* Banner */}
      <div style={{ borderRadius: 10, overflow: "hidden", position: "relative", marginBottom: 28, height: 150 }}>
        <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=80" alt="Meta" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .2 }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 28px", background: "linear-gradient(90deg,rgba(0,0,0,.85) 0%,transparent 100%)" }}>
          <div>
            <div style={bd({ fontSize: 11, letterSpacing: ".2em", color: RED, textTransform: "uppercase", marginBottom: 6 })}>Dossier Meta Platforms</div>
            <div style={hl({ fontSize: 26, color: "#e8e0d0" })}>
              {ALL_LAWSUITS.length} {tr.banner_meta} {totalCountries} {tr.banner_countries}
            </div>
          </div>
        </div>
      </div>

      {/* Niveau 1 — Continents */}
      <div style={bd({ fontSize: 11, color: "#555", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 10 })}>{tr.label_continent}</div>
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {contNames.map(c => {
          const count = Object.values(CONTINENTS[c]).reduce((n, p) => n + p.lawsuits.length, 0);
          return (
            <button key={c} onClick={() => handleCont(c)} style={{ padding: "9px 18px", background: activeCont === c ? RED : "#161616", border: `1px solid ${activeCont === c ? RED : "#2a2a2a"}`, borderRadius: 5, color: activeCont === c ? "#fff" : "#777", cursor: "pointer", fontFamily: "Source Sans 3, sans-serif", fontSize: 13, fontWeight: 600, transition: "all .2s" }}>
              {c} ({count})
            </button>
          );
        })}
      </div>

      {/* Niveau 2 — Pays */}
      <div style={bd({ fontSize: 11, color: "#555", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 10 })}>{tr.label_country}</div>
      <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
        {Object.entries(CONTINENTS[activeCont]).map(([code, country]) => (
          <button key={code} onClick={() => handleCountry(code)} style={{ padding: "7px 14px", background: activeCountry === code ? "#1e0808" : "transparent", border: `1px solid ${activeCountry === code ? RED : "#252525"}`, borderRadius: 5, color: activeCountry === code ? "#e8e0d0" : "#555", cursor: "pointer", fontFamily: "Source Sans 3, sans-serif", fontSize: 13, transition: "all .2s" }}>
            {country.flag} {country.name} ({country.lawsuits.length})
          </button>
        ))}
      </div>

      {/* Niveau 3 — Poursuites */}
      <div style={bd({ fontSize: 11, color: "#555", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 14 })}>
        {tr.label_lawsuits} — {current.flag} {current.name}
      </div>
      {current.lawsuits.map(l => (
        <LawsuitCard key={l.id} l={l} expanded={expanded} lang={lang} tr={tr} onToggle={() => setExpanded(expanded === l.id ? null : l.id)} />
      ))}
    </div>
  );
}

// ── EnvTab ──────────────────────────────────────────────────────────────────
function EnvTab({ lang }) {
  const tr = T[lang];
  return (
    <div>
      <div style={{ borderRadius: 10, overflow: "hidden", position: "relative", marginBottom: 28, height: 180 }}>
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" alt="Data center" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .2 }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 28px", background: "linear-gradient(90deg,rgba(0,0,0,.85) 0%,transparent 100%)" }}>
          <div style={bd({ fontSize: 11, letterSpacing: ".2em", color: "#2ecc71", textTransform: "uppercase", marginBottom: 8 })}>{tr.env_label}</div>
          <div style={hl({ fontSize: 26, color: "#e8e0d0", lineHeight: 1.3 })}>
            {tr.env_title}<br /><span style={{ color: RED }}>{tr.env_subtitle}</span>
          </div>
        </div>
      </div>
      <p style={bd({ fontSize: 15, color: "#666", lineHeight: 1.8, marginBottom: 28 })}>{tr.env_body}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {META_ENV.map(d => (
          <div key={d.id} style={{ background: "#111", border: "1px solid #1a2a1a", borderRadius: 8, padding: 20 }}>
            <div style={bd({ fontSize: 11, color: "#555", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8, lineHeight: 1.4 })}>{tx(d.label, lang)}</div>
            <div style={hl({ fontSize: 28, color: "#2ecc71", lineHeight: 1 })}>{d.value}</div>
            <div style={bd({ fontSize: 12, color: "#555", marginTop: 7 })}>{tx(d.note, lang)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── MarkTab ─────────────────────────────────────────────────────────────────
function MarkTab({ lang }) {
  const tr = T[lang];
  const { stats, timeline, personalSuits } = ZUCKERBERG;
  const typeColor = { testimony: RED, scandal: "#e67e22", whistleblower: "#9b59b6", political: "#3498db", internal: "#e74c3c", legal: "#e67e22", founding: "#555", pr: "#444" };

  return (
    <div>
      {/* Banner */}
      <div style={{ borderRadius: 10, overflow: "hidden", position: "relative", marginBottom: 28, height: 150 }}>
        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80" alt="Tribunal" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .18 }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 28px", background: "linear-gradient(90deg,rgba(0,0,0,.88) 0%,transparent 100%)" }}>
          <div>
            <div style={bd({ fontSize: 11, letterSpacing: ".2em", color: RED, textTransform: "uppercase", marginBottom: 6 })}>{tr.mark_section}</div>
            <div style={hl({ fontSize: 30, color: "#e8e0d0" })}>Mark Zuckerberg</div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12, marginBottom: 32 }}>
        {stats.map(s => (
          <div key={s.id} style={{ background: "#111", border: "1px solid #222", borderRadius: 8, padding: 20 }}>
            <div style={bd({ fontSize: 11, color: "#555", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 })}>{tx(s.label, lang)}</div>
            <div style={hl({ fontSize: 30, color: s.color })}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Mise en cause personnelle */}
      <div style={bd({ fontSize: 11, color: "#555", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 14 })}>{tr.mark_personal}</div>
      {personalSuits.map(p => (
        <div key={p.id} style={{ background: "#111", border: "1px solid #2a0a0a", borderRadius: 8, padding: "16px 18px", marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
            <span style={hl({ fontSize: 16, color: "#e8e0d0" })}>{tx(p.title, lang)}</span>
            <span style={bd({ fontSize: 11, color: "#888", background: "#1a1a1a", padding: "3px 8px", borderRadius: 3 })}>{p.year} — {tx(p.result, lang)}</span>
          </div>
          <div style={bd({ fontSize: 12, color: "#555", marginBottom: 5 })}>{p.court}</div>
          <p style={bd({ fontSize: 13, color: "#666", lineHeight: 1.6 })}>{tx(p.reason, lang)}</p>
        </div>
      ))}

      {/* Timeline */}
      <div style={bd({ fontSize: 11, color: "#555", letterSpacing: ".15em", textTransform: "uppercase", margin: "32px 0 18px" })}>{tr.mark_timeline}</div>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 44, top: 0, bottom: 0, width: 1, background: "#222" }} />
        {timeline.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 16, marginBottom: 18, alignItems: "flex-start" }}>
            <div style={hl({ minWidth: 38, color: RED, fontSize: 15, textAlign: "right", paddingTop: 4 })}>{item.year}</div>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: typeColor[item.type] || "#333", border: "2px solid #0a0a0a", marginTop: 6, flexShrink: 0, zIndex: 1 }} />
            <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 6, padding: "11px 15px", flex: 1 }}>
              <p style={bd({ fontSize: 13, color: "#aaa", lineHeight: 1.65, margin: 0 })}>{tx(item.event, lang)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang]         = useState("fr");
  const [section, setSection]   = useState("meta");
  const [metaSubTab, setMetaSubTab] = useState("lawsuits");

  const tr   = T[lang];
  const won     = ALL_LAWSUITS.filter(l => l.status === "won").length;
  const settled = ALL_LAWSUITS.filter(l => l.status === "settled").length;
  const ongoing = ALL_LAWSUITS.filter(l => l.status === "ongoing").length;

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#0a0a0a", minHeight: "100vh", color: "#e8e0d0" }}>
      <style>{`
        ${FONTS}
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes ticker { 0%{transform:translateX(100%)} 100%{transform:translateX(-200%)} }
        @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:.4} }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: ${RED}; }
        button { transition: all .2s; cursor: pointer; border: none; }
      `}</style>

      {/* TICKER */}
      <div style={{ background: RED, padding: "7px 0", overflow: "hidden" }}>
        <div style={{ animation: "ticker 30s linear infinite", whiteSpace: "nowrap", ...bd({ fontSize: 12, letterSpacing: ".08em", fontWeight: 600 }) }}>
          {tr.ticker}
        </div>
      </div>

      {/* HEADER — logo + lang toggle */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 24px", borderBottom: "1px solid #181818" }}>
        <span style={bd({ fontSize: 11, color: "#444", letterSpacing: ".2em", textTransform: "uppercase" })}>markzuckerbergisintrouble.com</span>
        {/* Language toggle */}
        <div style={{ display: "flex", border: "1px solid #2a2a2a", borderRadius: 5, overflow: "hidden" }}>
          {["fr", "en"].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ padding: "6px 14px", background: lang === l ? RED : "transparent", color: lang === l ? "#fff" : "#555", fontFamily: "Source Sans 3, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#180404 55%,#0a0a0a 100%)", padding: "52px 20px 40px", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 50% 65%, rgba(192,57,43,.13) 0%, transparent 65%)`, pointerEvents: "none" }} />
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: RED, animation: "pulse 2s infinite" }} />
          <span style={bd({ fontSize: 11, letterSpacing: ".25em", color: "#555", textTransform: "uppercase" })}>{tr.tagline}</span>
        </div>
        <h1 style={hl({ fontSize: "clamp(36px,8vw,80px)", lineHeight: 1.05, color: "#e8e0d0", fontWeight: 900, marginBottom: 14 })}>
          Mark Zuckerberg<br /><span style={{ color: RED }}>Is In Trouble.</span>
        </h1>
        <p style={bd({ fontSize: 16, color: "#555", maxWidth: 520, margin: "0 auto 34px", lineHeight: 1.75, fontWeight: 300 })}>
          {tr.subtitle}
        </p>
        {/* Stats bar */}
        <div style={{ display: "inline-flex", border: "1px solid #222", borderRadius: 8, overflow: "hidden" }}>
          {[
            { n: ALL_LAWSUITS.length, label: tr.stat_total,   color: "#e8e0d0" },
            { n: won,                 label: tr.stat_won,      color: "#2ecc71" },
            { n: settled,             label: tr.stat_settled,  color: "#f39c12" },
            { n: ongoing,             label: tr.stat_ongoing,  color: "#3498db" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "14px 20px", background: "#0f0f0f", borderRight: i < 3 ? "1px solid #1e1e1e" : "none" }}>
              <div style={hl({ fontSize: 28, color: s.color, lineHeight: 1 })}>{s.n}</div>
              <div style={bd({ fontSize: 11, color: "#555", marginTop: 4 })}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN NAV */}
      <div style={{ borderBottom: "2px solid " + RED, background: "#0d0d0d", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex" }}>
          {[
            { id: "meta", label: tr.nav_meta },
            { id: "mark", label: tr.nav_mark },
          ].map(s => (
            <button key={s.id} onClick={() => setSection(s.id)} style={{ flex: 1, padding: "15px", background: section === s.id ? RED : "transparent", color: section === s.id ? "#fff" : "#555", fontFamily: "Source Sans 3, sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: ".08em" }}>
              {s.label}
            </button>
          ))}
        </div>

        {/* Meta sub-tabs */}
        {section === "meta" && (
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", borderTop: "1px solid #1e1e1e" }}>
            {[
              { id: "lawsuits", label: tr.tab_lawsuits },
              { id: "env",      label: tr.tab_env },
            ].map(t => (
              <button key={t.id} onClick={() => setMetaSubTab(t.id)} style={{ padding: "10px 20px", background: metaSubTab === t.id ? "#1a0505" : "transparent", color: metaSubTab === t.id ? RED : "#555", fontFamily: "Source Sans 3, sans-serif", fontSize: 13, fontWeight: 600, borderBottom: metaSubTab === t.id ? `2px solid ${RED}` : "2px solid transparent" }}>
                {t.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "36px 20px 60px" }}>
        {section === "meta" && metaSubTab === "lawsuits" && <MetaTab lang={lang} />}
        {section === "meta" && metaSubTab === "env"      && <EnvTab  lang={lang} />}
        {section === "mark"                              && <MarkTab lang={lang} />}
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid #141414", padding: "28px 20px", textAlign: "center" }}>
        <div style={hl({ fontSize: 18, color: "#222", marginBottom: 8 })}>markzuckerbergisintrouble.com</div>
        <p style={bd({ fontSize: 12, color: "#333", lineHeight: 1.6 })}>{tr.footer_disclaimer}</p>
      </div>
    </div>
  );
}
