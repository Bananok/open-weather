import React from "react";

import styled from "styled-components";
const CardWeather: React.FC<CardWeatherProps> = () => {
  return <Root></Root>;
};
interface CardWeatherProps {}

export default CardWeather;

const Root = styled.div`
  background-color: rgb(255, 255, 255, 0.9);
`;
