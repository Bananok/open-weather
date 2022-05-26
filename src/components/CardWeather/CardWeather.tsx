import React from "react";

import styled from "styled-components";
import { Weather } from "types";
import { toNormalDate } from "utils";

const CardWeather: React.FC<CardWeatherProps> = ({
  weather,
  date,
  isCurrent,
}) => {
  const { temp, feels_like, pressure, humidity } = weather;
  return (
    <Root isCurrent={isCurrent}>
      <Date>{isCurrent ? "Now" : toNormalDate(date)}</Date>
      <Temp>{Math.round(temp)} °C</Temp>
      <FeelsLike>Ощущается: {Math.round(feels_like)} °C</FeelsLike>
      <Pressure>Давление: {pressure} hPa</Pressure>
      <Humidity>Влажность: {humidity} %</Humidity>
    </Root>
  );
};
interface CardWeatherProps {
  weather: Weather;
  date: number;
  isCurrent?: boolean;
}

export default CardWeather;

const Root = styled.div<{ isCurrent?: boolean }>`
  background-color: rgb(0, 0, 0, 0.4);
  width: 400px;
  height: 200px;
  display: flex;
  margin: 20px;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  color: rgb(23, 61, 73);
  font-size: 20px;
  ${({ isCurrent }) => (isCurrent ? "font-weight: 800" : null)}
`;
const Temp = styled.div``;
const FeelsLike = styled.div``;
const Pressure = styled.div``;
const Humidity = styled.div``;
const Date = styled.div`
  font-size: 30px;
  color: rgb(33, 0, 109);
  padding-bottom: 30px;
`;
