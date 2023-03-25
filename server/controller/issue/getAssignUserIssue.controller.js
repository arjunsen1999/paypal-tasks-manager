require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { issueModel } = require("../../models/issue/issue.mode");

const getAssignUserIssueController = asyncHandler(async (req, res) => {
  let assign_to = req._id;
  try {
    let userIssue = await issueModel.find({ assign_to });
    return res.send(userIssue);
  } catch (error) {
    return res.status(500).send({ error: "Somthing Went Wrong!" });
  }
});

module.exports = {
    getAssignUserIssueController
}
