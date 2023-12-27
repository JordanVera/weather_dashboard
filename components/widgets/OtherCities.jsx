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
    <div className="flex flex-col w-3/4 space-y-5 h-stretch">
      <div className="flex flex-row w-full space-x-6 items-stretch h-1/2">
        <button
          className="bg-[#1d1e20] w-full rounded-2xl p-3 hover:bg-gray-800"
          onClick={() => updateWeatherData('New York')}
        >
          <div className="flex flex-col h-full">
            <CityCard weatherData={newyorkWeather} />
          </div>
        </button>

        <button
          className="bg-[#1d1e20] w-full rounded-2xl py-2 px-3 hover:bg-gray-800"
          onClick={() => updateWeatherData('Los Angeles')}
        >
          <div className="flex flex-col h-full">
            <CityCard weatherData={losAngelesWeather} />
          </div>
        </button>
      </div>
      <div className="flex flex-row w-full space-x-6 items-stretch h-1/2">
        <button
          className="bg-[#1d1e20] w-full rounded-2xl p-3 hover:bg-gray-800"
          onClick={() => updateWeatherData('Chicago')}
        >
          <div className="flex flex-col h-full">
            <CityCard weatherData={chicagoWeather} />
          </div>
        </button>

        <button
          className="bg-[#1d1e20] w-full rounded-2xl py-2 px-3 hover:bg-gray-800"
          onClick={() => updateWeatherData('Atlanta')}
        >
          <div className="flex flex-col h-full">
            <CityCard weatherData={atlantaWeather} />
          </div>
        </button>
      </div>
    </div>
  );
};
export default OtherCities;
