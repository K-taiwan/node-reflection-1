const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/reflection";

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true 
})
  .then(() => console.log('MongoDB connected...Winner Winner Chicken Dinner!!!!!!!!!!!!'))
  .catch((err) => console.log(err));

  module.exports = {
    Student: require('./Student'),
  
  };