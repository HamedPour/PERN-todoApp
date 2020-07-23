import styled from "styled-components";

export default styled.div`
  border: 3px solid red;
  width: 60vh;
  height: 60vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4000;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  input {
    font-size: 1.2rem;
    padding: 8px;
    margin-right: 5px;
  }
`;
