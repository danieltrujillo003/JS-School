/* eslint-env browser */
/* eslint-env jquery */

// BuildBook declared to build all books with help of Handlebars
function buildBook(data) {
  const rawTemplate = document.getElementById('entry-template').innerHTML;
  const compiledTemplate = Handlebars.compile(rawTemplate);
  const builtbooks = compiledTemplate(data);
  const container = document.getElementById('books-container');
  container.innerHTML = builtbooks;
}

// HTTP request
function apiSearch() {
  $.ajax({
    type: 'GET',
    url: 'script/booksCollection.json',
    success: buildBook,
    error(e) {
      console.log(e);
    },
  });
}

apiSearch();
