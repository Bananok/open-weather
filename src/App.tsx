import React, { useEffect } from "react";

import { CardWeather, Header, WeatherForm } from "components";
import { actions, selectors, useAppDispatch, useAppSelector } from "store";
import styled from "styled-components";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const coordinates = useAppSelector(selectors.weather.getCoordinates);
  const weeklyWeather = useAppSelector(selectors.weather.getWeeklyWeather);
  useEffect(() => {
    dispatch(actions.weather.getWeatherThunk(coordinates));
  }, [coordinates, dispatch]);
  const currentWeather = useAppSelector(selectors.weather.getCurrentWeather);
  return (
    <Root>
      <Header />
      <WeatherForm />
      <CurrentWeather>
        <CardWeather isCurrent date={2} weather={currentWeather} />
      </CurrentWeather>
      <WeeklyWeather>
        {weeklyWeather.map((dayWeather, index) => {
          return (
            <CardWeather
              key={index}
              date={dayWeather.dt}
              weather={dayWeather.weather}
            />
          );
        })}
      </WeeklyWeather>
    </Root>
  );
};

const Root = styled.div`
  background-color: rgb(0, 0, 0, 0.2);
  padding: 20px;
  min-height: 100vh;
`;
const CurrentWeather = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;
const WeeklyWeather = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default App;
