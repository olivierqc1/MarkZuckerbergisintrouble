// App.jsx — Composant principal
import { useState } from "react";
import { lawsuits, zuckerbergData, envData, statusConfig } from "./data.js";

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Sans+3:wght@300;400;600&display=swap');`;

// ── Sous-composant: carte de poursuite ──────────────────────────────────────
function LawsuitCard({ l, expanded, onToggle }) {
  const s = statusConfig[l.status];
  const isOpen = expanded === l.id;
  return (
    <div onClick={onToggle} style={{ background: "#111", border: `1px solid ${isOpen ? "#c0392b" : "#222"}`, borderRadius: "8px", overflow: "hidden", cursor: "pointer", transition: "border-color 0.2s, transform 0.2s", marginBottom: "10px" }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-1px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      <div style={{ padding: "18px 20px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
        <div style={{ minWidth: "90px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, padding: "4px 8px", borderRadius: "3px", letterSpacing: "0.08em", display: "inline-block", background: s.bg, color: s.text, border: `1px solid ${s.border}`, fontFamily: "Source Sans 3, sans-serif" }}>
            {s.label}
          </span>
          <div style={{ fontSize: "12px", color: "#555", marginTop: "6px", fontFamily: "Source Sans 3, sans-serif" }}>{l.year}</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
            <h3 style={{ fontSize: "18px", color: "#e8e0d0", lineHeight: 1.3, fontFamily: "Playfair Display, Georgia, serif", margin: 0 }}>{l.title}</h3>
            {l.amount && <span style={{ fontSize: "20px", color: "#c0392b", fontFamily: "Playfair Display, serif", whiteSpace: "nowrap" }}>{l.amount}</span>}
          </div>
          <div style={{ display: "flex", gap: "8px", marginTop: "8px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "11px", color: "#666", background: "#1a1a1a", padding: "3px 8px", borderRadius: "3px", fontFamily: "Source Sans 3, sans-serif" }}>{l.category}</span>
            <span style={{ fontSize: "12px", color: "#555", fontFamily: "Source Sans 3, sans-serif" }}>vs {l.plaintiff}</span>
          </div>
        </div>
        <span style={{ color: "#555", fontSize: "14px", marginTop: "4px" }}>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div style={{ padding: "0 20px 20px", borderTop: "1px solid #1e1e1e" }}>
          <p style={{ fontSize: "14px", color: "#aaa", lineHeight: 1.7, margin: "14px 0", fontFamily: "Source Sans 3, sans-serif" }}>{l.summary}</p>
          <a href={l.source} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
            style={{ color: "#c0392b", fontSize: "13px", fontFamily: "Source Sans 3, sans-serif", textDecoration: "none", fontWeight: 600 }}>
            → Source primaire ↗
          </a>
        </div>
      )}
    </div>
  );
}

// ── Sous-composant: onglet META ─────────────────────────────────────────────
function MetaTab() {
  const [expanded, setExpanded] = useState(null);
  const [continent, setContinent] = useState(Object.keys(lawsuits)[0]);
  const [country, setCountry] = useState(Object.keys(lawsuits[Object.keys(lawsuits)[0]])[0]);

  const continents = Object.keys(lawsuits);
  const countries = Object.keys(lawsuits[continent]);
  const currentLawsuits = lawsuits[continent][country];

  const allFlat = Object.values(lawsuits).flatMap(c => Object.values(c).flat());
  const totalAmount = "$2.8B+";

  const handleContinent = (c) => {
    setContinent(c);
    setCountry(Object.keys(lawsuits[c])[0]);
    setExpanded(null);
  };

  return (
    <div>
      {/* Meta hero banner */}
      <div style={{ borderRadius: "12px", overflow: "hidden", position: "relative", marginBottom: "32px", height: "160px" }}>
        <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=80" alt="Meta" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.25 }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 32px", background: "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, transparent 100%)" }}>
          <div>
            <div style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#c0392b", textTransform: "uppercase", marginBottom: "8px" }}>Dossier Meta Platforms</div>
            <div style={{ fontFamily: "Playfair Display, serif", fontSize: "32px", color: "#e8e0d0" }}>
              {allFlat.length} poursuites · <span style={{ color: "#c0392b" }}>{totalAmount}</span> en amendes
            </div>
          </div>
        </div>
      </div>

      {/* Continent selector */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
        {continents.map(c => (
          <button key={c} onClick={() => handleContinent(c)} style={{ padding: "8px 16px", background: continent === c ? "#c0392b" : "#1a1a1a", border: `1px solid ${continent === c ? "#c0392b" : "#333"}`, borderRadius: "4px", color: continent === c ? "#fff" : "#777", cursor: "pointer", fontFamily: "Source Sans 3, sans-serif", fontSize: "13px", fontWeight: 600, transition: "all 0.2s" }}>
            {c}
          </button>
        ))}
      </div>

      {/* Country selector */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "28px", flexWrap: "wrap" }}>
        {countries.map(c => (
          <button key={c} onClick={() => { setCountry(c); setExpanded(null); }} style={{ padding: "6px 14px", background: country === c ? "#2a0a0a" : "transparent", border: `1px solid ${country === c ? "#c0392b" : "#2a2a2a"}`, borderRadius: "4px", color: country === c ? "#e8e0d0" : "#555", cursor: "pointer", fontFamily: "Source Sans 3, sans-serif", fontSize: "13px", transition: "all 0.2s" }}>
            {c} ({lawsuits[continent][c].length})
          </button>
        ))}
      </div>

      {/* Cards */}
      {currentLawsuits.map(l => (
        <LawsuitCard key={l.id} l={l} expanded={expanded} onToggle={() => setExpanded(expanded === l.id ? null : l.id)} />
      ))}
    </div>
  );
}

// ── Sous-composant: onglet MARK ─────────────────────────────────────────────
function MarkTab() {
  const { stats, timeline, personalLawsuits } = zuckerbergData;
  return (
    <div>
      {/* Banner */}
      <div style={{ borderRadius: "12px", overflow: "hidden", position: "relative", marginBottom: "32px", height: "160px" }}>
        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80" alt="Tribunal" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.2 }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 32px", background: "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, transparent 100%)" }}>
          <div>
            <div style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#c0392b", textTransform: "uppercase", marginBottom: "8px" }}>Dossier Personnel</div>
            <div style={{ fontFamily: "Playfair Display, serif", fontSize: "32px", color: "#e8e0d0" }}>Mark Zuckerberg</div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", marginBottom: "36px" }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: "#111", border: "1px solid #222", borderRadius: "8px", padding: "20px" }}>
            <div style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: "11px", color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>{s.label}</div>
            <div style={{ fontFamily: "Playfair Display, serif", fontSize: "32px", color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Poursuites personnelles */}
      <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "22px", color: "#e8e0d0", marginBottom: "16px" }}>
        Tentatives de mise en cause <span style={{ color: "#c0392b" }}>personnelle</span>
      </h3>
      {personalLawsuits.map((p, i) => (
        <div key={i} style={{ background: "#111", border: "1px solid #2a0a0a", borderRadius: "8px", padding: "18px 20px", marginBottom: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "8px" }}>
            <span style={{ fontFamily: "Playfair Display, serif", fontSize: "17px", color: "#e8e0d0" }}>{p.title}</span>
            <span style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: "12px", color: "#888", background: "#1a1a1a", padding: "3px 8px", borderRadius: "3px", whiteSpace: "nowrap" }}>{p.year} — {p.result}</span>
          </div>
          <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: "13px", color: "#666", lineHeight: 1.6 }}>{p.reason}</p>
        </div>
      ))}

      {/* Timeline */}
      <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "22px", color: "#e8e0d0", margin: "32px 0 20px" }}>Chronologie</h3>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: "48px", top: 0, bottom: 0, width: "1px", background: "#2a2a2a" }} />
        {timeline.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "18px", marginBottom: "20px", alignItems: "flex-start" }}>
            <div style={{ minWidth: "42px", fontFamily: "Playfair Display, serif", color: "#c0392b", fontSize: "16px", textAlign: "right", paddingTop: "4px" }}>{item.year}</div>
            <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: item.type === "testimony" ? "#c0392b" : item.type === "scandal" ? "#e67e22" : item.type === "whistleblower" ? "#9b59b6" : "#333", border: "2px solid #0a0a0a", marginTop: "5px", zIndex: 1, flexShrink: 0 }} />
            <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: "6px", padding: "12px 16px", flex: 1 }}>
              <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: "14px", color: "#aaa", lineHeight: 1.6, margin: 0 }}>{item.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Sous-composant: onglet ENVIRONNEMENT ────────────────────────────────────
function EnvTab() {
  return (
    <div>
      <div style={{ borderRadius: "12px", overflow: "hidden", position: "relative", marginBottom: "32px", height: "200px" }}>
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" alt="Data center" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.25 }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 32px", background: "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, transparent 100%)" }}>
          <div style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#2ecc71", textTransform: "uppercase", marginBottom: "8px" }}>Impact environnemental</div>
          <div style={{ fontFamily: "Playfair Display, serif", fontSize: "28px", color: "#e8e0d0", lineHeight: 1.3 }}>L'empreinte cachée<br /><span style={{ color: "#c0392b" }}>de l'IA de Meta</span></div>
        </div>
      </div>

      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: "15px", color: "#777", lineHeight: 1.7, marginBottom: "32px" }}>
        L'explosion de l'IA générative chez Meta a causé une hausse massive de la consommation d'énergie et d'eau. Meta prévoit de dépenser $135 milliards en data centers en 2026 seul — pendant que ses émissions réelles augmentent malgré les promesses de neutralité carbone.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
        {envData.map((d, i) => (
          <div key={i} style={{ background: "#111", border: "1px solid #1a2a1a", borderRadius: "8px", padding: "22px" }}>
            <div style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: "11px", color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", lineHeight: 1.4 }}>{d.label}</div>
            <div style={{ fontFamily: "Playfair Display, serif", fontSize: "30px", color: "#2ecc71", lineHeight: 1 }}>{d.value}</div>
            <div style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: "12px", color: "#555", marginTop: "8px" }}>{d.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── COMPOSANT PRINCIPAL ─────────────────────────────────────────────────────
export default function App() {
  const [section, setSection] = useState("meta");
  const [subTab, setSubTab] = useState("lawsuits");

  const allLawsuits = Object.values(lawsuits).flatMap(c => Object.values(c).flat());
  const won = allLawsuits.filter(l => l.status === "won").length;

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#0a0a0a", minHeight: "100vh", color: "#e8e0d0" }}>
      <style>{`
        ${FONTS}
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes ticker { 0%{transform:translateX(100%)} 100%{transform:translateX(-200%)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #c0392b; }
        button { transition: all 0.2s; }
        button:hover { opacity: 0.85; }
      `}</style>

      {/* TICKER */}
      <div style={{ background: "#c0392b", padding: "7px 0", overflow: "hidden" }}>
        <div style={{ animation: "ticker 25s linear infinite", whiteSpace: "nowrap", fontFamily: "Source Sans 3, sans-serif", fontSize: "12px", letterSpacing: "0.1em", fontWeight: 600 }}>
          🔴 BREAKING Mars 2026 — Meta perd 2 procès en 2 jours &nbsp;·&nbsp; $375M Nouveau-Mexique &nbsp;·&nbsp; $6M Los Angeles &nbsp;·&nbsp; Action -8% &nbsp;·&nbsp; 2000+ poursuites en attente &nbsp;·&nbsp; Zuckerberg témoigne sous serment devant jury pour la 1ère fois &nbsp;·&nbsp;
        </div>
      </div>

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0505 60%, #0a0a0a 100%)", padding: "50px 20px 40px", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 60%, rgba(192,57,43,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c0392b", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "#666", textTransform: "uppercase" }}>Dossier d'intérêt public — mis à jour en continu</span>
        </div>
        <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(38px, 8vw, 82px)", lineHeight: 1.05, color: "#e8e0d0", fontWeight: 900, marginBottom: "16px" }}>
          Mark Zuckerberg<br /><span style={{ color: "#c0392b" }}>Is In Trouble.</span>
        </h1>
        <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: "17px", color: "#666", maxWidth: "560px", margin: "0 auto 36px", lineHeight: 1.7, fontWeight: 300 }}>
          Toutes les poursuites documentées contre Meta et son fondateur. Uniquement des faits vérifiés, uniquement des sources primaires.
        </p>
        {/* Stats bar */}
        <div style={{ display: "inline-flex", gap: "2px", border: "1px solid #2a2a2a", borderRadius: "8px", overflow: "hidden" }}>
          {[
            { n: allLawsuits.length, label: "Poursuites", color: "#e8e0d0" },
            { n: won, label: "Victoires vs Meta", color: "#2ecc71" },
            { n: allLawsuits.filter(l=>l.status==="settled").length, label: "Réglées", color: "#f39c12" },
            { n: allLawsuits.filter(l=>l.status==="ongoing").length, label: "En cours", color: "#3498db" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "16px 24px", background: "#0f0f0f", borderRight: i < 3 ? "1px solid #2a2a2a" : "none" }}>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: "32px", color: s.color, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: "11px", color: "#555", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN NAV — META vs MARK */}
      <div style={{ borderBottom: "2px solid #c0392b", background: "#0d0d0d", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex" }}>
          {[
            { id: "meta", label: "📋 META PLATFORMS" },
            { id: "mark", label: "👤 MARK ZUCKERBERG" },
          ].map(s => (
            <button key={s.id} onClick={() => setSection(s.id)} style={{ flex: 1, padding: "16px", background: section === s.id ? "#c0392b" : "transparent", color: section === s.id ? "#fff" : "#666", border: "none", cursor: "pointer", fontFamily: "Source Sans 3, sans-serif", fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em" }}>
              {s.label}
            </button>
          ))}
        </div>

        {/* Sub-tabs META */}
        {section === "meta" && (
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", borderTop: "1px solid #1e1e1e" }}>
            {[
              { id: "lawsuits", label: "⚖️ Poursuites par pays" },
              { id: "env", label: "🌍 Environnement" },
            ].map(t => (
              <button key={t.id} onClick={() => setSubTab(t.id)} style={{ padding: "11px 20px", background: subTab === t.id ? "#1a0505" : "transparent", color: subTab === t.id ? "#c0392b" : "#555", border: "none", cursor: "pointer", fontFamily: "Source Sans 3, sans-serif", fontSize: "13px", fontWeight: 600, borderBottom: subTab === t.id ? "2px solid #c0392b" : "2px solid transparent" }}>
                {t.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "36px 20px 60px" }}>
        {section === "meta"  && subTab === "lawsuits" && <MetaTab />}
        {section === "meta"  && subTab === "env"      && <EnvTab />}
        {section === "mark"                           && <MarkTab />}
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid #1a1a1a", padding: "28px 20px", textAlign: "center" }}>
        <div style={{ fontFamily: "Playfair Display, serif", fontSize: "20px", color: "#2a2a2a", marginBottom: "8px" }}>markzuckerbergisintrouble.com</div>
        <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: "12px", color: "#3a3a3a", lineHeight: 1.6 }}>
          Site d'intérêt public. Toutes les informations proviennent de sources primaires vérifiables.<br />
          Aucune affiliation avec Meta Platforms Inc. Ce site ne constitue pas un avis légal.
        </p>
      </div>
    </div>
  );
}
