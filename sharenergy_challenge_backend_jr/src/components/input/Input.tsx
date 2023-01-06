import React from "react";
import { InputContainer } from "../../styled-components/InputStyled";
interface Props {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  svg?: JSX.Element | JSX.Element[];
}


function Input({ id, label, type, placeholder, svg }: Props) {
  return (
    <InputContainer>
      <span className="subContainer">
        <label htmlFor={id}>{label}</label>
        <span className="placeholder">
          {svg}
          <input type={type} id={id} name={id} placeholder={placeholder} />
        </span>
      </span>
    </InputContainer>
  );
}

export default Input;
