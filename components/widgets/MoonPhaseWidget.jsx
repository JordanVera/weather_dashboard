import { useEffect, useState, useContext } from 'react';
import { WeatherContext } from '@/context/WeatherContext';
import moonPhaseImage from '@/utils/moonPhase';

const MoonPhaseWidget = () => {
  const { astroData } = useContext(WeatherContext);
  useEffect(() => {
    console.log('astroData');
    console.log(astroData);
  }, [astroData]);

  return (
    <div className="bg-[#1d1e20] h-100 rounded-2xl w-full flex flex-col justify-center p-2">
      <h4 className="text-md text-gray-500 text-center mb-4">Astro Data</h4>
      <img
        src={moonPhaseImage(astroData)}
        className="w-32 h-32 mx-auto"
        alt=""
      />

      <div className=" h-1/4 flex flex-row justify-center py-2">
        <div className="w-1/3  text-center">
          <h4 className="text-sm text-gray-500">moonrise</h4>
          <h3 className="text-md text-white">{astroData.moonrise}</h3>
        </div>
        <div className="w-1/3 text-center">
          <h4 className="text-sm text-gray-500">moonset</h4>
          <h3 className="text-md text-white">{astroData.moonset}</h3>
        </div>
        <div className="w-1/3 text-center">
          <h4 className="text-sm text-gray-500">illumination</h4>
          <h3 className="text-md text-white">{astroData.moon_illumination}</h3>
        </div>
      </div>
    </div>
  );
};
export default MoonPhaseWidget;
