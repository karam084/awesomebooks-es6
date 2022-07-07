import { displayData } from './displayData.js';
import { bookTitle, bookAuthor, books, formControl } from '../index.js';

export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    const book = {
      title: bookTitle.value,
      author: bookAuthor.value,
    };
    books.push(book);
    localStorage.setItem('bookLists', JSON.stringify(books));
    return this.book;
  }

  deleteBook(index) {
    books.splice(index, 1);
    localStorage.setItem('bookLists', JSON.stringify(books));
    displayData();
    return this.book;
  }

  clearForm() {
    for (let i = 0; i < formControl.length; i += 1) {
      formControl[i].value = '';
    }
    return this.book;
  }
}
