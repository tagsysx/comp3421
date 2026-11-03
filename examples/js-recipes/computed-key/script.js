const key = "score";
const board = { [key]: 10 };

document.getElementById("demo").innerHTML =
  "key = " + key +
  "<br>board = " + JSON.stringify(board) +
  "<br>board[key] = " + board[key];
