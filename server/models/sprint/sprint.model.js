const mongoose = require("mongoose");

const sprintSchema = mongoose.Schema(
  {
    managerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "auth",
    },
    name: {
      type: String,
      required: true,
    },
    goal: {
      type: String,
    },
    start_date: {
      type: String,
      required: true,
    },
    end_date: {
      type: String,
      required: true,
    },
    number_of_issue: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "Active",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const sprintModel = mongoose.model("sprint", sprintSchema);
module.exports = {
  sprintModel,
};
