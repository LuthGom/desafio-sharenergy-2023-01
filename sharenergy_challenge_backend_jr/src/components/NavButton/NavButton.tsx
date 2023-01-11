import React from "react";
import { LinkProps, Link } from "react-router-dom";
import { ButtonStyled } from "../../styled-components/ButtonStyled";

type Props = {
  href: LinkProps["to"];
  nome: String;
};

export default function NavButton({ href, nome }: Props) {
  return (
    <ButtonStyled>
      <Link to={href}>{nome}</Link>
    </ButtonStyled>
  );
}
