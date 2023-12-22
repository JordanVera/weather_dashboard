import { useEffect, useState } from 'react';
import WeatherService from '../services/WeatherService';
import { Input, Avatar } from '@material-tailwind/react';
// import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
  useEffect(() => {
    const weatherData = async () => {
      const currentWeatherData = await WeatherService.getCurrentWeatherData();
      const forecastWeatherData = await WeatherService.getForecastWeatherData();

      console.log('WEATHER DATA');
      console.log(currentWeatherData);
      console.log('FORECAST DATA');
      console.log(forecastWeatherData);
    };

    weatherData();
  }, []);

  return (
    <div className="flex flex-row  justify-between w-full my-6">
      <div className="w-72">
        <Input color="white" label="Search City" />
      </div>

      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
      />
    </div>
  );
};
export default Topbar;
