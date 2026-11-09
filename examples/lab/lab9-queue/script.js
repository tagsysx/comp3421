// ══════════════════════════════════════════════════════════════
// SCRIPT.JS · THE BEHAVIOUR OF THE PAGE               [ YOURS ]
//
// This is the only file you write in. training.html contains the page:
// the queue, rows, mix, player panel, search box, form, and the style
// block that draws them.
//
// The page has five blocks, all working on the same five items:
//   the queue    three tracks and two podcasts, one row each
//   the mix      how many of each kind, and how long the lot is
//   the player   what is playing, and how often
//   the search   one box that hides the rows that do not match
//   the form     one more item, as a row at the bottom
//
// Each exercise finds elements with document.querySelector, or with
// document.querySelectorAll when it needs every matching element.
// One API handles any selector: write an id as "#now-playing" and
// a class as ".queue-row".
//
// The nine exercises run in order and depend on one another.
// Exercise 4 prints a length on the rows exercise 3 built. Exercise 5
// counts those objects, and exercise 6 plays them. Keep your code in
// order and do not rename the variables.
//
// The three ideas to take away are:
//   a class          one description for many objects
//   the prototype    one copy of each method, shared by every object
//   a closure        state no other code can read or reset
//
// The six lab exercises print the aim, steps, and code.
// The three homework exercises print the aim and ids only.
// ══════════════════════════════════════════════════════════════

// ── Exercise 1 · A track is a blueprint ──────────────────────


// TODO 1 — one class that describes every track in the list.
// A track is not a string or three loose variables.
// It has a title, an artist, and a length in seconds. These values
// travel together wherever the track goes. The constructor receives
// them and stores them on this. describe() reads them back.
//                                                           [8 min]
// Aim: new Track("Nightcall", "Kavinsky", 258) creates an object
// whose describe() returns "Nightcall · Kavinsky". Two tracks made
// from the same class do not share data.
// Steps:
//   1. Declare the class with the class keyword and a capital T.
//   2. Add a constructor that takes title, artist, and seconds, and
//      stores each one on this.
//   3. Add describe() with no parameters. It returns the title and
//      artist joined by " · ".
// Now type it, just below:
//
// class Track {
//   constructor(title, artist, seconds) {
//     this.title = title;
//     this.artist = artist;
//     this.seconds = seconds;
//   }
//
//   describe() {
//     return this.title + " · " + this.artist;
//   }
// }

// ── Exercise 2 · A podcast is a track ────────────────────────


// TODO 2 — the second kind, built on the first.
// A podcast is a track with three values: a title, a host, and a
// length. It also has an episode count and an episode length.
// Its length is calculated from those values, so super() receives a
// number nobody typed.
// describe() adds the episode count. It still calls the parent
// version for the first half, which is what super.describe() does.
//                                                          [10 min]
// Aim: new Podcast("Syntax", "Wes Bos", 3, 42) has seconds 7560
// (3 × 42 × 60), describe() returns "Syntax · Wes Bos · 3
// episodes", and instanceof Track is true for it.
// Steps:
//   1. Declare class Podcast extends Track, with a constructor that
//      takes title, host, episodes, and minutesEach.
//   2. Call super() first with the title, host, and length in seconds
//      calculated from the other two. Nothing may touch this before
//      that call.
//   3. Store episodes and minutesEach on this.
//   4. Add describe(), which returns super.describe() plus " · ",
//      the episode count, and " episodes".
// Now type it, just below:
//
// class Podcast extends Track {
//   constructor(title, host, episodes, minutesEach) {
//     super(title, host, episodes * minutesEach * 60);
//     this.episodes = episodes;
//     this.minutesEach = minutesEach;
//   }
//
//   describe() {
//     return super.describe() + " · " + this.episodes + " episodes";
//   }
// }

// ── Exercise 3 · The queue ───────────────────────────────────


// TODO 3 — the five page rows as five objects, in order.
// The page already prints the titles, names, kind chips, and order.
// Turn that printed list into data: three tracks and two podcasts in
// row order. The order matters. Exercises 4 and 6 find each object
// by counting rows from zero, so row three is queue[2], not another
// entry.
//                                                           [8 min]
// Aim: queue is an array of five objects. Their titles and names
// match the five rows in order, and queue[1] is a Podcast.
// Steps:
//   1. Declare a const named queue that holds five entries.
//   2. A track is new Track(title, artist, seconds). The length goes
//      in as seconds: 3:32 is 212, 4:18 is 258, 3:58 is 238.
//   3. A podcast is new Podcast(title, host, episodes, minutesEach).
//      The two podcasts are 3 episodes of 42 minutes and 2 episodes
//      of 51 minutes.
//   4. Keep the rows' printed order.
// Now type it, just below:
//
// const queue = [
//   new Track("Paper Planes", "M.I.A.", 212),
//   new Podcast("Syntax", "Wes Bos", 3, 42),
//   new Track("Nightcall", "Kavinsky", 258),
//   new Podcast("Darknet Diaries", "Jack Rhysider", 2, 51),
//   new Track("Odd Look", "Kavinsky", 238),
// ];

