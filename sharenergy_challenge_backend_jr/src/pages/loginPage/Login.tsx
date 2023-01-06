import React from "react";
import Input from "../../components/input/Input";
import { PasswordSVGIcon } from "../../components/usersvgicons/PasswordSVGIcon";
import UserSVGIcon from "../../components/usersvgicons/UserSVGIcon";
type Props = {};

export default function Login({}: Props) {
  return (
    <section
      style={{
        height: "100%",
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Input
        id="Username"
        type="text"
        name="Username"
        label="Username"
        placeholder="Digite seu username"
        svg={<UserSVGIcon />}
      />
      <Input
        id="password"
        type="passowrd"
        name="password"
        label="Password"
        placeholder="Digite aqui a sua senha"
        svg={<PasswordSVGIcon />}
      />
    </section>
  );
}
