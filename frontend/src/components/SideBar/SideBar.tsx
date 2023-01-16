import React, { useState } from "react";
import { NavStyled } from "../../styled-components/NavStyled";
import NavRotas from "../NavRotas/NavRotas";

type Props = {
  display: string;
};

export default function Nav({ display }: Props) {
  return (
    <NavStyled style={{ display: display }}>
      <NavRotas />
    </NavStyled>
  );
}
