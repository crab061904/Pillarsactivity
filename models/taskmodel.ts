const mongoose=require('mongoose');
const ToDoSchema=mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,"Please enter a task title"]
        },
       description:{
            type:String,
            default: ''
         },
         completed:{
            type:Boolean,
            default:false
         },
        dueDate:{
            type:Date,
            required:true
         },

    },
    {
        timestamps:true
    }
);

const ToDo=mongoose.model("Todo",ToDoSchema);

module.exports=ToDo;