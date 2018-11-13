const buildBook = function (data) {
  for (const book in data) {
  // book info
    const title = data[book].title;
    const cover = data[book].cover;
    const author = data[book].author;
    const year = data[book].year;
    const pages = data[book].pages;
    const summary = data[book].summary;

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
    const popup = document.createElement('div');
    const hoverYear = document.createElement('span');
    const hoverTitle = document.createElement('h3');
    const hoverAuthor = document.createElement('span');
    const hoverPages = document.createElement('span');
    const hoverSummaryWord = document.createElement('h4');
    const hoverSummary = document.createElement('p');
    const button = document.createElement('button');
    const btnText = document.createTextNode('Borrow');
    const circle = document.createElement('div');
    const circleIcon = document.createElement('i');
    const rateBook = document.createElement('div');
    const rateSentence = document.createElement('span');
    const rateHover = document.createElement('div');
    const hStar1 = document.createElement('i');
    const hStar2 = document.createElement('i');
    const hStar3 = document.createElement('i');
    const hStar4 = document.createElement('i');
    const hStar5 = document.createElement('i');
    const coverHover = document.createElement('div');
    const description = document.createElement('div');
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
    $(popup).attr('class', 'popup');
    $(coverHover).attr('class', 'cover-hover');
    $(description).attr('class', 'description');
    $(hoverYear).attr('class', 'hover-year');
    $(hoverTitle).attr('class', 'hover-title');
    $(hoverAuthor).attr('class', 'hover-novel-by');
    $(hoverPages).attr('class', 'hover-pages');
    $(hoverSummaryWord).attr('class', 'hover-summary');
    $(hoverSummary).attr('class', 'hover-p');
    $(span).attr('class', 'article-author');
    $(h3).attr('class', 'article-title');
    $(circle).attr('class', 'circle');
    $(circleIcon).attr('class', 'fas fa-book-open');
    $(rateBook).attr('class', 'rate-book');
    $(rateSentence).attr('class', 'rate-sentence');
    $(rateHover).attr('class', 'rate-hover');
    $(hStar1).attr('class', 'fas fa-star');
    $(hStar2).attr('class', 'fas fa-star');
    $(hStar3).attr('class', 'fas fa-star');
    $(hStar4).attr('class', 'fas fa-star');
    $(hStar5).attr('class', 'fas fa-star');
    $(button).attr('class', 'hover-button');
    rateSentence.innerHTML = 'RATE THIS BOOK';
    h3.innerHTML = title;
    span.innerHTML = author;
    hoverYear.innerHTML = year;
    hoverTitle.innerHTML = title;
    hoverAuthor.innerHTML = `Novel by ${author}`;
    hoverPages.innerHTML = `${pages} pages`;
    hoverSummaryWord.innerHTML = 'SUMMARY';
    hoverSummary.innerHTML = summary;
    article.appendChild(figure);
    article.appendChild(h3);
    article.appendChild(span);
    article.appendChild(rate);
    article.appendChild(popup);
    popup.appendChild(coverHover);
    popup.appendChild(description);
    coverHover.appendChild(circle);
    coverHover.appendChild(rateBook);
    circle.appendChild(circleIcon);
    rateBook.appendChild(rateSentence);
    rateBook.appendChild(rateHover);
    rateHover.appendChild(hStar1);
    rateHover.appendChild(hStar2);
    rateHover.appendChild(hStar3);
    rateHover.appendChild(hStar4);
    rateHover.appendChild(hStar5);
    description.appendChild(hoverYear);
    description.appendChild(hoverTitle);
    description.appendChild(hoverAuthor);
    description.appendChild(hoverPages);
    description.appendChild(hoverSummaryWord);
    description.appendChild(hoverSummary);
    description.appendChild(button);
    button.appendChild(btnText);
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
