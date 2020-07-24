// Do not setup your controllers in this file. Setup each controller action
// in the controller folder under the correct file and only use their methods
// in this file.

const TodoController = require("./controller/TodoController");

module.exports = (app) => {
  app.get("/todos", TodoController.getTodos);
  app.get("/todo/:id", TodoController.getTodo);
  app.put("/todo/:id", TodoController.updateTodo);
  app.post("/create-todo", TodoController.createToDo);
  app.delete("/todo/:id", TodoController.deleteTodo);
  app.get("*", TodoController.catchAll);
};