// ── Exercise 4 · A method added later ────────────────────────


// TODO 4 — add one method to Track after both classes exist, then
// print it on all five rows.
// Both classes and all five objects already exist. Now you need one
// more behaviour. The only way to add it to existing objects is the
// prototype.
// An instance looks up methods along a chain. Track.prototype is on
// the chain of every Track and Podcast, including those already built.
// That is why the method belongs there, not on each object.
// Use two branches because a 3-minute track and a 2-hour podcast need
// different formats: under an hour is minutes:seconds; over an hour is
// hours and minutes.
//                                                          [10 min]
// Aim: every row shows a length, including "3:32" and "2h 6m".
// queue[1].hasOwnProperty("clock") is false even though
// queue[1].clock() works.
// Steps:
//   1. Assign a function to Track.prototype.clock. It takes no
//      parameters and reads this.seconds.
//   2. Calculate hours with Math.floor(this.seconds / 3600), minutes
//      with Math.floor((this.seconds % 3600) / 60), and seconds with
//      this.seconds % 60.
//   3. If there is at least one hour, return hours + "h " + minutes
//      + "m".
//   4. Otherwise return minutes + ":" + seconds padded to two digits:
//      String(seconds).padStart(2, "0").
//   5. Select every .row-length. In a counted loop, write
//      queue[i].clock() into the i-th one.
// Now type it, just below:
//
// Track.prototype.clock = function () {
//   const hours = Math.floor(this.seconds / 3600);
//   const minutes = Math.floor((this.seconds % 3600) / 60);
//   const seconds = this.seconds % 60;
//
//   if (hours > 0) {
//     return hours + "h " + minutes + "m";
//   }
//
//   return minutes + ":" + String(seconds).padStart(2, "0");
// };
//
// const lengths = document.querySelectorAll(".row-length");
// for (let i = 0; i < queue.length; i++) {
//   lengths[i].textContent = queue[i].clock();
// }

// ── Exercise 5 · The mix ─────────────────────────────────────


// TODO 5 — how many of each kind, and how long the whole queue is.
// instanceof checks the prototype chain, not the object itself.
// A Podcast passes both instanceof Podcast and instanceof Track tests.
// Test the narrower class, or every row counts as both. The tracks are
// what remains, so you need no second pass. Add seconds in a running
// sum, then convert to minutes once at the end.
//                                                          [10 min]
// Aim: the panel reads "3 tracks · 2 podcasts" and "240 min".
// Both numbers are worked out from queue rather than typed in.
// Steps:
//   1. Write updateMix() with no parameters.
//   2. Use filter() to keep queue items that are instanceof Podcast,
//      then keep the result's length.
//   3. The number of tracks is queue.length minus that.
//   4. Write both into #mix-count as one string.
//   5. Add queue[i].seconds in a counted loop. Divide by 60, round
//      with Math.round, add " min", and write it into #total-time.
//   6. Call updateMix() once at the end, so the panel is correct
//      before anything is clicked.
// Now type it, just below:
//
// function updateMix() {
//   const podcasts = queue.filter(function (item) {
//     return item instanceof Podcast;
//   });
//   const tracks = queue.length - podcasts.length;
//
//   document.querySelector("#mix-count").textContent =
//     tracks + " tracks · " + podcasts.length + " podcasts";
//
//   let total = 0;
//   for (let i = 0; i < queue.length; i++) {
//     total = total + queue[i].seconds;
//   }
//
//   document.querySelector("#total-time").textContent =
//     Math.round(total / 60) + " min";
// }
//
// updateMix();

// ── Exercise 6 · A player that remembers ─────────────────────


// TODO 6 — a play button per row, and a count the page cannot reach.
// Two values must survive between clicks: the playing row and each
// row's play count. A variable at the top of the file would work, but
// every other script could see it and reset it with counts = [] in the
// Console. Inside makePlayer(), only the function the factory returns
// can reach those values. Calling makePlayer() again creates a second,
// independent player. They share the page, but no state.
// Use one click listener on the list, not one per button, because rows
// added later in exercise 8 must work too.
//                                                          [14 min]
// Aim: pressing the third row's play button makes "Now playing"
// read "Nightcall · Kavinsky", puts 1 on that row, and marks it.
// Pressing it again makes it 2 while the others stay at 0.
// In the Console, counts is not defined.
// Steps:
//   1. Write makePlayer() with no parameters. It holds two private
//      variables: current, starting at -1, and counts, an empty array.
//   2. Return an object with one method, play(index), which closes
//      over both.
//   3. In play(), if counts[index] is undefined, set it to 0, then
//      add one.
//   4. Read every .queue-row. If current is not -1, remove
//      "is-playing" from that row. Add it to this row, then set
//      current to index.
//   5. Write the count into the index-th .row-plays, the item's
//      describe() into #now-playing, and the count into #play-count.
//   6. Add every defined entry of counts in a counted loop, then write
//      the total into #play-total.
//   7. Call makePlayer() once and keep its result in player.
//   8. Add one click listener to #queue-list. Find the button with
//      e.target.closest(".play-btn"), and return if there is none.
//      Find its row with closest(".queue-row"), then use a counted
//      loop to match it against the rows and get its index. Call
//      player.play(i).
// Now type it, just below:
//
// function makePlayer() {
//   let current = -1;
//   const counts = [];
//
//   return {
//     play: function (index) {
//       if (counts[index] === undefined) {
//         counts[index] = 0;
//       }
//       counts[index] = counts[index] + 1;
//
//       const rows = document.querySelectorAll(".queue-row");
//       if (current !== -1) {
//         rows[current].classList.remove("is-playing");
//       }
//       rows[index].classList.add("is-playing");
//       current = index;
//
//       document.querySelectorAll(".row-plays")[index].textContent = counts[index];
//       document.querySelector("#now-playing").textContent = queue[index].describe();
//       document.querySelector("#play-count").textContent = counts[index];
//
//       let total = 0;
//       for (let i = 0; i < counts.length; i++) {
//         if (counts[i] !== undefined) {
//           total = total + counts[i];
//         }
//       }
//       document.querySelector("#play-total").textContent = total;
//     }
//   };
// }
//
// const player = makePlayer();
//
// document.querySelector("#queue-list").addEventListener("click", function (e) {
//   const button = e.target.closest(".play-btn");
//   if (!button) {
//     return;
//   }
//
//   const row = button.closest(".queue-row");
//   const rows = document.querySelectorAll(".queue-row");
//   for (let i = 0; i < rows.length; i++) {
//     if (rows[i] === row) {
//       player.play(i);
//     }
//   }
// });

