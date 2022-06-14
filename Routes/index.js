const { userRegisterController , userLoginController, getUsersController, deleteUserController, getHotelController, getHotelByNameController, bookHotelController, bookingDetailsController, getRoomsController, cancelBookingController} = require("../Controller/userController");
const { adminRegisterController , adminLoginController, getAdminsController, deleteAdminController, hotelRegisterController, addRoomController, updateHotelController, updateRoomController, deleteHotelController, deleteRoomController} = require("../Controller/adminController");
const { userRegister, userLogin} = require('../Validation/user');
const auth1 = require('../Utils/auth1')
const auth2 = require('../Utils/auth2')
swaggerUi = require("swagger-ui-express");
router = require("express").Router()

router.post('/register', userRegister, userRegisterController);
router.post('/login', userLogin, userLoginController);
router.get('/getUsers', getUsersController);
router.delete('/deleteUser', auth1,deleteUserController);
router.post('/bookHotel', auth1, bookHotelController);
router.get('/bookingDetails', auth1, bookingDetailsController);
router.delete('/cancelBooking', cancelBookingController);
router.get('/getHotels', getHotelController);
router.get('/getHotelName', getHotelByNameController);
router.get('/getRooms', getRoomsController);
router.post('/adminRegister', userRegister, adminRegisterController);
router.post('/adminLogin', userLogin, adminLoginController);
router.get('/getAdmins', getAdminsController);
router.delete('/deleteAdmin', auth2, deleteAdminController);
router.post('/addHotel', auth2, hotelRegisterController);
router.put('/updateHotel', auth2, updateHotelController);
router.delete('/deleteHotel', auth2, deleteHotelController);
router.post('/addRoom', auth2, addRoomController);
router.put('/updateRoom', auth2, updateRoomController);
router.delete('/deleteRoom', auth2, deleteRoomController);

/**  
 * @swagger
 *  components:
 *      schemas:
 *          userSchema:
 *              type : object
 *              required :
 *                  - email
 *                  - password
 *              properties:
 *                  Name:
 *                      type: string 
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *                  contact: 
 *                      type: integer
 *              example :
 *                  Name: Raj Taj
 *                  email: kej4@gmail.com
 *                  password: admin123
 *                  contact: 9442323434
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          adminSchema:
 *              type : object
 *              required :
 *                  - email
 *                  - password
 *              properties:
 *                  Name:
 *                      type: string 
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *                  contact: 
 *                      type: integer
 *              example :
 *                  Name: Raj Taj
 *                  email: kej4@gmail.com
 *                  password: admin123
 *                  contact: 9442323434
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          hotelSchema:
 *              type : object
 *              required :
 *                  - Name
 *                  - location
 *              properties:
 *                  Name:
 *                      type: string 
 *                  location:
 *                      type: string
 *                  Description:
 *                      type: string
 *                  Stars: 
 *                      type: integer
 *              example :
 *                  Name: Taj Hotel
 *                  location: Mumbai
 *                  Description: Good Hotel
 *                  Stars: 5
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          roomSchema:
 *              type : object
 *              required :
 *                  - Name
 *                  - location
 *                  - roomNo
 *                  - Ac
 *                  - Price
 *                  - roomType
 *              properties:
 *                  Name:
 *                      type: string 
 *                  location:
 *                      type: string
 *                  roomNo: 
 *                      type: integer
 *                  Ac:
 *                      type: string
 *                  Price:
 *                      type: integer
 *                  roomType:
 *                      type: string
 *              example :
 *                  Name: Taj Hotel
 *                  location: Mumbai
 *                  roomNo: 100
 *                  Ac: Yes
 *                  Price: 3000
 *                  roomType: double bed
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          bookingSchema:
 *              type : object
 *              required :
 *                  - Name
 *                  - email
 *                  - hotelName
 *                  - location
 *                  - roomNo
 *                  - checkIn
 *                  - checkOut
 *                  - paymentStatus
 *              properties:
 *                  Name:
 *                      type: string 
 *                  email:
 *                      type: string 
 *                  hotelName:
 *                      type: string 
 *                  location:
 *                      type: string
 *                  roomNo:
 *                      type: integer
 *                  checkIn: 
 *                      type: string
 *                  checkOut: 
 *                      type: string
 *                  paymentStatus:
 *                      type: string
 *              example :
 *                  Name: Raj Taj
 *                  email: K@gmail.com
 *                  hotelName: Taj Hotel
 *                  location: Mumbai
 *                  roomNo: 100
 *                  checkIn: Tue Jun 07 2022 19:41:02 GMT+0530
 *                  checkOut: Wed Jun 08 2022 19:41:02 GMT+0530
 *                  paymentStatus: Yes
 */

