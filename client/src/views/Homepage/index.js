import React, { useState, useEffect } from "react";

// styled components
import Container from "./styledComponents/Container";
import TodoListContainer from "./styledComponents/TodoListContainer";

// components
import TodoItem from "../../components/todoItem/TodoItem";
import TodoInput from "../../components/todoInput/TodoInput";
import Modal from "../../components/modal/Model";

// api services
import TodoServices from "../../services/TodoServices";

function HomePage() {
  // STATES
  const [todoList, setTodoList] = useState([]);
  const [showModal, setShowModel] = useState(false);
  const [targetID, setTargetID] = useState(0);

  // GET ALL TODOs
  async function getAllTodos() {
    try {
      const res = await TodoServices.getAllTodos();
      setTodoList(res.data);
    } catch (err) {
      console.error(err.message);
    }
  }

  // DELETE TODO ITEM
  async function handleDelete(anID) {
    try {
      await TodoServices.deleteTodoItem(anID);
      const newList = todoList.filter((item) => {
        return item.todo_id !== anID;
      });
      setTodoList(newList);
    } catch (err) {
      console.error(err.message);
    }
  }

  // CREATE NEW TODO ITEM
  async function handleInput(data) {
    try {
      const res = await TodoServices.addTodoItem(data);
      setTodoList([...todoList, res.data]);
    } catch (err) {
      console.error(err.message);
    }
  }

  function handleChange(anID) {
    setShowModel(true);
    setTargetID(anID);
  }

  function handleHideModal() {
    setShowModel(false);
  }

  // CHANGE TODO ITEM OF TARGETID
  async function handleChangeSubmit(targetID, newData) {
    try {
      const changedItem = await TodoServices.updateTodoItem(targetID, newData);
      // filter through todoList and find the changed item, update it
      let list = todoList.filter((items) => {
        return items.todo_id !== changedItem.data.todo_id;
      });
      setTodoList([...list, changedItem.data]);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <Container>
      <h1>PERN todo App</h1>
      {showModal ? (
        <Modal
          targetID={targetID}
          todoList={todoList}
          hideModalHandler={handleHideModal}
          submitHandler={handleChangeSubmit}
        />
      ) : null}
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
              changeHandler={handleChange}
            />
          );
        })}
      </TodoListContainer>
    </Container>
  );
}

export default HomePage;
