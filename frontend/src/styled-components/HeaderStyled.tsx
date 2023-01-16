import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 40px;
  display: flex;
  justify-content: space-between;
  svg {
    display: block;
    position: absolute;
  }

  svg:hover {
    cursor: pointer;
    box-shadow: 0px 5px 5px black;
  }

  button {
    background: transparent;
    border: none;
    padding: 5px;
    width: fit-content;
    height: fit-content;
    color: white;
  }
  button:hover {
  }
`;
