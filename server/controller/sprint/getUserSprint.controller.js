require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { sprintModel } = require("../../models/sprint/sprint.model");

const getUserSprintController = asyncHandler(async (req, res) =>{
    let managerId = req._id;
    try {
        let sprint = await sprintModel.find({managerId}).populate("managerId");
        return res.send(sprint);
    } catch (error) {
        return res.status(500).send({ error: "Somthing Went Wrong!" });
    }
})

module.exports = {
    getUserSprintController
}