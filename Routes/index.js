const {
  userRegisterController,
  userLoginController,
  getUsersController,
  deleteUserController,
  userProfileController,
  getUserProfileController,
  updateUserProfileController,
  experienceController,
  getExperienceController,
  updateExperienceController,
} = require("../Controller/userController");
//const { adminRegisterController , adminLoginController, getAdminsController, deleteAdminController, hotelRegisterController, addRoomController, updateHotelController, updateRoomController, deleteHotelController, deleteRoomController} = require("../Controller/adminController");
const { userRegister, userLogin, userProfile } = require("../Validation/user");
const auth1 = require("../Utils/auth1");
const auth2 = require("../Utils/auth2");
swaggerUi = require("swagger-ui-express");
router = require("express").Router();

router.post("/register", userRegister, userRegisterController);
router.post("/login", userLogin, userLoginController);
router.get("/getUsers", getUsersController);
router.delete("/deleteUser", auth1, deleteUserController);

//user profile
router.post("/userProfile", userProfile, userProfileController);
router.get("/getUserProfile", getUserProfileController);
router.patch("/updateUserProfile", updateUserProfileController);

//experience
router.post("/experience", experienceController);
router.get("/getExperience", getExperienceController);
router.patch("/updateExperience", updateExperienceController);
module.exports = router;
