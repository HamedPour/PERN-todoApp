import React from "react";

//styled component
import TodoItemContainer from "./styledComponent/TodoItemContainer";
import Button from "./styledComponent/Button";

function TodoItem({ number, id, description, deleteHandler }) {
  function deleteItem(anID) {
    deleteHandler(anID);
  }

  return (
    <TodoItemContainer>
      <p>
        {number}. {description}
      </p>
      <Button colour="green">Update</Button>
      <Button colour="red" onClick={() => deleteItem(id)}>
        Delete
      </Button>
    </TodoItemContainer>
  );
}

export default TodoItem;
