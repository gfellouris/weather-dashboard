var apiKey = "37168d7be793003143b3c0b30de5bedc";
var cityName = "Atlanta";

$("#search-button").on("click", function () {
  console.log($("#search-city").val());
  cityName = $("#search-city").val();
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    console.log("City name = " + response.name);
    var pTag = $("<p>");
    $("#city-list").prepend(pTag);
    pTag.html(response.name);
    
  });
});
