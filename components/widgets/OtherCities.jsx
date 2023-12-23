import { useContext, useEffect } from 'react';
import { WeatherContext } from '@/context/WeatherContext';
import CityCard from '../cards/CityCard';

const OtherCities = () => {
  const {
    newyorkWeather,
    losAngelesWeather,
    chicagoWeather,
    atlantaWeather,
    isLoading,
    error,
  } = useContext(WeatherContext);

  useEffect(() => {
    console.log('NEWYORK');
    console.log(newyorkWeather);
  }, [newyorkWeather]);

  if (isLoading) return <div>Loading weather data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className=" w-3/4 space-y-5">
      <div className="flex flex-row w-full space-x-6">
        <div className="bg-[#1d1e20] w-full rounded-2xl p-3  ">
          <CityCard weatherData={newyorkWeather} />
        </div>

        <div className="bg-[#1d1e20] w-full rounded-2xl py-2 px-3">
          <CityCard weatherData={losAngelesWeather} />
        </div>
      </div>
      <div className="flex flex-row w-full space-x-6">
        <div className="bg-[#1d1e20] w-full rounded-2xl p-3  ">
          <CityCard weatherData={chicagoWeather} />
        </div>

        <div className="bg-[#1d1e20] w-full rounded-2xl py-2 px-3">
          <CityCard weatherData={atlantaWeather} />
        </div>
      </div>
    </div>
  );
};
export default OtherCities;
