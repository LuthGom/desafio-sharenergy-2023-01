import React from "react";
import NavButton from "../NavButton/NavButton";
type Props = {};

export default function NavRotas({}: Props) {
  return (
    <div>
      <ol>
        <li>
          <NavButton nome="Home" href="/" />
        </li>
        <li>
          <NavButton nome="Random List Users" href="/randonusers" />
        </li>
        <li>
          <NavButton nome="CaHTTP" href="/cahttp" />
        </li>
        <li>
          <NavButton nome="Random Dogs" href="/randomdogs" />
        </li>
        <li>
          <NavButton nome="Cadastro de Usuários" href="/cadastrodeusuarios" />
        </li>
      </ol>
    </div>
  );
}
