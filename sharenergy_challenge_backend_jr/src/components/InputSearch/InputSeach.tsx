import React, { InputHTMLAttributes } from "react";
type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
};

export default function InputSeach({ value, onChange, placeholder }: Props) {
  return (
    <div>
      <input
        type="text"
        defaultValue={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
