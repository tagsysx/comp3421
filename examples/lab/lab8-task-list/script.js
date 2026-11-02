// ══════════════════════════════════════════════════════════════
// SCRIPT.JS — THE BEHAVIOUR OF THE PAGE               [ YOURS ]
//
// This is the only file you write in. training.html is the page:
// the task list, the counters, the filter buttons, the form, the
// tally, and the style block that draws all of it.
//
// The page has four blocks that work on the same data:
//   the counters   how many tasks are done, and how many are left
//   the list       five rows, each with a real checkbox and a
//                  delete button
//   the filter     three buttons that show all, open or done
//   the form       one more task, as a row at the bottom
//
// Every exercise finds its elements with document.querySelector,
// or with document.querySelectorAll when it wants all of them.
// One API, any selector: an id is written "#done-count", a class
// is written ".filter-btn".
//
// The nine exercises run in order, top to bottom, and they lean on
// each other: exercise 3 counts the tasks that exercise 2 built,
// exercise 4 keeps those tasks up to date, exercise 5 reads the
// same array, exercise 6 adds to it and takes away from it. Keep
// your code in order and do not rename the variables.
//
// The six lab exercises print the aim, the steps and the code.
// The three homework exercises print the aim and the ids only.
// ══════════════════════════════════════════════════════════════

// ── Exercise 1 · A task is a blueprint ────────────────────────


// TODO 1 — one class that describes every task on the list.
// A task has three pieces of data and one piece of behaviour:
// the text of the task, its priority, whether it is done, and a
// label that joins the priority and the text. The constructor
// receives the three pieces and stores them on this; label()
// returns a short string built from this.priority and this.text.
//                                                           [8 min]
// Aim: new Task("Draft the report", "High", false) is an object
// whose label() returns "High · Draft the report", and two tasks
// made from the same class do not share their data.
// Steps:
//   1. Declare the class with the class keyword.
//   2. A constructor taking text, priority and done, storing each
//      one on this.
//   3. A method label() with no parameters, returning the priority
//      and the text joined by " · ".
// Now type it, just below:
//
// class Task {
//   constructor(text, priority, done) {
//     this.text = text;
//     this.priority = priority;
//     this.done = done;
//   }
//   label() {
//     return this.priority + " · " + this.text;
//   }
// }

// ── Exercise 2 · The five tasks ───────────────────────────────


// TODO 2 — the list as data, in the same order as the rows.
// Five tasks, five rows on the page, one array. Each entry calls
// the class from exercise 1 with the data the row already shows —
// the text, the priority — and the done flag that decides whether
// its checkbox starts ticked. The first and the third are done.
//                                                           [8 min]
// Aim: tasks is an array of five Task objects whose texts,
// priorities and done flags match the five rows on the page, in
// order.
// Steps:
//   1. A const named tasks holding an array of five entries.
//   2. Each entry is a new Task with the three arguments from the
//      row: text, priority, and true for the two done ones.
//   3. Keep the order the rows are printed in — exercises 4, 5 and
//      6 match a row to its task by counting from zero.
// Now type it, just below:
//
// const tasks = [
//   new Task("Submit the lab sheet", "High", true),
//   new Task("Read chapter 7", "High", false),
//   new Task("Book the group room", "Medium", true),
//   new Task("Sketch the layout", "Medium", false),
//   new Task("Tidy the bookmarks", "Low", false),
// ];

// ── Exercise 3 · Count what is left ───────────────────────────


// TODO 3 — two numbers, both worked out from the array.
// filter() keeps the tasks that pass a test, so its length is the
// number done. The rest are still open, and that is the total
// minus the done ones — no second filter needed. textContent wants
// a string; assigning a number lets the browser convert it.
//                                                          [10 min]
// Aim: calling updateCounts() writes the number of done tasks into
// #done-count and the number still open into #open-count. On the
// page as it loads that is 2 and 3.
// Steps:
//   1. A function updateCounts() with no parameters.
//   2. Count with filter() and .length: keep the tasks whose done
//      is true.
//   3. The open count is tasks.length minus that number.
//   4. Write both into #done-count and #open-count with textContent.
//   5. Call the function once at the end, so the page is right
//      before anything is clicked.
// Now type it, just below:
//
// function updateCounts() {
//   const doneCount = tasks.filter(function (task) {
//     return task.done;
//   }).length;
//   const openCount = tasks.length - doneCount;
//   document.querySelector("#done-count").textContent = doneCount;
//   document.querySelector("#open-count").textContent = openCount;
// }
// updateCounts();

// ── Exercise 4 · Tick a task ──────────────────────────────────


