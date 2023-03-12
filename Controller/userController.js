const {
  userRegisterService,
  userLoginService,
  getUsersService,
  deleteUserService,
  userProfileService,
  getUserProfileService,
  updateUserProfileService,
  experienceService,
  getExperienceService,
  updateExperienceService,
  projectService,
  getProjectService,
  updateProjectService,
} = require(".././Service/userService");
const { checkInputError } = require("../Utils/validate");

const userRegisterController = async (req, res, next) => {
  try {
    checkInputError(req);
    const response = await userRegisterService(req.body);
    res.json(response).status(201);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const userLoginController = async (req, res, next) => {
  try {
    checkInputError(req);
    const response = await userLoginService(req.body);
    res.json(response).status(201);
  } catch (err) {
    next(err);
  }
};

const getUsersController = async (req, res, next) => {
  try {
    const response = await getUsersService();
    res.json(response).status(201);
  } catch (err) {
    next(err);
  }
};

const deleteUserController = async (req, res, next) => {
  try {
    checkInputError(req);
    const response = await deleteUserService(req.body);
    res.json(response).status(201);
  } catch (err) {
    next(err);
  }
};

const userProfileController = async (req, res, next) => {
  try {
    checkInputError(req);
    const response = await userProfileService(req.body);
    res.json(response).status(201);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getUserProfileController = async (req, res, next) => {
  try {
    const email = req.query.email;
    const response = await getUserProfileService(email);
    res.json(response).status(201);
  } catch (err) {
    next(err);
  }
};
const updateUserProfileController = async (req, res, next) => {
  try {
    const response = await updateUserProfileService(req.body);
    res.json(response).status(201);
  } catch (err) {
    next(err);
  }
};
//
const experienceController = async (req, res, next) => {
  try {
    checkInputError(req);
    const response = await experienceService(req.body);
    res.json(response).status(201);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
//
const getExperienceController = async (req, res, next) => {
  try {
    const response = await getExperienceService();
    res.json(response).status(201);
  } catch (err) {
    next(err);
  }
};

//
const updateExperienceController = async (req, res, next) => {
  try {
    const response = await updateExperienceService(req.body);
    res.json(response).status(201);
  } catch (err) {
    next(err);
  }
};

//
const projectController = async (req, res, next) => {
  try {
    checkInputError(req);
    const response = await projectService(req.body);
    res.json(response).status(201);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
//
const getProjectController = async (req, res, next) => {
  try {
    const response = await getProjectService();
    res.json(response).status(201);
  } catch (err) {
    next(err);
  }
};

//
const updateProjectController = async (req, res, next) => {
  try {
    const response = await updateProjectService(req.body);
    res.json(response).status(201);
  } catch (err) {
    next(err);
  }
};
module.exports = {
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
  projectController,
  getProjectController,
  updateProjectController,
};
