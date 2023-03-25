require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const { sprintModel } = require("../../models/sprint/sprint.model");

const updateSprintController = asyncHandler(async (req, res) => {
  let sprintId = req.params.sprintId;
  try {
    await sprintModel.findByIdAndUpdate({ _id: sprintId }, req.body);
    return res.send({ msg: "Updated Successfully!" });
  } catch (error) {
    return res.status(500).send({ error: "Somthing Went Wrong!" });
  }
});

module.exports = {
  updateSprintController,
};
