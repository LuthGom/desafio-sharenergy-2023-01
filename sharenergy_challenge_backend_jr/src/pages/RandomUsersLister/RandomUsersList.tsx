import React, { ReactNode, useEffect, useState } from "react";
import { random_users_uri, random_users_seed } from "../../services/apis_urls";
import { RandomUsersListContainer } from "../../styled-components/RandomUsersListStyled";
import RandomUserContainer from "../../components/RandomUserContainer/RandomUserContainer";
import { User } from "../../types/types";
import Button from "../../components/Button/Button";
import RandomUserCard from "../../components/RandomUserCard/RandomUserCard";
import InputSearch from "../../components/InputSearch/InputSearch";
type Props = {};

export default function RandomUsersList({}: Props) {
  const [users, setUsers] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState<number>(1);
  const [usersList, setUsersList] = useState<any[]>([]);
  const url = random_users_uri + `?page=${count}&results=15&seed=${count}as`;

  useEffect(() => {
    reqRandomUsers();
  }, []);
  const reqRandomUsers = () => {
    fetch(url)
      .then((res) => res.json())
      .then((...res) => {
        const data = res[0].results;
        setUsers(data);

        JSON.stringify(usersList) === JSON.stringify(data)
          ? null
          : setUsersList([...usersList, data]);

        console.log(usersList);
      })
      .catch((err) => console.error(err));
  };
  const onChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const valueSearched = evento.target.value;
    setSearch(valueSearched);
  };

  return (
    <RandomUsersListContainer>
      <div>
        <Button
          onClick={() => {
            setCount(count > 1 ? count - 1 : 1);
            reqRandomUsers();
          }}
          type="buttom"
          nome={"<"}
        />
        <p className="page">{count}</p>
        <Button
          onClick={() => {
            setCount(count + 1);
            reqRandomUsers();
          }}
          type="buttom"
          nome={">"}
        />
      </div>
      <div>
        <span>
          <InputSearch
            placeholder={"Search for an user here"}
            value={search}
            onChange={onChange}
          />
          <Button nome="Search Users" onClick={(event)=>{
            event.preventDefault();
            {usersList.length > 1 && usersList.map((user, index)=>{
              return(
                <RandomUserContainer
                  users={users}
                />
              )
            })}
            
          }} type="button" />
        </span>
      </div>
      {/* <RandomUserContainer users={users} /> */}
    </RandomUsersListContainer>
  );
}
