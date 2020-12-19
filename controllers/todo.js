const { validationResult } = require("express-validator");
const Todo = require("../models/todo");
var ObjectID = require("mongodb").ObjectID;

//GET ALL TODOS LIST

exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ success: true, todos });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: false });
  }
};

//POST TODO LIST TASK

exports.postTasks = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title } = req.body;

  try {
    let newTodo = new Todo({
      title,
    });

    let todo = await newTodo.save();
    res.status(200).json({ success: true, todo });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: false });
  }
};

//GET TODO BY ITS ID

exports.getTodoById = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.todo_id);
    if (!todo) {
      return res.status(404).json({ success: false, data: false });
    }

    res.status(200).json({ success: true, todo });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: false });
  }
};

//DELETE TODO BY ITS ID

exports.deleteTodoById = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.todo_id);

    if (!todo) {
      return res.status(404).json({ success: false, data: false });
    }
    await todo.remove();

    res.status(200).json({ success: true, msg: "Successfully Deleted List" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, data: false });
  }
};

//UPDATE TODO LIST BY  ID

exports.updateTodoById = async (req, res, next) => {
  try {
    let todo = await Todo.findOne({ _id: req.params.todo_id });
    console.log(todo);
    if (todo) {
      let newTodo = { title: req.body.title };
      todo = await Todo.findOneAndUpdate(
        { _id: req.params.todo_id },
        {
          $set: newTodo,
        },
        {
          new: true,
        }
      );
      return res.status(200).json({ success: true, todo });
    } else {
      return res.status(404).json({ success: false, data: false });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: false });
  }
};

//POST NEW TODO TASK IN EXISTED LIST

exports.newTaskInExistedTodoList = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.todo_id);

    if (!todo) {
      return res.status(404).json({ success: false, data: false });
    }
    let newTaskInExistingTodo = {
      title: req.body.title,
    };
    todo.nestedTodoList.unshift(newTaskInExistingTodo);
    await todo.save();
    res.status(200).json({ success: true, newTaskInExistingTodo });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: false });
  }
};

//DELETE NESTED TASK IN EXISTED LIST

exports.deleteNestedTask = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.todo_id);
    console.log(todo);
    if (!todo) {
      return;
    }
    if (!req.params.nest_id) {
      return res.status(400).json({ success: true, data: false });
    }
    const removeIndex = todo.nestedTodoList
      .map((td) => td.id.toString())
      .indexOf(req.params.nest_id);
    console.log(removeIndex);
    await todo.nestedTodoList.splice(removeIndex, 1);
    await todo.save();
    res.status(200).json(todo.nestedTodoList);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
};



//UPDATE NESTED TASKS BY ID

exports.updateNestedTasks = async (req, res, next) => {
  try {
    let existingTodo = await Todo.findById(req.params.todo_id);
    console.log(existingTodo);
    if (!existingTodo) {
      return res.status(400).json({ success: false, data: false });
    }

    let updatedTask = await Todo.findOneAndUpdate(
      {
        _id: req.params.todo_id,
        "nestedTodoList._id": req.params.nest_id,
      },
      {
        $set: {
          "nestedTodoList.$.title": req.body.title,
        },
      }
    );

    res.status(200).json({ success: true, updatedTask });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: false });
  }
};
