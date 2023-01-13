const express = require("express");
const { getAllTasks ,getOneTask ,createTask , updateOneTask , deleteOneTask} = require("../controller/tasks");
const router = express.Router();


router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getOneTask).patch(updateOneTask).delete(deleteOneTask);

module.exports = router