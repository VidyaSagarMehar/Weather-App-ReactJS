import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
		getWeatherData('simdega');
	}, []);
	return (
		<>
			<section>
				<header className="dark:bg-gray-900 dark:text-gray-100">
					<div className="container flex justify-between h-16 mx-auto">
						<a
							rel="noopener noreferrer"
							href="/"
							aria-label="Back to homepage"
							className="flex items-center p-2"
						>
							<img width={50} src="../ms-icon-310x310.png" alt="weather-icon" />
							<h1>Weather App</h1>
						</a>

						<div className="flex items-center md:space-x-4">
							<div className="relative">
								<span className="absolute inset-y-0 left-0 flex items-center pl-2">
									<button
										type="submit"
										title="Search"
										className="p-1 focus:outline-none focus:ring"
									>
										<svg
											fill="currentColor"
											viewBox="0 0 512 512"
											className="w-4 h-4 dark:text-gray-100"
										>
											<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
										</svg>
									</button>
								</span>
								<input
									type="text"
									onChange={handleChangeInput}
									value={inputCity}
									name="Search"
									placeholder="Search..."
									className="form-control w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-700 dark:text-gray-100 focus:dark:bg-gray-900"
								/>
							</div>
							<button
								type="button"
								onClick={handleSearch}
								className="hidden px-6 py-2 font-semibold rounded lg:block dark:bg-blue-400 dark:text-gray-900"
							>
								Search
							</button>
						</div>
						<button title="Open menu" type="button" className="p-4 lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-6 h-6 dark:text-gray-100"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</button>
					</div>
				</header>
			</section>

			{/* Hero setion */}

			<div className="ml-auto mt-10">
				<div className="max-w-md p-8 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
					<div className="flex justify-between space-x-8">
						<div className="flex flex-col items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="w-24 h-24 p-2 dark:text-yellow-400 fill-current"
							>
								<path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
								<rect width="32" height="48" x="240" y="16"></rect>
								<rect width="32" height="48" x="240" y="448"></rect>
								<rect width="48" height="32" x="448" y="240"></rect>
								<rect width="48" height="32" x="16" y="240"></rect>
								<rect
									width="32"
									height="45.255"
									x="400"
									y="393.373"
									transform="rotate(-45 416 416)"
								></rect>
								<rect
									width="32.001"
									height="45.255"
									x="80"
									y="73.373"
									transform="rotate(-45 96 96)"
								></rect>
								<rect
									width="45.255"
									height="32"
									x="73.373"
									y="400"
									transform="rotate(-45.001 96.002 416.003)"
								></rect>
								<rect
									width="45.255"
									height="32.001"
									x="393.373"
									y="80"
									transform="rotate(-45 416 96)"
								></rect>
							</svg>
							<h1 className="text-xl font-semibold">{data?.name}</h1>
						</div>
						<span className="font-bold text-7xl mt-4">
							{(data?.main?.temp - 273.15).toFixed(1)}°c
						</span>
					</div>
					<div className="flex justify-between mt-8 space-x-4 dark:text-gray-400">
						<div className="flex flex-col items-center space-y-1">
							<span className="">Min Temp</span>

							<span>{(data?.main?.temp_min - 273.15).toFixed(1)}°</span>
						</div>
						<div className="flex flex-col items-center space-y-1">
							<span className="">Max Temp</span>

							<span>{(data?.main?.temp_max - 273.15).toFixed(1)}°</span>
						</div>
						<div className="flex flex-col items-center space-y-1">
							<span className="">Humidity</span>

							<span>{data?.main?.humidity}%</span>
						</div>
						<div className="flex flex-col items-center space-y-1">
							<span className="">Visibility</span>

							<span>{data?.visibility}M</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
