# Backend endpoints

This challenge was about building a RESTful API for the backend of the Jobsity Bookshelf app.  
The API was built with express, the most popular backend framework for JavaScript. With express, the required endpoints were declared with respective HTTP requests like GET, POST and PATCH.

## Setup

As always, the first step once the repsitory was cloned or downloaded is to install all the thependencies with `npm install`.

Then `node index.js` to run the main JavaScript file in the node server and it now runs a series of endpoints to interact with the API. They are:

***/*** : This is the root, here is the welcome message.  
***/books*** : There is the complete collection of books.  
***/books/add*** : The funnest for users. with only its ISBN, a book can be added to the collection. There is also need to specify the location of the book, as if it's in a city or is a digital version.  
***/books/location/:city*** : The colon indicates city is a dynamic variable and entering Medellin/Cartagena/Quito/Digital the API will throw all of the books avaiable in the zone.  
***/books/:isbn*** : This is simply the way to see one specific book, only entering its ISBN into the URL.  
***/books/:isbn/borrow*** : This is other of the interesting endpoints, because here are the tools to borrow a book from the Bookshelf.

User authentication and JWT security soon.