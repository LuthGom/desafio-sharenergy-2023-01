import styled from "styled-components";

export const ContainerStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 40px);
  span {
    display: flex;
    width: 35%;
    align-items: center;
    justify-content: center;
  }
  input {
    margin: 10px;
    padding: 10px;
  }
  img {
    width: 50%;
  }
  button {
    background: transparent;
    border: 2px groove yellowgreen;
    border-radius: 200px;
    color: whitesmoke;

    font-size: 22px;
    font-weight: bold;

    margin: 10px;
    padding: 10px;
  }
  button:hover {
    background-color: orangered;
    cursor: pointer;
  }
`;
