/* amazingCode.js */

// This code is a complex implementation of a data structure for a bookstore.
// It allows for adding and removing books, searching for books, and keeping track of book inventory.

class Book {
  constructor(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }
}

class Bookstore {
  constructor() {
    this.books = [];
  }

  addBook(title, author, genre, price) {
    const newBook = new Book(title, author, genre, price);
    this.books.push(newBook);
    console.log(`Added "${newBook.title}" to the inventory.`);
  }

  removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1)[0];
      console.log(`Removed "${removedBook.title}" from the inventory.`);
    } else {
      console.log(`"${title}" not found in the inventory.`);
    }
  }

  searchBooks(query) {
    const foundBooks = this.books.filter((book) => {
      const titleMatch = book.title.toLowerCase().includes(query.toLowerCase());
      const authorMatch = book.author.toLowerCase().includes(query.toLowerCase());
      return titleMatch || authorMatch;
    });

    if (foundBooks.length > 0) {
      console.log(`Found ${foundBooks.length} book(s) matching "${query}":`);
      foundBooks.forEach((book) => {
        console.log(`  - Title: ${book.title}`);
        console.log(`    Author: ${book.author}`);
        console.log(`    Genre: ${book.genre}`);
        console.log(`    Price: $${book.price}`);
      });
    } else {
      console.log(`No books found matching "${query}".`);
    }
  }

  showInventory() {
    if (this.books.length > 0) {
      console.log(`Bookstore Inventory (${this.books.length} book(s)):`);
      this.books.forEach((book) => {
        console.log(`  - Title: ${book.title}`);
        console.log(`    Author: ${book.author}`);
        console.log(`    Genre: ${book.genre}`);
        console.log(`    Price: $${book.price}`);
      });
    } else {
      console.log("The bookstore inventory is empty.");
    }
  }
}

// Usage Example:

const bookstore = new Bookstore();

// Adding books
bookstore.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Classic", 9.99);
bookstore.addBook("To Kill a Mockingbird", "Harper Lee", "Classic", 7.99);
bookstore.addBook("1984", "George Orwell", "Science Fiction", 6.99);
bookstore.addBook("Pride and Prejudice", "Jane Austen", "Romance", 8.99);

// Searching for books
bookstore.searchBooks("great");
bookstore.searchBooks("romance");

// Removing a book
bookstore.removeBook("Pride and Prejudice");

// Showing the inventory
bookstore.showInventory();