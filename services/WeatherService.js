class WeatherService {
  async getCurrentWeatherData(location) {
    try {
      const response = await fetch(`/api/${location}/current`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch weather data');
      }

      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      console.error('Failed to fetch weather data', error);
      throw error;
    }
  }
  async getForecastWeatherData(location) {
    try {
      const response = await fetch(`/api/${location}/forecast`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch weather data');
      }

      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      console.error('Failed to fetch weather data', error);
      throw error;
    }
  }

  async getCityData(location) {
    try {
      const response = await fetch(`/api/${location}/forecast`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch weather data');
      }

      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      console.error('Failed to fetch weather data', error);
      throw error;
    }
  }
}

export default new WeatherService();
