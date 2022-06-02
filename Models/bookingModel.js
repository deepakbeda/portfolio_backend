mongoose = require('mongoose')

const booking = new mongoose.Schema({
    Name : {
        type : "String",
    },
    email : {
        type : "String",
        unique : true
    },
    hotelName : {
        type : "String",
        required : true
    },
    location : {
        type : "String",
        required : true
    },
    roomNo : {
        type : "Number",
        required : true
    },
    checkin : {
        type : "Date",
    },
    checkout : {
        type : "Date",
    },
    paymentStatus : {
        type : "String",
        required : true,
        default : "No"
    }
})

bookings = mongoose.model("Booking", booking)

module.exports = bookings;