$(document).ready(function () {
    // weatherdashboard api
    var reqURL = "https://openweathermap.org/api";
    var apiKey = "0c91526a0c3aba75152d1ad1c9382706"

    // local storage for cities already searched
    var citiesViewed = JSON.parse(localStorage.getItem("viewedCity")) || [];
    // loop iterating through stored cities
    for (var i = 0; i < citiesViewed.length; i++) {
        listRender(citiesViewed[i]);
    }

    // appending stored city list to html
    function listRender(city) {
        var li = $("<li>").addclass("list-group-item list-group-item-action").text(city);
        $("#cityList").append(li);
    }

    var queryURL = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}";
    // searchbutton logic
    $("searchBtn").on("click", function () {
        var inputCity = $("inputField").val();
        $("#inputField").val("");
        searchWeather(inputCity);
    });

    // list event handler
    $("#cityList").on("click", "li", function () {
        searchWeather($(this).text());
        console.log($(list).text());
    });

    // weather search  fir current city
    function searchWeather(inputCity) {
        $.ajax({
            type: "GET",
            url: "api.openweathermap.org/data/2.5/forecast?q=" + inputCity + "&appid=" + apiKey + "&units=imperial",
            dataType: "json",
        }).then(function (data) {
            console.log(data);
            if (citiesViewed.indexOf(inputCity) === -1) {
                citiesViewed.push(inputCity);
                localStorage.setItem("")
            }
        })
    }

});