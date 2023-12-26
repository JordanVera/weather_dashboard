import { useContext, useEffect } from 'react';
import { WeatherContext } from '@/context/WeatherContext';
import CityCard from '../cards/CityCard';

const OtherCities = () => {
  const {
    newyorkWeather,
    losAngelesWeather,
    chicagoWeather,
    atlantaWeather,
    updateWeatherData,
    isLoading,
    error,
  } = useContext(WeatherContext);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col h-full my-auto w-3/4 space-y-5 ">
      <div className="flex flex-row w-full space-x-6 items-stretch">
        <button
          className="bg-[#1d1e20] w-full rounded-2xl p-3 hover:bg-gray-800"
          onClick={() => updateWeatherData('New York')}
        >
          <CityCard weatherData={newyorkWeather} />
        </button>

        <button
          className="bg-[#1d1e20] w-full rounded-2xl py-2 px-3 hover:bg-gray-800"
          onClick={() => updateWeatherData('Los Angeles')}
        >
          <CityCard weatherData={losAngelesWeather} />
        </button>
      </div>
      <div className="flex flex-row w-full space-x-6">
        <button
          className="bg-[#1d1e20] w-full rounded-2xl p-3 hover:bg-gray-800"
          onClick={() => updateWeatherData('Chicago')}
        >
          <CityCard weatherData={chicagoWeather} />
        </button>

        <button
          className="bg-[#1d1e20] w-full rounded-2xl py-2 px-3 hover:bg-gray-800"
          onClick={() => updateWeatherData('Atlanta')}
        >
          <CityCard weatherData={atlantaWeather} />
        </button>
      </div>
    </div>
  );
};
export default OtherCities;
