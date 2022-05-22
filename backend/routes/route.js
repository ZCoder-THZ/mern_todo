import express from "express";
const router=express.Router();
import {getTodos,createTodo, updateTodo, deleteTodo} from '../controller/controller.js'

router.route('/').get(getTodos).post(createTodo);
router.route('/:id').put(updateTodo).delete(deleteTodo)

export default router;