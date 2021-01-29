var apiKey = "37168d7be793003143b3c0b30de5bedc";
var cityName = "Atlanta";
var cityHistorySaved = [];
if (localStorage.getItem("cityHistoryStorage")) {
  cityHistorySaved = JSON.parse(localStorage.getItem("cityHistoryStorage"));
  for (var i = 0; i < cityHistorySaved.length; i++) {
    addCityHistory(cityHistorySaved[i]);
  }
}

$("#search-button").on("click", function () {
  console.log($("#search-city").val());
  var searchCityInput = $("#search-city").val();

  if (cityHistorySaved.indexOf(searchCityInput) == -1) {
    cityHistorySaved.push(searchCityInput);
    addCityHistory(searchCityInput);
    localStorage.setItem(
      "cityHistoryStorage",
      JSON.stringify(cityHistorySaved)
    );
  }
  console.log(cityHistorySaved);

  getWeather(searchCityInput);
});

$(".city-history").on("click", "li", function () {
  console.log($(this).text());
  var searchCityClick = $(this).text();
  getWeather(searchCityClick);
});

function addCityHistory(cityName) {
  var liTag = $("<li class='city-history-name' value='" + cityName + "'>")
    .addClass("list-group-item list-group-item-action")
    .text(cityName);
  $(".city-history").prepend(liTag);
  // liTag.html(cityName);
}
function getWeather(citySearch) {
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var cityNameAPI = response.name;
    var cityTemp =
      Math.floor((parseInt(response.main.temp) - 273.15) * 9) / 5 + 32;
    $(".city-name").html(`City: ${cityNameAPI}`);
    $(".city-temp").html(`Temperature: ${cityTemp} F`);
    $(".city-humidity").html(`Humidity: ${response.main.humidity} %`);
    $(".city-wind-speed").html(`City: ${response.wind.speed} MPH`);
  });
}
