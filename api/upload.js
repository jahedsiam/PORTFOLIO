import { handleUpload } from "@vercel/blob/client";
import { isAuthed } from "./_lib/auth.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const json = await handleUpload({
      body: req.body,
      request: req,
      onBeforeGenerateToken: async () => {
        if (!isAuthed(req)) throw new Error("unauthorized");
        return {
          allowedContentTypes: ["video/mp4", "video/webm", "video/quicktime", "image/jpeg", "image/png", "image/webp"],
          maximumSizeInBytes: 1024 * 1024 * 1024,
          addRandomSuffix: true,
        };
      },
      onUploadCompleted: async () => {},
    });
    res.status(200).json(json);
  } catch (e) {
    res.status(400).json({ error: String(e && e.message || e) });
  }
}
