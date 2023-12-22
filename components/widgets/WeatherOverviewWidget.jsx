import React from 'react';
// import { MapPinIcon, CalendarDaysIcon } from '@heroicons/react/16/solid';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const WeatherOverviewWidget = ({ temperature, condition, location, date }) => {
  return (
    <div className="flex text-white flex-col border border-red-500 w-1/4 rounded-2xl h-full p-3">
      <div className="h-full  flex flex-col justify-between">
        <div className="self-start h-full w-full ml-10">HELLO</div>

        <div className="flex flex-row">
          {/* <ThunderstormIcon className="mr-2" /> */}
          <h4 className="self-bottom capitalize w-full text-lg ml-0">
            {condition}
          </h4>
        </div>
      </div>

      <div className="h-3/4 flex flex-col justify-center py-2 border-t border-gray-900">
        <div className="flex flex-row mb-2 items-center">
          {/* <MapPinIcon className="h-6 w-6  text-gray-400 mr-3" /> */}
          <h4 className="text-white text-xs w-full ml-1">{location}</h4>
        </div>
        <div className="flex flex-row  items-center">
          {/* <CalendarDaysIcon className="h-6 w-6  text-gray-400 mr-3" /> */}
          <h4 className="text-white text-xs w-full">{date}</h4>
        </div>
      </div>
    </div>
  );
};

export default WeatherOverviewWidget;
