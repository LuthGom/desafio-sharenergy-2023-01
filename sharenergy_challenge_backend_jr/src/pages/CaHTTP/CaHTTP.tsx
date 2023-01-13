import React, { useState } from "react";
import { cats_http_uri } from "../../services/apis_urls";
import InputSeach from "../../components/InputSearch/InputSeach";
import { Status } from "../../types/types";
import { CatHttpStyled } from "../../styled-components/CatHttpPageStyled";
const defaultStatus: Status = {
  status: "100",
};
export default function CaHTTP({}) {
  const [value, setValue] = useState(defaultStatus);
  const [cat, setCat] = useState("");
  const reqCatHttp = () => {
    setCat(cats_http_uri + value.status);
  };

  const onStatusChange = (prop: keyof Status, statusValue: string) => {
    setValue({ ...value, [prop]: statusValue });
  };

  return (
    <CatHttpStyled>
      <span>
        <InputSeach
          value={value.status}
          placeholder="Digite aqui o status HTTP desejado!"
          onChange={() => {
            onStatusChange("status", value.status);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            reqCatHttp();
          }}
        >
          Search
        </button>
      </span>
      <img src={cat} alt="" />
    </CatHttpStyled>
  );
}
