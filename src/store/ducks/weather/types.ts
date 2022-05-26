import { Coordinates, DailyTemp, Weather } from "types";

export type WeatherResponseDto = {
  current: Weather;
  daily: {
    dt: number;
    temp: {
      day: number;
    };
    feels_like: {
      day: number;
    };
    humidity: number;
    pressure: number;
  }[];
};
export type InitialState = {
  coordinates: Coordinates;
  currentWeather: Weather;
  weeklyWeather: DailyTemp[];
  isLoading: boolean;
  currentCity: string;
};
export type CoordinatesResponseDto = {
  country: string;
  lat: number;
  lon: number;
  local_names: object;
  state: string;
  name: string;
}[];
