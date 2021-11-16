const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData()

const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();



// Get weather when DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
		const city = document.getElementById('city').value;
		const country = document.getElementById('state').value;

		// Change location
		weather.changeLocation(city, country);

		// Set location to local storage
		storage.setLocationData(city, country);

		// Get and display weather
		getWeather();

		// Close modal
		// that is the only JQuery line I have
		$('#locModal').modal('hide');
});

// check if works
// so, it returns promise, we should treat to it like a promise
function getWeather() {
		weather.getWeather()
			.then(results => {
					ui.paint(results);
			})
			.catch(err => console.log(err));
}