"use strict"

const url = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=5500b9d99b57667e245407354f5537a0"

$.ajax ({
	url: url,
	success: function (result) {
		console.log(result);
		console.log(result.name);
		// Output the location
		$("#location").text(result.name);

		//Display the temperature
		let F= Math.round(result.main.temp * (9/5) -459.67);
		let displayTemp=`Temperature: ${F}&#176;F`;
		$("#temperature").html(displayTemp);

		let windSpeed=Math.round(result.wind.speed/.44704);
		let wind = windSpeed.toString();
		$("#wind").text(wind);

		$("#sky").text(result.weather[0].description);

	}
})
