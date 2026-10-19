// ══════════════════════════════════════════════════════════════
// SCRIPT.JS — THE BEHAVIOUR OF THE PAGE               [ YOURS ]
//
// This is the only file you write in. training.html is the page:
// the cover, the printed week, the forms, and the style block that
// draws all of it. It is finished.
//
// The page is one planner with four blocks that feed each other:
// the teaching week, the due list, the study log and the countdown.
// Your job is the wiring between them.
//
// Every exercise finds its elements with document.querySelector, or
// document.querySelectorAll when it wants all of them. One API, any
// selector: an id is written "#week", a class is written ".deadline".
//
// The nine exercises run in order, top to bottom, and they lean on
// each other: exercise 3 keeps the minutes that exercise 7 adds to,
// exercise 4 counts what exercises 5 and 9 change, and exercise 6
// points the countdown at the row you pick. Keep your code in order
// and do not rename the variables.
//
// The six lab exercises print the aim, the steps and the code.
// The three homework exercises print the aim and the ids only.
// ══════════════════════════════════════════════════════════════

// ── Exercise 1 · The week on the cover ────────────────────────

// TODO 1 — put the week on the cover, and your name under it.
// Values first, then the page: three constants, then two elements
// found by their id. The week is the element with id "week"; the
// line under it is the id "byline".
// The byline has to read exactly:
//   Planned by <your name> (<your id>)
// Replace the name and the id with your own. The mark for this
// exercise is the page carrying YOUR name, not a borrowed one.
//                                                           [8 min]
// Aim: the cover carries the week, and the line under it carries
// your name and your student id, built from constants.
// Steps:
//   1. Three constants: the week, your name, your id.
//   2. querySelector("#week") finds the element; textContent writes
//      the week into it.
//   3. Join the name and the id into one string and write it into
//      the element with id byline.
// Now type it, just below:
//
// const week = "Mon 19 — Sun 25 October";
// const yourName = "Newton";
// const yourId = "00000000d";
// document.querySelector("#week").textContent = week;
// document.querySelector("#byline").textContent =
//   "Planned by " + yourName + " (" + yourId + ")";

// ── Exercise 2 · The hours add up ─────────────────────────────

// TODO 2 — one function, called three times with different labels.
// The three rows of "How the week adds up" are empty. Write one
// function that takes a label and a number of hours and returns the
// whole line, then call it once for each kind of hour. A function
// written once and called three times is the point of the exercise.
//                                                          [10 min]
// Aim: the three rows read "label · N h", all built by the same
// function.
// Steps:
//   1. Declare a function with two parameters, label and hours.
//   2. Have it return the label, the separator and the hours joined
//      into one string.
//   3. Call it for Lectures at 12, Labs at 3 and Own study at 10,
//      and write each result into its row.
// Now type it, just below:
//
// function hoursLine(label, hours) {
//   return label + " · " + hours + " h";
// }
// document.querySelector("#lectures").textContent = hoursLine("Lectures", 12);
// document.querySelector("#labs").textContent = hoursLine("Labs", 3);
// document.querySelector("#own-study").textContent = hoursLine("Own study", 10);

// ── Exercise 3 · The timetable's logged time ──────────────────

// TODO 3 — the teaching week shows the minutes logged for each
// course.
// Three courses are already printed in the page, each with an empty
// "not logged yet" slot on its right. The minutes live in one
// object, keyed by course name; the square brackets read the value
// for a key you work out at run time.
// Write a small function that turns a number of minutes into
// "H h M min" (the remainder operator and a division do it), then
// walk the slots: read each slot's course, look its minutes up in
// the object, and write the formatted time into that slot.
// Exercise 8 will reuse both the object and the function.
//                                                          [12 min]
// Aim: each course in the teaching week shows the time logged for
// it: COMP3421 2 h 10 min, COMP2021 0 h 45 min, COMP3171 0 h 0 min.
// Steps:
//   1. An object of minutes, keyed by course name.
//   2. A function that takes minutes and returns "H h M min": the
//      hours are the whole hours, the minutes are the remainder.
//   3. querySelectorAll for the slots; for each slot read its
//      .course, look the course up in the object with square
//      brackets, and write the function's result into its .logged.
// Now type it, just below:
//
// const studied = { COMP3421: 130, COMP2021: 45, COMP3171: 0 };
// function timeLine(minutes) {
//   const hours = (minutes - minutes % 60) / 60;
//   const rest = minutes % 60;
//   return hours + " h " + rest + " min";
// }
// const slots = document.querySelectorAll(".slot");
// for (const slot of slots) {
//   const course = slot.querySelector(".course").textContent;
//   slot.querySelector(".logged").textContent = timeLine(studied[course]);
// }

// ── Exercise 4 · Count what is due ────────────────────────────

// TODO 4 — the due list counts itself.
// The line above the list is empty. Count the rows and the finished
// ones and write "N due · M done" into it — as a function, because
// exercises 5 and 9 change the list and will call it again.
//                                                          [10 min]
// Aim: the line above the due list reads "3 due · 1 done".
// Steps:
//   1. Declare a function with no parameters, so it can be called
//      again after the list changes.
//   2. Inside it: querySelectorAll for the rows, and again for the
//      rows wearing is-done.
//   3. Write the two lengths into the line with id due-count,
//      joined as "N due · M done".
//   4. Call the function once, so the line is right on load.
// Now type it, just below:
//
// function showDueCount() {
//   const allRows = document.querySelectorAll(".deadline");
//   const doneRows = document.querySelectorAll(".deadline.is-done");
//   document.querySelector("#due-count").textContent =
//     allRows.length + " due · " + doneRows.length + " done";
// }
// showDueCount();

