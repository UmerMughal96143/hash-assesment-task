const {validationResult} = require('express-validator');
const Todo = require('../models/todo');



//GET ALL TODOS LIST


exports.getTodos = async(req,res,next) => {

    try {
        const todos = await Todo.find();
        res.status(200).json({success : true , todos})
    } catch (err) {
        console.log(err);
        res.status(500).json({success : false , data : false})
    }
}

//POST TODO LIST TASK

exports.postTasks = async(req, res,next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }
    
    const {title} = req.body;

    try {
        let newTodo = new Todo({
            title
        })

       let todo = await newTodo.save();
        res.status(200).json({success : true , todo})
    } catch (err) {

        console.log(err);
        res.status(500).json({success : false , data : false})
        
    }

}

//GET TODO BY ITS ID

exports.getTodoById = async (req , res, next) => {

    try {
        const todo = await Todo.findById(req.params.todo_id)
        if(!todo){
            return res.status(404).json({success : false , data : false})
        }

        res.status(200).json({success : true , todo})
    } catch (err) {
        console.log(err);
        res.status(500).json({success : false , data : false})

    }
}



//DELETE TODO BY ITS ID

exports.deleteTodoById = async(req , res ,next) => {

    try {

        const todo = await Todo.findById(req.params.todo_id);

    if(!todo){
        return res.status(404).json({success : false , data : false})
    }
    await todo.remove();
        
    res.status(200).json({success : true , msg : 'Successfully Deleted List'})
    } catch (err) {
        console.log(err);
        return res.status(500).json({success : false , data : false})

    }

    
}


//UPDATE TODO LIST BY  ID 


exports.updateTodoById = async (req, res , next) => {


    try {
        let todo = await Todo.findOne({_id :req.params.todo_id})
        console.log(todo)
        if(todo){
            let newTodo = {title : req.body.title}
            todo = await Todo.findOneAndUpdate({_id : req.params.todo_id} , {
                $set : newTodo,
            },
            {
                new : true
            })
            return res.status(200).json({success : true , todo})
        }else{
    
            return res.status(404).json({success : false , data : false})
        }
        
    } catch (err) {
        console.log(err);
        res.status(500).json({success : false , data : false})

    }

   


    // const updatedTodo = await 
}