import { RootState } from "../..";

export const getCoordinates = (state: RootState) => state.weather.coordinates;
export const getWeeklyWeather = (state: RootState) =>
  state.weather.weeklyWeather;
export const getCurrentWeather = (state: RootState) =>
  state.weather.currentWeather;
export const getIsLoading = (state: RootState) => state.weather.isLoading;
export const getCurrentCity = (state: RootState) => state.weather.currentCity;
