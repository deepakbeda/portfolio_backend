const UserModel = require('.././Models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const HotelModel = require('.././Models/hotelModel')
const BookingModel = require('.././Models/bookingModel')
const Services = require('./Services')
const thiss = new Services()

const userRegisterService = async(params) => {
    try{
        const {name, email, password, contact} = params;
        const x = await UserModel.findOne({email : email})
        if(x) throw thiss.fail({message : "user alredy exist", statusCode : 500});
        const salt = bcrypt.genSaltSync(10);
        const pwd = bcrypt.hashSync(password, salt);
        const tmpuser = new UserModel({
            name,
            email,
            password : pwd,
            contact
        })
        tmpuser.save();
        return thiss.success({statusCode : 201});
    }
    catch(err){
        return err;
    }
}

const userLoginService = async(params) => {
    try{
        const {email, password} = params;
        x = await UserModel.findOne({email : email});
        if(!x) throw thiss.fail({message : "email not registered", statusCode : 500});
        if(password){
            if(!bcrypt.compare(password, x.password)){
                throw thiss.fail({message : 'Password did not match', statusCode : 406});
            }
        }
        delete x.password;
        const jwToken = jwt.sign({
            userName : x.name,
            userEmail : x.email
        }, process.env.jwtSecret1, { expiresIn : '15d', algorithm : 'HS256'});
        return thiss.success({statusCode : 201, token : jwToken, data : x});
    }
    catch(err){
        return err;
    }
}

const getHotelService = async() => {
    try{
        const data = await HotelModel.find();
        if(!data) throw thiss.fail({message : "no data available", statusCode : 400})
        return thiss.success({statusCode : 201, data });
    }
    catch(err){
        return err;
    }
}

const getHotelByNameService = async(params) => {
    try{
        const data = await HotelModel.find({Name : params.Name});
        if(!data) throw thiss.fail({message : "no data available", statusCode : 400})
        return thiss.success({statusCode : 201, data });
    }
    catch(err){
        return err;
    }
}

const bookHotelService = async(params) => {
    try{
        const bookingDetails = params;
        hotel = await HotelModel.findOne({Name : bookingDetails.hotelName, location : bookingDetails.location})
        if(!hotel) throw thiss.fail({message : "hotel not exist", statusCode : 500});
        const rooms = hotel.room;
        flag = false
        for(let i = 0; i < rooms.length; i++){
            if(rooms[i].roomNo == bookingDetails.roomNo){
                if(rooms[i].Available == "Yes"){
                    hotel.room[i].Available = "No";
                    flag = true;
                    break;
                }
                else{
                    throw thiss.fail({message : "room not available", statusCode : 400})
                }
            } 
        }
        if(!flag) throw thiss.fail({message : "room not exist", statusCode : 500})
        if(bookingDetails.paymentStatus == "No") throw thiss.fail({message : "payment pending", statusNo : 500})
        hotel.save();
        booking = new BookingModel(bookingDetails);
        booking.save();
        const data = {
            bookingStatus : "booking confirmed",
            email : bookingDetails.email,
            hotel : bookingDetails.hotelName
        }
        return thiss.success({statusCode : 201, data : data})
    }
    catch(err){
        return err;
    }
}

const bookingDetailsService = async(params) => {
    try{
        const data = await BookingModel.find({email : params.email});
        if(!data) throw thiss.fail({message : "no booking", statusCode : 500})
        return thiss.success({statusCode : 201, data });
    }
    catch(err){
        return err;
    }
}

const getRoomsService = async(params) => {
    try{
        const data = await HotelModel.findOne({Name : params.Name, location : params.location});
        if(!data) throw thiss.fail({message : "no hotel of this name and location available", statusCode : 500})
        dataRooms = []
        for(let i = 0; i < data.room.length; i++){
            if(data.room[i].Available == "Yes"){
                dataRooms.push(data.room[i]);
            }
        }
        if(!dataRooms.length) throw thiss.fail({message : "no rooms available", statusCode : 500})
        return thiss.success({statusCode : 201, data : dataRooms});
    }
    catch(err){
        return err;
    }
}

const cancelBookingService = async(params) => {
    try{
        const {email, hotelName, location, roomNo} = params;
        const data = await BookingModel.findOne({email : email, hotelName : hotelName, location : location, roomNo : roomNo});
        if(!data) throw thiss.fail({message : "no booking", statusCode : 500})
        await BookingModel.deleteOne({email : email, hotelName : hotelName, location : location, roomNo : roomNo});
        return thiss.success({statusCode : 201});
    }
    catch(err){
        return err;
    }
}

module.exports = {userRegisterService, userLoginService, getHotelService, getHotelByNameService, bookHotelService, bookingDetailsService, getRoomsService, cancelBookingService}