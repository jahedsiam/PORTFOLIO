/* Scans the videos/ folder and writes videos.json (runs automatically on every Vercel deploy).
   Folder = category. Folders named reels / reel / vertical / shorts = 9:16 reels, others = 16:9.
   videos/showreel.mp4 = hero showreel. */
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const DIR = path.join(ROOT, "videos");
const EXT = /\.(mp4|webm|mov)$/i;
const REEL_DIRS = ["reels", "reel", "vertical", "shorts"];
const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

const enc = (rel) => rel.split("/").map(encodeURIComponent).join("/");
const titleCase = (s) =>
  s.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim().replace(/\b\w/g, (c) => c.toUpperCase());
const fileTitle = (f) => titleCase(f.replace(EXT, "").replace(/^\d+[\s._-]*/, "")) || "Untitled";

function walk(dir, rel) {
  let out = [];
  if (!fs.existsSync(dir)) return out;
  fs.readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => collator.compare(a.name, b.name))
    .forEach((e) => {
      const r = rel ? rel + "/" + e.name : e.name;
      if (e.isDirectory()) out = out.concat(walk(path.join(dir, e.name), r));
      else if (EXT.test(e.name)) out.push(r);
    });
  return out;
}

const files = walk(DIR, "");
let showreel = null;
const videos = [];

files.forEach((rel) => {
  const parts = rel.split("/");
  const name = parts[parts.length - 1];
  if (parts.length === 1 && /^showreel\./i.test(name)) { showreel = "videos/" + enc(rel); return; }
  const folder = parts.length > 1 ? parts[0] : "";
  const portrait = REEL_DIRS.indexOf(folder.toLowerCase()) !== -1;
  videos.push({
    title: fileTitle(name),
    category: portrait ? "Reels" : folder ? titleCase(folder) : "Videos",
    url: "videos/" + enc(rel),
    orient: portrait ? "portrait" : "landscape",
  });
});

fs.writeFileSync(path.join(ROOT, "videos.json"), JSON.stringify({ showreel, videos }, null, 2));
console.log("videos.json: " + videos.length + " video(s)" + (showreel ? " + showreel" : ""));
