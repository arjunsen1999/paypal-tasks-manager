require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const { issueModel } = require("../../models/issue/issue.mode");

const userUpdateStatusController = asyncHandler(async (req, res) => {
  let { status } = req.body;
  let _id = req.params.id;
  try {
    // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.array()[0].msg });
    }
    let isIssueExists = await issueModel.findOne({ _id });
    if (!isIssueExists) {
      return res.status(400).send({ error: "This issue not exists any more" });
    }
    await issueModel.findByIdAndUpdate({ _id }, { status });
    return res.end();
  } catch (error) {
    return res.status(500).send({ error: "Somthing Went Wrong!" });
  }
});

module.exports = {
    userUpdateStatusController
}
