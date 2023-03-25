const sprintRouter = require('express').Router();
const { body } = require("express-validator");
const {addSprintController} = require("../../controller/sprint/addSprint.controller");
const {deleteSprintController} = require("../../controller/sprint/deleteSprint.controller");
const {getUserSprintController} = require("../../controller/sprint/getUserSprint.controller");
const {updateSprintController} = require("../../controller/sprint/updateSprint.controller");
const {verifyManagerToken} = require("../../middleware/verifyManagerToken");


sprintRouter.route("/get").get(verifyManagerToken, getUserSprintController);
sprintRouter.route("/add").post([
    body("name", "Please Enter sprint name").not().isEmpty(),
    body("start_date", "Please select start date").not().isEmpty(),
    body("end_date", "Please select end date").not().isEmpty(),
], verifyManagerToken, addSprintController);
sprintRouter.route("/update/:sprintId").patch(verifyManagerToken, updateSprintController);
sprintRouter.route("/delete/:sprintId").delete(verifyManagerToken, deleteSprintController);

module.exports = {
    sprintRouter
}