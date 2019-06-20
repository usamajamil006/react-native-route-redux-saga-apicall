import { combineReducers } from "redux";
import WeatherReducer from "./weatherReducer";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  weather: WeatherReducer,
  isloading: loadingReducer,
  error: errorReducer
});

export default rootReducer;
