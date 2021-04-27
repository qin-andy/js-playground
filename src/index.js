const path = require("path");
const express = require("express");
const Note = require("./notes/model/Note.js");

const port = process.env.PORT || 5000;
const app = express();

app.use(express.static("src"));
app.use(express.static("assets"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

app.get("/tictactoe.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/tictactoe.html"));
});

app.listen(port, () => {
  console.log(`Express app listening at localhost: ${port}`);
});

console.log(`Server is listenning on port ${port}`);

const note = new Note("Hebbo World!", "Lord Kibby");
const notes = [];
notes.push(new Note("Hebbo World!", "Lord Kibby"));
notes.push(new Note("I am lord Kibby!", "Lord Kibby"))
notes.push(new Note("Down with Lord Kibby!", "Peasant Kibby"));
notes.push(new Note("I have removed all peasant rights", "Lord Kibby"));
console.log(notes);