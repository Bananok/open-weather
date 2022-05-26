import React from "react";

import styled from "styled-components";
const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <Root {...props}>{props.value}</Root>;
};
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default Button;

const Root = styled.button`
  background-color: rgb(0, 0, 0, 0.4);
  height: 50px;
  width: 100px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgb(0, 0, 0, 0.6);
  color: white;
  cursor: pointer;
  :disabled {
    background-color: rgb(0, 0, 0, 0.4);
  }
  :hover {
    background-color: rgb(0, 0, 0, 0.6);
  }
`;
