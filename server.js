//--------------------------------SETUP
//require express in our app
const express = require('express');
const bodyParser = require('body-parser');

// generate a new express app and call it 'app'
const app = express();

//---------------------------------MIDDLEWARE

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

//-------------------------------CONFIGURATION VARIABLES
const PORT = process.env.PORT || 3000;


// ----------------------------ROUTES

// Class Routes

// Student Routes

// ------------------------------ Start Server
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}/`));
