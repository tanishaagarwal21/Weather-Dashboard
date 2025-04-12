import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setWeatherData(null);
      setError('City not found or API error');
    }
  };

  return (
    <div className="app-container">
      <h1>Real-Time Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
      {weatherData && <WeatherCard weather={weatherData} />}
    </div>
  );
}

export default App;
