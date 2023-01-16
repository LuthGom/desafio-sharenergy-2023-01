import React from "react";
import { User } from "../../types/types";
import { RandomUserCardStyled } from "../../styled-components/RandomUserCardStyled";
export default function RandomUserCard({
  picture,
  name,
  email,
  username,
  age,
  alt,
}: User) {
  return (
    <RandomUserCardStyled>
      <div className="subContainerImg">
        <img src={picture} alt={alt} />
      </div>
      <div className="subcontainerInfos">
        <p>
          <span className="infosSpan">Name:</span> {name}
        </p>
        <p>
          <span className="infosSpan">Email:</span> {email}
        </p>
        <p>
          <span className="infosSpan">Userame:</span> {username}
        </p>
        <p>
          <span className="infosSpan">Age:</span> {age} years
        </p>
      </div>
    </RandomUserCardStyled>
  );
}
