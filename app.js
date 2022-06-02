express = require("express");
routes = require("./Routes/index");
const mongoose = require("mongoose");
UserModel = require("./Models/userModel");
bodyParser = require("body-parser");
//var mariadb = require('mariadb');
require("dotenv").config();

app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



poort = process.env.PORT || 6969;

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true})
.then(() => {
    console.log("MONGO CONNECTED....");
}).catch((err) => {
    console.log(err);
})

// const mo = new mongoose.Schema({
//     name : {type : String},
//     age : {type : Number}
// })

// mod = mongoose.model("mod", mo);

// const x = new mod({
//     name : "keshu",
//     age : 16
// })

// x.save((err) => {
//     if(!err){
//         console.log("sucess");
//     }
//     else{
//         console.log(err);
//     }
// })

app.use('/', routes);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message || '';
    let errorData = [];

    if (error.data){
        errorData = error.data;
    }
    res.status(status).json({
        message: message,
        status: 'failure',
        statusCode: status,
        error: errorData
    });
});

app.listen(poort, (req, res) => {
    console.log(`listening at ${poort}`);
})

