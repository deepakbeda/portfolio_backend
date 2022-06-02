mongoose = require("mongoose")
rooms = require("./roomModel")

const hotel = new mongoose.Schema({
    Name : {
        type : "String", 
    },
    location : {
        type : "String", 
        required : true
    },
    Description : {
        type : "String"
    },
    Stars : {
        type : "Number"
    },
    Available : {
        type : "String",
        default : "Yes"
    },
    room : {
        type : [rooms],
        default : [],
        required : false
    }     
})

hotels = mongoose.model("Hotel", hotel);

module.exports = hotels