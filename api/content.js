import { list, put } from "@vercel/blob";
import { requireAuth, readJson } from "./_lib/auth.js";

const PATH = "site/content.json";

async function readContent() {
  const { blobs } = await list({ prefix: PATH, limit: 1 });
  const b = blobs.find((x) => x.pathname === PATH);
  if (!b) return null;
  const r = await fetch(b.url + "?v=" + encodeURIComponent(b.uploadedAt), { cache: "no-store" });
  return r.ok ? r.json() : null;
}

const s = (v, n) => (typeof v === "string" ? v.slice(0, n) : "");
// keep only known string keys from an object, each capped
function pick(obj, spec) {
  const o = {}, src = obj || {};
  for (const k in spec) o[k] = s(src[k], spec[k]);
  return o;
}

function clean(c) {
  c = c || {};
  const out = { showreel: null, videos: [], settings: {} };
  if (c.showreel && c.showreel.url) out.showreel = { url: s(c.showreel.url, 2000), title: s(c.showreel.title, 120) };
  (Array.isArray(c.videos) ? c.videos : []).slice(0, 300).forEach((v) => {
    if (!v || !v.url) return;
    out.videos.push({
      id: s(v.id, 60), title: s(v.title, 120) || "Untitled", category: s(v.category, 60) || "Videos",
      url: s(v.url, 2000), orient: v.orient === "portrait" ? "portrait" : "landscape", thumb: s(v.thumb, 2000),
    });
  });
  const st = c.settings || {};
  out.settings = {
    email: s(st.email, 200), aboutPhoto: s(st.aboutPhoto, 2000),
    socials: pick(st.socials, { youtube: 500, instagram: 500, linkedin: 500, x: 500 }),
  };

  out.brand = pick(c.brand, { dot: 4, name: 60, cta: 40, full: 120, copyright: 200 });
  out.hero = pick(c.hero, { badge: 120, title: 200, sub: 400, btnPrimary: 60, btnGhost: 60 });
  out.services = Object.assign(pick(c.services, { eyebrow: 60, heading: 160, sub: 300 }), {
    items: (Array.isArray(c.services && c.services.items) ? c.services.items : []).slice(0, 12)
      .map((x) => pick(x, { icon: 40, title: 120, desc: 400 })),
  });
  out.work = pick(c.work, { eyebrow: 60, heading: 160, sub: 300, reelsHeading: 80, reelsSub: 200 });
  out.about = Object.assign(pick(c.about, { eyebrow: 60, heading: 160, lede: 500 }), {
    body: (Array.isArray(c.about && c.about.body) ? c.about.body : []).slice(0, 8).map((t) => s(t, 1000)).filter(Boolean),
    stats: (Array.isArray(c.about && c.about.stats) ? c.about.stats : []).slice(0, 8).map((x) => pick(x, { n: 20, l: 60 })),
  });
  out.process = pick(c.process, {
    eyebrow: 60, heading: 160, sub: 300,
    s0t: 80, s0d: 400, s1t: 80, s1d: 400, s2t: 80, s2d: 400, s3t: 80, s3d: 400,
  });
  out.trust = Object.assign(pick(c.trust, { label: 120 }), {
    brands: (Array.isArray(c.trust && c.trust.brands) ? c.trust.brands : []).slice(0, 20).map((t) => s(t, 40)).filter(Boolean),
  });
  out.reviews = Object.assign(pick(c.reviews, { eyebrow: 60, heading: 160, score: 10, scoreText: 80 }), {
    items: (Array.isArray(c.reviews && c.reviews.items) ? c.reviews.items : []).slice(0, 30)
      .map((x) => pick(x, { quote: 600, name: 80, role: 100, initials: 4 })),
  });
  out.contact = pick(c.contact, { eyebrow: 60, heading: 200, sub: 300 });
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
      const c = clean(await readJson(req));
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
