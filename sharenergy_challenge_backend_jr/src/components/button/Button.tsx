import React, { MouseEvent } from "react";

type Props = {
  nome: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ nome, onClick }: Props) {
  return (
    <button onClick={onClick}>
      <span>{nome}</span>
    </button>
  );
}
