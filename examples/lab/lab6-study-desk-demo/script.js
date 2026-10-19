// ══════════════════════════════════════════════════════════════
// ANSWERS.JS — EVERY EXERCISE WORKED OUT
//
// The nine sections below answer the nine exercises in order and carry
// the same labels as script.js. The page is the finished shell.
// ══════════════════════════════════════════════════════════════

// ═══ 1 · The week on the cover ───────────────────────────────
const week = "Mon 19 — Sun 25 October";
const yourName = "Newton";
const yourId = "00000000d";
document.querySelector("#week").textContent = week;
document.querySelector("#byline").textContent =
  "Planned by " + yourName + " (" + yourId + ")";

// ═══ 2 · The hours add up ────────────────────────────────────
function hoursLine(label, hours) {
  return label + " · " + hours + " h";
}
document.querySelector("#lectures").textContent = hoursLine("Lectures", 12);
document.querySelector("#labs").textContent = hoursLine("Labs", 3);
document.querySelector("#own-study").textContent = hoursLine("Own study", 10);

// ═══ 3 · The timetable's logged time ─────────────────────────
const studied = { COMP3421: 130, COMP2021: 45, COMP3171: 0 };
function timeLine(minutes) {
  const hours = (minutes - minutes % 60) / 60;
  const rest = minutes % 60;
  return hours + " h " + rest + " min";
}
const slots = document.querySelectorAll(".slot");
for (const slot of slots) {
  const course = slot.querySelector(".course").textContent;
  slot.querySelector(".logged").textContent = timeLine(studied[course]);
}

// ═══ 4 · Count what is due ───────────────────────────────────
function showDueCount() {
  const allRows = document.querySelectorAll(".deadline");
  const doneRows = document.querySelectorAll(".deadline.is-done");
  document.querySelector("#due-count").textContent =
    allRows.length + " due · " + doneRows.length + " done";
}
showDueCount();

// ═══ 5 · Tick what is done ───────────────────────────────────
const rows = document.querySelectorAll(".deadline");
const boxes = document.querySelectorAll(".deadline input");
for (let i = 0; i < boxes.length; i++) {
  if (boxes[i].checked === true) {
    rows[i].classList.add("is-done");
  }
  boxes[i].addEventListener("change", function () {
    rows[i].classList.toggle("is-done");
    showDueCount();
  });
}

// ═══ 6 · One listener for the list ───────────────────────────
const picked = document.querySelector("#picked");
document.querySelector("#deadlines").addEventListener("click", function (e) {
  if (e.target.tagName !== "LI") {
    return;
  }
  const previous = document.querySelector(".deadline.is-selected");
  if (previous !== null) {
    previous.classList.remove("is-selected");
  }
  e.target.classList.add("is-selected");
  picked.textContent = "You are looking at: " + e.target.textContent;
  document.querySelector("#countdown-task").textContent =
    "Time left for: " + e.target.textContent;
});

// ═══ 7 · The countdown ───────────────────────────────────────
let seconds = 600;
const countdown = document.querySelector("#countdown");
const timer = setInterval(function () {
  seconds = seconds - 1;
  countdown.textContent = "Submit in " + seconds + " s";
  if (seconds === 0) {
    clearInterval(timer);
    countdown.textContent = "Time is up.";
  }
}, 1000);

// ═══ 8 · The study log ───────────────────────────────────────
const goal = 600;
document.querySelector("#log-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const course = document.querySelector("#log-course").value;
  const minutes = Number(document.querySelector("#minutes").value);
  studied[course] = studied[course] + minutes;
  const slotList = document.querySelectorAll(".slot");
  for (const slot of slotList) {
    if (slot.querySelector(".course").textContent === course) {
      slot.querySelector(".logged").textContent = timeLine(studied[course]);
    }
  }
  let total = 0;
  for (const key in studied) {
    total = total + studied[key];
  }
  document.querySelector("#logged").textContent =
    "Logged " + minutes + " min for " + course + " · " + timeLine(total) + " this week";
  document.querySelector("#own-study").textContent = "Own study · " + timeLine(total);
  document.querySelector("#goal-count").textContent = timeLine(total) + " of 10 h";
  document.querySelector("#goal-fill").style.width = (total / goal) * 100 + "%";
});

// ═══ 9 · Add a deadline ──────────────────────────────────────
document.querySelector("#deadline-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const date = document.querySelector("#date").value;
  const course = document.querySelector("#course").value;
  const task = document.querySelector("#task").value;
  const li = document.createElement("li");
  li.classList.add("deadline");
  li.classList.add("is-new");
  li.textContent = date + " · " + course + " · " + task;
  const box = document.createElement("input");
  box.type = "checkbox";
  box.addEventListener("change", function () {
    li.classList.toggle("is-done");
    showDueCount();
  });
  li.appendChild(box);
  document.querySelector("#deadlines").appendChild(li);
  showDueCount();
  document.querySelector("#added").textContent =
    "Added: " + date + " · " + course + " · " + task;
  document.querySelector("#date").value = "";
  document.querySelector("#task").value = "";
});
