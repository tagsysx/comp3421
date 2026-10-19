// ══════════════════════════════════════════════════════════════
// SCRIPT.JS — THE BEHAVIOUR OF THE PAGE               [ YOURS ]
//
// This is the only file you write in. training.html is the page:
// the cover, the sections, the forms, and the style block that draws
// all of it. It is finished.
//
// Every exercise finds its elements with document.querySelector, or
// document.querySelectorAll when it wants all of them. One API, any
// selector: an id is written "#week", a class is written ".task".
//
// The nine exercises run in order, top to bottom, and some of them
// use what an earlier one made, so keep your code in order and do
// not rename the variables.
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

// ── Exercise 2 · One function, three lines ────────────────────

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
// function loadLine(label, hours) {
//   return label + " · " + hours + " h";
// }
// document.querySelector("#lectures").textContent = loadLine("Lectures", 12);
// document.querySelector("#labs").textContent = loadLine("Labs", 3);
// document.querySelector("#own-study").textContent = loadLine("Own study", 10);

// ── Exercise 3 · The timetable from an array ──────────────────

// TODO 3 — an array, a loop, and four sticky notes that did not
// exist a moment ago.
// Four fixed slots are held in one array. Walk the array with
// for...of, and for each slot build an element and attach it. A new
// element is invisible until it is attached to something already on
// the page.
//                                                          [10 min]
// Aim: the timetable carries the four slots, in the order they were
// written in the array.
// Steps:
//   1. An array of four strings: the fixed slots of the week.
//   2. One variable holding the list you are going to fill, found
//      with querySelector("#timetable").
//   3. for...of over the array: build a list item, put the text in
//      it, attach it to the list.
// Now type it, just below:
//
// const timetable = [
//   "Mon 09:30 · COMP3421 lecture",
//   "Tue 14:30 · Lab 6",
//   "Thu 11:30 · Tutorial",
//   "Fri 09:30 · COMP3421 lecture",
// ];
// const timetableList = document.querySelector("#timetable");
// for (const slot of timetable) {
//   const li = document.createElement("li");
//   li.textContent = slot;
//   timetableList.appendChild(li);
// }

// ── Exercise 4 · Deadlines are objects ────────────────────────

// TODO 4 — the same loop, but every deadline is an object.
// A deadline is not one value, it is several: a day, a course, a
// task and whether it is done. An object holds them together, and
// dot notation reads them out one by one. Afterwards, say how many
// there are: the count is the array's length, not a number typed in.
//                                                          [10 min]
// Aim: the due list shows three deadlines, each row built from the
// fields of one object (day, course and task), and the line above
// the list reads "3 due this week".
// Steps:
//   1. An array of three objects. Every object has day, course,
//      task and done.
//   2. One variable holding the deadline list.
//   3. for...of over the array: build a list item, give it the
//      class task, fill it with the object's fields, attach it.
//   4. After the loop, write the array's length and " due this week"
//      into the line with id due-count.
// Now type it, just below:
//
// const deadlines = [
//   { day: "Mon", course: "COMP3421", task: "Lab 5 reflection", done: true },
//   { day: "Wed", course: "COMP2021", task: "Problem sheet 4", done: false },
//   { day: "Fri", course: "COMP3421", task: "Project outline", done: false },
// ];
// const deadlineList = document.querySelector("#deadlines");
// for (const item of deadlines) {
//   const li = document.createElement("li");
//   li.classList.add("task");
//   li.textContent = item.day + " · " + item.course + " · " + item.task;
//   deadlineList.appendChild(li);
// }
// document.querySelector("#due-count").textContent = deadlines.length + " due this week";

// ── Exercise 5 · Mark what is done ────────────────────────────

// TODO 5 — give every row a real tick box, and make the box work.
// The done flag has been in the data all along; nothing has used it
// yet. Collect every row with querySelectorAll, then walk the two
// lists together: the array and the rows are in the same order.
// For each row build an input, make it a checkbox, and set its
// checked property from the data. A tick box is the one control that
// answers the user by itself: listen for its change event and toggle
// the is-done class on the row, so a click strikes the line through
// and a second click takes it back.
//                                                          [12 min]
// Aim: every deadline has a tick box; the ones already done in the
// data start ticked and struck through; clicking a box toggles the
// strike-through on its own row.
// Steps:
//   1. querySelectorAll for the rows labelled task.
//   2. A counted loop over the rows, with an index shared with the
//      array.
//   3. Build an input, set its type to checkbox, set its checked
//      property from that deadline's done flag, and attach it to the
//      row.
//   4. Listen for the box's change event: toggle is-done on the row.
//   5. If the deadline is already done, add is-done to the row.
// Now type it, just below:
//
// const rows = document.querySelectorAll(".task");
// for (let i = 0; i < rows.length; i++) {
//   const box = document.createElement("input");
//   box.type = "checkbox";
//   box.checked = deadlines[i].done;
//   box.addEventListener("change", function () {
//     rows[i].classList.toggle("is-done");
//   });
//   rows[i].appendChild(box);
//   if (deadlines[i].done === true) {
//     rows[i].classList.add("is-done");
//   }
// }

