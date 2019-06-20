import { takeEvery, call, put ,select } from "redux-saga/effects";
import { WEATHER } from "../constants";
import { fetchWeather } from "../../api";
import {setWeather , setError} from "../actions/weatherAction"

function* handleWeatherLoad() {
  try {
    const getCityKey = state => state.weather
    const key = yield select( getCityKey);
    console.log(key);
    const weather = yield call(fetchWeather, key.cityKey);
    yield put(setWeather(weather))
  } catch (error) {
    // dispatch error
    yield put(setError(error.toString()))
  }
}

export default function* weatherLoad() {
  yield takeEvery(WEATHER.LOAD, handleWeatherLoad);
}

