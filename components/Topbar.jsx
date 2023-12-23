import { useContext, useState } from 'react';
import { WeatherContext } from '@/context/WeatherContext';
import { Input, Avatar } from '@material-tailwind/react';

const Topbar = () => {
  const [search, setSearch] = useState(''); // State to hold the search input
  const { updateWeatherData } = useContext(WeatherContext); // Function from context to update weather

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    updateWeatherData(search); // Call function from context with the search value
  };

  return (
    <div className="flex flex-row justify-between w-full my-6">
      <div className="w-72">
        <Input
          color="white"
          label="Search City"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()} // Trigger search on Enter key
        />
      </div>
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
      />
    </div>
  );
};
export default Topbar;
