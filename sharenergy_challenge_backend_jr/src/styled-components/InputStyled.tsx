import React, { Component } from "react";
import styled from "styled-components";

export const InputContainer = styled.span`
  span.subContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin-bottom: 10px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  span.placeholder {
    display: flex;
    align-items: center;
    border: 1px solid white;

    width: 350px;
  }
  label {
    font-size: 22px;

    margin-bottom: 10px;

    color: #fff;
  }
  input {
    width: 300px;
    height: 45px;
    background: transparent;
    border: none;

    font-size: 18px;

    color: #fff;
  }
  button {
    background: transparent;
    border: none;
    padding: 5px;

    color: white;
  }

  input::placeholder {
    font-size: 18px;
    font-weight: 300;
    line-height: 20px;
    color: #fff;
    padding: 1em;
  }
`;
