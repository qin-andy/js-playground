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
    this.notes.push(new Note(content, author));
  }
}

const uniqueID = function() {
  let id = 0;
  return function() {
    return id++;
  }
}