/**  
 * @swagger
 *   tags:
 *      name: User
 *      description: API's to manage User.
 */


/**  
 * @swagger
 *   tags:
 *      name: Admin
 *      description: API's to manage Admin.
 */

/**  
 * @swagger
 *   tags:
 *      name: Hotel
 *      description: API's to manage Hotel.
 */

/**  
 * @swagger
 *   tags:
 *      name: Room
 *      description: API's to manage Room.
 */

/**  
 * @swagger
 *   tags:
 *      name: Booking
 *      description: API's to manage Room.
 */


/**
 * @swagger
 * /register:
 *  post:
 *      summary: User Registration
 *      tags: [User]
 *      description: For user Registration
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/userSchema'
 *      responses:
 *          '201':
 *              description: Registered Successful,
 *          '500':
 *              description: user already Exist,
 */

/**
 * @swagger
 * /login:
 *  post:
 *      summary: User Login Login
 *      tags: [User]
 *      description: For user login
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - email
 *                          - password 
 *                      properties:
 *                          email:
 *                              type: string 
 *                          password:
 *                              type: string
 *      responses:
 *          '201':
 *              description: logged in successful
 *              schema:
 *                   type: object
 *                   properties:
 *                      status:
 *                          type: string
 *                      statusCode:
 *                          type: integer
 *                      token:
 *                          type: string
 *          '404':
 *              description: user not found,
 */

/**
 * @swagger
 * /getUsers:
 *  get:
 *    summary: To get list of all registered users.
 *    tags: [User]
 *    description: This api is used to fetch the data from mongodb. 
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *            application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schemas/userSchema'
 *      '404':
 *          description: No Users Found
 */


/**
 * @swagger
 * /deleteUser:
 *  delete:
 *      security:          
 *        - bearerAuth: []
 *      summary: deleting user API
 *      tags: [User]
 *      description: For deleting user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - email
 *                      properties:
 *                          email:
 *                              type: string 
 *      responses:
 *          '201':
 *              description: user deleted Successfully,
 *          '400':
 *              description: email does not exist
 */

/**
 * @swagger
 * /adminRegister:
 *  post:
 *      summary: admin Registration
 *      tags: [Admin]
 *      description: For admin Registration
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/adminSchema'
 *      responses:
 *          '201':
 *              description: Registered Successful,
 *          '500':
 *              description: admin already Exist,
 */

/**
 * @swagger
 * /adminLogin:
 *  post:
 *      summary: Admin Login
 *      tags: [Admin]
 *      description: For admin login
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - email
 *                          - password 
 *                      properties:
 *                          email:
 *                              type: string 
 *                          password:
 *                              type: string
 *      responses:
 *          '201':
 *              description: logged in successful,
 *              schema:
 *                   type: object
 *                   properties:
 *                      status:
 *                          type: string
 *                      statusCode:
 *                          type: integer
 *                      token:
 *                          type: string
 *          '404':
 *              description: admin not found,
 */
 
/**
 * @swagger
 * /getAdmins:
 *  get:
 *    summary: To get list of all registered admins.
 *    tags: [Admin]
 *    description: This api is used to fetch the data from mongodb. 
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *            application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schemas/adminSchema'
 *      '404':
 *          description: No Admins Found
 */


/**
 * @swagger
 * /deleteAdmin:
 *  delete:
 *      security:          
 *        - bearerAuth: []
 *      summary: deleting admin API
 *      tags: [Admin]
 *      description: For deleting admin
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - email
 *                      properties:
 *                          email:
 *                              type: string 
 *      responses:
 *          '201':
 *              description: admin deleted Successfully,
 *          '400':
 *              description: admin does not exist
 */

/**
 * @swagger
 * /addHotel:
 *  post:
 *      security:          
 *        - bearerAuth: []
 *      summary: Hotel Registration
 *      tags: [Hotel]
 *      description: For Hotel Registration
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/hotelSchema'
 *      responses:
 *          '201':
 *              description: Hotel Registered Successful,
 *          '500':
 *              description: hotel already Exist,
 */

/**
 * @swagger
 * /getHotels:
 *  get:
 *    summary: To get list of all registered Hotels.
 *    tags: [Hotel]
 *    description: This api is used to fetch the data from mongodb. 
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *            application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schemas/hotelSchema'
 *      '404':
 *          description: No Hotels Found
 */

