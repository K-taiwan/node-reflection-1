//--------------------------------SETUP
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//---------------------------------MIDDLEWARE

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//-------------------------------CONFIGURATION VARIABLES
const PORT = process.env.PORT || 3000;


// ----------------------------ROUTES

// View Routes
app.get('/',  (req, res) => {
  res.sendFile('views/index.html' , { root : __dirname});
});

// Class Routes

// Student Routes

// ------------------------------ Start Server
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}/`));
