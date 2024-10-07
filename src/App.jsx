import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';

import Header from './components/Header/Header.jsx';
import CurrentWeatherIcon from './components/CurrentWeatherIcon/CurrentWeatherIcon.jsx';
import CurrentWeather from './components/CurrentWeather/CurrentWeather.jsx';
import CurrentWeatherItems from './components/CurrentWeatherItems/CurrentWeatherItems.jsx'
import Footer from './components/Footer/Footer.jsx'

import './App.scss';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weather, setWeather] = useState(null);

  const apiUrl = 'https://api.openweathermap.org/data/2.5';
  const apiKey = 'ccf9c58ae022cef74fe781b9e066d2ee';

  const getWeather = async () => {
    const response = await axios.get(`${apiUrl}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`);
    console.log(response.data);
    setWeather(response.data);    
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {      
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    if (lat && long) {
      getWeather();
    }

    console.log("Latitude is:", lat);
    console.log("Longitude is:", long);
  }, [lat, long]);

  return (
    <>
      {weather ? (
        <>
          <Header city={weather.name} country={weather.sys.country}/>
          <CurrentWeatherIcon temp={Math.ceil(weather.main.temp)}/>
          <CurrentWeather  desc={weather.weather[0].description} high={Math.ceil(weather.main.temp_max)} low={Math.ceil(weather.main.temp_min)}/>
          <CurrentWeatherItems wind={weather.wind.speed} pressure={weather.main.pressure} humidity={weather.main.humidity} sunrise={moment(weather.sys.sunrise).format('hh:mm')} sunset={moment(weather.sys.sunset).format('hh:mm')} feels={Math.ceil(weather.main.feels_like)}/>
        </>
      ) : 
      (<h1>Loading....</h1>)}
      <Footer />
      </>
  );
}

export default App;
