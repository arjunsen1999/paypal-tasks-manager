const issueRouter = require("express").Router();
const { body } = require("express-validator");
const {
  addIssueController,
} = require("../../controller/issue/addIssue.controller");
const {
  getAssignUserIssueController,
} = require("../../controller/issue/getAssignUserIssue.controller");
const {
  getSprintIssueController,
} = require("../../controller/issue/getSprintIssue.controller");
const {
  deleteIssueController,
} = require("../../controller/issue/deleteIssue.controller");
const {
  updateIssueController,
} = require("../../controller/issue/updateIssue.controller");
const {
  userUpdateStatusController,
} = require("../../controller/issue/userUpdateStatus.controller");
const { verifyManagerToken } = require("../../middleware/verifyManagerToken");
const { verifyToken } = require("../../middleware/verifyToken");

issueRouter
  .route("/add")
  .post(
    [
      body("sprintId", "Somthing Went Wrong").not().isEmpty(),
      body("assign_to", "Please assign someone").not().isEmpty(),
      body("title", "Enter title").not().isEmpty(),
      body("type", "Somthing Went Wrong").not().isEmpty(),
    ],
    verifyManagerToken,
    addIssueController
  );

issueRouter.route("/user/issue").get(verifyToken, getAssignUserIssueController);

issueRouter
  .route("/sprint/issue/:sprintId")
  .get(verifyManagerToken, getSprintIssueController);

issueRouter
  .route("/delete/:id")
  .delete(verifyManagerToken, deleteIssueController);

issueRouter
  .route("/update/:id")
  .patch(verifyManagerToken, updateIssueController);

issueRouter
  .route("/update/status/:id")
  .patch(
    [body("status", "Somthing Went Wrong").not().isEmpty()],
    verifyToken,
    userUpdateStatusController
  );

module.exports = {
  issueRouter,
};
