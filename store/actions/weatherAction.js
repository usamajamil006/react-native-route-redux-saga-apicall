import { WEATHER } from "../constants";

const loadWeather = cityKey => ({
  type: WEATHER.LOAD,
  cityKey
});

const setWeather = data => ({
  type: WEATHER.LOAD_SUCCESS,
  data
});

// const setCityKey = cityKey =>({
//   type: WEATHER.LOAD_SUCCESS,
//   cityKey
// })
const setError = error => ({
  type: WEATHER.LOAD_FAIL,
  error
});

export { loadWeather, setWeather, setError };
