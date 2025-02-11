import { createAsyncThunk } from "@reduxjs/toolkit";
import { IWeather } from "./slice";


export const weatherRequestAsync = createAsyncThunk<IWeather, string>(
  'weather/fetch',
  async(city: string) => {
    const response: Response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a246c9d02b97721909fd896281bc785&lang=ru&units=metric`
    );

    if (response.ok && response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  }
)