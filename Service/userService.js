const UserModel = require(".././Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Services = require("./Services");
const thiss = new Services();
const argon = require("argon2");
const psSupported = require("jsonwebtoken/lib/psSupported");
const userProfile = require("../Models/userProfileModel");
const experience = require("../Models/experienceModel");
const userRegisterService = async (params) => {
  try {
    const { name, email, password, contact } = params;
    const x = await UserModel.findOne({ email: email });
    if (x) throw thiss.fail({ message: "user alredy exist", statusCode: 500 });
    const pwd = await argon.hash(password);
    const tmpuser = new UserModel({
      name,
      email,
      password: pwd,
      contact,
    });
    tmpuser.save();
    return thiss.success({ statusCode: 201 });
  } catch (err) {
    return err;
  }
};

const userLoginService = async (params) => {
  try {
    const { email, password } = params;
    x = await UserModel.findOne({ email: email });
    if (!x)
      throw thiss.fail({ message: "email not registered", statusCode: 500 });
    console.log("entered", password);
    if (password) {
      if (!(await argon.verify(x.password, password))) {
        throw thiss.fail({
          message: "Password did not match",
          statusCode: 406,
        });
      }
    }
    delete x.password;
    const jwToken = jwt.sign(
      {
        userName: x.name,
        userEmail: x.email,
      },
      process.env.jwtSecret1,
      { expiresIn: "15d", algorithm: "HS256" }
    );
    return thiss.success({ statusCode: 201, token: jwToken, data: x });
  } catch (err) {
    return err;
  }
};

const getUsersService = async () => {
  try {
    const data = await UserModel.find({}).select("email");
    if (!data)
      throw thiss.fail({ message: "no data available", statusCode: 400 });
    return thiss.success({ statusCode: 201, data });
  } catch (err) {
    return err;
  }
};

const deleteUserService = async (params) => {
  try {
    const { email } = params;
    const data = await UserModel.findOne({ email: email });
    if (!data)
      throw thiss.fail({ message: "email not found", statusCode: 400 });
    await UserModel.deleteOne({ email: email });
    return thiss.success({ statusCode: 201 });
  } catch (err) {
    return err;
  }
};

const userProfileService = async (params) => {
  try {
    const { name, email, title, description, overview, more_titles } = params;
    const x = await UserModel.findOne({ email: email });
    if (!x) throw thiss.fail({ message: "Email not exist", statusCode: 500 });
    const tmpuser = new userProfile({
      name,
      email,
      title,
      description,
      overview,
      more_titles,
    });
    tmpuser.save();
    return thiss.success({ statusCode: 201 });
  } catch (err) {
    return err;
  }
};
const getUserProfileService = async () => {
  try {
    const data = await userProfile.find().select("-_id");
    if (!data)
      throw thiss.fail({ message: "no data available", statusCode: 400 });
    return thiss.success({ statusCode: 201, data });
  } catch (err) {
    return err;
  }
};
const updateUserProfileService = async (params) => {
  try {
    console.log("=params=>", params);
    console.log("=paramsemail=>", params.email);
    const filter = { email: params.email };
    const data = await userProfile.findOne(filter);
    console.log("=data=>", data);
    if (!data)
      throw thiss.fail({ message: "no data available", statusCode: 400 });

    console.log("=filter=>", filter);
    const updatedUserProfile = await userProfile.findOneAndUpdate(
      filter,
      params
    );
    return thiss.success({ statusCode: 201, updatedUserProfile });
  } catch (err) {
    console.log("= catchparams=>", err);
    return err;
  }
};

//

const experienceService = async (params) => {
  try {
    const { email, title, company_name, icon, iconBg, date, points } = params;
    const x = await UserModel.findOne({ email: email });
    if (!x) throw thiss.fail({ message: "Email not exist", statusCode: 500 });

    const tmpexperience = new experience({
      email,
      title,
      company_name,
      icon,
      iconBg,
      date,
      points,
    });
    tmpexperience.save();
    return thiss.success({ statusCode: 201 });
  } catch (err) {
    return err;
  }
};

const getExperienceService = async () => {
  try {
    const data = await experience.find().select();
    if (!data)
      throw thiss.fail({ message: "no data available", statusCode: 400 });
    return thiss.success({ statusCode: 201, data });
  } catch (err) {
    return err;
  }
};
//

const updateExperienceService = async (params) => {
  try {
    const filter = { email: params.email };
    const data = await experience.findOne(filter);
    if (!data)
      throw thiss.fail({ message: "no data available", statusCode: 400 });

    const filterByIDAndEmail = { _id: params._id, email: params.email };
    const updateExperience = await experience.findOneAndUpdate(
      filterByIDAndEmail,
      params
    );
    return thiss.success({ statusCode: 201, updateExperience });
  } catch (err) {
    console.log("= catchparams=>", err);
    return err;
  }
};

module.exports = {
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
};
