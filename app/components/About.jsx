var React  = require('react');

var About = () => {
		return (
			<div>
			<h1 className="text-center">About</h1>
			<p>This is a weather application built on React. I built this for The Complete React Web App Development Course.</p>
			<p>
				Here are some of the tools I used:
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> -
					This was the JavaScript framework used.
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a> -
					I used Open Weather Map to search for weather data by city name.
				</li>
			</ul>
			</div>
		)
	};

module.exports = About;