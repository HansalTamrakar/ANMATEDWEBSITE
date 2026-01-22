const express = require('express')
const { createTodo } = require('../Controllers/todoCreate')
const { updatedTodo } = require('../Controllers/updateTodo')
const { deleteTodo,deleteAllTodo } = require('../Controllers/deleteTodo')
const { fetchTodo,fetchAllTodo } = require('../Controllers/getTodo')

const router = express.Router()

router.post("/createtodo", createTodo);
router.get("/fetchtodo/:id", fetchTodo);
router.put("/updatetodo/:id", updatedTodo);
router.get("/fetchalltodo", fetchAllTodo);
router.delete("/deletetodo/:id", deleteTodo);
router.delete("/deletealltodo", deleteAllTodo);
module.exports = router;