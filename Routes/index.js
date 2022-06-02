const { userRegisterController , userLoginController, getHotelController, getHotelByNameController, bookHotelController, bookingDetailsController, getRoomsController, cancelBookingController} = require("../Controller/userController");
const { adminRegisterController , adminLoginController, hotelRegisterController, addRoomController, updateHotelController, updateRoomController, deleteHotelController, deleteRoomController} = require("../Controller/adminController");
const { userRegister, userLogin} = require('../Validation/user');
const auth1 = require('../Utils/auth1')
const auth2 = require('../Utils/auth2')
router = require("express").Router()

router.post('/register', userRegister, userRegisterController);
router.post('/login', userLogin, userLoginController);
router.post('/bookHotel', auth1, bookHotelController);
router.get('/bookingDetails', auth1, bookingDetailsController);
router.delete('/cancelBooking', cancelBookingController)
router.get('/getHotels', getHotelController);
router.get('/getHotelName', getHotelByNameController);
router.get('/getRooms', getRoomsController);
router.post('/adminRegister', userRegister, adminRegisterController);
router.post('/adminLogin', userLogin, adminLoginController);
router.post('/addHotel', auth2, hotelRegisterController);
router.put('/updateHotel', auth2, updateHotelController);
router.delete('/deleteHotel', auth2, deleteHotelController);
router.post('/addRoom', auth2, addRoomController);
router.put('/updateRoom', auth2, updateRoomController);
router.delete('/deleteRoom', auth2, deleteRoomController);

module.exports = router;