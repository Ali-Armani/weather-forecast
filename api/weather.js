export default async function handler(req, res) {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURIComponent(city)}&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  res.status(response.status).json(data);
}
