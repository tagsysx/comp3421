// history.length counts the entries in this tab, including the ones
// you added with pushState. back() and forward() are the toolbar
// buttons; this page only reads, so nothing navigates away.
const rows = {
  "history.length":           history.length,
  "history.state":            JSON.stringify(history.state),
  "history.scrollRestoration": history.scrollRestoration
};

document.getElementById("out").textContent =
  Object.entries(rows).map(([k, v]) => k.padEnd(26) + v).join("\n") +
  "\n\npushState() adds an entry without reloading — that is how an SPA\n" +
  "changes the URL. popstate fires when the user walks back.";
