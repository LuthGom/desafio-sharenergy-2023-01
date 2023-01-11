import styled from "styled-components";

export const NavStyled = styled.nav`
  height: 100vh;
  background-color: white;
  width: 250px;
  display: none;
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