// ── Exercise 6 · One listener for the list ────────────────────

// TODO 6 — clicking a deadline picks it.
// One listener on the list covers every row, including rows added
// later, because the click bubbles up from the row to the list. The
// event object tells you which row was hit: event.target.
//                                                          [10 min]
// Aim: clicking a deadline marks it as picked, unmarks the previous
// one, and writes "You are looking at: ..." above the list.
// Steps:
//   1. A variable for the line above the list, id picked.
//   2. addEventListener on the deadline list, for click.
//   3. If the thing clicked is not a row, stop: return.
//   4. Remove is-selected from the row that has it, if there is one.
//   5. Add is-selected to the row that was clicked, and write its
//      text into the picked line.
// Now type it, just below:
//
// const picked = document.querySelector("#picked");
// document.querySelector("#deadlines").addEventListener("click", function (e) {
//   if (e.target.tagName !== "LI") {
//     return;
//   }
//   const previous = document.querySelector(".task.is-selected");
//   if (previous !== null) {
//     previous.classList.remove("is-selected");
//   }
//   e.target.classList.add("is-selected");
//   picked.textContent = "You are looking at: " + e.target.textContent;
// });

// ── Exercise 7 · The study log ───────────────────────────────

// TODO 7 — logging minutes adds to the week, and the bar moves.
// There is a form, a number of minutes, a line for the message, a
// counter for the week's total and a bar under it. Every submission
// has to add to what came before, so the running total must live
// outside the form's handler: a total declared inside it starts from
// nothing on every click.
// The page must not reload. A field hands you its text, not its
// number, so turn it into a number before adding it: with a plain
// "+" on the text, 150 and 90 would glue into "15090". The bar's
// width is a percentage of a 600-minute goal.
//                                                   [homework · 18 min]
// Aim: submitting the form id log-form adds the minutes in the field
// id minutes to this week's total and then:
//   · writes "Logged N min · H h M min so far" into the line id logged,
//   · writes "H h M min of 10 h" into the counter id goal-count,
//   · sets the width of the bar id goal-fill to the logged share of a
//     600-minute goal, as a percentage.
// 150 then 90 must end at "Logged 90 min · 4 h 0 min so far",
// "4 h 0 min of 10 h" and a bar at 40%. No reload.
//
// Your code goes here.

// ── Exercise 8 · The deadline countdown ────────────

// TODO 8 — the next deadline is close, and the line counts.
// A timer runs code for you, over and over, until you stop it. Keep
// the handle the timer returns: without it you cannot stop it. The
// counter lives outside the timer's function, or it starts from the
// same number on every tick.
//                                                   [homework · 18 min]
// Aim: the line id countdown starts at 600 and loses one every
// second, reading "Submit in N s". At zero it stops and reads
// "Time is up."
//
// Your code goes here.

// ── Exercise 9 · Add your own deadline ───────────────────────

// TODO 9 — add a deadline of your own, and say that it worked.
// The form at the bottom has a day, a course and a task. Filling it
// in must append one more row to the end of the due list, built the
// same way exercise 4 built its rows and given the tick box that
// exercise 5 made work, so it looks and behaves like the others; it
// must also answer a click without a second listener, which is
// exercise 6 earning its keep.
// A row appearing is not enough of an answer. The page has to say
// what happened: give the new row the class is-new so the style
// block flashes it, write a confirmation into the line id added,
// keep the count honest, and clear the three fields so the next
// entry starts empty.
//                                                   [homework · 24 min]
// Aim: submitting the form id deadline-form appends a row to the
// list id deadlines, reading day, course and task from the fields
// id day, id course and id task, gives the row the class is-new, and
// gives it a tick box that toggles its strike-through like the rest.
// It also:
//   · writes "Added: day · course · task" into the line id added,
//   · rewrites id due-count as "N due this week" for the rows now on
//     the page (count them, do not add one to a number you kept),
//   · empties the three fields.
// No reload, the new row can be picked exactly like the others, and
// the course and task are your own.
//
// Your code goes here.
