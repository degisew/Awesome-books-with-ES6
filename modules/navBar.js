const navBar = document.createElement('ul');
const navMenuDiv = document.createElement('div');
navMenuDiv.className = 'nav-menu-div';
navBar.className = 'nav-bar';
const navHeading = document.createElement('h2');
navHeading.textContent = 'Awesome Books';
navHeading.className = 'nav-title';
const listMenu = document.createElement('li');
listMenu.id = 'first-list';
const listLink = document.createElement('a');
listLink.textContent = 'List';
listLink.className = 'menu-link';
listMenu.append(listLink);
navMenuDiv.append(listMenu);

const addMenu = document.createElement('li');
addMenu.id = 'second-list';
const addLink = document.createElement('a');
addLink.textContent = 'Add Book';
addLink.className = 'menu-link';
addMenu.append(addLink);
navMenuDiv.append(addMenu);

const contactMenu = document.createElement('li');
contactMenu.id = 'third-list';
const contactLink = document.createElement('a');
contactLink.textContent = 'Contact';
contactLink.className = 'menu-link';
contactMenu.append(contactLink);
navMenuDiv.append(contactMenu);
navBar.append(navMenuDiv);
navBar.prepend(navHeading);

export {
  navBar, addLink, listLink, contactLink,
};