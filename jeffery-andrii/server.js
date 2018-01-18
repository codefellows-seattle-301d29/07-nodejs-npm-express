'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const PORT = process.env.PORT || 3006;
const express = require('express');
const app = express();



// need this to serve any static file in  public directory

app.use(express.static('/public'));

app.listen(PORT, () =>{
  console.log('curently on port ', PORT);
  });

app.get('/new', (req, res)=>{
  res.sendfile('public/new.html');
});

app.get('/index', (req, res)=>{
  res.sendfile('public/index.html');
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});