// ══════════════════════════════════════════════════════════════
// SCRIPT.JS — THE BEHAVIOUR OF THE PAGE               [ YOURS ]
//
// This is the only file you write in. training.html is the page:
// the panels, the buttons, the photos, and the style block that
// draws all of it, including the five theme classes.
//
// The page has two blocks that work on the same document:
//   the theme bar  — five buttons that re-skin the whole page by
//                    swapping a class on the body
//   the gallery    — six thumbnails that show a photo large, name it,
//                    mark the thumbnail and count the view
//
// Every exercise finds its elements with document.querySelector, or
// with document.querySelectorAll when it wants all of them. One API,
// any selector: an id is written "#main-image", a class is written
// ".theme-btn".
//
// The nine exercises run in order, top to bottom, and they lean on
// each other: exercise 3 calls the functions from exercises 1 and 2,
// exercise 4 wires the buttons that call exercise 3, exercise 7 uses
// the photos array from exercise 6. Keep your code in order and do
// not rename the variables.
//
// The six lab exercises print the aim, the steps and the code.
// The three homework exercises print the aim and the ids only.
// ══════════════════════════════════════════════════════════════

// ── Exercise 1 · Strip the old theme ──────────────────────────

// TODO 1 — one function that takes every theme off the body.
// A theme is just a class on the body: "theme-ocean" and friends.
// Before a new theme can go on, every theme class that might be
// there has to come off. classList.remove does nothing when the
// class is not there, so you can remove all five without asking.
//                                                          [10 min]
// Aim: clearThemes() takes every theme class off the body.
// Steps:
//   1. Select the body once, with querySelector("body"), and keep
//      it in a constant called body.
//   2. Write the five theme class names into one array.
//   3. A counted loop over the array: remove each name from the
//      body's classList.
// Now type it, just below:
//
// const body = document.querySelector("body");
// const themeClasses = [
//   "theme-default",
//   "theme-ocean",
//   "theme-sunset",
//   "theme-forest",
//   "theme-midnight",
// ];
// function clearThemes() {
//   for (let i = 0; i < themeClasses.length; i++) {
//     body.classList.remove(themeClasses[i]);
//   }
// }

// ── Exercise 2 · Count the changes ────────────────────────────

// TODO 2 — every theme change adds one to the counter.
// The counter is a span holding text, and text is not a number:
// "0" + 1 would be "01". Number() turns the text into a number,
// then adding 1 works as arithmetic, and textContent writes it back.
//                                                           [8 min]
// Aim: each call of updateChangeCounter() adds one to #change-counter.
// Steps:
//   1. Select the element with id change-counter.
//   2. Read its textContent, turn it into a number with Number().
//   3. Add one and write the result back into textContent.
// Now type it, just below:
//
// function updateChangeCounter() {
//   const counter = document.querySelector("#change-counter");
//   counter.textContent = Number(counter.textContent) + 1;
// }

// ── Exercise 3 · Apply the new theme ──────────────────────────

// TODO 3 — changeTheme(): clear, then add the chosen class.
// The buttons hand over a complete class name, such as
// "theme-ocean". Clear the old ones, add the new one — but the
// default theme is the page's base styling, so "theme-default"
// must not be added as a class. Then write the theme's display
// name into the status line; a small object maps class to name,
// so no string surgery is needed. Finish by calling the counter.
//                                                          [12 min]
// Aim: changeTheme("theme-ocean") re-skins the page, writes "Ocean"
// into #current-theme, and moves the counter.
// Steps:
//   1. An object that maps each theme class name to its display name.
//   2. A function that takes a class name, calls clearThemes() and
//      adds the class to body only when the name is not
//      "theme-default".
//   3. Write the display name into the element with id current-theme.
//   4. Call updateChangeCounter() from exercise 2.
// Now type it, just below:
//
// const themeNames = {
//   "theme-default": "Default",
//   "theme-ocean": "Ocean",
//   "theme-sunset": "Sunset",
//   "theme-forest": "Forest",
//   "theme-midnight": "Midnight",
// };
// function changeTheme(themeName) {
//   clearThemes();
//   if (themeName !== "theme-default") {
//     body.classList.add(themeName);
//   }
//   document.querySelector("#current-theme").textContent = themeNames[themeName];
//   updateChangeCounter();
// }

// ── Exercise 4 · Wire the theme buttons ───────────────────────

