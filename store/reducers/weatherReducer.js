import { WEATHER } from "../constants";

const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case WEATHER.LOAD:
      console.log({...state,cityKey: action.cityKey})
      
      return {...state,cityKey: action.cityKey}
    case WEATHER.LOAD_SUCCESS:
      console.log(action)
      return {...state, ...action.data};
    default:
      return state;
  }
};

export default weatherReducer;
