import { books } from '../index.js';

export const displayData = () => {
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
      <button onClick="deleteBook(${i})" class="remove"id="removeBook">Remove</button>
    </div>
     </div>
     `;
  }
  document.getElementById('listBook').innerHTML = bookList;
};
