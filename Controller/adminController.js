const { adminRegisterService, adminLoginService, hotelRegisterService, addRoomService, updateHotelService, updateRoomService, deleteHotelService, deleteRoomService} = require(".././Service/adminService")
const { checkInputError } = require('../Utils/validate')

const adminRegisterController = async(req, res, next) => {
    try{
        checkInputError(req);
        const response = await adminRegisterService(req.body);
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}

const adminLoginController = async(req, res, next) => {
    try{
        checkInputError(req);
        const response = await adminLoginService(req.body);
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}

const hotelRegisterController = async(req, res, next) => {
    try{
        const response = await hotelRegisterService(req.body);
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}

const addRoomController = async(req, res, next) => {
    try{
        const response = await addRoomService(req.body);
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}


const updateHotelController = async(req, res, next) => {
    try{
        const response = await updateHotelService(req.body);
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}


const updateRoomController = async(req, res, next) => {
    try{
        const response = await updateRoomService(req.body);
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}

const deleteHotelController = async(req, res, next) => {
    try{
        const response = await deleteHotelService(req.body);
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}

const deleteRoomController = async(req, res, next) => {
    try{
        const response = await deleteRoomService(req.body);
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}

module.exports = {adminRegisterController, adminLoginController, hotelRegisterController, addRoomController, updateHotelController, updateRoomController, deleteHotelController, deleteRoomController}