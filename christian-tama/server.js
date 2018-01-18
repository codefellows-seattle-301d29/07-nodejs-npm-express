'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

// Any static file that lives inside of the public directory can now be served. Our app is now inside of the public directory because it is our client-facing front end. 
app.use(express.static('./public'));

app.get('/new', (req, res) => {
  res.sendFile('new.html', {root: './public'});
  console.log('test');
});

app.use((req, res) => {
  res.status(404).send('Sorry, something exploded');
});

app.listen(PORT, () => {
  console.log('Currently listening on PORT: ', PORT);
});


app.post('/articles', bodyParser, (req, res) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})
