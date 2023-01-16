import React, { useState } from "react";
import Nav from "../SideBar/SideBar";
import { HeaderStyled } from "../../styled-components/HeaderStyled";
import MenuSVGIcon from "../UserSvgIcons/MenuSVGIcon";
import Button from "../Button/Button";

type Props = {};

export default function Header({}: Props) {
  const [displayState, setDisplayState] = useState(false);

  return (
    <HeaderStyled>
      <Button
        type={""}
        onClick={(e) => {
          e.preventDefault();
          displayState === false
            ? setDisplayState(true)
            : setDisplayState(false);
        }}
        nome={<MenuSVGIcon />}
      />

      <Nav display={displayState !== false ? "flex" : "none"} />
    </HeaderStyled>
  );
}
