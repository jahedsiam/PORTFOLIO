import crypto from "node:crypto";

const DAY = 24 * 3600 * 1000;
const secret = () => process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || "";
const sign = (v) => crypto.createHmac("sha256", secret()).update(v).digest("hex");

export function passwordOk(input) {
  const real = process.env.ADMIN_PASSWORD || "";
  if (!real || typeof input !== "string") return false;
  const a = crypto.createHash("sha256").update(input).digest();
  const b = crypto.createHash("sha256").update(real).digest();
  return crypto.timingSafeEqual(a, b);
}

export function makeCookie() {
  const exp = String(Date.now() + 14 * DAY);
  const val = exp + "." + sign(exp);
  return "adm=" + val + "; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=" + 14 * 24 * 3600;
}
export const clearCookie = () => "adm=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0";

export function isAuthed(req) {
  if (!secret()) return false;
  const m = /(?:^|;\s*)adm=([^;]+)/.exec(req.headers.cookie || "");
  if (!m) return false;
  const [exp, sig] = m[1].split(".");
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  const good = sign(exp);
  if (sig.length !== good.length) return false;
  return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(good));
}

export function requireAuth(req, res) {
  if (isAuthed(req)) return true;
  res.status(401).json({ error: "unauthorized" });
  return false;
}
