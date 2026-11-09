// ══════════════════════════════════════════════════════════════
// SCRIPT.JS · THE BEHAVIOUR OF THE PAGE               [ YOURS ]
//
// This is the only file you write in. training.html is the page:
// the queue, the rows, the mix, the player panel, the search box,
// the form, and the style block that draws all of it.
//
// The page has five blocks that work on the same five items:
//   the queue    three tracks and two podcasts, one row each
//   the mix      how many of each kind, and how long the lot is
//   the player   what is playing, and how often
//   the search   one box that hides the rows that do not match
//   the form     one more item, as a row at the bottom
//
// Every exercise finds its elements with document.querySelector,
// or with document.querySelectorAll when it wants all of them.
// One API, any selector: an id is written "#now-playing", a class
// is written ".queue-row".
//
// The nine exercises run in order, top to bottom, and they lean on
// each other: exercise 4 prints a length on the rows exercise 3
// built, exercise 5 counts those same objects, exercise 6 plays
// them. Keep your code in order and do not rename the variables.
//
// The three ideas worth taking away are all in here:
//   a class          one description, many objects
//   the prototype    one copy of each method, shared by all of them
//   a closure        state that no other code can read or reset
//
// The six lab exercises print the aim, the steps and the code.
// The three homework exercises print the aim and the ids only.
// ══════════════════════════════════════════════════════════════

// ── Exercise 1 · A track is a blueprint ──────────────────────


// TODO 1 — one class that describes every track on the list.
// A track is not a string and it is not three loose variables.
// It has a title, an artist and a length in seconds, and the three
// travel together wherever the track goes. The constructor receives
// them and stores them on this; describe() reads them back.
//                                                           [8 min]
// Aim: new Track("Nightcall", "Kavinsky", 258) is an object whose
// describe() returns "Nightcall · Kavinsky", and two tracks made
// from the same class do not share their data.
// Steps:
//   1. Declare the class with the class keyword, capital T.
//   2. A constructor taking title, artist and seconds, storing
//      each one on this.
//   3. A method describe() with no parameters, returning the title
//      and the artist joined by " · ".
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
// A podcast is a track with a title, a host and a length, and three
// things of its own: how many episodes, and how long each one is.
// The length is not passed in, it is worked out from those two, so
// super() is handed a number nobody typed. describe() is overridden
// to add the episode count, and it still calls the parent version
// for the first half, which is what super.describe() is for.
//                                                          [10 min]
// Aim: new Podcast("Syntax", "Wes Bos", 3, 42) has seconds 7560
// (3 × 42 × 60), describe() returns "Syntax · Wes Bos · 3
// episodes", and instanceof Track is true for it.
// Steps:
//   1. class Podcast extends Track, with a constructor taking
//      title, host, episodes and minutesEach.
//   2. Call super() first, with the title, the host, and the length
//      in seconds worked out from the other two. Nothing may touch
//      this before that call.
//   3. Store episodes and minutesEach on this.
//   4. A method describe() that returns super.describe() plus
//      " · " plus the episode count plus " episodes".
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


// TODO 3 — the five rows on the page, as five objects, in order.
// The page already prints the titles, the names, the kind chips and
// the order. This turns that printed list into data: three tracks
// and two podcasts, in the order the rows appear. The order is not
// decoration. Exercises 4 and 6 reach the object behind a row by
// counting rows from zero, so row three is queue[2] and nothing
// else.
//                                                           [8 min]
// Aim: queue is an array of five objects whose titles and names
// match the five rows in order, and queue[1] is a Podcast.
// Steps:
//   1. A const named queue holding an array of five entries.
//   2. A track is new Track(title, artist, seconds). The lengths
//      are printed on the page in minutes and seconds: 3:32 is 212
//      seconds, 4:18 is 258, 3:58 is 238.
//   3. A podcast is new Podcast(title, host, episodes,
//      minutesEach). The two podcasts are 3 episodes of 42 minutes
//      and 2 episodes of 51 minutes.
//   4. Keep the order the rows are printed in.
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


