import React, { MouseEvent } from "react";

import { SubmitButtonStyled } from "../../styled-components/SubmitButtonStyled";
type Props = {
  nome: any;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type: string;
};

export default function Button({ nome, onClick, type }: Props) {
  return (
    <SubmitButtonStyled itemType={type} onClick={onClick}>
      <span>{nome}</span>
    </SubmitButtonStyled>
  );
}
