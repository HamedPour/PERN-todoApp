import React, { useState, useEffect } from "react";

// styled components
import Container from "./styledComponents/Container";
import TodoListContainer from "./styledComponents/TodoListContainer";

// components
import TodoItem from "../../components/todoItem/TodoItem";
import TodoInput from "../../components/todoInput/TodoInput";

// api services
import TodoServices from "../../services/TodoServices";

function HomePage() {
  const [todoList, setTodoList] = useState([]);

  async function getAllTodos() {
    try {
      const res = await TodoServices.getAllTodos();
      setTodoList(res.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function handleDelete(anID) {
    try {
      await TodoServices.deleteTodoItem(anID);
      const newList = todoList.filter((item) => {
        return item.todo_id !== anID;
      });
      setTodoList(newList);
    } catch (err) {
      console.log(err.message);
    }
  }

  function handleInput(data) {
    console.log(data);
  }

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <Container>
      <h1>PERN todo App</h1>
      <TodoInput inputHandler={handleInput} />
      <TodoListContainer>
        {todoList.map((item, index) => {
          return (
            <TodoItem
              key={index}
              number={index + 1}
              id={item.todo_id}
              description={item.description}
              deleteHandler={handleDelete}
            />
          );
        })}
      </TodoListContainer>
    </Container>
  );
}

export default HomePage;
