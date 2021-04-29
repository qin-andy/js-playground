const path = require("path");
const express = require("express");
const Note = require("./notes/model/Note.js");
const NoteDao = require("./notes/model/NoteDao.js");

const port = process.env.PORT || 5000;
const app = express();

app.use(express.static("src")); // To link JS files to their respective html pages
app.use(express.static("assets")); // So CSS Files can access assets
app.use(express.json()); // To process the post requests

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
notes.create("HEBBO!", "Tinysnout the Loud");
console.log(notes.readAll());

app.get("/api/notes", (req, res) => {
  const author = req.query.author;
  res.json(notes.readAll(author));
});

app.get("/api/notes/:id", (req, res) => {
  const id = Number.parseInt(req.params.id);
  res.json(notes.read(id));
});

app.post("/api/notes", (req, res) => {
  try {
  const content = req.body.content;
  const author = req.body.author;
  const note = notes.create(content, author);
  res.status(201).json(note);
  } catch (error) {
    res.status(400).send(error.message);
  }
})