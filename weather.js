class Weather {
		constructor(city, country) {
				this.apiKey = '6fb2e4f46d4c1d6462bbad8a8af600c2';
				this.city = city;
				this.country = country;
		}

		// Fetch weather from API
		async getWeather() {
				const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`);

				const responseData = await response.json();

				return responseData;
		}

		// Change weather location
		changeLocation(city, country) {
				this.city = city;
				this.country = country;
		}
}