// TODO 4 — five buttons, one loop, one listener each.
// The buttons are already in the page, each carrying its complete
// theme class name in its value attribute. Collect them with
// querySelectorAll, walk the list, and give each one a click
// listener that hands its value to changeTheme().
//                                                          [12 min]
// Aim: clicking any of the five buttons changes the page theme,
// writes its name in the status line, and moves the counter.
// Steps:
//   1. querySelectorAll for the buttons labelled theme-btn.
//   2. A counted loop over the list.
//   3. On each button, addEventListener for "click"; in the handler,
//      read the button's value from e.target.value and pass it to
//      changeTheme().
// Now type it, just below:
//
// const themeButtons = document.querySelectorAll(".theme-btn");
// for (let i = 0; i < themeButtons.length; i++) {
//   themeButtons[i].addEventListener("click", function (e) {
//     changeTheme(e.target.value);
//   });
// }

// ── Exercise 5 · Count the views ──────────────────────────────

// TODO 5 — the view counter is the change counter again, with
// another id. Same trap: the counter holds text, so turn it into a
// number before adding.
//                                                           [8 min]
// Aim: every call of updateViewCounter() adds one to #view-counter.
// Steps:
//   1. Select the element with id view-counter.
//   2. Read its textContent and turn it into a number with Number().
//   3. Add one and write the result back.
// Now type it, just below:
//
// function updateViewCounter() {
//   const counter = document.querySelector("#view-counter");
//   counter.textContent = Number(counter.textContent) + 1;
// }

// ── Exercise 6 · Show a photo ─────────────────────────────────

// TODO 6 — the gallery's photos, and one function that shows one.
// The six photos are already printed as thumbnails, and their data
// lives in one array of objects. showImage() takes the three pieces
// of one photo and writes them into the page: the main image's src
// and alt, the title under it, and the name in the stats line. It
// ends by calling updateViewCounter() from exercise 5.
//                                                          [10 min]
// Aim: calling showImage("images/photo-3.jpg", "Ocean Waves",
// "Ocean Waves") shows that photo large, names it in both places,
// and moves the view counter.
// Steps:
//   1. An array of six objects: src, title and alt for each photo.
//   2. A function taking imageSrc, imageTitle and imageAlt.
//   3. Select the main image (id main-image) and set its src and alt.
//   4. Write the title into id image-title and the alt into id
//      current-image-name.
//   5. Call updateViewCounter() at the end.
// Now type it, just below:
//
// const photos = [
//   { src: "images/photo-1.jpg", title: "Dawn Ridge", alt: "Dawn Ridge" },
//   { src: "images/photo-2.jpg", title: "City Lights", alt: "City Lights" },
//   { src: "images/photo-3.jpg", title: "Ocean Waves", alt: "Ocean Waves" },
//   { src: "images/photo-4.jpg", title: "Forest Path", alt: "Forest Path" },
//   { src: "images/photo-5.jpg", title: "Desert Dunes", alt: "Desert Dunes" },
//   { src: "images/photo-6.jpg", title: "Night Sky", alt: "Night Sky" },
// ];
// function showImage(imageSrc, imageTitle, imageAlt) {
//   const mainImage = document.querySelector("#main-image");
//   mainImage.src = imageSrc;
//   mainImage.alt = imageAlt;
//   document.querySelector("#image-title").textContent = imageTitle;
//   document.querySelector("#current-image-name").textContent = imageAlt;
//   updateViewCounter();
// }

// ── Exercise 7 · Handle a thumbnail click ──────────

// TODO 7 — a click on a thumbnail shows its photo and marks it.
// The handler receives the event. The thumbnails are in the same
// order as the photos array, so walk the thumbnails, remove the
// active class from each, and remember which one is the event's
// target — that index is the photo to show. Then add active to the
// target and call showImage() with that photo's three fields.
// Keep the index in a variable declared outside the function: the
// keyboard exercise (9) will move it too.
//                                                   [homework · 18 min]
// Aim: clicking a thumbnail shows that photo large, names it in both
// places, marks exactly that thumbnail active, and adds one view.
// The state lives in a top-level variable, let currentIndex = 0.
//
// Your code goes here.

// ── Exercise 8 · Wire the gallery ──────────────────

// TODO 8 — one listener per thumbnail, the same pattern as the
// theme buttons. Collect the thumbnails, walk the list, and attach
// handleThumbnailClick to each one.
//                                                   [homework · 18 min]
// Aim: clicking any of the six thumbnails runs exercise 7's handler.
//
// Your code goes here.

// ── Exercise 9 · Keyboard arrows ───────────────────

// TODO 9 — the same gallery, without the mouse.
// Listen for keydown on the document. Only two keys matter:
// ArrowRight moves to the next photo, ArrowLeft to the previous,
// and the list wraps at both ends (after the last comes the first;
// before the first comes the last). After moving, clear active from
// every thumbnail, mark the current one, and call showImage() with
// that photo. The index is the variable exercise 7 keeps.
//                                                   [homework · 24 min]
// Aim: pressing the right arrow shows the next photo and moves the
// active border; the left arrow goes back; at the ends the gallery
// wraps around; the view counter moves with every arrow.
//
// Your code goes here.
