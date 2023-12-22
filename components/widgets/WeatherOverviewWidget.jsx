import React from 'react';
// import { MapPinIcon, CalendarDaysIcon } from '@heroicons/react/16/solid';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const WeatherOverviewWidget = ({ temperature, condition, location, date }) => {
  return (
    <div className="flex text-white flex-col bg-gradient-to-b from-[#1d1e20] to-[#0c0d0e] w-1/4 rounded-2xl h-full p-3">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-row justify-between w-full">
          <button className="rounded-full bg-white text-black text-sm py-1 px-2">
            {location}
          </button>
          <button className="text-white text-xs">
            {new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </button>
        </div>

        <div className="flex flex-row">
          {/* <ThunderstormIcon className="mr-2" /> */}
          <h4 className="self-bottom capitalize w-full text-lg ml-0">
            {condition}
          </h4>
        </div>
      </div>

      <div className="h-3/4 flex flex-col justify-center py-2 border-gray-900">
        <div className="flex flex-row mb-2 items-center">
          {/* <MapPinIcon className="h-6 w-6 text-gray-400 mr-3" /> */}
          <h4 className="text-white text-xs w-full ml-2.5">{location}</h4>
        </div>
        <div className="flex flex-row items-center">
          {/* <CalendarDaysIcon className="h-6 w-6 text-gray-400 mr-3" /> */}
          <h4 className="text-white text-xs w-full ">{date}</h4>
        </div>
      </div>
    </div>
  );
};

export default WeatherOverviewWidget;
