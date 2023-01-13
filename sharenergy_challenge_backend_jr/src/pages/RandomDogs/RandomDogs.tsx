import React, { useState } from "react";
import { random_dogs_uri } from "../../services/apis_urls";
import { Dogs } from "../../types/types";
import { ContainerStyled } from "../../styled-components/ContainerStyled";
type Props = {};
const randomDogs: Dogs = {
  dog: "",
};
export default function RandomDogs({}: Props) {
  const [value, setValue] = useState(randomDogs);
  const [dog, setDog] = useState("");
  console.log(dog);

  const randomDogsIndex = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  const reqRandomDogs = () => {
    fetch(random_dogs_uri + "doggos" + "?filter=mp4,webm")
      .then((res) => res.json())
      .then((res) => {
        const index = randomDogsIndex(res.length);
        console.log(res[index]);

        setDog(res[index]);
      })
      .catch((err) => console.log(err));
  };

  const onChange = (prop: keyof Dogs, dogReturned: string) => {
    setValue({ ...value, [prop]: dogReturned });
  };
  return (
    <ContainerStyled>
      <button
        onClick={(e) => {
          e.preventDefault();
          reqRandomDogs();
        }}
      >
        Refresh Image
      </button>
      <span>
        <img src={random_dogs_uri + dog} alt="" />
      </span>
    </ContainerStyled>
  );
}
