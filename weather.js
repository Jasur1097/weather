"use strict"

const url = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=5500b9d99b57667e245407354f5537a0"

$.ajax ({
	url: url,
	success: function (result) {
		console.log(result);
		console.log(result.name);

		$("#location").text(result.name);

		let F= Math.round(result.main.temp * (9/5) -459.67);
		let Fahrenheit=F.toString();
		$("#temperature").text(Fahrenheit);

		$("#sky").text(result.weather[0].description);

	}
})
