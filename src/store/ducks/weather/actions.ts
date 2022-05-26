import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, API_KEY } from "api";
import { Coordinates, DefaultRejectValue, ExtraParamsThunkType } from "types";

import { CoordinatesResponseDto, WeatherResponseDto } from "./types";

export const getCoordinatesThunk = createAsyncThunk<
  CoordinatesResponseDto,
  string,
  ExtraParamsThunkType<DefaultRejectValue>
>("get/coordinates", async (city, { rejectWithValue }) => {
  const url = `geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
  try {
    const { data } = await api.get(url);

    return data;
  } catch (error) {
    return rejectWithValue(error as DefaultRejectValue);
  }
});
export const getWeatherThunk = createAsyncThunk<
  WeatherResponseDto,
  Coordinates,
  ExtraParamsThunkType<DefaultRejectValue>
>("get/weather", async (coordinates, { rejectWithValue }) => {
  const url = `data/2.5/onecall?exclude=minutely,hourly,alerts&lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=metric&lang=ru`;
  try {
    const { data } = await api.get(url);

    return data;
  } catch (error) {
    return rejectWithValue(error as DefaultRejectValue);
  }
});
