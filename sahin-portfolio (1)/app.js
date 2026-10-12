
var ICONS = {
film:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5" fill="currentColor" fill-opacity=".16"/><path d="M3 9.5h18M3 14.5h18M8 5v14M16 5v14"/></svg>',
reel:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2.5" width="10" height="19" rx="3" fill="currentColor" fill-opacity=".16"/><path d="M10.5 9.3 15 12l-4.5 2.7z" fill="currentColor" fill-opacity=".9" stroke="none"/></svg>',
target:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5" fill="currentColor" fill-opacity=".14"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/></svg>',
sparkles:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M11 3.5l1.6 4L17 9l-4.4 1.5L11 15l-1.6-4.5L5 9l4.4-1.5z" fill="currentColor" fill-opacity=".16"/><path d="M18 13.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" fill="currentColor" fill-opacity=".16"/></svg>',
search:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6.5" fill="currentColor" fill-opacity=".16"/><path d="M20 20l-3.8-3.8"/></svg>',
pen:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l1.2-4L15.5 5.7a2.1 2.1 0 0 1 3 3L8.2 18.8 4 20z" fill="currentColor" fill-opacity=".16"/><path d="M13.8 7.4l2.8 2.8"/></svg>',
scissors:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="6.5" cy="6.5" r="2.5" fill="currentColor" fill-opacity=".16"/><circle cx="6.5" cy="17.5" r="2.5" fill="currentColor" fill-opacity=".16"/><path d="M8.6 7.9 20 16.5M8.6 16.1 20 7.5"/></svg>',
rocket:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c2.8 1.9 4.3 4.9 4.3 8l-1.8 2.2h-5L7.7 11C7.7 7.9 9.2 4.9 12 3z" fill="currentColor" fill-opacity=".16"/><circle cx="12" cy="9.3" r="1.4"/><path d="M9.5 15.5l-2 3.2M14.5 15.5l2 3.2M12 15.4v3.3"/></svg>',
youtube:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="6" width="19" height="12" rx="4" fill="currentColor" fill-opacity=".16"/><path d="M10.5 9.3 15 12l-4.5 2.7z" fill="currentColor" fill-opacity=".9" stroke="none"/></svg>',
instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="5" fill="currentColor" fill-opacity=".16"/><circle cx="12" cy="12" r="3.8"/><circle cx="16.6" cy="7.4" r="1" fill="currentColor" stroke="none"/></svg>',
linkedin:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="4" fill="currentColor" fill-opacity=".16"/><path d="M7.6 10.5V16"/><circle cx="7.6" cy="7.8" r="1"/><path d="M11 16v-3.3a2.1 2.1 0 0 1 4.2 0V16"/></svg>',
x:         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="currentColor" fill-opacity=".16"/><path d="M8 8l8 8M16 8l-8 8"/></svg>',
behance:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="4" width="17" height="16" rx="4" fill="currentColor" fill-opacity=".16"/><path d="M6.5 9h2.4a1.6 1.6 0 0 1 0 3.2H6.5zM6.5 12.2h2.7a1.7 1.7 0 0 1 0 3.4H6.5V12.2zM13.6 13.8h4a2 2 0 0 0-3.9-.6 2 2 0 0 0 3.5 1.7M14.3 9.2h2.6"/></svg>'
};
var POSTERS = [
"radial-gradient(120% 120% at 20% 10%, rgba(99,102,241,.4), transparent 50%), radial-gradient(120% 120% at 85% 90%, rgba(99,102,241,.5), transparent 55%), linear-gradient(135deg,#0e1030,#1a1140 60%,#0a0a1c)",
"radial-gradient(120% 120% at 80% 15%, rgba(99,102,241,.45), transparent 50%), radial-gradient(120% 120% at 10% 90%, rgba(99,102,241,.4), transparent 55%), linear-gradient(135deg,#101033,#241046 60%,#0a0a1c)",
"radial-gradient(120% 120% at 50% 0%, rgba(99,102,241,.45), transparent 55%), linear-gradient(160deg,#0b1030,#162a5a 70%,#08081a)",
"radial-gradient(120% 120% at 15% 20%, rgba(99,102,241,.5), transparent 50%), linear-gradient(135deg,#061826,#0a2140 60%,#07081a)",
"radial-gradient(120% 120% at 85% 20%, rgba(99,102,241,.35), transparent 50%), radial-gradient(120% 120% at 20% 90%, rgba(99,102,241,.45), transparent 55%), linear-gradient(135deg,#1a0f2e,#120a2c 60%,#09091c)",
"radial-gradient(120% 120% at 50% 10%, rgba(99,102,241,.4), transparent 50%), radial-gradient(120% 120% at 50% 100%, rgba(99,102,241,.45), transparent 55%), linear-gradient(160deg,#0a1230,#0e1640 70%,#07081a)"
];
function parseVideo(url) {
if (!url) return null;
var gd = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
if (gd) return { kind: "iframe", src: "https://drive.google.com/file/d/" + gd[1] + "/preview" };
var yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
if (yt) return { kind: "iframe", src: "https://www.youtube.com/embed/" + yt[1] + "?autoplay=1&rel=0&modestbranding=1" };
var vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
if (vm) return { kind: "iframe", src: "https://player.vimeo.com/video/" + vm[1] + "?autoplay=1" };
if (/\.(mp4|webm|mov)(\?|$)/i.test(url)) return { kind: "video", src: url };
return { kind: "iframe", src: url };
}
var landscapeGrid = document.getElementById("landscapeGrid");
var reelsRow = document.getElementById("reelsRow");
var filtersEl = document.getElementById("filters");
var playSVG = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
function makeCard(v) {
var card = document.createElement("div");
card.className = "vcard";
card.setAttribute("data-category", v.category);
card.setAttribute("data-orient", v.orient);
var bg = v.thumbImg ? ("center/cover no-repeat url('" + v.thumbImg + "')") : POSTERS[(v.thumb || 0) % POSTERS.length];
card.innerHTML =
'<div class="vthumb">' +
'<div class="vthumb-bg" style="background:' + bg + '"></div>' +
'<div class="vthumb-grain"></div>' +
'<span class="vcat">' + v.category + '</span>' +
(v.orient === "portrait" ? '<span class="vbadge-vert">9:16 REEL</span>' : '') +
'<div class="vplay"><div class="circle">' + playSVG + '</div></div>' +
'</div>' +
'<div class="vmeta"><span class="t">' + v.title + '</span><span class="c">Play ▶</span></div>';
if (!v.thumbImg && /\.(mp4|webm|mov)(\?|$)/i.test(v.url)) {
var tv = document.createElement("video");
tv.src = v.url + "#t=0.5"; tv.muted = true; tv.preload = "metadata"; tv.setAttribute("playsinline", "");
tv.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:cover";
card.querySelector(".vthumb-bg").appendChild(tv);
}
card.addEventListener("click", function () { openLightbox(v); });
return card;
}
var landscapeVideos = VIDEOS.filter(function (v) { return v.orient !== "portrait"; });
var reelVideos = VIDEOS.filter(function (v) { return v.orient === "portrait"; });
landscapeVideos.forEach(function (v) { landscapeGrid.appendChild(makeCard(v)); });
reelVideos.forEach(function (v) { reelsRow.appendChild(makeCard(v)); });
var cats = ["All"];
landscapeVideos.forEach(function (v) { if (cats.indexOf(v.category) === -1) cats.push(v.category); });
cats.forEach(function (c, i) {
var b = document.createElement("button");
b.className = "filter-tab" + (i === 0 ? " active" : "");
b.textContent = c;
b.addEventListener("click", function () {
document.querySelectorAll(".filter-tab").forEach(function (t) { t.classList.remove("active"); });
b.classList.add("active");
landscapeGrid.querySelectorAll(".vcard").forEach(function (card) {
card.hidden = !(c === "All" || card.getAttribute("data-category") === c);
});
});
filtersEl.appendChild(b);
});
var lb = document.getElementById("lightbox");
var lbStage = document.getElementById("lbStage");
var lbInner = document.getElementById("lbInner");
var lbTitle = document.getElementById("lbTitle");
var lbCat = document.getElementById("lbCat");
function openLightbox(v) {
var parsed = parseVideo(v.url);
lbInner.classList.toggle("portrait", v.orient === "portrait");
lbTitle.textContent = v.title;
lbCat.textContent = v.category;
lbStage.innerHTML = "";
if (parsed && parsed.kind === "iframe") {
var f = document.createElement("iframe");
f.src = parsed.src;
f.allow = "autoplay; fullscreen; picture-in-picture";
f.setAttribute("allowfullscreen", "");
lbStage.appendChild(f);
} else if (parsed && parsed.kind === "video") {
var vid = document.createElement("video");
vid.src = parsed.src; vid.controls = true; vid.autoplay = true; vid.playsInline = true; vid.setAttribute("controlsList", "nodownload");
lbStage.appendChild(vid);
}
var fb = document.createElement("div");
fb.className = "lb-fallback";
fb.innerHTML = "Loading player… if the video doesn't appear, <a href='" + v.url + "' target='_blank' rel='noopener'>open it in a new tab ↗</a>";
lbStage.appendChild(fb);
lb.classList.add("open");
document.body.style.overflow = "hidden";
}
function closeLightbox() {
lb.classList.remove("open");
lbStage.innerHTML = "";
document.body.style.overflow = "";
}
document.getElementById("lbClose").addEventListener("click", closeLightbox);
lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLightbox(); });
if (!SHOWREEL.thumbImg && /\.(mp4|webm|mov)(\?|$)/i.test(SHOWREEL.url)) {
var rp0 = document.querySelector(".reel-poster");
if (rp0) { var sv = document.createElement("video"); sv.src = SHOWREEL.url + "#t=0.5"; sv.muted = true; sv.preload = "metadata"; sv.setAttribute("playsinline", ""); sv.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:cover"; rp0.appendChild(sv); }
}
if (SHOWREEL.thumbImg) { var rp = document.querySelector(".reel-poster"); if (rp) rp.style.background = "center/cover no-repeat url('" + SHOWREEL.thumbImg + "')"; }
document.querySelector(".reel-frame").addEventListener("click", function () { openLightbox(SHOWREEL); });
(function () {
var m = document.getElementById("marquee");
if (m) m.innerHTML += m.innerHTML;
})();
(function () {
var btn = document.getElementById("copyBtn");
var emailEl = document.getElementById("email");
btn.addEventListener("click", function () {
var email = emailEl.textContent.trim();
if (navigator.clipboard) {
navigator.clipboard.writeText(email).then(function () {
var t = btn.textContent; btn.textContent = "Copied ✓";
setTimeout(function () { btn.textContent = t; }, 1600);
}).catch(selectEmail);
} else selectEmail();
function selectEmail() {
var r = document.createRange(); r.selectNode(emailEl);
var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
}
});
})();
(function () {
document.querySelectorAll("[data-icon]").forEach(function (el) {
var n = el.getAttribute("data-icon");
if (ICONS[n]) el.innerHTML = ICONS[n];
});
})();
(function () {
var f = document.getElementById("aboutPhoto");
if (f && typeof ABOUT_PHOTO === "string" && ABOUT_PHOTO) {
f.innerHTML = '<img src="' + ABOUT_PHOTO + '" alt="Jahedul Islam Sahin" loading="lazy">';
}
})();
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
a.addEventListener("click", function (e) {
var id = a.getAttribute("href");
if (id.length > 1) { var el = document.querySelector(id); if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); } }
});
});
(function () {
var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduce) return;
document.documentElement.classList.add("reveal-ready");
var io = new IntersectionObserver(function (entries) {
entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
})();
(function () {
var tl = document.getElementById("timeline");
if (!tl) return;
var fill = document.getElementById("tlFill");
function update() {
var r = tl.getBoundingClientRect();
var vh = window.innerHeight || document.documentElement.clientHeight;
var p = (vh * 0.5 - r.top) / (r.height || 1);
p = Math.max(0, Math.min(1, p));
if (fill) fill.style.height = (p * 100) + "%";
}
window.addEventListener("scroll", update, { passive: true });
window.addEventListener("resize", update);
update();
var io2 = new IntersectionObserver(function (es) {
es.forEach(function (e) { if (e.isIntersecting) e.target.classList.add("in"); });
}, { threshold: 0.25 });
tl.querySelectorAll(".tl-step").forEach(function (s) { io2.observe(s); });
})();
(function () {
var ps = Array.prototype.slice.call(document.querySelectorAll(".review p"));
if (!ps.length) return;
ps.forEach(function (p) { p.setAttribute("data-full", p.textContent); });
var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduce) return; // leave full text visible
ps.forEach(function (p) { p.textContent = ""; });
function typeIt(p) {
var text = p.getAttribute("data-full") || "";
var caret = document.createElement("span");
caret.className = "caret";
var n = 0;
(function step() {
if (n <= text.length) {
p.textContent = text.slice(0, n);
p.appendChild(caret);
n++;
setTimeout(step, 16);
} else {
setTimeout(function () { if (caret.parentNode) caret.parentNode.removeChild(caret); }, 1000);
}
})();
}
var io = new IntersectionObserver(function (entries) {
entries.forEach(function (en) {
if (en.isIntersecting) {
var p = en.target;
io.unobserve(p);
var i = ps.indexOf(p);
setTimeout(function () { typeIt(p); }, (i % 3) * 180);
}
});
}, { threshold: 0.35 });
ps.forEach(function (p) { io.observe(p); });
})();
(function () {
var track = document.getElementById("heroTrack");
var screenEl = document.getElementById("heroScreen");
var frame = document.querySelector(".reel-frame");
var heroInner = document.querySelector(".hero-inner");
var cta = document.querySelector(".reel-cta");
if (!track || !screenEl || !frame) return;
var desk = window.matchMedia("(min-width: 901px)");
var rm = window.matchMedia("(prefers-reduced-motion: reduce)");
var ticking = false;
function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
function lerp(a, b, t) { return a + (b - a) * t; }
function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
function centerY() { // frame centre inside the stage, unaffected by transforms
var y = 0, el = frame;
while (el && el !== screenEl) { y += el.offsetTop; el = el.offsetParent; }
return y + frame.offsetHeight / 2;
}
function clearAll() {
frame.style.transform = ""; frame.style.borderRadius = ""; frame.style.removeProperty("--cs");
if (heroInner) { heroInner.style.opacity = ""; heroInner.style.transform = ""; heroInner.style.pointerEvents = ""; }
if (cta) cta.style.opacity = "";
}
function render() {
ticking = false;
if (!desk.matches || rm.matches) { clearAll(); return; }
var vw = document.documentElement.clientWidth, vh = window.innerHeight || 1;
var r = track.getBoundingClientRect();
var run = r.height - vh;
var raw = run > 0 ? clamp(-r.top / run, 0, 1) : 0;
var p = ease(clamp(raw / 0.62, 0, 1)); // expands over the first ~60%, then holds at full size
var w0 = frame.offsetWidth, h0 = frame.offsetHeight;
var sT = Math.max(1, Math.min(vw * 0.985 / w0, (vh - 16) / h0));
var s = 1 + (sT - 1) * p;
var ty = (vh / 2 - centerY()) * p;
frame.style.transform = "translate3d(0," + ty.toFixed(1) + "px,0) scale(" + s.toFixed(4) + ")";
frame.style.borderRadius = (lerp(10, 12, p) / s).toFixed(2) + "px";
frame.style.setProperty("--cs", (lerp(1, 1.3, p) / s).toFixed(4));
if (heroInner) {
var fade = clamp(p * 2.2, 0, 1);
heroInner.style.opacity = (1 - fade).toFixed(3);
heroInner.style.transform = "translate3d(0," + (-44 * clamp(p * 1.5, 0, 1)).toFixed(1) + "px,0)";
heroInner.style.pointerEvents = fade > 0.9 ? "none" : "";
}
if (cta) cta.style.opacity = (1 - clamp(p * 3, 0, 1)).toFixed(3);
}
function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(render); } }
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
if (desk.addEventListener) { desk.addEventListener("change", onScroll); rm.addEventListener("change", onScroll); }
render();
})();
(function () {
var fine = window.matchMedia("(pointer: fine)").matches;
var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var reelTrack = document.getElementById("reelTrack");
var reelStage = document.getElementById("reelStage");
var reelFrame = reelStage ? reelStage.querySelector(".reel-frame") : null;
var reelGlow = document.getElementById("reelGlow");
var heroInner = document.querySelector(".hero-inner");
function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
if (reelTrack && reelStage && reelFrame && !reduce) {
// Scroll-expand is DESKTOP ONLY (>900px). On tablet/mobile the card is a static full-width card.
var desktopMQ = window.matchMedia("(min-width: 901px)");
function clearReelStyles() {
reelStage.style.width = "";
reelFrame.style.borderRadius = "";
reelFrame.style.transform = "";
if (heroInner) heroInner.style.opacity = "";
}
var reelTick = false;
function renderReel() {
reelTick = false;
if (!desktopMQ.matches) { clearReelStyles(); return; }
var vh = window.innerHeight || 1;
var r = reelTrack.getBoundingClientRect();
var scrollable = r.height - vh;
var raw = scrollable > 0 ? clamp(-r.top / scrollable, 0, 1) : 0;
var p = easeOutCubic(clamp(raw / 0.85, 0, 1)); // expand completes by 85%, then dwells full-screen
reelStage.style.width = lerp(89, 100, p).toFixed(2) + "%";
reelFrame.style.borderRadius = lerp(24, 6, p).toFixed(1) + "px";
reelFrame.style.transform = "perspective(1400px) rotateX(" + lerp(6, 0, p).toFixed(2) + "deg) translateY(" + lerp(30, 0, p).toFixed(1) + "px)";
if (reelGlow) reelGlow.style.setProperty("--reel-par", lerp(-20, 20, raw).toFixed(1) + "px");
if (heroInner) {
var hr = heroInner.getBoundingClientRect();
heroInner.style.opacity = clamp(0.4 + 0.6 * (hr.bottom / vh), 0.4, 1).toFixed(3);
}
}
function onReelScroll() { if (!reelTick) { reelTick = true; requestAnimationFrame(renderReel); } }
window.addEventListener("scroll", onReelScroll, { passive: true });
window.addEventListener("resize", function () { onReelScroll(); });
renderReel();
}
// Pointer glows only make sense with a fine pointer and motion allowed
if (!fine || reduce) return;
var hero = document.querySelector(".hero");
var heroSpot = document.querySelector(".hero-spotlight");
var cardSel = ".service, .vcard, .glass-card, .review";
var queued = false, lastE = null, lastCard = null;
function frame() {
queued = false;
var e = lastE; if (!e) return;
if (hero && heroSpot) {
var hr = hero.getBoundingClientRect();
if (e.clientX >= hr.left && e.clientX <= hr.right && e.clientY >= hr.top && e.clientY <= hr.bottom) {
heroSpot.style.setProperty("--mx", (e.clientX - hr.left) + "px");
heroSpot.style.setProperty("--my", (e.clientY - hr.top) + "px");
hero.classList.add("spot-on");
} else { hero.classList.remove("spot-on"); }
}
var card = e.target && e.target.closest ? e.target.closest(cardSel) : null;
if (card) {
var cr = card.getBoundingClientRect();
card.style.setProperty("--gx", (e.clientX - cr.left) + "px");
card.style.setProperty("--gy", (e.clientY - cr.top) + "px");
lastCard = card;
}
}
window.addEventListener("pointermove", function (e) {
lastE = e;
if (!queued) { queued = true; requestAnimationFrame(frame); }
}, { passive: true });
})();
