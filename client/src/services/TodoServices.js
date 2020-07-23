import Api from "./Api";

export default {
  getAllTodos() {
    return Api().get("todos");
  },
  deleteTodoItem(id) {
    return Api().delete(`todo/${id}`);
  },
  addTodoItem(aDescription) {
    const data = {
      description: aDescription,
    };
    return Api().post("create-todo", data);
  },
  updateTodoItem(id, newData) {
    const data = {
      todo_id: id,
      description: newData,
    };
    return Api().put(`todo/${id}`, data);
  },
};
