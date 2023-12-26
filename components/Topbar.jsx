import { useContext, useState, useEffect } from 'react';
import { WeatherContext } from '@/context/WeatherContext';
import WeatherService from '@/services/WeatherService';
import { Input, Avatar } from '@material-tailwind/react';

const Topbar = () => {
  const [search, setSearch] = useState(''); // State to hold the search input
  const [autocompleteData, setAutocompleteData] = useState([]); // State to hold the autocomplete data
  const { updateWeatherData } = useContext(WeatherContext); // Function from context to update weather

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearch(query);

    if (query.trim() === '') {
      setAutocompleteData([]); // Clear the autocomplete data if the search query is empty
      return; // Exit the function early
    }

    try {
      const weatherData = await WeatherService.getAutocompleteData(query);
      setAutocompleteData(weatherData); // Update the autocomplete data
    } catch (error) {
      console.error('Error fetching autocomplete data:', error);
      setAutocompleteData([]); // Optionally clear or handle the autocomplete data in case of error
    }
  };

  const handleSearchSubmit = () => {
    updateWeatherData(search); // Call function from context with the search value
  };

  const handleAutocompleteClick = (cityName) => {
    // Update the search state and the weather data
    setSearch(cityName);
    updateWeatherData(cityName);
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
          className="bg-gray-800 border border-red-800"
          label="Search City"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
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

              <button
                key={item.id}
                onClick={() => handleAutocompleteClick(item.name)}
                className="hover:bg-gray-800 rounded-xl w-full py-1.5  px-1 text-left"
              >
                {item.name}, {item.region}
              </button>
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
