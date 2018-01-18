'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const bodyParser = require('body-parser').urlencoded({extended: true});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
// The Public directory is where we want static files to be stored for api requests.  This can also be called the "client file" as a standard 
app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, () => {
    console.log('currently listening on PORT:', PORT)
});







// app.get('/api/codefellows', (req, res) => {
//     console.log('api sent!')
//     res.json({ company: 'codefellows', courses: [201, 301, 401] });
// });
