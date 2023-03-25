require('dotenv').config();
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const {authModel} = require('../../models/auth/auth.model');
const bcrypt = require('bcrypt');
const saltRounds = 6;

const registerController = asyncHandler(async (req, res) => {
    let {username, email, password, role, profile_picture} = req.body;
  try {
    // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.array()[0].msg });
    }

    // check if username exists
    const isUsername = await authModel.findOne({username});
    if(isUsername){
        return res.status(400).send({error : "This username already Exists!"})
    }

    // Check if email exists 
    const isEmail = await authModel.findOne({email});
    if(isEmail){
        return res.status(400).send({error : "This email already Exists!"})
    }

    // if username and email are not exists then create user

    // convert password to hash password
    let hashPassword = await bcrypt.hash(password, saltRounds);

    // Create user

    let createUser = await authModel.create({username, email, password : hashPassword, role, profile_picture})

    return res.send({msg : "Successfully Register!"});
  } catch (error) {
    return res.status(500).send({ error: "Somthing Went Wrong!" });
  }
});

module.exports = {
  registerController,
};
