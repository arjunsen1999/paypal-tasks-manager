require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { issueModel } = require("../../models/issue/issue.mode");

const updateIssueController = asyncHandler(async (req, res) =>{
    let { assign_to,title, description, important } = req.body;
    let _id = req.params.id;
    try {
        await issueModel.findByIdAndUpdate({_id}, req.body);
        return res.send({msg : "Issue Updated"});
    } catch (error) {
        return res.status(500).send({ error: "Somthing Went Wrong!" });
    }
});

module.exports = {
    updateIssueController
}