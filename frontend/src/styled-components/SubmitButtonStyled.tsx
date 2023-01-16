import styled from "styled-components";

export const SubmitButtonStyled = styled.button`
  background: transparent;
  border: 2px groove yellowgreen;
  border-radius: 200px;
  color: whitesmoke;

  font-size: 22px;
  font-weight: bold;

  margin: 10px;
  padding: 10px;

  &:hover {
    background-color: orangered;
    cursor: pointer;
  }
`;
