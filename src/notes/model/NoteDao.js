const Note = require("./Note");

/**
 * Database Abstraction Object
 * Provides CRUD operation for notes
 */
class NoteDao {
  constructor() {
    this.notes = [];
    this.nextID = uniqueID(); // ID function using closure
  }

  create(content, author) {
    const note = new Note(content, author);
    note._id = this.nextID(); // Retrieves a unique ID
    this.notes.push(note);
  }

  readAll(author = "") {
    if (author) {
      return this.notes.filter((note) => note.author === author);
    }
    return this.notes;
  }

  update(id, content, author) {
    const index = this.notes.findIndex((note) => note._id === id);
    if (index === -1) {
      return null;
    }
    this.notes[index].content = content;
    this.notes[index].author = author;
    return this.notes[index];
  }

  delete(id) {
    const index = this.notes.findIndex((note) => note._id === id);
    if (index === -1) {
      return null;
    }
    const note = this.notes[index];
    this.notes.splice(index, 1);
    return note;
  }
}

const uniqueID = function() {
  let id = 0;
  return function() {
    return id++;
  }
}

module.exports = NoteDao;