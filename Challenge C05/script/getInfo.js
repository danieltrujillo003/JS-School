const isbnList = [
  9780143127550,
  9781408855713,
  9780060598242,
  9780618640157,
  9780143126829,
  9780802123701,
  9780425274866,
  9781435154469,
  9781726297332,
  9780804172448,
  9781853264337,
  9780062116161,
  9780345806406,
  9780385152136,
  9780199536863,
];

const getData = function (listItem, index) {
  const apiURL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${listItem}`;
  $.ajax({
    type: 'GET',
    url: apiURL,
    success: (data) => {
      const title = data.items[0].volumeInfo.title;
      const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
      const author = data.items[0].volumeInfo.authors;
      const rating = data.items[0].volumeInfo.averageRating;
      const year = data.items[0].volumeInfo.publishedDate;
      const pages = data.items[0].volumeInfo.pageCount;
      const summary = data.items[0].volumeInfo.description;
      // let isbn = data.items[0].volumeInfo.industryIdentifiers[0].identifier;
      const bookInfo = `"book${index}": {
        "cover": "${cover}",
        "title": "${title}",
        "author": "${author}",
        "rating": "${rating}",
        "year": "${year}",
        "pages": "${pages}",
        "summary": "${summary}"
      },`;
      console.log(bookInfo);
    },
    error(e) {
      console.log(e);
    },
  });
};

isbnList.forEach(getData);
