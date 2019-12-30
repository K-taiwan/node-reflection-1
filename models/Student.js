const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    hobbies: [String],
    cohorts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Cohort'
        }
    ]
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const StudentSchema = new Schema({
//     name: String,
//     age: Number,
//     email: String,
//     hobbies: [String]
// });

// const Student = mongoose.model('Student', StudentSchema);
// module.exports = Student;