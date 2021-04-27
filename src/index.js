const path = require("path");
const express = require("express");
const Note = require("./notes/model/Note.js");
const NoteDao = require("./notes/model/NoteDao.js");

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

const notes = new NoteDao();
notes.create("Hi my name is Bigsmoh", "Bigsmoh");
notes.create("*inaduible*", "Tinysnout the Brave");
notes.create("*still inaduible*", "Tinysnout the Brave");
console.log(notes.readAll());
notes.update(1, "HEBBO!", "Tinysnout the Loud");
notes.delete(2);
console.log(notes.readAll());