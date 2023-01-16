import styled from "styled-components";

export const RandomUserContainerStyled = styled.section`
  padding: 1em;
  margin: 1em;
  width: 90%;
  div.gridContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    width: 100%;
  }
  span {
    margin: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
