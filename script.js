//- Dump json for current weather for san diego
//- Dump jason data for uv index for san diego
//- Dump json data for five day forcast.
//- Log url for weather icon to console
//- Log urls for 5 day forcast to the console

//- Dump json for current weather for san diego
var currentWeatherView = $("#current-weather-view");
var citySearch = "San Diego";
var apiKeyParam = "appid=38d8b5c43ff3005851f9ddc871e95b79";

// send an AJAX request for the current weather
// dump current weather to the page
function dumpCurrentWeather() {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&" + apiKeyParam;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    currentWeatherView.text(JSON.stringify(response, null, 2));
    var currentWeatherData = {
      cityName: response.name,
      unixTime: response.dt,
      iconId: response.weather[0].icon,
      temperature: response.main.temp,
      humidityPercent: response.name.humidity,
      windSpeedMetersSec: response.wind.speed,
      location: response.coord
    };
    console.log(currentWeatherData);
  });
}
function dumpUVData() {
    var location = {"lon": -117.16, "lat": 32.72}
  var queryURL =
    "https://api.openweathermap.org/data/2.5/uvi?lat=" + location.lat +"&lon=" + location.lon + "&" + apiKeyParam;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    currentWeatherView.text(JSON.stringify(response, null, 2));
    var uvIndex = response.value;
    console.log("uvIndex: " + uvIndex);
  });
}
function dump5DayForecast() {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&" + apiKeyParam;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    currentWeatherView.text(JSON.stringify(response, null, 2));
  });
}
//dump5DayForecast();
//dumpUVData();
dumpCurrentWeather();