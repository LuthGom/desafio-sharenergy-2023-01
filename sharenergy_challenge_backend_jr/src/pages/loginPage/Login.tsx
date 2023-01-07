import React, { useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { PasswordSVGIcon } from "../../components/usersvgicons/PasswordSVGIcon";
import UserSVGIcon from "../../components/usersvgicons/UserSVGIcon";
type Props = {};

export default function Login({}: Props) {
  const [showAndHide, setShowAndHide] = useState(false);
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
        type={showAndHide ? "password" : "text"}
        name="password"
        label="Password"
        placeholder="Digite aqui a sua senha"
        svg={<PasswordSVGIcon />}
        buttonName={showAndHide ? "Show" : "Hide"}
        onClick={() =>
          showAndHide === true ? setShowAndHide(false) : setShowAndHide(true)
        }
      />
    </section>
  );
}
