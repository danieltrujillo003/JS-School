const buildBook = function (data) {
  for (const book in data) {
  // book info
    const title = data[book].title;
    const cover = data[book].cover;
    const author = data[book].author;
    // Create book fragment
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
    $(article).attr('class', 'book');
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
};
// HTTP request
const apiSearch = function () {
  $.ajax({
    type: 'GET',
    url: 'script/booksCollection.json',
    success: buildBook,
    error(error) {
      console.log(error);
    },
  });
};

apiSearch();
