// src/hooks/useData.js
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase.js";

function buildContinents(rows) {
  const map = {};
  for (const row of rows) {
    const { continent, country_code, country_name, country_flag, ...rest } = row;
    if (!map[continent]) map[continent] = {};
    if (!map[continent][country_code]) {
      map[continent][country_code] = {
        flag: country_flag,
        name: country_name,
        continent,
        lawsuits: [],
      };
    }
    map[continent][country_code].lawsuits.push({
      id:        rest.id,
      title:     { fr: rest.title_fr,   en: rest.title_en   },
      year:      rest.year,
      status:    rest.status,
      category:  rest.category,
      plaintiff: rest.plaintiff,
      amount:    rest.amount,
      summary:   { fr: rest.summary_fr, en: rest.summary_en },
      source:    rest.source,
    });
  }
  return map;
}

function buildEnv(rows) {
  return rows.map(r => ({
    id:    r.id,
    label: { fr: r.label_fr, en: r.label_en },
    value: r.value,
    note:  { fr: r.note_fr,  en: r.note_en  },
    trend: r.trend,
  }));
}

function buildZuckerberg(stats, timeline, personalSuits, controversies) {
  return {
    stats: stats.map(r => ({
      id:    r.id,
      label: { fr: r.label_fr, en: r.label_en },
      value: r.value,
      color: r.color,
    })),
    timeline: timeline.map(r => ({
      year:  r.year,
      event: { fr: r.event_fr, en: r.event_en },
      type:  r.type,
    })),
    personalSuits: personalSuits.map(r => ({
      id:     r.id,
      title:  { fr: r.title_fr,  en: r.title_en  },
      year:   r.year,
      result: { fr: r.result_fr, en: r.result_en },
      court:  r.court,
      reason: { fr: r.reason_fr, en: r.reason_en },
    })),
    controversies: controversies.map(r => ({
      id:      r.id,
      title:   { fr: r.title_fr,   en: r.title_en   },
      year:    r.year,
      summary: { fr: r.summary_fr, en: r.summary_en },
      source:  r.source,
    })),
  };
}

export function useData() {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    async function fetchAll() {
      try {
        const [
          { data: lawsuits,      error: e1 },
          { data: environment,   error: e2 },
          { data: stats,         error: e3 },
          { data: timeline,      error: e4 },
          { data: personalSuits, error: e5 },
          { data: controversies, error: e6 },
        ] = await Promise.all([
          supabase.from("lawsuits").select("*").order("year"),
          supabase.from("environment").select("*"),
          supabase.from("zuck_stats").select("*"),
          supabase.from("zuck_timeline").select("*").order("id"),
          supabase.from("zuck_personal_suits").select("*").order("year"),
          supabase.from("zuck_controversies").select("*").order("year"),
        ]);

        const err = e1 || e2 || e3 || e4 || e5 || e6;
        if (err) throw err;

        const CONTINENTS   = buildContinents(lawsuits);
        const ALL_LAWSUITS = lawsuits;
        const META_ENV     = buildEnv(environment);
        const ZUCKERBERG   = buildZuckerberg(stats, timeline, personalSuits, controversies);

        setData({ CONTINENTS, ALL_LAWSUITS, META_ENV, ZUCKERBERG });
      } catch (err) {
        console.error("Supabase fetch error:", err);
        setError(err.message || "Erreur de chargement");
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, []);

  return { data, loading, error };
}
