const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    hobbies: [String]
});

const Student = mongoose.model('Past', StudentSchema);

module.exports = Student;