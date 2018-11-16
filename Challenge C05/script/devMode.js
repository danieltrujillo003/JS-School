/* eslint-env browser */
/* eslint-env jquery */

// devMode created to allow devs experiment with the bookshelf before making real changes in code.
const launcher = document.getElementById('dev-launch');
let counter = 0;

// devMode is launched when element launcher is clicked more than 5 times
launcher.addEventListener('mousedown', () => {
  if (counter < 5) {
    counter += 1;
  } else { // All  devMode structure is displayed using document fragment
    launcher.classList.add('dev-hide');

    // Defining elements to append to the wrapper
    const wrapper = document.createDocumentFragment();
    const bookSearch = document.createElement('input');
    const bookAdd = document.createElement('button');
    const addText = document.createTextNode('Add book');
    const bookRemove = document.createElement('button');
    const removeText = document.createTextNode('Remove book');
    const devBar = document.createElement('div');
    const container = document.getElementById('dev-container');

    // Giving some attributes
    $(bookSearch).attr({
      type: 'text',
      placeholder: 'Input book ISBN...',
      id: 'searcher',
    });
    $(devBar).attr('class', 'dev-display');
    $(bookAdd).attr('id', 'add-btn');
    $(bookRemove).attr('id', 'remove-btn');

    // Assembling the structure
    bookAdd.appendChild(addText);
    bookRemove.appendChild(removeText);
    devBar.appendChild(bookSearch);
    devBar.appendChild(bookAdd);
    devBar.appendChild(bookRemove);
    wrapper.appendChild(devBar);
    container.appendChild(wrapper);
  }

  // Defining functionality of the 'Remove book' button
  const remBtn = document.getElementById('remove-btn');
  remBtn.addEventListener('mousedown', () => Array.from(document.querySelectorAll('article'))[Array.from(document.querySelectorAll('article')).length - 1].remove());

  // buildBook is declared to build the wanted book with the info related to the given ISBN
  function buildBook(data) {
    // Calling the information from the API
    const {
      volumeInfo: {
        title,
        authors: author,
        imageLinks: {
          thumbnail: cover,
        },
      },
    } = data.items[0];

    // Defining elements to append to the wrapper
    const wrapper = document.createDocumentFragment();
    const article = document.createElement('article');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const span = document.createElement('span');
    const rate = document.createElement('div');
    const star1 = document.createElement('i');
    const star2 = document.createElement('i');
    const star3 = document.createElement('i');
    const star4 = document.createElement('i');
    const star5 = document.createElement('i');
    const container = document.getElementById('books-container');

    // Giving some attributes
    $(img).attr({
      class: 'book-cover',
      src: cover,
      alt: `${title} book cover`,
    });
    $(rate).attr('class', 'rating');
    $(star1).attr('class', 'fas fa-star');
    $(star2).attr('class', 'fas fa-star');
    $(star3).attr('class', 'fas fa-star');
    $(star4).attr('class', 'fas fa-star');
    $(star5).attr('class', 'fas fa-star');
    $(article).attr('class', 'book');
    $(h3).attr('class', 'article-title');
    $(span).attr('class', 'article-author');

    // Assembling the structure
    h3.innerHTML = title;
    span.innerHTML = author;
    article.appendChild(figure);
    article.appendChild(h3);
    article.appendChild(span);
    article.appendChild(rate);
    figure.appendChild(img);
    rate.appendChild(star1);
    rate.appendChild(star2);
    rate.appendChild(star3);
    rate.appendChild(star4);
    rate.appendChild(star5);
    wrapper.appendChild(article);
    container.appendChild(wrapper);
  }

  // Defining functionality of the 'Add book' button
  const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('mousedown', () => { // Ajax is used to get the info from the API
    const apiURL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${document.getElementById('searcher').value}`;
    $.ajax({
      type: 'GET',
      url: apiURL,
      success: buildBook,
      error(e) {
        console.log(e);
      },
    });
  });
});
