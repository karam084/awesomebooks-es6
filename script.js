const bookTitle = document.getElementById('bookTilte');
const bookAuthor = document.getElementById('bookAuthor');
const btnAdd = document.getElementById('Add');

let books = [];

function displayData() {
  let bookList = '';
  for (let i = 0; i < books.length; i += 1) {
    bookList += `<div class="book">
   <div>
    <td>${books[i].title}     
      </td>
      <td> by </td>
      <td>
      ${books[i].author}</td></div>
      <div>
      <td><button onClick="deleteBook(${i})" class="remove">Remove</button>
      </td></div>
     </div>
     `;
  }
  document.getElementById('tdBody').innerHTML = bookList;
}

class book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
book.addBook = function add() {
  const book = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  books.push(book);
  localStorage.setItem('bookLists', JSON.stringify(books));
};
btnAdd.onclick = () => {
  book.addBook();
  displayData();
};

function deleteBook(index) {
  books.splice(index, 1);
  localStorage.setItem('bookLists', JSON.stringify(books));
  displayData();
}

if (JSON.parse(localStorage.getItem('bookLists')) != null) {
  books = JSON.parse(localStorage.getItem('bookLists'));
  displayData();
} else {
  deleteBook();
}
