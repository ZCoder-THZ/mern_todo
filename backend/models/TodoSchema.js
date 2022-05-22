import mongoose from "mongoose";
const TodoSchema=new mongoose.Schema({
    todo:{
        type:String,
        required:true,
    },
    success:{
        type:Boolean,
        default:false
    }
});
const Todos=mongoose.model('todos',TodoSchema);
export default Todos;