// ── Exercise 5 · Tick what is done ────────────────────────────

// TODO 5 — every tick box, and what a tick does to its row.
// The boxes are already in the page, and the first one is ticked.
// Walk the rows and the boxes together — they are in the same
// order — and for each box: make the row match the box on load, then
// listen for the box's change event and toggle is-done on that row.
// After a toggle, call the counting function from exercise 4: the
// count has to follow the ticks.
//                                                          [10 min]
// Aim: a ticked row is struck through; clicking a box strikes its
// row through and clicking again takes it back; the count line
// follows every change.
// Steps:
//   1. querySelectorAll for the rows and for the boxes inside them.
//   2. A counted loop over the boxes, with an index shared by both
//      lists.
//   3. If the box is checked, add is-done to that row.
//   4. Listen for the box's change event: toggle is-done on the row,
//      then call showDueCount().
// Now type it, just below:
//
// const rows = document.querySelectorAll(".deadline");
// const boxes = document.querySelectorAll(".deadline input");
// for (let i = 0; i < boxes.length; i++) {
//   if (boxes[i].checked === true) {
//     rows[i].classList.add("is-done");
//   }
//   boxes[i].addEventListener("change", function () {
//     rows[i].classList.toggle("is-done");
//     showDueCount();
//   });
// }

// ── Exercise 6 · One listener for the list ────────────────────

// TODO 6 — clicking a deadline picks it, and the countdown follows.
// One listener on the list covers every row, including rows added
// later, because the click bubbles up from the row to the list. The
// event object says which row was hit. A click on a tick box has the
// box as its target, so the guard lets the box do its own job.
// Picking a row also points the countdown at it: write
// "Time left for: <the row>" into the caption with id countdown-task.
//                                                          [10 min]
// Aim: clicking a deadline marks it as picked, unmarks the previous
// one, writes "You are looking at: ..." above the list, and makes
// the countdown caption read "Time left for: ..." for that row.
// Steps:
//   1. A variable for the line above the list, id picked.
//   2. addEventListener on the deadline list, for click.
//   3. If the thing clicked is not a row, stop: return.
//   4. Remove is-selected from the row that has it, if there is one.
//   5. Add is-selected to the row that was clicked and write its
//      text into the picked line.
//   6. Write the same row into the countdown caption, id
//      countdown-task.
// Now type it, just below:
//
// const picked = document.querySelector("#picked");
// document.querySelector("#deadlines").addEventListener("click", function (e) {
//   if (e.target.tagName !== "LI") {
//     return;
//   }
//   const previous = document.querySelector(".deadline.is-selected");
//   if (previous !== null) {
//     previous.classList.remove("is-selected");
//   }
//   e.target.classList.add("is-selected");
//   picked.textContent = "You are looking at: " + e.target.textContent;
//   document.querySelector("#countdown-task").textContent =
//     "Time left for: " + e.target.textContent;
// });

// ── Exercise 7 · The countdown ─────────────────────

// TODO 8 — the countdown runs for the deadline picked in the list.
// A timer runs code for you, over and over, until you stop it. Keep
// the handle the timer returns: without it you cannot stop it. The
// counter lives outside the timer's function, or it starts from the
// same number on every tick.
// The caption above it (exercise 6) says what the time is for; this
// exercise only makes the line itself count.
//                                                   [homework · 18 min]
// Aim: the line id countdown starts at 600 and loses one every
// second, reading "Submit in N s". At zero it stops and reads
// "Time is up."
//
// Your code goes here.

// ── Exercise 8 · The study log ─────────────────────

// TODO 7 — logging minutes moves the whole page.
// There is a form with a course picker, a minutes field and a line
// for the message. Submitting it must not reload the page. Add the
// minutes to that course's entry in the object from exercise 3, then
// update four places at once:
//   · the course's own row in the teaching week (the .logged slot),
//   · the "Own study" row of How the week adds up,
//   · the goal counter (id goal-count), as "H h M min of 10 h",
//   · the goal bar (id goal-fill), as the percentage of 600 minutes.
// and write a message into the line id logged. The running total is
// the sum of the object's values. The field gives you text: turn it
// into a number before adding, or "50" will glue onto a number.
//                                                   [homework · 18 min]
// Aim: logging 50 minutes for COMP3421 turns COMP3421's row from
// 2 h 10 min into 3 h 0 min, lifts the week to 3 h 45 min (the bar
// goes to 37.5%), writes "3 h 45 min of 10 h" into the counter and a
// message into id logged, and rewrites the Own study row. No reload.
//
// Your code goes here.

// ── Exercise 9 · Add a deadline ────────────────────

// TODO 9 — the date picker adds a row, and the page says so.
// The form has a date picker (id date, an ISO date like 2026-10-24),
// a course picker (id course) and a task field (id task). Submitting
// must append one more row to the due list, built like the printed
// rows: a tick box and the text "date · course · task". Give the new
// box the same change listener exercise 5 gave the others, so the new
// row can be ticked; then call showDueCount() and the row joins the
// count. No reload, and the new row can be picked like the rest.
// The page also has to say it worked: give the row class is-new so
// the style block flashes it, write "Added: date · course · task"
// into the line id added, and empty the date and task fields.
//                                                   [homework · 24 min]
// Aim: submitting the form id deadline-form appends a row to the
// list id deadlines, reading the three fields, with a working tick
// box and class is-new; the count line updates; the confirmation id
// added reads "Added: …"; the date and task fields empty themselves.
//
// Your code goes here.
