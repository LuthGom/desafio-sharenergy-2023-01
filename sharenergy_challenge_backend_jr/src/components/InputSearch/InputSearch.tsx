import React from "react";
import { InputSearchStyled } from "../../styled-components/InputSearchStyled";
type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
};

export default function InputSearch({ value, onChange, placeholder }: Props) {
  return (
    <div>
      <InputSearchStyled
        type="text"
        defaultValue={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
