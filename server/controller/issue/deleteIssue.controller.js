require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { issueModel } = require("../../models/issue/issue.mode");
const {sprintModel} = require("../../models/sprint/sprint.model");

const deleteIssueController = asyncHandler(async (req, res) => {
    let _id = req.params.id;
  try {
   let deleteIssue =  await issueModel.findByIdAndDelete({_id});
    let issue = await issueModel.find({sprintId : deleteIssue.sprintId});
    let number_of_issue = issue.length;
    await sprintModel.findByIdAndUpdate({_id : deleteIssue.sprintId}, {number_of_issue})
    return res.send({msg : "Deleted Successfully!"});
  } catch (error) {
    return res.status(500).send({ error: "Somthing Went Wrong!" });
  }
});

module.exports = {
    deleteIssueController
}
