import React, { useContext, useEffect } from 'react';
import { WeatherContext } from '@/context/WeatherContext';
import { getDayOfWeek } from '@/utils/dates';

const ForecastWidget = () => {
  const { forecastWeather, isLoading, error } = useContext(WeatherContext);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="h-1/2 bg-gradient-to-bl from-[#1d1e20] to-[#030405] rounded-2xl w-full  p-5 mb-8">
      <div className="flex flex-row justify-between mb-20">
        <button className="rounded-full bg-white text-black text-sm py-1 px-2 capitalize">
          weather advisor
        </button>
        <button className="text-white text-sm py-1 px-2 capitalize">
          more details
        </button>
      </div>

      <div className="flex flex-col md:flex-row w-full">
        {forecastWeather?.forecast?.forecastday?.map((day) => (
          <div key={day.date} className="w-full flex flex-col items-center">
            <h4 className="text-gray-500 mb-2">
              {getDayOfWeek(day.date_epoch)}
            </h4>

            <img src={day.day.condition.icon} alt="" className="mb-2" />
            <h3 className="text-2xl text-white">{day.day.avgtemp_f}&deg;F</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ForecastWidget;
