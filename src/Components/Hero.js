import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import WeatherWidget from './WeatherWidget';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Hero() {
	const apiKey = '8e51bb8a1eb99116e29d35a4229f429d';
	const [inputCity, setInputCity] = useState('');
	const [data, setData] = useState({});

	const getWeatherData = (cityName) => {
		if (!cityName) return;
		const apiUrl =
			'https://api.openweathermap.org/data/2.5/weather?q=' +
			cityName +
			'&appid=' +
			apiKey;

		axios
			.get(apiUrl)
			.then((res) => {
				console.log('response', res.data);
				setData(res.data);
			})
			.catch((err) => {
				console.log('err', err);
			});
	};
	const handleChangeInput = (e) => {
		setInputCity(e.target.value);
	};
	const handleSearch = () => {
		getWeatherData(inputCity);
	};

	useEffect(() => {
		getWeatherData('Bangalore');
	}, []);
	return (
		<>
			<Navbar
				handleSearch={handleSearch}
				inputCity={inputCity}
				handleChangeInput={handleChangeInput}
			/>

			<WeatherWidget
				visibility={data?.visibility}
				humidity={data?.main?.humidity}
				max={(data?.main?.temp_max - 273.15).toFixed(1)}
				min={(data?.main?.temp_min - 273.15).toFixed(1)}
				temp={(data?.main?.temp - 273.15).toFixed(1)}
				name={data?.name}
			/>
			<Footer />
		</>
	);
}
