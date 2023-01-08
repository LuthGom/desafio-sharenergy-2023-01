import React from "react";
import { LinkProps, Link } from "react-router-dom";
import { NavButtonStyled } from "../../styled-components/NavButtonStyled";

type Props = {
  href: LinkProps["to"];
  nome: String;
};

export default function NavButton({ href, nome }: Props) {
  return (
    <NavButtonStyled>
      <Link to={href}>{nome}</Link>
    </NavButtonStyled>
  );
}
