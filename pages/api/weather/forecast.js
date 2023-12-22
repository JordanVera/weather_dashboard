export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const weatherResponse = await fetch(
        `https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=${process.env.TOMORROW_API_KEY}`
      );
      const data = await weatherResponse.json();

      console.log(process.env.TOMORROW_API_KEY);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  }
}
