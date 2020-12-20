const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const TodoSchema = new Schema({
    
    title : {
        type : String,
        required : true
    },
    nestedTodoList : [
        {
            title : {
                type : String,
            },
            createdDate : {
                type : Date,
                default : Date.now
            },
            markAsDone : {
                type : Boolean,
                default : false
            },
            dueDate : {
                type : Date ,
                required : true
            }
        }
    ],
    date : {
        type : Date ,
        default : Date.now
    }
})

module.exports = Todo = mongoose.model('todo',TodoSchema)