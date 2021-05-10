const path = require("path");
const express = require("express");
const Note = require("../notes/model/Note.js");
const NoteDao = require("../notes/model/NoteDao.js");

const router = express.Router();

router.use(express.static("src")); // To link JS files to their respective html pages
router.use(express.static("assets")); // So CSS Files can access assets

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../public/index.html"));
});

router.get("/tictactoe.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../public/tictactoe.html"));
});

const notes = new NoteDao();
notes.create("Hi my name is Bigsmoh", "Bigsmoh");
notes.create("*inaduible*", "Tinysnout the Brave");
notes.create("*still inaduible*", "Tinysnout the Brave");
notes.create("HEBBO!", "Tinysnout the Loud");
console.log(notes.readAll());

router.get("/api/notes", (req, res) => {
  const author = req.query.author;
  res.json(notes.readAll(author));
});

router.get("/api/notes/:id", (req, res) => {
  const id = Number.parseInt(req.params.id);
  res.json(notes.read(id));
});

router.post("/api/notes", (req, res) => {
  try {
    const content = req.body.content;
    const author = req.body.author;
    const note = notes.create(content, author);
    res.status(201).json(note);
  } catch (error) {
    res.status(400).send(error.message);
  }
})

router.delete("/api/notes/:id", (req, res) => {
  const id = Number.parseInt(req.params.id);
  const note = notes.delete(id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).send("File not found!");
  }
})

router.put("/api/notes/:id", (req, res) => {
  const id = Number.parseInt(req.params.id);
  const content = req.body.content;
  const author = req.body.author;

  try {
    const note = notes.update(id, content, author);
    if (note) {
      res.json(note);
    } else {
      res.status(404).send("Resource not found!");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;