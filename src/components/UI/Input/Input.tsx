import React from "react";

import { ControllerFieldState } from "react-hook-form";
import styled from "styled-components";

const Input: React.FC<InputProps> = (props) => {
  const { error } = props.fieldState;
  return (
    <Root>
      <InputInsert {...props} />
      <ErrorMessage>{error?.message || ""}</ErrorMessage>
    </Root>
  );
};

export default Input;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldState: ControllerFieldState;
}
const Root = styled.div`
  position: relative;
  width: 100%;
  max-height: max-content;
  display: flex;
  flex-direction: column;
`;
const InputInsert = styled.input`
  background-color: rgb(255, 255, 255, 0.8);
  width: 100%;
  height: 68px;
  padding-right: 40px;
  padding-left: 23px;
  border-radius: 6px;
  color: rgb(0, 0, 0, 0.8);
  font-size: 20px;
  font-weight: 600;
  border: none;
  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }
  outline: 1px solid;
`;
const ErrorMessage = styled.div`
  color: red;
  font-size: 10px;
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  height: 20px;
`;
