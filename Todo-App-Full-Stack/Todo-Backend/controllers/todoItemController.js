const TodoItem = require("../models/TodoItem");

exports.createTodoItem = async (req, res, next) => {
  const { task, date, completed } = req.body;
  console.log("The item is ", req.body)

  const todoItem = new TodoItem({ task, date });
  await todoItem.save().then((result) => {
    console.log("Todo Item created: ", result);
  }).catch((err) => {
    console.error("Error creating todo item: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  });
  
  res.status(201).json(todoItem);
}

exports.getTodoItems = async (req, res, next) => {
  const todoItems = await TodoItem.find();
  res.json(todoItems);
}

exports.markCompleted = async (req, res, next) => {
  const { id } = req.params;
  const todoItem = await TodoItem.findById(id);
  todoItem.completed = true;
  await todoItem.save();
  res.json(todoItem);
}

exports.deleteTodoItem = async (req, res, next) => {
  const { id } = req.params;
  await TodoItem.findByIdAndDelete(id);
  res.status(204).json({_id: id})

}