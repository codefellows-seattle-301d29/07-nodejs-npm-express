![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab 07: NodeJS & NPM
===

## Code Wars Challenge

Complete [today's Kata](https://www.codewars.com/kata/disemvowel-trolls) and follow the submission instructions from Lab 01.

## Lab 07 Submission Instructions
Follow the submission instructions from Lab 01.

## Resources  
[Node JS Docs](https://nodejs.org/en/)

[NPM JS Docs](https://docs.npmjs.com/)

[Express JS Docs](http://expressjs.com/en/4x/api.html)

## Configuration
_Your repository must include:_

```
07-nodejs-npm-express
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
│   ├── data
│   │   └── hackerIpsum.json
│   ├── index.html
│   ├── new.html
│   ├── scripts
│   │   ├── article.js
│   │   └── articleView.js
│   ├── styles
│   │   ├── base.css
│   │   ├── fonts
│   │   │   ├── icomoon.eot
│   │   │   ├── icomoon.svg
│   │   │   ├── icomoon.ttf
│   │   │   └── icomoon.woff
│   │   ├── icons.css
│   │   ├── layout.css
│   │   └── modules.css
│   └── vendor
│       └── styles
│           ├── default.css
│           ├── normalize.css
│           └── railscasts.css
└── server.js
```

## User Stories and Feature Tasks

*As a user, I want to be able to create new articles and allow guests to retrieve those new articles.*

- Initialize the project with `npm init`, which creates `package.json` and `package-lock.json` files. Don't forget to add `node_modules` to your `.gitignore` file!
-  Use NPM to install ExpressJS and ensure that it's been saved as a dependency in the `package.json` file.

*As a developer, I want to use the ExpressJS framework to set up a server file to handle HTTP requests and deliver responses.*

- Instantiate the ExpressJS framework and configure the `app.use()` middleware to interface with the file system to serve static resources. *Include a comment* to explain why our files are in a "public" directory now and how ExpressJS serves our local files.
- Ensure that the server is listening for incoming requests. Include a message to let you know on which port your server is running.
- Run the server using `node server` and ensure that your app functions correctly. If you'd like to have your code live re-load the way that `live-server` did, install the NPM package `nodemon` and use that to run your server.

*As a user, I want to access the form directly so I can easily add new articles.*

- Create a route and callback that will serve up the new.html page via a separate URI.
- As you write your code, use arrow functions and refactor any existing methods to use arrow functions, where possible.

*As a user, I want feedback if I have made an error so that I can make sure to always access the correct URL.*

- Create a ***404*** route to handle any requests other than index.html or new.html, and deliver a 404 status and a message to those invalid requests.

# 07-nodejs-npm-express

**Author**: Bessie Arino, Melanie Cohen and Brian Bixby
**Version**: 1.0.0

## Overview
We created a server that now renders our home and new pages and 404 page errors.

## Getting Started
First a user needs to have Node installed on their computer and do a npm init and create a gitignore and then download npm packages for express and body-parser. Next the user would need to create a server that can send a response. From here we added middleware that allows static files to be rendered from our public folder. Lastly, we established our routs to our home, new and 404 pages and within these routes we had to specify the root for each.

## Architecture
We utilized Node and NPM Express, body-parser, github, Javascript, HTML and CSS

## Change Log
01-18-2001 9:00am - initial commit
01-18-2001 10:00am - correct file structure per reqs
01-18-2001 10:15am - instantiated route to render page by identifying rot
01-18-2001 10:30 - render 404 dog image on url page not found

## Credits and Collaborations
Codefellows https://github.com/codefellows-seattle-301d29 