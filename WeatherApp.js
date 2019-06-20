import React, {Component} from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Button } from "react-native";
import Expo from "expo";

import { loadWeather, setWeather } from "./store/actions/weatherAction";

class App extends Component {
  render() {
    const { weather, error, isloading , loadWeather} = this.props;
     return  (<View style={styles.container}>
      <View styel={styles.tab}>
        <Button
          title="Karachi"
          onPress={() => {
            loadWeather(261158);
          }}
        />
        <Button
          title="Lahore"
          onPress={() => {
            loadWeather(260622);
          }}
        />
        <Button
          title="Islamabad"
          onPress={() => {
            loadWeather(258278);
          }}
        />
      </View>

      {isloading ? <Text>Loading...</Text> : <Weather weather={weather} />}
    </View>)
  }
}

const Weather = ({weather}) =>(<View>
  <Text>Headline: {weather && weather.Headline}</Text>
  <Text>MinTemperature: {weather && weather.MinTemperature}</Text>
  <Text>MaxTemperature: {weather && weather.MaxTemperature}</Text>
  <Text>Day: {weather && weather.Day}</Text>
  <Text>Night: {weather && weather.Night}</Text>
</View>)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  tab: {
    flexDirection: "row",
    alignItems: "stretch"
  }
});

const mapStateToProps = ({ weather, isloading, error }) => ({
  weather,
  isloading,
  error
});

const mapDispatchToProps = dispatch => ({
  loadWeather: cityKey => dispatch(loadWeather(cityKey)),
  setWeather: () => dispatch(setWeather())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
