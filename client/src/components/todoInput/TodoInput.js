import React, { useState } from "react";

//styled components
import TodoInputContainer from "./styledComponents/TodoInputContainer";
import Button from "../todoItem/styledComponent/Button";

function TodoInput({ inputHandler }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    inputHandler(value);
    e.target.reset();
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <TodoInputContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What needs doing?"
          onChange={handleChange}
        ></input>
        <Button type="submit" colour="#6495ED">
          New Todo
        </Button>
      </form>
    </TodoInputContainer>
  );
}

export default TodoInput;