// TODO 4 — one listener for the whole list, not one per row.
// A change event on a checkbox bubbles up to the list, so one
// listener on #task-list hears every box — including the rows that
// exercise 6 adds later. Find the row with closest(".task"), count
// it from zero against the other rows, and that index is the task
// in the array. Update the task, toggle the row's class, recount.
//                                                          [12 min]
// Aim: ticking a box dims that row and moves both numbers;
// unticking it puts everything back. The two numbers always equal
// what the checkboxes on the page say.
// Steps:
//   1. A function handleTick(e) that returns early unless
//      e.target matches ".done-box".
//   2. Find the row: e.target.closest(".task").
//   3. Walk querySelectorAll("#task-list .task") with a counted
//      loop and remember the i where rows[i] === row — that index
//      is the task in the array.
//   4. Set tasks[index].done to e.target.checked.
//   5. Toggle the class "is-done" on the row, and call updateCounts().
//   6. Add the listener once, on #task-list, for the "change" event.
// Now type it, just below:
//
// function handleTick(e) {
//   if (!e.target.matches(".done-box")) return;
//   const row = e.target.closest(".task");
//   const rows = document.querySelectorAll("#task-list .task");
//   let index = -1;
//   for (let i = 0; i < rows.length; i++) {
//     if (rows[i] === row) index = i;
//   }
//   tasks[index].done = e.target.checked;
//   row.classList.toggle("is-done", e.target.checked);
//   updateCounts();
// }
//
// const list = document.querySelector("#task-list");
// list.addEventListener("change", handleTick);

// ── Exercise 5 · Filter the list ──────────────────────────────


// TODO 5 — one state variable, and a function that applies it.
// The three buttons carry their own filter name in their value
// attribute: all, open, done. Keep the current choice in a top
// level variable, then walk the rows: a row stays visible when it
// matches the choice, and the hidden attribute hides it. The same
// loop marks the button that is in force with the is-active class.
//                                                           [8 min]
// Aim: clicking Open hides the done tasks, clicking Done shows
// only those, clicking All shows five again; the button in force is
// filled in; a task ticked while a filter is on follows the filter.
// Steps:
//   1. A top level variable currentFilter, starting as "all".
//   2. A function applyFilter() that walks every row with
//      querySelectorAll("#task-list .task").
//   3. For each row, decide from tasks[i].done and currentFilter
//      whether it should be visible, and set row.hidden.
//   4. A second loop over the buttons: toggle is-active where
//      button.value equals currentFilter.
//   5. Wire the three buttons: on click, read e.target.value into
//      currentFilter and call applyFilter().
// Now type it, just below:
//
// let currentFilter = "all";
//
// function applyFilter() {
//   const rows = document.querySelectorAll("#task-list .task");
//   for (let i = 0; i < rows.length; i++) {
//     const isDone = tasks[i].done;
//     let show = true;
//     if (currentFilter === "done") show = isDone;
//     if (currentFilter === "open") show = !isDone;
//     rows[i].hidden = !show;
//   }
//   const buttons = document.querySelectorAll(".filter-btn");
//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].classList.toggle("is-active", buttons[i].value === currentFilter);
//   }
// }
//
// const filterButtons = document.querySelectorAll(".filter-btn");
// for (let i = 0; i < filterButtons.length; i++) {
//   filterButtons[i].addEventListener("click", function (e) {
//     currentFilter = e.target.value;
//     applyFilter();
//   });
// }

// ── Exercise 6 · Add and delete ───────────────────────────────


