import React, { Component } from "react";
import WeatherApp from "./WeatherApp";

import { Provider } from "react-redux";
import store from "./store/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WeatherApp />
      </Provider>
    );
  }
}
