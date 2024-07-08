const mongoose = require('mongoose')

//schema
const studentSchema = new mongoose.Schema(
    {
        name : {type:String},
        address : {type:String},
        phone : {type:String},
        course : {type:String},
        college : {type:String}

    }
)

//model
const studentModel = new mongoose.model('student_tbl',studentSchema)

module.exports = studentModel