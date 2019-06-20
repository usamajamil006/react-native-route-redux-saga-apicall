import { WEATHER } from "../constants";

const loadingReducer = (state = null, action) => {
  switch (action.type) {
    case WEATHER.LOAD_FAIL:
      return action.error;
    case WEATHER.LOAD:
    case WEATHER.LOAD_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default loadingReducer;
