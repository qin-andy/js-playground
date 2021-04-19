import React from "react"
import ReactDOM from "react-dom"

const element = <h1>Hello from Create React App</h1>

ReactDOM.render(element, document.getElementById("root"))

function Book(title, genre, author) {
    this.title = title;
    this.genre = genre;
    this.author = author;
}

Book.prototype.details = function() {
    return "Name: " + this.author + " | Title: " + this.title + " | Genre: " + this.genre;
}

const book1 = new Book("The Bigsmoh", "Smoh Story", "Tinysnout the Brave");
const book2 = new Book("The Remains of the Day", "Comedy", "Kazuo Ishiguro");
