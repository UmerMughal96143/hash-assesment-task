const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo");
const { check } = require("express-validator");

//GET ALL TODOS

router.get("/", todoController.getTodos);

//POST TODO TASK

router.post(
  "/",
  [check("title", "Title is require").not().isEmpty()],
  todoController.postTasks
);

//GET TASK BY ID

router.get("/:todo_id", todoController.getTodoById);

//DELETE TASK BY ID

router.delete("/:todo_id", todoController.deleteTodoById);

//UPDATE TASK BY ID

router.put("/:todo_id", todoController.updateTodoById);

//POST NEW TODO TASK IN EXISTED LIST

router.put("/nest/task/:todo_id", todoController.newTaskInExistedTodoList);

//DELETE NESTEDEW TODO TASK IN EXISTED LIST

router.delete("/nest/task/:todo_id/:nest_id", todoController.deleteNestedTask);

//UPDATE EXISTED TODO TASK IN LIST

router.put("/update/:todo_id/:nest_id", todoController.updateNestedTasks);

module.exports = router;