// TODO 4 — one method, added to Track after both classes exist,
// and then printed on all five rows.
// Both classes are written and the five objects are built, and now
// one more behaviour turns up. The only way to add it to objects
// that already exist is the prototype: an instance looks its
// methods up along a chain, and Track.prototype is on the chain of
// every Track and every Podcast, including the ones built a moment
// ago. That is why the method goes there and not on the object.
// The two branches are there
// because a 3-minute track and a 2-hour podcast cannot share one
// format: under an hour is minutes:seconds, over an hour is hours
// and minutes.
//                                                          [10 min]
// Aim: every row shows a length, "3:32" and "2h 6m" among them,
// and queue[1].hasOwnProperty("clock") is false even though
// queue[1].clock() works.
// Steps:
//   1. Assign a function to Track.prototype.clock. The function
//      takes no parameters and reads this.seconds.
//   2. Work out hours with Math.floor(this.seconds / 3600), minutes
//      with Math.floor((this.seconds % 3600) / 60), seconds with
//      this.seconds % 60.
//   3. If there is at least one hour, return hours + "h " + minutes
//      + "m".
//   4. Otherwise return minutes + ":" + the seconds padded to two
//      digits, which is String(seconds).padStart(2, "0").
//   5. Then select every .row-length, and in a counted loop write
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
// instanceof asks the prototype chain, not the object: a Podcast is
// an instanceof Podcast and also an instanceof Track, so the test
// has to name the narrower class or every row counts as both. The
// tracks are then whatever is left over, which needs no second
// pass. The total is a running sum over seconds, turned into
// minutes once, at the end.
//                                                          [10 min]
// Aim: the panel reads "3 tracks · 2 podcasts" and "240 min", and
// both numbers are worked out from queue rather than typed in.
// Steps:
//   1. A function updateMix() with no parameters.
//   2. filter() the queue down to the items that are instanceof
//      Podcast, and keep its length.
//   3. The number of tracks is queue.length minus that.
//   4. Write both into #mix-count as one string.
//   5. Add up queue[i].seconds in a counted loop, divide by 60,
//      round it with Math.round, add " min", and write it into
//      #total-time.
//   6. Call updateMix() once at the end, so the panel is right
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


// TODO 6 — a play button per row, and a count that lives where the
// page cannot reach it.
// Two pieces of state have to survive between clicks: which row is
// playing, and how often each row has been played. A variable
// declared at the top of the file would do the job and would also
// be visible to every other script on the page, resettable by
// anyone who types counts = [] in the Console. Inside makePlayer()
// they are reachable only by the function the factory returns.
// Calling makePlayer() again would give a second, independent
// player: nothing is shared but the page.
// The click itself is one listener on the list, not one per button,
// because rows added later (exercise 8) have to work too.
//                                                          [14 min]
// Aim: pressing the third row's play button makes "Now playing"
// read "Nightcall · Kavinsky", puts 1 on that row, and marks the
// row; pressing it again makes it 2 while the others stay at 0.
// In the Console, counts is not defined.
// Steps:
//   1. A function makePlayer() with no parameters, holding two
//      private variables: current, starting at -1, and counts, an
//      empty array.
//   2. It returns an object with one method, play(index), which
//      closes over both.
//   3. In play(): if counts[index] is undefined, set it to 0, then
//      add one to it.
//   4. Read every .queue-row; if current is not -1, remove
//      "is-playing" from that row; add "is-playing" to this one;
//      set current to index.
//   5. Write the count into the index-th .row-plays, the item's
//      describe() into #now-playing, and the same count into
//      #play-count.
//   6. Add up every defined entry of counts in a counted loop and
//      write it into #play-total.
//   7. Call makePlayer() once and keep the result in player.
//   8. Add one click listener to #queue-list: find the button with
//      e.target.closest(".play-btn"), return if there is none, find
//      its row with closest(".queue-row"), and match that row
//      against the rows in a counted loop to get the index. Then
//      call player.play(i).
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


