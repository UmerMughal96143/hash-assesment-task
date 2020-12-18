const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const TodoSchema = new Schema({
    
    title : {
        type : String,
        required : true
    },
    nestedTodoList : [
        {
            id:{
                type : Schema.Types.ObjectId
            },
            title : {
                type : String,
                required : true
            },
            date : {
                type : Date,
                default : Date.now
            }
        }
    ],
    date : {
        type : Date ,
        default : Date.now
    }
})

module.exports = Todo = mongoose.model('todo',TodoSchema)