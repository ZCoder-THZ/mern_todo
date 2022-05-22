import mongoose from "mongoose";
import Todos from "../models/TodoSchema.js";

export const getTodos=async (req,res)=>{
    try {
        const todos=await Todos.find();
        res.json({todos});
    } catch (error) {
        res.status(400).send(error)
    }
}
export const createTodo=async (req,res)=>{
    const todo=await Todos(req.body)
    try {
            await todo.save()
            res.json(todo)
    } catch (error) {
      res.send(error)  
    }

}
export const updateTodo=async (req,res)=>{
    const {todo,success}=req.body
    const updateTodo=await Todos.findByIdAndUpdate(req.params.id,{todo,success},{new :true})
    try {
        await updateTodo.save()
        res.json(updateTodo);
    } catch (error) {
      res.send(error)  
        
    }
}
export const deleteTodo=async (req,res)=>{
    
    const removeTodo=await Todos.findByIdAndDelete(req.params.id)
    try {
        
        res.json({success:true});
    } catch (error) {
      res.send(error)  
        
    }
}
