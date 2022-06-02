const { userRegisterService, userLoginService, getHotelService, getHotelByNameService, bookHotelService, bookingDetailsService, getRoomsService, cancelBookingService} = require(".././Service/userService")
const { checkInputError } = require('../Utils/validate')

const userRegisterController = async(req, res, next) => {
    try{
        checkInputError(req);
        const response = await userRegisterService(req.body);
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}

const userLoginController = async(req, res, next) => {
    try{
        checkInputError(req);
        const response = await userLoginService(req.body);
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}

const getHotelController = async(req, res, next) => {
    try{
        const response = await getHotelService();
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}

const getHotelByNameController = async(req, res, next) => {
    try{
        const response = await getHotelByNameService(req.query);
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}
const bookHotelController = async(req, res, next) => {
    try{
        const response = await bookHotelService(req.body);
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}

const bookingDetailsController = async(req, res, next) => {
    try{
        const response = await bookingDetailsService(req.query);
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}

const getRoomsController = async(req, res, next) => {
    try{
        const response = await getRoomsService(req.query);
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}

const cancelBookingController = async(req, res, next) => {
    try{
        const response = await cancelBookingService(req.body);
        res.json(response).status(201);
    }
    catch(err){
        next(err);
    }
}

module.exports = {userRegisterController, userLoginController, getHotelController, getHotelByNameController, bookHotelController, bookingDetailsController, getRoomsController, cancelBookingController}