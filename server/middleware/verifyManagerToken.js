require('dotenv').config();
const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');
const {authModel} = require("../models/auth/auth.model");


const verifyManagerToken = asyncHandler(async (req, res, next) =>{

    try {
        let token = req.headers.token || false;
        // if token is not exists
        if(!token){
            return res.status(400).send({error : "You have to login first"});
        }

        // decoded token
        let {_id} = jwt.verify(token, process.env.SECRET_KEY);

        // check if is manager
        let manager = await authModel.findById(_id);
        if(manager.role !== "manager"){
            return res.status(400).send({error : "Only manager can create sprint"});
        }
        req._id = _id;
        next();
    } catch (error) {
        return res.status(500).send({ error: "Opps! Something went Wrong!" });
        
    }
});

module.exports = {
    verifyManagerToken
}