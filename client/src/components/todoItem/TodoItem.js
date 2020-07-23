import React from "react";

//styled component
import TodoItemContainer from "./styledComponent/TodoItemContainer";
import Button from "./styledComponent/Button";

function TodoItem({ number, id, description, deleteHandler, changeHandler }) {
  function deleteItem(anID) {
    deleteHandler(anID);
  }

  function changeItem(anID) {
    changeHandler(anID);
  }

  return (
    <TodoItemContainer>
      <p>
        {number}. {description}
      </p>
      <Button colour="green" onClick={() => changeItem(id)}>
        Update
      </Button>
      <Button colour="red" onClick={() => deleteItem(id)}>
        Delete
      </Button>
    </TodoItemContainer>
  );
}

export default TodoItem;
