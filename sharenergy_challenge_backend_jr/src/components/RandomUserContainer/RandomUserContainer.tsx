import React, { ReactNode } from "react";
import { RandomUserContainerStyled } from "../../styled-components/RandomUserContainer";
import RandomUserCard from "../RandomUserCard/RandomUserCard";
import InputSearch from "../InputSearch/InputSearch";
import Button from "../Button/Button";
type Props = {
 
  users: any[];
};

export default function RandomUserContainer({  users }: Props) {
  return (
    <RandomUserContainerStyled>
      
      <div className="gridContainer">
        {users &&
          users.map((user, index): ReactNode => {
            return (
              <RandomUserCard
                key={index}
                picture={user.picture.thumbnail}
                name={user.name.first + " " + user.name.last}
                email={user.email}
                username={user.login.username}
                age={user.registered.age}
                alt={user.gender}
              />
            );
          })}
      </div>
    </RandomUserContainerStyled>
  );
}