// ── Exercise 7 · Find one ────────────────────────────────────


// TODO 7 — a search box, and a factory that remembers what you type.
// A predicate passed to filter() must be a function of one argument.
// It compares that item with what is in the box at that moment.
// makeMatcher(text) closes over the text and returns a function that
// remembers it. The box can be emptied later, but the matcher still
// knows what it was built for. A top-level query variable could be
// overwritten by another part of the page halfway through a loop.
//                                                [homework · 18 min]
// Aim: typing "syn" leaves one row. Typing "kavinsky" leaves the two
// rows by that artist. Clearing the box brings all five back. A search
// with no matches leaves an empty list rather than an error.
// What you are given: the input is #search; the rows are .queue-row.
// A row hides when its hidden attribute is set. The titles and names
// are this.title and this.artist, or use the whole line from
// this.describe().
// Steps to work out for yourself:
//   the factory, its captured string, the case rule, how position
//   matches a row to its item, and what the input event handler does
//   on every keystroke.

// ── Exercise 8 · Add to the queue ────────────────────────────


// TODO 8 — one button, two constructors.
// The form asks for a kind, which decides the class to use. A podcast
// is built with episodes and minutes each; a track uses a length in
// minutes. One variable holds whichever returns. The rest of the code
// does not care which it is because both answer to describe(), clock(),
// and instanceof Track. That is why you have two classes.
// Add the new row at the end. The queue grows by one, so recount the
// two mix numbers instead of incrementing them. Build the row with
// createElement, not an HTML string, because a typed title must never
// become markup.
//                                                [homework · 20 min]
// Aim: adding a podcast called "ShopTalk" by "Chris Coyier", 4
// episodes of 55 minutes gives a sixth row reading 3h 40m. The mix
// reads "3 tracks · 3 podcasts", the total reads 460 min, the receipt
// names it, the fields are empty, and the new row's play button works
// on the first click.
// What you are given: #add-form, #new-title, #new-who, #new-kind (its
// value is "Track" or "Podcast"), #new-minutes, #new-episodes,
// #receipt, #queue-list. The row markup matches the five existing
// rows, class for class.
// Steps to work out for yourself:
//   stopping the submit, reading the fields, choosing the constructor,
//   building the row piece by piece, appending it, recounting, the
//   receipt, and resetting the form.

// ── Exercise 9 · Same artist, one loop ───────────────────────


// TODO 9 — click a name, see everything by that name.
// Add one listener per name in a loop: five listeners, each holding
// the name current when it was created. With let, each loop turn gets
// its own binding. With var, the whole loop shares one binding, so all
// five listeners read the same i, and i is 5 once the loop has
// finished. There is no queue[5], so a click throws, the Console names
// the line, and nothing is marked. Add a sixth row in exercise 8 first
// and every name marks that sixth row instead. For the old workaround,
// write makeHighlighter(artist), which
// returns a function, and pass it to the listener. Each call captures
// the artist, which gives the same result that let gives for free.
//                                                [homework · 22 min]
// Aim: clicking "Kavinsky" marks two rows and the note under the
// list reads "2 from Kavinsky". Clicking "Wes Bos" moves the mark to
// one row. No more than matching rows are ever marked.
// Deliberately change the loop variable to var. Clicking a name then
// stops working, and the Console says why. Change it back.
// What you are given: the names are .row-who inside .queue-row. The
// note under the list is #same-note. A marked row is .queue-row with
// the class is-same. An item's artist is this.artist.
// Steps to work out for yourself:
//   reading the clicked name, clearing marks from the previous click,
//   deciding which rows match, and writing the note. A row added in
//   exercise 8 has no listener of its own, which needs one comment
//   line in your file.
