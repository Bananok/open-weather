import React from "react";

import styled from "styled-components";
const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <Root {...props}></Root>;
};
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
}

export default Button;

const Root = styled.button`
  background-color: rgb(255, 255, 255, 0.9);
`;
