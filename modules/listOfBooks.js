import Book from './addRemoveBook.js';

const book = new Book();
const bookList = document.createElement('ul');
bookList.style.marginTop = '20px';
bookList.className = 'book-list';

const anyRandomName = () => {
  book.list.forEach((each, bookId) => {
    const list1 = document.createElement('li');
    list1.className = 'list';

    const title = document.createElement('h2');
    title.innerHTML = `"${each.title}"`;
    const phrase = document.createElement('b');
    phrase.textContent = 'By';
    list1.appendChild(title);
    list1.appendChild(phrase);

    const author = document.createElement('h2');
    author.innerHTML = each.author;
    list1.appendChild(author);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove';
    removeButton.id = `${bookId}`;
    removeButton.innerHTML = 'Remove';
    list1.appendChild(removeButton);

    bookList.appendChild(list1);
    removeButton.addEventListener('click', function removeBtnHandler() {
      const getId = this.id;
      book.remove(getId);
      bookList.innerHTML = '';
      anyRandomName();
    });
  });
};

export { anyRandomName, book, bookList };