// TODO 7 — a search box, and a factory that remembers what you
// typed.
// A predicate handed to filter() has to be a function of one
// argument, and the thing it compares against is whatever is in the
// box at that moment. makeMatcher(text) closes over that text and
// returns a function that remembers it: the search box can be
// emptied a moment later and the matcher still knows what it was
// built for. Compare with a top-level variable holding the query,
// which every other part of the page could overwrite halfway
// through a loop.
//                                                          [homework · 18 min]
// Aim: typing "syn" leaves one row, typing "kavinsky" leaves the
// two rows by that artist, clearing the box brings all five back,
// and a search that matches nothing leaves an empty list rather
// than an error.
// What you are given: the input is #search; the rows are
// .queue-row; a row hides when its hidden attribute is set; the
// titles and names are this.title and this.artist, or the whole
// line from this.describe().
// Steps to work out for yourself:
//   the factory, its captured string, the case rule, how a row is
//   matched to its item by position, and what the input event
//   handler does on every keystroke.

// ── Exercise 8 · Add to the queue ────────────────────────────


// TODO 8 — one button, two constructors.
// The form asks for a kind, and the kind decides which class is
// used: a podcast is built with episodes and minutes each, a track
// with a length in minutes. One variable holds whichever came back,
// and the rest of the code does not care which it was, because both
// answer to describe(), clock() and instanceof Track. That is what
// the two classes were for.
// The new row goes on the end, and the queue grows by one, so the
// two numbers in the mix have to be recounted rather than
// incremented. The row is built with createElement, not with an
// HTML string: a title someone types must never become markup.
//                                                          [homework · 20 min]
// Aim: adding a podcast called "ShopTalk" by "Chris Coyier", 4
// episodes of 55 minutes gives a sixth row reading 3h 40m, the mix
// reading "3 tracks · 3 podcasts", the total reading 460 min, a
// receipt naming it, empty fields, and a play button on the new row
// that works on the first click.
// What you are given: #add-form, #new-title, #new-who, #new-kind
// (the value is "Track" or "Podcast"), #new-minutes, #new-episodes,
// #receipt, #queue-list; the row markup is the markup of the five
// rows already on the page, class for class.
// Steps to work out for yourself:
//   stopping the submit, reading the fields, choosing the
//   constructor, building the row piece by piece, appending it,
//   recounting, the receipt, and resetting the form.

// ── Exercise 9 · Same artist, one loop ───────────────────────


// TODO 9 — click a name, see everything by that name.
// One listener per name, added in a loop: five listeners, each one
// holding the name that was current when it was created. With let
// each turn of the loop gets its own binding and that just works.
// With var there is one binding for the whole loop, so every
// listener reads the last name in the list and clicking any of them
// highlights the same rows. If you want the old workaround as well,
// write makeHighlighter(artist) that returns a function, and hand
// that to the listener: the artist is then captured per call, which
// is the same thing let gives you for free.
//                                                          [homework · 22 min]
// Aim: clicking "Kavinsky" marks two rows and the note under the
// list reads "2 from Kavinsky"; clicking "Wes Bos" moves the mark
// to one row; no more than the matching rows are ever marked.
// Change the loop variable to var on purpose and every name
// answers for the last row in the list instead, which the Console
// explains. Change it back.
// What you are given: the names are .row-who inside .queue-row;
// the note under the list is #same-note; a marked row is
// .queue-row with the class is-same; the artist of an item is
// this.artist.
// Steps to work out for yourself:
//   reading the name that was clicked, clearing the marks left by
//   the previous click, deciding which rows match, and the sentence
//   in the note. A row added in exercise 8 has no listener of its
//   own, which is worth one line of comment in your file.
