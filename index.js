import { displayData } from './modules/displayData.js';
import { DateTime } from './luxon.js';
import { Book } from './modules/Book.js';
export const bookTitle = document.getElementById('bookTilte');
export const bookAuthor = document.getElementById('bookAuthor');
export const btnAdd = document.getElementById('Add');
export const formControl = document.getElementsByClassName('form-control');
const dateElem = document.getElementById('date');
const removeBooks = document.getElementById('removeBook');
export let books = [];
btnAdd.addEventListener('click', () => {
  const addBook = new Book('title', 'author');
  addBook.add();
  displayData();
});

function deleteBook() {
  const dBook = new Book('title', 'author');
  dBook.deleteBook();
}
if (JSON.parse(localStorage.getItem('bookLists')) != null) {
  books = JSON.parse(localStorage.getItem('bookLists'));
  displayData();
} else {
  deleteBook();
}
function clearForm() {
  const clearForms = new Book();
  for (let i = 0; i < clearForm.length; i += 1) {
    clearForm[i].value = '';
    clearForms.clearForm();
  }
}
clearForm();

function displayDate() {
  document.getElementById('date').innerHTML = Date();
}

displayDate();
function displayList() {
  document.getElementById('titleLibrary').className = 'title';
  document.getElementById('listBook').className = 'library';
  document.getElementById('contactBook').className = 'hiddenContactBook';
  document.getElementById('addBook').className = 'hiddenAddBook';
}

document.getElementById('list').onclick = displayList;

function displayBookForm() {
  document.getElementById('titleLibrary').className = 'hiddenTitle';
  document.getElementById('listBook').className = 'hiddelibrary ';
  document.getElementById('contactBook').className = 'hiddenContactBook';
  document.getElementById('addBook').className = 'addBook';
}

document.getElementById('bookform').onclick = displayBookForm;

function displayContact() {
  document.getElementById('titleLibrary').className = 'hiddenTitle';
  document.getElementById('listBook').className = 'hiddelibrary ';
  document.getElementById('contactBook').className = 'contactBook';
  document.getElementById('addBook').className = 'hiddenAddBook';
}

document.getElementById('contact').onclick = displayContact;

DateTime.innerText = new Date();
setInterval(() => {
  dateElem.innerText = new Date();
}, 1000);
