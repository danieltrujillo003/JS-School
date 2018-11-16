/* eslint-env jquery */

// getInfo created to get all the books info from the Google Books API
// and easily copy it to a JSON file

// Defining an array with the ISBN code of all books
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

// Making an Ajax call to get the info
function getData(listItem, index) {
  const apiURL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${listItem}`;
  $.ajax({
    type: 'GET',
    url: apiURL,
    success: (data) => {
      // Vabiables in which the info will be stored
      const {
        volumeInfo: {
          title,
          authors: author,
          averageRating: rating,
          publishedDate: year,
          pageCount: pages,
          description: summary,
          imageLinks: {
            thumbnail: cover,
          },
        },
      } = data.items[0];

      // Defining a template literal to build the JSON structure
      const bookInfo = `{
        "reference": "book${index}",
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
}

isbnList.forEach(getData);
