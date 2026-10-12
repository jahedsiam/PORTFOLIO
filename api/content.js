import { list, put } from "@vercel/blob";
import { requireAuth } from "./_lib/auth.js";

const PATH = "site/content.json";

async function readContent() {
  const { blobs } = await list({ prefix: PATH, limit: 1 });
  const b = blobs.find((x) => x.pathname === PATH);
  if (!b) return null;
  const r = await fetch(b.url + "?v=" + encodeURIComponent(b.uploadedAt), { cache: "no-store" });
  return r.ok ? r.json() : null;
}

function clean(c) {
  const s = (v, n) => (typeof v === "string" ? v.slice(0, n) : "");
  const out = { showreel: null, videos: [], settings: {} };
  if (c && c.showreel && c.showreel.url) out.showreel = { url: s(c.showreel.url, 2000), title: s(c.showreel.title, 120) };
  (Array.isArray(c && c.videos) ? c.videos : []).slice(0, 300).forEach((v) => {
    if (!v || !v.url) return;
    out.videos.push({
      id: s(v.id, 60), title: s(v.title, 120) || "Untitled", category: s(v.category, 60) || "Videos",
      url: s(v.url, 2000), orient: v.orient === "portrait" ? "portrait" : "landscape", thumb: s(v.thumb, 2000),
    });
  });
  const st = (c && c.settings) || {};
  out.settings = {
    email: s(st.email, 200), aboutPhoto: s(st.aboutPhoto, 2000),
    socials: {
      youtube: s(st.socials && st.socials.youtube, 500), instagram: s(st.socials && st.socials.instagram, 500),
      linkedin: s(st.socials && st.socials.linkedin, 500), x: s(st.socials && st.socials.x, 500),
    },
  };
  return out;
}

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      res.setHeader("Cache-Control", "no-store");
      const c = await readContent();
      return res.status(200).json(c || { showreel: null, videos: [], settings: {}, empty: true });
    }
    if (req.method === "POST") {
      if (!requireAuth(req, res)) return;
      const c = clean(req.body);
      await put(PATH, JSON.stringify(c), {
        access: "public", contentType: "application/json", addRandomSuffix: false, allowOverwrite: true, cacheControlMaxAge: 60,
      });
      return res.status(200).json({ ok: true });
    }
    res.status(405).end();
  } catch (e) {
    res.status(500).json({ error: String(e && e.message || e) });
  }
}
