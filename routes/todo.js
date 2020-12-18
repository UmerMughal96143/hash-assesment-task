const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo')
const {check} = require('express-validator')





router.get('/',todoController.getTodos)


router.post('/',[
    check('title' , 'Title is require').not().isEmpty()
], todoController.postTasks);

router.get('/:todo_id' , todoController.getTodoById)

router.delete('/:todo_id' , todoController.deleteTodoById)

router.put('/:todo_id' , todoController.updateTodoById)
module.exports = router;