// TODO 6 — the form at the bottom, a new row for it, and a way to
// take a row away. Submitting a form reloads the page unless you
// stop it, so the handler starts with preventDefault(). The row is
// built the way the lecture built elements: one createElement per
// piece, textContent for the text, then append. Deleting is the
// reverse, and it has to happen twice: the row leaves the page
// with remove(), and the task leaves the array with splice().
// Four things happen after an add, and that is what makes it
// feedback rather than silence: the count of tasks is taken from
// the page, a receipt names the task, the row flashes, and the
// form clears.
//                                                          [14 min]
// Aim: adding a task puts a new row at the bottom of the list with
// its text and its priority chip; the row flashes once; the "of"
// count updates; a receipt names the task; the fields empty
// themselves. Clicking × on any row removes that row, and both
// numbers follow.
// Steps:
//   1. A function makeRow(task) that builds the whole li: an index
//      span, a check span holding a real input type=checkbox with
//      class done-box, a span holding the text and a note, the
//      priority as a chip with class "chip chip-" plus the
//      priority in lower case, and a button with class delete-btn
//      holding "×". Return the row.
//   2. On submit of #add-form: preventDefault, read the two
//      fields, make a Task, push it onto tasks.
//   3. Append makeRow(task) to #task-list, rewrite #task-count
//      from the number of rows, write the receipt, call
//      updateCounts() and applyFilter(), then reset the form.
//   4. A function handleDelete(e) that returns early unless
//      e.target matches ".delete-btn"; from the row it belongs to,
//      find the index, tasks.splice(index, 1) and row.remove(),
//      then rewrite #task-count, the receipt and the counts.
//   5. Add the delete listener once, on #task-list, for "click".
// Now type it, just below:
//
// function makeRow(task) {
//   const row = document.createElement("li");
//   row.className = "task is-new";
//   const indexSpan = document.createElement("span");
//   indexSpan.className = "task-index";
//   const check = document.createElement("span");
//   check.className = "task-check";
//   const box = document.createElement("input");
//   box.type = "checkbox";
//   box.className = "done-box";
//   box.checked = task.done;
//   box.setAttribute("aria-label", "Mark " + task.text + " as done");
//   check.append(box);
//   const text = document.createElement("span");
//   const titleSpan = document.createElement("span");
//   titleSpan.className = "task-text";
//   titleSpan.textContent = task.text;
//   const noteSpan = document.createElement("span");
//   noteSpan.className = "task-note";
//   noteSpan.textContent = task.priority + " priority";
//   text.append(titleSpan, noteSpan);
//   const chip = document.createElement("span");
//   chip.className = "chip chip-" + task.priority.toLowerCase();
//   chip.textContent = task.priority;
//   const del = document.createElement("button");
//   del.type = "button";
//   del.className = "delete-btn";
//   del.textContent = "×";
//   del.setAttribute("aria-label", "Delete this task");
//   row.append(indexSpan, check, text, chip, del);
//   return row;
// }
//
// const addForm = document.querySelector("#add-form");
//
// addForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const text = document.querySelector("#new-task").value.trim();
//   const priority = document.querySelector("#new-priority").value;
//
//   const task = new Task(text, priority, false);
//   tasks.push(task);
//
//   document.querySelector("#task-list").append(makeRow(task));
//   document.querySelector("#task-count").textContent =
//     document.querySelectorAll("#task-list .task").length;
//   document.querySelector("#receipt").textContent = "Added: " + task.label();
//   updateCounts();
//   applyFilter();
//   addForm.reset();
// });
//
// function handleDelete(e) {
//   if (!e.target.matches(".delete-btn")) return;
//   const row = e.target.closest(".task");
//   const rows = document.querySelectorAll("#task-list .task");
//   let index = -1;
//   for (let i = 0; i < rows.length; i++) {
//     if (rows[i] === row) index = i;
//   }
//   tasks.splice(index, 1);
//   row.remove();
//   document.querySelector("#task-count").textContent =
//     document.querySelectorAll("#task-list .task").length;
//   document.querySelector("#receipt").textContent = "Deleted: one task";
//   updateCounts();
// }
//
// list.addEventListener("click", handleDelete);

// ── Exercise 7 · High priority first ──────────────────────────


// TODO 7 — the sort button, which currently does nothing.
// Priority is a word, and words do not sort into High, Medium, Low
// by themselves. An object that maps each priority to a number
// turns the comparison into arithmetic, and a comparator sorts by
// that number. The array is not the page, though: after sorting you
// have to move the rows into the same order, one append per task.
// Remember that appending a row that is already on the page moves
// it rather than copying it.
//                                                  [homework · 18 min]
// Aim: clicking High priority first puts every High task above the
// Medium ones and those above the Low ones, and the checkbox on each
// row still ticks the same task as before. Clicking it twice does
// not double the list.
//
// Your code goes here.

// ── Exercise 8 · Number the list ──────────────────────────────


// TODO 8 — a number in front of every row, from a private counter.
// The .task-index span is empty in every row. Write a function
// makeCounter() that keeps its own count, starting at zero, and
// returns a function that adds one and returns the new number:
// nothing outside can read or reset that count. Make one counter
// per pass over the list, and number the rows in the order they
// stand — one at the top. A task added later is numbered when the
// form is submitted, and so is the list after a row is deleted or
// exercise 7 sorts it.
//                                                  [homework · 20 min]
// Aim: every row shows 1 to 5 in front of it when the page loads;
// a task added afterwards shows the next number; after a delete or
// a sort the numbers still run 1 to n down the list. The counter's
// variable is reachable only through the function it returned.
//
// Your code goes here.

// ── Exercise 9 · Tally by priority ────────────────────────────


// TODO 9 — one line per priority, in the last panel.
// An object is a map from a key to a value, so it can count: for
// each task, add one to the entry for its priority, creating that
// entry at one the first time the priority is seen. Then turn the
// object into rows: one li per key, holding the priority and the
// count, appended to #priority-tally. Clear the "No tally yet."
// line first. Tasks added in exercise 6 must appear in the tally,
// and deleted ones must leave it, so build it again after both.
//                                                  [homework · 22 min]
// Aim: the last panel lists each priority once with the number of
// its tasks — High 2, Medium 2, Low 1 — and a newly added task
// pushes its priority up by one, while a deleted one brings it down.
//
// Your code goes here.
