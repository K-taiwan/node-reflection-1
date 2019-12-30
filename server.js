//--------------------------------SETUP
const express = require('express');
const bodyParser = require('body-parser');
const db = require("./models");
console.log(db.Student)
const app = express();

//---------------------------------MIDDLEWARE

// app.use(express.static('public'));
// app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//-------------------------------CONFIGURATION VARIABLES
const PORT = process.env.PORT || 3000;


// ----------------------------ROUTES

// View Routes
app.get('/',  (req, res) => {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/api/v1', (req, res) => {
  res.json({
    status: 200,
    message: 'welcome to the student create',
    endpoints: [
      {
        method: 'GET',
        path: '/api/v1',
        description: 'Describes all available endpoints'
      }
    ]
  });
});

// Students Routes, Index Route
app.get('/api/v1/students', (req,res)=>{
  db.Student.find({})
    // .populate('package')
    .exec((error, allStudents) => {
      if(error) return console.log(error);
      res.json({
        status: 200,
        data: allStudents,
        count: allStudents.length,
        requestedAt: new Date().toLocaleString()
      });
    });
});

// Student Routes
app.get('/api/v1/student', (req,res)=>{
  db.Student.find({},(error, allStudent)=>{
    if(error) return console.log(error);
        res.json({
            status: 200,
            count: allStudent.length,
            data: allStudent,
            requestedAt: new Date().toLocaleString()
        });
  });
});

// show route
app.get('/api/v1/student/:name', (req,res)=>{
  db.Student.findOne({name:req.params.name}, (error, foundStudent)=>{
    if(error) return console.log(error);
      res.json({
        status: 200,
        count: 1,
        data: foundStudent,
        requestedAt: new Date().toLocaleString()
      });
  });
});


// create route
app.post('/api/v1/students', (req,res)=>{
  const studentData = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    hobbies: req.body.hobbies
  }
  if (req.body.cohorts) {
    studentData.cohorts = [];
    req.body.cohorts.forEach(cohort => {
      studentData.cohorts.push(cohort);
    });
  }
  db.Student.create(req.body, (error, createStudent) => {
    if(error) return console.log(error);
    res.json({
      status: 201,
      data: createStudent,
      count: createStudent.length,
      requestedAt: new Date().toLocaleString()
    });
  });
});

//update
app.put('/api/v1/students/:studentId', (req,res) => {
  db.Student.findByIdAndUpdate(req.params.studentId, req.body, {new: true}, (error, updateStudent) => {
    if (error) console.log(error);
    res.json({
      status: 200,
      count: 1,
      data: updateStudent,
      requestedAt: new Date().toLocaleString()
    });
  });
});
  


//delete
app.delete('/api/v1/students/:studentId', (req, res) => {
  db.Student.findByIdAndDelete(req.params.studentId, (error, deletedStudent) => {
      if (error) console.log(error);
      res.json({
          status: 200,
          count: 1,
          data: deletedStudent,
          requestedAt: new Date().toLocaleString()
      });
  });
});



// Cohort Routes
// Cohort Index
app.get('/api/v1/cohorts', (req,res)=>{
  db.Cohort.find({},(error, allCohort)=>{
    if(error) return console.log(error);
        res.json({
            status: 200,
            count: allCohort.length,
            data: allCohort,
            requestedAt: new Date().toLocaleString()
        });
  });
});
//create cohort
app.post('/api/v1/cohorts', (req,res)=>{
  db.Cohort.create(req.body, (error, createCohort) => {
    if(error) return console.log(error);
    res.json({
      status: 201,
      data: createCohort,
      count: createCohort.length,
      requestedAt: new Date().toLocaleString()
    });
  });
});
//find cohort
app.get('/api/v1/cohort/:name', (req,res)=>{
  db.Cohort.findOne({name:req.params.name}, (error, foundCohort)=>{
    if(error) return console.log(error);
      res.json({
        status: 200,
        count: 1,
        data: foundCohort,
        requestedAt: new Date().toLocaleString()
      });
  });
});
//update cohort
app.put('/api/v1/cohort/:cohortId', (req,res) => {
  db.Cohort.findByIdAndUpdate(req.params.cohortId, req.body, {new: true}, (error, updateCohort) => {
    if (error) console.log(error);
    res.json({
      status: 200,
      count: 1,
      data: updateCohort,
      requestedAt: new Date().toLocaleString()
    });
  });
});


// ------------------------------ Start Server
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}/`));
