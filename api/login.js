import { passwordOk, makeCookie, clearCookie, isAuthed, readJson } from "./_lib/auth.js";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method === "GET") return res.status(200).json({ authed: isAuthed(req) });
  if (req.method === "DELETE") { res.setHeader("Set-Cookie", clearCookie()); return res.status(200).json({ ok: true }); }
  if (req.method !== "POST") return res.status(405).end();
  const body = await readJson(req);
  const pw = body && body.password;
  if (!passwordOk(pw)) {
    await new Promise((r) => setTimeout(r, 900));
    return res.status(401).json({ error: "Wrong password" });
  }
  res.setHeader("Set-Cookie", makeCookie());
  res.status(200).json({ ok: true });
}
