var apiKey = "37168d7be793003143b3c0b30de5bedc";
var cityName = "Atlanta";
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

$("#search-button").on("click", function () {
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    console.log($("#search-city").val());
    console.log(response.name);
  });
});
