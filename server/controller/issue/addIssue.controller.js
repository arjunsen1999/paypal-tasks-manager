require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const {issueModel} = require("../../models/issue/issue.mode");
const {sprintModel} = require("../../models/sprint/sprint.model");

const addIssueController = asyncHandler(async (req, res) => {
  let {sprintId, assign_to,title, description, type, important } = req.body;
  let create_by = req._id;
  try {
    // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.array()[0].msg });
    }
    let create_issue = await issueModel.create({sprintId, assign_to,title, description, type, important, create_by});
    let issue = await issueModel.find({sprintId});
    let number_of_issue = issue.length;
    await sprintModel.findByIdAndUpdate({_id : sprintId}, {number_of_issue})
    return res.send({msg : "Issue created"})
  } catch (error) {
    return res.status(500).send({ error: "Somthing Went Wrong!" });
  }
});

module.exports = {
  addIssueController,
};
