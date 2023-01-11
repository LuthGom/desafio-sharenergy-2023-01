import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { PasswordSVGIcon } from "../../components/UserSvgIcons/PasswordSVGIcon";
import UserSVGIcon from "../../components/UserSvgIcons/UserSVGIcon";
type Props = {};

export default function Login({}: Props) {
  const [showAndHide, setShowAndHide] = useState(false);
  return (
    <section
      style={{
        height: "calc(100% - 50px)",
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
        type={showAndHide ? "text" : "password"}
        name="password"
        label="Password"
        placeholder="Digite aqui a sua senha"
        svg={<PasswordSVGIcon />}
        buttonName={showAndHide ? "Hide" : "Show"}
        onClick={() =>
          showAndHide === false ? setShowAndHide(true) : setShowAndHide(false)
        }
      />
    </section>
  );
}
