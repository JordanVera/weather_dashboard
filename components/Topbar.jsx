import { useContext, useState, useEffect } from 'react';
import { WeatherContext } from '@/context/WeatherContext';
import WeatherService from '@/services/WeatherService';
import { Input, Avatar } from '@material-tailwind/react';

const Topbar = () => {
  const [search, setSearch] = useState(''); // State to hold the search input
  const [autocompleteData, setAutocompleteData] = useState([]); // State to hold the autocomplete data
  const { updateWeatherData } = useContext(WeatherContext); // Function from context to update weather

  const handleSearchChange = async (e) => {
    setSearch(e.target.value);
    const weatherData = await WeatherService.getAutocompleteData(
      e.target.value
    );

    setAutocompleteData(weatherData); // Update the autocomplete data
  };

  const handleSearchSubmit = () => {
    updateWeatherData(search); // Call function from context with the search value
  };

  useEffect(() => {
    const getWeather = async () => {};

    getWeather();
  }, []);

  return (
    <div className="flex flex-row justify-between w-full my-6">
      <div className="w-72 relative">
        <Input
          color="white"
          label="Search City"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()} // Trigger search on Enter key
        />

        {autocompleteData.length > 0 ? (
          <div className="absolute z-10 mt-1 p-2 rounded shadow border bg-black border-gray-700 w-full">
            {autocompleteData?.map((item) => (
              // switch (item.name) {
              //   case value:

              //     break;

              //   default:
              //     break;
              // }

              <div key={item.id}>
                {item.name}, {item.region}
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
      />
    </div>
  );
};
export default Topbar;
