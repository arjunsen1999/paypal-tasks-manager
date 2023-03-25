require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { sprintModel } = require("../../models/sprint/sprint.model");

const deleteSprintController = asyncHandler(async (req, res) => {
  let sprintId = req.params.sprintId;
  try {
    await sprintModel.findByIdAndDelete({ _id: sprintId });
    return res.send({ msg: "Successfully Deleted" });
  } catch (error) {
    return res.status(500).send({ error: "Somthing Went Wrong!" });
  }
});

module.exports = {
  deleteSprintController,
};
