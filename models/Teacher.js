const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teachersSchema = new Schema({
    name: {
        type: String
    },
    country: {
        type: String
    },
    age: {
        type: Number
    },
    courses: [],
    bio: {
        type: String
    },
    createAt: {
        type: Date
    }
});

module.exports = Teacher = mongoose.model('teachers', teachersSchema);
