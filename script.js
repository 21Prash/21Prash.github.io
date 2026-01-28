/* ===========================
   CONFIG – CHANGE THESE
=========================== */

// Ceremony start time (ISO with timezone!)
const EVENT_START_ISO = "2026-03-14T14:00:00+00:00";

// YouTube embed URL
const YOUTUBE_EMBED =
  "https://www.youtube.com/embed/VIDEO_ID_HERE?rel=0";

/* ===========================
   DO NOT EDIT BELOW
=========================== */

const $ = (id) => document.getElementById(id);
const eventDate = new Date(EVENT_START_ISO);

// Apply YouTube embed
$("ytFrame").src = YOUTUBE_EMBED;

// Localised date/time
$("tzName").textContent =
  Intl.DateTimeFormat().resolvedOptions().timeZone;

$("eventLocal").textContent =
  new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short"
  }).format(eventDate);

// Countdown logic
function tick() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    ["d","h","m","s"].forEach(id => $(id).textContent = "00");
    $("statusText").textContent = "It’s time • We’re live!";
    $("message").textContent =
      "The ceremony has begun ✨ If needed, refresh the page.";
    return;
  }

  const total = Math.floor(diff / 1000);
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;

  $("d").textContent = String(d).padStart(2,"0");
  $("h").textContent = String(h).padStart(2,"0");
  $("m").textContent = String(m).padStart(2,"0");
  $("s").textContent = String(s).padStart(2,"0");
}

tick();
setInterval(tick, 1000);

// Footer year
$("year").textContent = new Date().getFullYear();
