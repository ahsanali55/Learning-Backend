// External Modules
const express = require("express");
const todoItemRouter = express.Router();

// Local Modules
const todoItemController = require("../controllers/todoItemController");

todoItemRouter.post('/', todoItemController.createTodoItem);
todoItemRouter.get('/', todoItemController.getTodoItems);
todoItemRouter.put('/:id/completed ', todoItemController.markCompleted);
todoItemRouter.delete('/:id', todoItemController.deleteTodoItem);

module.exports = todoItemRouter;