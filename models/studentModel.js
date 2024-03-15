const mongo = require('mongoose');

const student = new mongo.Schema({
    fullname:{
        type:String
    },
    mobileno:{
        type:String
    }
});

module.exports = mongo.model('students', student);