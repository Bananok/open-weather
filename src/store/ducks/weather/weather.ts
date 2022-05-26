import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { DailyTemp } from "types";

import { getCoordinatesThunk, getWeatherThunk } from "./actions";
import { InitialState } from "./types";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    currentCity: "N",
    coordinates: { lon: 0, lat: 0 },
    currentWeather: { feels_like: 0, humidity: 0, pressure: 0, temp: 0 },
    weeklyWeather: [
      { dt: 0, weather: { feels_like: 0, humidity: 0, pressure: 0, temp: 0 } },
    ],
  } as InitialState,
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(getCoordinatesThunk.fulfilled, (state, { payload }) => {
        if (payload.length) {
          const { lat, lon } = payload[0];
          state.currentCity = payload[0].name;
          state.coordinates = { lat, lon };
          state.isLoading = false;
        }
      })
      .addCase(getWeatherThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentWeather = payload.current;
        const weeklyWeather: DailyTemp[] = [];
        payload.daily.map((dailyWeather, index) => {
          if (index <= 6 && index !== 0) {
            weeklyWeather.push({
              dt: dailyWeather.dt,
              weather: {
                temp: dailyWeather.temp.day,
                feels_like: dailyWeather.feels_like.day,
                pressure: dailyWeather.pressure,
                humidity: dailyWeather.humidity,
              },
            });
          }
        });
        state.weeklyWeather = weeklyWeather;
      })
      .addMatcher(
        isAnyOf(getCoordinatesThunk.pending, getWeatherThunk.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(getCoordinatesThunk.rejected, getWeatherThunk.rejected),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const actions = {
  ...weatherSlice.actions,
  getCoordinatesThunk,
  getWeatherThunk,
};

export const reducer = weatherSlice.reducer;
