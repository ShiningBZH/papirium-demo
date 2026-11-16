"use strict";

// Midnight in Paris on December 1, 2026 (UTC+01:00).
const RELEASE_DATE = "2026-12-01T00:00:00+01:00";
const DEMO_URL = "https://vetea.itch.io/papirium-official-demo";

const target = new Date(RELEASE_DATE).getTime();
const fields = ["days", "hours", "minutes", "seconds"].map(id => document.getElementById(id));
const button = document.getElementById("download");
let timer;

function updateCountdown() {
  const remaining = Math.max(0, Math.ceil((target - Date.now()) / 1000));
  const values = [
    Math.floor(remaining / 86400),
    Math.floor(remaining / 3600) % 24,
    Math.floor(remaining / 60) % 60,
    remaining % 60
  ];
  fields.forEach((el, i) => { el.textContent = String(values[i]).padStart(2, "0"); });

  if (remaining === 0) {
    clearInterval(timer);
    document.getElementById("title").textContent = "Your turn to play.";
    document.getElementById("intro").textContent = "The wait is over. Time for Papirium on Mega Drive.";
    button.href = DEMO_URL;
    button.removeAttribute("aria-disabled");
    button.textContent = "Download on itch.io";
    document.getElementById("status").textContent = "Get the Papirium demo on itch.io. Enjoy!";
  }
}

timer = setInterval(updateCountdown, 1000);
updateCountdown();

