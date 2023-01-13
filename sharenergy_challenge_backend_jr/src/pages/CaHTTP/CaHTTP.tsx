import React, { useState } from "react";
import { cats_http_uri } from "../../services/apis_urls";
import InputSeach from "../../components/InputSearch/InputSeach";
import { Status } from "../../types/types";
import { ContainerStyled } from "../../styled-components/ContainerStyled";

const defaultStatus: Status = {
  status: "100",
};

export default function CaHTTP({}) {
  const [value, setValue] = useState(defaultStatus);
  const [cat, setCat] = useState("");
  const reqCatHttp = (statusCode:string) => {
    setCat(cats_http_uri + statusCode);
  };

  const onStatusChange = (prop: keyof Status, statusValue: string) => {
    setValue({ ...value, [prop]: statusValue });
  };

  return (
    <ContainerStyled>
      <span>
        <InputSeach
          value={value.status}
          placeholder="Digite aqui o status HTTP desejado!"
          onChange={(event) => {
            onStatusChange("status", event.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            reqCatHttp(value.status);
          }}
        >
          Search
        </button>
      </span>
      <img src={cat} alt="" />
    </ContainerStyled>
  );
}
