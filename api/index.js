const KEY = "mWW36XM9XBprnpfIZCKovK5GKL3HoB2i";

// const fetchWeather = async city => {
//   const res = await fetch(
//     `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${KEY}&q=${city}&offset=2`
//   );
//   const data = await res.json();
//   console.log(data[0])
//   if (!data) {
//     throw new Error(data.errors);
//   }

//   return data[0];
// };
const fetchWeather = async city => {
  const res = await fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${city}?apikey=${KEY}&metric=true`
  );
  const data = await res.json();
  console.log(data)
  if (!data) {
    throw new Error(data.errors);
  }

  return {
    Headline: data.Headline.Text,
    MinTemperature: data.DailyForecasts[0].Temperature.Minimum.Value,
    MaxTemperature: data.DailyForecasts[0].Temperature.Maximum.Value,
    Day: data.DailyForecasts[0].Day.IconPhrase,
    Night: data.DailyForecasts[0].Night.IconPhrase
  };
};
export {fetchWeather};
