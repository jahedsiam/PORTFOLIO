/* ============================================================
   EDIT THIS FILE to change your videos, pictures and photo.

   1. Upload your .mp4 files into the "videos" folder.
   2. Upload cover pictures (optional) into the "images" folder.
   3. Make sure each "url" below matches the exact file name you uploaded.

   - url:      "videos/file-name.mp4"  (your own uploaded file)
   - thumbImg: "images/cover.jpg"       (optional - if left out, the first
                                         frame of the video is used as cover)
   - orient:   "landscape" (16:9) or "portrait" (9:16 reels)
   - category: Product Videos | Reels | Ads | Explainers
               (a new category name creates a new filter tab)
   To add a video: copy one line, change the values.
   To remove a video: delete its line.
   ============================================================ */

/* Your portrait photo, e.g. "images/me.jpg" (leave "" to show the JS monogram) */
var ABOUT_PHOTO = "";

/* The big showreel at the top */
var SHOWREEL = { title: "Showreel 2026", category: "Showreel", url: "videos/showreel.mp4", orient: "landscape" };

var VIDEOS = [
{ title: "Lumio \u2014 Product Launch", category: "Product Videos", url: "videos/product-1.mp4", orient: "landscape", thumb: 0 },
{ title: "Vantage9 Meta Ad",           category: "Ads",            url: "videos/ad-1.mp4",      orient: "landscape", thumb: 2 },
{ title: "Qubit Explainer",            category: "Explainers",     url: "videos/explainer-1.mp4", orient: "landscape", thumb: 3 },
{ title: "Finch Brand Film",           category: "Product Videos", url: "videos/product-2.mp4", orient: "landscape", thumb: 5 },
{ title: "Nova Labs Launch Ad",        category: "Ads",            url: "videos/ad-2.mp4",      orient: "landscape", thumb: 2 },
{ title: "Qubit Feature Demo",         category: "Product Videos", url: "videos/product-3.mp4", orient: "landscape", thumb: 0 },
{ title: "Northpeak Promo Reel",       category: "Reels",          url: "videos/reel-1.mp4",    orient: "portrait",  thumb: 1 },
{ title: "Orbital \u2014 App Teaser",   category: "Reels",          url: "videos/reel-2.mp4",    orient: "portrait",  thumb: 4 },
{ title: "Cedarline TikTok Hook",      category: "Reels",          url: "videos/reel-3.mp4",    orient: "portrait",  thumb: 1 }
];
