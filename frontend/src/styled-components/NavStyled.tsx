import styled from "styled-components";

export const NavStyled = styled.nav`
  height: calc(100vh - 10px);
  background-color: white;
  width: 250px;
  display: none;
  z-index: 1;
  ol {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    margin: 5px;
  }
  li {
    padding: 0.5rem 1rem;
    list-style-position: inside;
    width: 100%;
  }
`;
