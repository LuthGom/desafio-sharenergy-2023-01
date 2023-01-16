import styled from "styled-components";

export const RandomUserCardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 10px;
  padding: 0.5em;

  width: 70%;

  border: 1.5px solid black;
  div.subContainerImg {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
  }
  span.infosSpan {
    font-weight: 900;
    font-size: 16px;
    color: gainsboro;
    margin-right: 3px;
    text-align: right;
  }
  p {
    font-weight: bold;
    font-size: 14px;
    margin: 0.3em;
    text-align: left;
    word-break: break-all;
  }
  div.subcontainerInfos {
    width: 100%;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`;
