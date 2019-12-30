const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CohortSchema = new Schema({
    name: String,
    year: Number,
    classSize: Number
});

const Cohort = mongoose.model('Student', CohortSchema);

module.exports = Cohort;