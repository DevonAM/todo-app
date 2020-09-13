module.exports = app => {
  const todos = require("../controllers/todo.controller.js");

  var router = require("express").Router();

  // Create a new todos
  router.post("/", todos.create);

  // Retrieve all todoss
  router.get("/", todos.findAll);

  // Retrieve all published todoss
  router.get("/published", todos.findAllPublished);

  // Retrieve a single todos with id
  router.get("/:id", todos.findOne);

  // Update a todos with id
  router.put("/:id", todos.update);

  // Delete a todos with id
  router.delete("/:id", todos.delete);

  // Delete all todoss
  router.delete("/", todos.deleteAll);

  app.use('/api/todos', router);
};