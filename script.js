const bookTitle = document.getElementById('bookTilte');
const bookAuthor = document.getElementById('bookAuthor');
const btnAdd = document.getElementById('Add');
const books = [];

btnAdd.onclick = function () {
  add();
  displayData();
};

function add() {
  const book = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  books.push(book);
  localStorage.setItem('booksList', JSON.stringify(books));
}

function displayData() {
  let bookList = '';
  for (var i = 0; i < books.length; i++) {
    bookList += `<tr>
    <td>${books[i].title}     
      </td>
      <td>
      ${books[i].author}</td>
      <td><button onClick="deleteBook(${i})">Remove</button></td>
     </tr>`;
  }
  document.getElementById('tdBody').innerHTML = bookList;
}
