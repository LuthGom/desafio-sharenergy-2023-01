import React, { useState } from "react";
import Nav from "../SideBar/SideBar";
import { HeaderStyled } from "../../styled-components/HeaderStyled";
import MenuSVGIcon from "../UserSvgIcons/MenuSVGIcon";

type Props = {};

export default function Header({}: Props) {
  const [displayState, setDisplayState] = useState(false);

  return (
    <HeaderStyled>
      <button
        onClick={(e) => {
          e.preventDefault();
          displayState === false
            ? setDisplayState(true)
            : setDisplayState(false);
        }}
      >
        <MenuSVGIcon />
      </button>
      <Nav display={displayState !== false ? "flex" : "none"} />
    </HeaderStyled>
  );
}
