const CityCard = ({ weatherData }) => {
  return (
    <div className="flex-row flex justify-between items-center">
      <div>
        <h2 className="text-gray-500 text-xl">{weatherData?.location?.name}</h2>
        <p className="text-xs text-gray-500">
          {weatherData?.current?.condition?.text}
        </p>
      </div>
      <div>
        <img
          src={weatherData?.current?.condition?.icon}
          alt="weather icon"
          className="h-12 w-12"
        />
        <p className="text-xl text-white">
          {weatherData?.forecast?.forecastday[0]?.day?.avgtemp_f}&deg;F
        </p>
      </div>
    </div>
  );
};
export default CityCard;
