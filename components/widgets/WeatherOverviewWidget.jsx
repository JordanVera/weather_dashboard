import React, { useContext, useEffect } from 'react';
import { WeatherContext } from '@/context/WeatherContext';
import SunriesIcon from '../icons/SunriesIcon';
import SunsetIcon from '../icons/SunsetIcon';
// import { MapPinIcon, CalendarDaysIcon } from '@heroicons/react/16/solid';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const WeatherOverviewWidget = ({ temperature, condition, location, date }) => {
  const { currentWeather, forecastWeather, isLoading, error } =
    useContext(WeatherContext);

  if (isLoading) return <div>Loading weather data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex text-white flex-col bg-gradient-to-b from-[#1d1e20] to-black w-1/4 rounded-2xl h-full p-5">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-row justify-between w-full mb-6">
          <button className="rounded-full bg-white text-black text-sm py-1 px-2">
            {currentWeather.location.name}, {currentWeather.location.region}
          </button>
          <button className="text-white text-xs">
            {new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </button>
        </div>

        <div className="flex flex-col justify-center  h-3/4">
          {/* CONDITION */}
          <div className="flex flex-row items-center">
            <img
              src={currentWeather.current.condition.icon}
              alt=""
              className="mr-2"
            />
            <p className="text-gray-500">
              {currentWeather.current.condition.text}
            </p>
          </div>

          <div className="flex flex-row">
            <h4 className="self-bottom text-7xl ml-0 items-center">
              {currentWeather.current.temp_f}
            </h4>

            <p>&deg; F</p>
          </div>
        </div>
      </div>

      <div className=" h-1/4 flex flex-row justify-center py-2  mb-10">
        <div className="w-1/3  text-center">
          <h4 className="text-sm text-gray-500">Pressure</h4>
          <h3 className="text-2xl text-white">
            {currentWeather.current.pressure_mb}mb
          </h3>
        </div>
        <div className="w-1/3 text-center">
          <h4 className="text-sm text-gray-500">Humidity</h4>
          <h3 className="text-2xl text-white">
            {currentWeather.current.humidity}%
          </h3>
        </div>
        <div className="w-1/3 text-center">
          <h4 className="text-sm text-gray-500">Visibility</h4>
          <h3 className="text-2xl text-white">
            {currentWeather.current.vis_miles} mi
          </h3>
        </div>
      </div>

      {/* Sunrise */}
      <div className="bg-[#1d1e20] rounded-xl px-3 py-2 mb-5">
        <SunriesIcon />
        <h4 className="text-md text-gray-500">Sunrise</h4>
        <h3 className="text-2xl text-white">
          {forecastWeather.forecast.forecastday[0].astro.sunrise}
        </h3>
      </div>
      {/* Sunset */}
      <div className="bg-[#1d1e20] rounded-xl px-3 py-2">
        <SunsetIcon />
        <h4 className="text-md text-gray-500">Sunset</h4>
        <h3 className="text-2xl text-white">
          {forecastWeather.forecast.forecastday[0].astro.sunset}
        </h3>
      </div>
    </div>
  );
};

export default WeatherOverviewWidget;
