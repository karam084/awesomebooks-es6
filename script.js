const bookTitle = document.getElementById('bookTilte');
const bookAuthor = document.getElementById('bookAuthor');
const btnAdd = document.getElementById('Add');

let books = [];

function displayData() {
  let bookList = '';
  for (let i = 0; i < books.length; i += 1) {
    bookList += `<div class=book>
    <h3 class="title">${books[i].title}     
      </h3>
      <p class="author">
      ${books[i].author}</p>
      <div class="remove"><button onClick="deleteBook(${i})">Remove</button>
      </div>
      <hr>
      <br>
     </div>
     `;
  }
  document.getElementById('tdBody').innerHTML = bookList;
}

function add() {
  const book = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  books.push(book);
  localStorage.setItem('bookLists', JSON.stringify(books));
}

btnAdd.onclick = () => {
  add();
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
