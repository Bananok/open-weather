export type Weather = {
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
};
export type DailyTemp = {
  dt: number;
  weather: Weather;
};

export type Coordinates = {
  lat: number;
  lon: number;
};
export type ExtraParamsThunkType<T> = {
  rejectValue: T;
};

export type DefaultRejectValue = {
  message: string;
  error: string;
  statusCode: number;
};
