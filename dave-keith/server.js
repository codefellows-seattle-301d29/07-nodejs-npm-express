'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

//we don't want all users to have access to all files, including server config files like server.js .  Only select files are made accessible to public.  We tell express to serve files in the public directory with the below command.

app.use(express.static('./public'));

app.listen(PORT, () => console.log('listening on PORT:', PORT));

app.get('/new', (req, res) => {
  res.sendfile('public/new.html');
});

app.get('*', (req, res) => {
  res.send('Quoth the server: 404');
});

app.post('/articles', bodyParser, (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});