/**
 * @swagger
 * /getHotelName:
 *  get:
 *    summary: To get list of registered Hotel By Name.
 *    tags: [Hotel]
 *    parameters : 
 *    - in : query
 *      name : Name
 *      type : string
 *      required : true
 *      description : hotel name to search for
 *    description: This api is used to fetch the data from mongodb. 
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *            application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schemas/hotelSchema'
 *      '404':
 *          description: No Hotels Found
 */

/**
 * @swagger
 * /updateHotel:
 *  put:
 *      security:          
 *        - bearerAuth: []
 *      summary: Hotel Update API
 *      tags: [Hotel]
 *      description: For Updating Hotel
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/hotelSchema'
 *      responses:
 *          '201':
 *              description: Hotel updated Successfully,
 *          '400':
 *              description: hotel does not exist
 */

/**
 * @swagger
 * /deleteHotel:
 *  delete:
 *      security:          
 *        - bearerAuth: []
 *      summary: deleting hotel API
 *      tags: [Hotel]
 *      description: For deleting Hotel
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     required:
 *                       - Name
 *                       - location   
 *                     properties:
 *                         Name:
 *                            type: string
 *                            description : Hotel Name 
 *                         location:
 *                            type: string
 *      responses:
 *          '201':
 *              description: Hotel deleted Successfully,
 *          '400':
 *              description: hotel does not exist
 */


/**
 * @swagger
 * /addRoom:
 *  post:
 *      security:          
 *        - bearerAuth: []
 *      summary: adding Rooms
 *      tags: [Room]
 *      description: For adding Rooms
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/roomSchema'
 *      responses:
 *          '201':
 *              description: Room added Successfully,
 *          '500':
 *              description: room already Exist,
 */

/**
 * @swagger
 * /getRooms:
 *  get:
 *    summary: To get list of all rooms.
 *    tags: [Room]
 *    parameters : 
 *          - in : query
 *            name : Name
 *            type : string
 *            required : true
 *            description : hotel name to search for
 *          - in : query
 *            name : location
 *            type : string
 *            required : true
 *            description : hotel location to search for
 *    description: This api is used to fetch the data from mongodb. 
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *            application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schemas/roomSchema'
 *      '404':
 *          description: No Rooms Found
 */

/**
 * @swagger
 * /updateRoom:
 *  put:
 *      security:          
 *        - bearerAuth: []
 *      summary: Room Updation
 *      tags: [Room]
 *      description: For updating Rooms
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/roomSchema'
 *      responses:
 *          '201':
 *              description: Room updated Successfully,
 *          '404':
 *              description: room does not exist Exist,
 */

/**
 * @swagger
 * /deleteRoom:
 *  delete:
 *      security:          
 *        - bearerAuth: []
 *      summary: hotel deleting API
 *      tags: [Room]
 *      description: For deleting room
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     required:
 *                       - Name
 *                       - location   
 *                       - roomNo
 *                     properties:
 *                         Name:
 *                            type: string
 *                            description : Hotel Name 
 *                         location:
 *                            type: string
 *                         roomNo:
 *                            type: integer
 *      responses:
 *          '201':
 *              description: room deleted Successfully,
 *          '400':
 *              description: room does not exist
 */

/**
 * @swagger
 * /bookHotel:
 *  post:
 *      security:          
 *        - bearerAuth: []
 *      summary: Hotel Booking
 *      tags: [Booking]
 *      description: For booking Hotels
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/bookingSchema'
 *      responses:
 *          '201':
 *              description: Booking Confirmed,
 *          '500':
 *              description: Payment Pending
 */

/**
 * @swagger
 * /bookingDetails:
 *  get:
 *      security:          
 *        - bearerAuth: []
 *      summary: To get booking details.
 *      tags: [Booking]
 *      parameters : 
 *          - in : query
 *            name : email
 *            format : email
 *            type : string
 *            required : true
 *            description : email to get booking details
 *      description: This api is used to fetch the data from mongodb. 
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                   application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/bookingSchema'
 *          '404':
 *              description: No Bookings Found
 */

/**
 * @swagger
 * /cancelBooking:
 *  delete:
 *      security:          
 *        - bearerAuth: []
 *      summary: cancel Booking API
 *      tags: [Booking]
 *      description: For canceling Booking
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     required:
 *                       - email
 *                       - hotelName
 *                       - location   
 *                       - roomNo
 *                     properties:
 *                         email:
 *                            type: string
 *                         hotelName:
 *                            type: string
 *                            description : Hotel Name 
 *                         location:
 *                            type: string
 *                         roomNo:
 *                            type: integer
 *      responses:
 *          '201':
 *              description: booking canceled Successfully,
 *          '400':
 *              description:  booking does not exist
 */

module.exports = router;