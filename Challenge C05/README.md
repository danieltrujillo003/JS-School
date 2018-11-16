# Challenge C05: Homepage

This is the homepage of the *Jobsity Bookshelf*, with the main layout being **pixel perfect** according to the initial design using **HTML5 and SASS**. There are some sample books displayed with highly adaptable **responsive design** for all screen sizes so the web can be enjoyed from any device. Also, all the information of the books was taken from the Google Books API using **AJAX** for the HTTP requests and **JSON** to store information so the info will be always reliable, and then displayed with **Handlebars**.

## Setup
If the repository will be cloned or downloaded in order to access to the *Bookshelf* from a local computer, the JSON file storing th books info needs to be run in a server, so it is recommended to install `live-server` running this line in the terminal:  
`npm install live-server`  
Then only execute live server in the repository folder and the *Bookshelf* will be correctly displayed.

It also can be seen online following this link: [Jobsity Bookshelf](https://danieltrujillo003.github.io/JS-School/Challenge%20C05/).

## Developer Mode

Last but not least, As a *brand-new feature*, if the *Bookshelf* title is clicked more than 5 times, it will display a temporary **developer mode**, in which a new book can be added at the end by entering its ISBN and either the last book can be removed, doing so a preview of modifications can be seen before any code change.
