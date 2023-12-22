export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const weatherResponse = await fetch(
        `http://api.weatherstack.com/forecast?access_key=${process.env.WEATHER_API_KEY}&query=Houston&forecast_days=7`
      );
      const data = await weatherResponse.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  }
}
