import styled from "styled-components";

export default styled.button`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 7px 10px;
  margin: 5px;
  color: #fff;
  background-color: ${(props) => props.colour || "inherit"};
`;
