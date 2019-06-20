import { WEATHER } from "../constants";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case WEATHER.LOAD:
      return true;
    case WEATHER.LOAD_SUCCESS:
      return false;
    case WEATHER.LOAD_FAIL:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
