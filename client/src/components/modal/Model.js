import React, { useState, useEffect } from "react";

// styled componeneta
import ModelContainer from "./styledComponents/ModalContainer";
import Button from "../todoItem/styledComponent/Button";

function Model({ targetID, todoList, hideModalHandler, submitHandler }) {
  const [textValue, setTextValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  function hideModal() {
    hideModalHandler();
  }

  function findTargetText() {
    let description = todoList.filter((item) => {
      return item.todo_id === targetID;
    })[0].description;
    setPlaceholder(description);
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitHandler(targetID, textValue);
    hideModalHandler();
  }

  function handleChange(e) {
    setTextValue(e.target.value);
  }

  useEffect(() => {
    findTargetText();
  }, []);

  return (
    <ModelContainer>
      <form onSubmit={handleSubmit}>
        <input placeholder={placeholder} onChange={handleChange} type="text" />
        <Button colour="lightgreen">Change</Button>
      </form>
      <Button colour="orange" onClick={hideModal}>
        Cancel
      </Button>
    </ModelContainer>
  );
}

export default Model;
