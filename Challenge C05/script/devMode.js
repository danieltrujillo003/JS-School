const launcher = document.getElementById('dev-launch');
let counter = 0;

launcher.addEventListener('mousedown', () => {
  if (counter < 5) {
    counter += 1;
  } else {
    launcher.classList.add('dev-hide');
    const wrapper = document.createDocumentFragment();
    const bookSearch = document.createElement('input');
    const bookAdd = document.createElement('button');
    const addText = document.createTextNode('Add book');
    const bookRemove = document.createElement('button');
    const removeText = document.createTextNode('Remove book');
    const devBar = document.createElement('div');
    const container = document.getElementById('dev-container');

    $(bookSearch).attr({
      type: 'text',
      placeholder: 'Input book ISBN...',
      id: 'searcher',
    });
    $(devBar).attr('class', 'dev-display');
    $(bookAdd).attr('id', 'add-btn');
    $(bookRemove).attr('id', 'remove-btn');
    bookAdd.appendChild(addText);
    bookRemove.appendChild(removeText);
    devBar.appendChild(bookSearch);
    devBar.appendChild(bookAdd);
    devBar.appendChild(bookRemove);
    wrapper.appendChild(devBar);
    container.appendChild(wrapper);

    const remBtn = document.getElementById('remove-btn');
    remBtn.addEventListener('mousedown', () => Array.from(document.querySelectorAll('article'))[Array.from(document.querySelectorAll('article')).length - 1].remove());
  }
  const buildBook = function (data) {
    const title = data.items[0].volumeInfo.title;
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    const author = data.items[0].volumeInfo.authors;
    const rating = data.items[0].volumeInfo.averageRating;
    const year = data.items[0].volumeInfo.publishedDate;
    const pages = data.items[0].volumeInfo.pageCount;
    const summary = data.items[0].volumeInfo.description;
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
  };
  const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('mousedown', () => {
    apiURL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${document.getElementById('searcher').value}`;
    console.log(apiURL);
    $.ajax({
      type: 'GET',
      url: apiURL,
      success: buildBook,
      error(error) {
        console.log(error);
      },
    });
  });
});
