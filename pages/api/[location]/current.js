export default async function handler(req, res) {
  const location = req.query.location;

  if (req.method === 'GET') {
    try {
      const weatherResponse = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=7&aqi=no&alerts=no`
      );
      const data = await weatherResponse.json();

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  }
}
