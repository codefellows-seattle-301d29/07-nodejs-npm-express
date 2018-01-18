'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.
const express = require('express');
const app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

// Our client facing files are now in public so we can tell express to serve those static files in that directory.
app.use(express.static('./public'));

app.get('/new', (req, res) => {
  res.sendFile('/public/new.html', {'root':'./public/'});
});
// Why do we have to specify the root if it's already taken care of on line 11?

app.post('/articles', bodyParser, function(req, res) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(req.body);
  res.send('Record posted to server!!');
})

app.listen(PORT, () => {
  console.log('listening on port:', PORT);
});