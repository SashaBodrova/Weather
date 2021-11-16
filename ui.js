class UI {
		constructor() {
				this.location = document.getElementById('w-location');
				this.desc = document.getElementById('w-desc');
				this.temp = document.getElementById('w-string');
				this.details = document.getElementById('w-details');
				this.humidity = document.getElementById('w-humidity');
				this.visibility = document.getElementById('w-visibility');
				this.pressure = document.getElementById('w-pressure');
				this.wind = document.getElementById('w-wind');
		}

		paint(weather) {
				this.location.textContent = `${weather.name}, ${weather.sys.country}`;
				this.desc.textContent = weather.weather[0].description;
				this.temp.textContent = Math.floor(weather.main.temp)+" C";
				this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
				this.wind.textContent = "Wind " + Math.floor(weather.wind.speed) + "m/sec ";
				this.visibility.textContent = `Visibility: ${(weather.visibility/1000)}km`;
				this.pressure.textContent =`${weather.main.pressure}hPa`;
		}
}