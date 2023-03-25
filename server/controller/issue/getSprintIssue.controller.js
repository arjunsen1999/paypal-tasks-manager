require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { issueModel } = require("../../models/issue/issue.mode");

const getSprintIssueController = asyncHandler(async (req, res) =>{
    let sprintId = req.params.sprintId;
    try {
        let sprintIssue = await issueModel.find({sprintId});
        return res.send(sprintIssue);
    } catch (error) {
        return res.status(500).send({ error: "Somthing Went Wrong!" });
    }
});

module.exports = {
    getSprintIssueController
}