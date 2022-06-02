mongoose = require("mongoose")

const room = new mongoose.Schema({
    roomNo : {
        type : "Number",
        required : true
    },
    Ac : {
        type : "String",
        required : true
    },
    Price : {
        type : "Number", 
        required : true
    },
    roomType : {
        type : "String", 
        required : true
    },
    Available : {
        type : "String", 
        default : "Yes"
    }
})

module.exports = room