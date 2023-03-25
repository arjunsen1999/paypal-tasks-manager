require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const { sprintModel } = require("../../models/sprint/sprint.model");

const addSprintController = asyncHandler(async (req, res) => {
  let { name, goal, start_date, end_date } = req.body;
  let managerId = req._id;
  try {
    // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.array()[0].msg });
    }

    const create_sprint = await sprintModel.create({
      name,
      goal,
      start_date,
      end_date,
      managerId,
    });

    return res.send({ msg: "Successfully sprint created!" });
  } catch (error) {
    return res.status(500).send({ error: "Somthing Went Wrong!" });
  }
});

module.exports = {
  addSprintController,
};
