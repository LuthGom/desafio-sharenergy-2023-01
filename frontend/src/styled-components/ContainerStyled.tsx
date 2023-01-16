import styled from "styled-components";

export const ContainerStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(90% - 40px);

  span,
  span.imgContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span.imgContainer {
    width: 35%;
  }

  img {
    width: 50%;
  }
`;
