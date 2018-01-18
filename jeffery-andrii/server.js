'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const PORT = process.env.PORT || 3026;
const express = require('express');
const app = express();



// need this to serve any static file in  public directory

app.use(express.static('./public'));

app.listen(PORT, () =>{
  console.log('curently on port ', PORT);
  });

app.get('/new', (req, res)=>{
  res.sendfile('new.html', {root: './public'});
});

const bodyParser = require('body-parser').urlencoded({extended: true});

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.use(function (req, res, next) {
  res.status(404).send("WRONG WAY DUDE")
})