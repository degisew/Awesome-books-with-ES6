import {
  navBar, listLink, addLink, contactLink,
} from '../modules/navBar.js';
// import { Book } from "../modules/addRemoveBook.js";
import { listBook, displayPage } from '../modules/bookListPage.js';
import { anyRandomName, book, bookList } from '../modules/listOfBooks.js';
import { luxon } from '../modules/luxon.js';

const section = document.querySelector('.container');
const mainForm = document.getElementById('book-form');
const currentDate = document.createElement('div');
currentDate.id = 'displayDateTime';

// Imported from navBar.js
// navBar;

const now = luxon.DateTime.now();
const { year } = now;
const { month } = now;
const { day } = now;
const { hour } = now;
const { minute } = now;
const { second } = now;

const date = `${year}-${month}-${day}`;
const x = hour < 12 ? 'am' : 'pm';
const time = `${hour}:${minute}:${second} ${x}`;
const dateTime = `${date} ${time}`;
currentDate.innerHTML = dateTime;

displayPage.append(bookList);

// SPA implementation
window.addEventListener('load', () => {
  listBook();
});
listLink.addEventListener('click', () => {
  listBook();
});
addLink.addEventListener('click', (e) => {
  e.preventDefault();
  displayPage.style.display = 'none';
  document.querySelector('.add-page').style.display = 'flex';
  document.querySelector('.contact-me').style.display = 'none';
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  displayPage.style.display = 'none';
  document.querySelector('.add-page').style.display = 'none';
  document.querySelector('.contact-me').style.display = 'flex';
});

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');

mainForm.addEventListener('submit', () => {
  bookList.innerHTML = '';
  const valueOfTitle = document.querySelector('#title').value;
  const valueOfAuthor = document.querySelector('#author').value;
  book.add(valueOfTitle, valueOfAuthor);
  anyRandomName(); // called from the import

  // call value rest method
  bookTitle.value = '';
  bookAuthor.value = '';
});
const fetchDataList = localStorage.getItem('data');
if (fetchDataList !== null) {
  book.list = JSON.parse(fetchDataList);
  anyRandomName();
}
section.prepend(currentDate);
section.prepend(navBar);
