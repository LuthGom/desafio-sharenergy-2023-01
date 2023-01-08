import React from "react";
import Nav from "./Nav";
import { HeaderStyled } from "../styled-components/HeaderStyled";
type Props = {};

export default function Header({}: Props) {
  return (
    <HeaderStyled>
      <Nav />
    </HeaderStyled>
  );
}
