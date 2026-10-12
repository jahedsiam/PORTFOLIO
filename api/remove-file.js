import { del } from "@vercel/blob";
import { requireAuth } from "./_lib/auth.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  if (!requireAuth(req, res)) return;
  try {
    const url = req.body && req.body.url;
    const host = new URL(url).hostname;
    if (!host.endsWith(".blob.vercel-storage.com")) return res.status(400).json({ error: "not a blob url" });
    await del(url);
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(400).json({ error: String(e && e.message || e) });
  }
}
