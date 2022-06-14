const AdminModel = require('.././Models/adminModel')
const HotelModel = require('.././Models/hotelModel')
const bcrypt = require('bcryptjs')
const Services = require('./Services')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const thiss = new Services()

const adminRegisterService = async(params) => {
    try{
        const {Name, email, password, contact} = params
        const x = await AdminModel.findOne({email : email})
        if(x) throw thiss.fail({message : "user alredy exist", statusCode : 500});
        const salt = bcrypt.genSaltSync(10);
        const pwd = bcrypt.hashSync(password, salt);
        const tmpadmin = new AdminModel({
            Name,
            email,
            password : pwd,
            contact
        })
        tmpadmin.save();
        return thiss.success({statusCode : 201});
    }
    catch(err){
        return err;
    }
}

const adminLoginService = async(params) => {
    try{
        const {email, password} = params;
        x = await AdminModel.findOne({email : email});
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
        }, process.env.jwtSecret2, { expiresIn : '15d', algorithm : 'HS256'});
        return thiss.success({statusCode : 201, token : jwToken, data : x});
    }
    catch(err){
        return err;
    }
}

const getAdminsService = async() => {
    try{
        const data = await AdminModel.find({}).select('email');
        if(!data) throw thiss.fail({message : "no data available", statusCode : 400})
        return thiss.success({statusCode : 201, data });
    }
    catch(err){
        return err;
    }
}

const deleteAdminService = async(params) => {
    try{
        const {email} = params;
        const data = await AdminModel.findOne({email : email});
        if(!data) throw thiss.fail({message : "email not found", statusCode : 400});
        await AdminModel.deleteOne({email : email});
        return thiss.success({statusCode : 201});
    }
    catch(err){
        return err;
    }
}

const hotelRegisterService = async(params) => {
    try{
        const hotel = await HotelModel.findOne({Name : params.Name, location : params.location});
        if(hotel) throw thiss.fail({message : "hotel alredy exist", statusCode : 500}) 
        const tmpadmin = new HotelModel({
            Name : params.Name,
            location : params.location,
            Description : params.Description,
            Stars : params.Stars,
        })
        tmpadmin.save();
        return thiss.success({statusCode : 201});
    }
    catch(err){
        return err;
    }
}

const addRoomService = async(params) => {
    try{
        const {Name, location, roomNo, Ac, Price, roomType} = params;
        const hotel = await HotelModel.findOne({Name : Name, location : location})
        if(!hotel) throw thiss.fail({message : "hotel not found", statusCode : 400})
        tmproom = {
            roomNo,
            Ac,
            Price,
            roomType,
            Available : "Yes"
        }
        const x = hotel.room.find(e => e.roomNo == roomNo)
        if(x) throw thiss.fail({message : "room alredy exist", statusCode : 500})
        hotel.room.push(tmproom);
        hotel.save();
        return thiss.success({statusCode : 200});
    }
    catch(err){
        return err;
    }
}

const updateHotelService = async(params) => {
    try{
        const {Name, location, Description, Stars} = params;
        x = await HotelModel.findOne({Name : Name, location : location});
        if(!x) throw thiss.fail({message : "Hotel not found", statusCode : 500})
        await HotelModel.updateMany({Name : Name, location : location}, {$set : {
            Name,
            location,
            Description,
            Stars
        }})
        return thiss.success({statusCode : 201})
    }
    catch(err){
        return err;
    }
}

const updateRoomService = async(params) => {
    try{
        const {Name, location, roomNo, Ac, Price, roomType, Available} = params;
        const hotel = await HotelModel.findOne({Name : Name, location : location})
        if(!hotel) throw thiss.fail({message : "hotel not found", statusCode : 400})
        tmproom = {
            roomNo,
            Ac,
            Price,
            roomType,
            Available
        }
        flag = false;
        for(let i = 0; i < hotel.room.length; i++){
            if(hotel.room[i].roomNo == roomNo){
                hotel.room[i] = tmproom;
                flag = true;
                break;
            }
        }
        if(!flag) throw thiss.fail({message : "roomNo not found", statusCode : 500});
        hotel.save()
        return thiss.success({statusCode : 201});
    }
    catch(err){
        return err;
    }
}

const deleteHotelService = async(params) => {
    try{
        const {Name, location} = params;
        hotel = await HotelModel.findOne({Name : Name, location : location});
        if(!hotel) throw thiss.fail({message : "hotel not found", statusCode : 500}); 
        await HotelModel.deleteOne({Name : Name, location : location});
        return thiss.success({statusCode : 201});
    }
    catch(err){
        return err;
    }
}

const deleteRoomService = async(params) => {
    try{
        const {Name, location, roomNo} = params;
        hotel = await HotelModel.findOne({Name : Name, location : location});
        if(!hotel) throw thiss.fail({message : "hotel not found", statusCode : 500}); 
        flag = false;
        for(let i = 0; i < hotel.room.length; i++){
            if(hotel.room[i].roomNo == roomNo){
                hotel.room.splice(i, 1);
                flag = true;
                break;
            }
        }
        if(!flag) throw thiss.fail({message : "roomNo not found", statusCode : 500});
        hotel.save()
        return thiss.success({statusCode : 201});
    }
    catch(err){
        return err;
    }
}

module.exports = {adminRegisterService, adminLoginService, getAdminsService, hotelRegisterService, addRoomService, updateHotelService, updateRoomService, deleteHotelService, deleteRoomService, deleteAdminService}