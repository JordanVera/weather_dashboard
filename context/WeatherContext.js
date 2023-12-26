import React, { createContext, useState, useEffect, useCallback } from 'react';
import WeatherService from '@/services/WeatherService';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [newyorkWeather, setNewyorkWeather] = useState(null);
  const [losAngelesWeather, setLosAngelesWeather] = useState(null);
  const [chicagoWeather, setChicagoWeather] = useState(null);
  const [atlantaWeather, setAtlantaWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeatherData = useCallback(async (location) => {
    setIsLoading(true);
    try {
      const currentWeatherData = await WeatherService.getCurrentWeatherData(
        location
      );
      const forecastWeatherData = await WeatherService.getForecastWeatherData(
        location
      );

      const newyorkWeatherData = await WeatherService.getCityData('new york');
      const losangelesWeatherData = await WeatherService.getCityData(
        'los angeles'
      );
      const chicagoWeatherData = await WeatherService.getCityData('chicago');
      const atlantaWeatherData = await WeatherService.getCityData('atlanta');

      setCurrentWeather(currentWeatherData);
      setForecastWeather(forecastWeatherData);
      setNewyorkWeather(newyorkWeatherData);
      setLosAngelesWeather(losangelesWeatherData);
      setChicagoWeather(chicagoWeatherData);
      setAtlantaWeather(atlantaWeatherData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Function to update weather data based on location
  const updateWeatherData = (location) => {
    fetchWeatherData(location);
  };

  // Fetch initial data for a default location
  useEffect(() => {
    fetchWeatherData('Houston');
  }, [fetchWeatherData]);

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        setCurrentWeather,
        forecastWeather,
        newyorkWeather,
        losAngelesWeather,
        chicagoWeather,
        atlantaWeather,
        isLoading,
        error,
        updateWeatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
