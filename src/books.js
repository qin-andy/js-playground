class Book{
    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
    }

    details() {
        return "Name: " + this.author + " | Title: " + this.title + " | Genre: " + this.genre;
    }
}

const book1 = new Book("The Bigsmoh", "Smoh Story", "Tinysnout the Brave");
const book2 = new Book("The Remains of the Day", "Comedy", "Kazuo Ishiguro");
