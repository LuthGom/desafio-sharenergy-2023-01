import React from "react";
import { NavStyled } from "../styled-components/NavStyled";
import NavButton from "./NavButton/NavButton";
import MenuSVGIcon from "./UserSvgIcons/MenuSVGIcon";

type Props = {};

export default function Nav({}: Props) {
  return (
    <NavStyled>
      <MenuSVGIcon />
      <NavButton nome="Home" href="/" />
      <NavButton nome="Random List Users" href="/randonusers" />
      <NavButton nome="CaHTTP" href="/cahttp" />
      <NavButton nome="Random Dogs" href="/cadastrodeusuarios" />
      <NavButton nome="Cadastro de Novos Usuários" href="/radomdogs" />
    </NavStyled>
  );
}
