import { readJson } from "./_lib/auth.js";
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  const env = {
    hasPassword: !!process.env.ADMIN_PASSWORD,
    pwLen: (process.env.ADMIN_PASSWORD || "").length,
    hasSecret: !!process.env.ADMIN_SECRET,
    hasBlob: !!process.env.BLOB_READ_WRITE_TOKEN,
    method: req.method,
    bodyType: typeof req.body,
  };
  if (req.method === "POST") {
    const b = await readJson(req);
    env.parsedKeys = Object.keys(b || {});
    env.gotPwLen = (b && typeof b.password === "string") ? b.password.length : -1;
    env.match = !!process.env.ADMIN_PASSWORD && b && b.password === process.env.ADMIN_PASSWORD;
  }
  res.status(200).json(env);
}
