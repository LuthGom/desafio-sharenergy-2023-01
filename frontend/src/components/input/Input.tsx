import React from "react";
import { InputContainer } from "../../styled-components/InputStyled";
import Button from "../Button/Button";
interface Props {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  svg?: JSX.Element | JSX.Element[];
  buttonName?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Input({ id, label, type, placeholder, svg, buttonName, onClick }: Props) {
  return (
    <InputContainer>
      <span className="subContainer">
        <label htmlFor={id}>{label}</label>
       
          <span className="placeholder">
            {svg}
            <input type={type} id={id} name={id} placeholder={placeholder} />
          {buttonName ? <Button onClick={onClick} nome={buttonName} /> : null}
          </span>
    
      </span>
    </InputContainer>
  );
}

export default Input;
