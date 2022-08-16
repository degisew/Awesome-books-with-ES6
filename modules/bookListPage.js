const displayPage = document.querySelector('.display-page');
const listBook = () => {
  displayPage.style.display = 'flex';
  displayPage.style.flexDirection = 'column';
  document.querySelector('.add-page').style.display = 'none';
  document.querySelector('.contact-me').style.display = 'none';
};

export { listBook, displayPage };
