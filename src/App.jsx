import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';

import Header from './components/Header/Header.jsx';
import CurrentWeatherIcon from './components/CurrentWeatherIcon/CurrentWeatherIcon.jsx';
import CurrentWeather from './components/CurrentWeather/CurrentWeather.jsx';
import CurrentWeatherItems from './components/CurrentWeatherItems/CurrentWeatherItems.jsx'
import Footer from './components/Footer/Footer.jsx'
import CityModal from "./components/CityModal/CityModal.jsx";

import './App.scss';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  
  const [show, setShow] = useState(false);

  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const getWeather = async () => {
   try{
    const response = await axios.get(`${apiUrl}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`);
    console.log(response.data);
    if(response.data.cod===200){
      setWeather(response.data);   
      setCity(response.data.name); 
    }
   }
   catch(err){
    console.error(err);
   }
  };

  useEffect(() => {    
    navigator.geolocation.getCurrentPosition(function(position) {      
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    if (lat && long) {
      getWeather();
    }
  }, [lat, long,]);

  return (
    <>
      {weather ? (
        <>
          <Header city={city} country={weather.sys.country} setShow={setShow}/>
          <CurrentWeatherIcon temp={Math.ceil(weather.main.temp)}/>
          <CurrentWeather  desc={weather.weather[0].description} high={Math.ceil(weather.main.temp_max)} low={Math.ceil(weather.main.temp_min)}/>
          <CurrentWeatherItems wind={weather.wind.speed} pressure={weather.main.pressure} humidity={weather.main.humidity} sunrise={moment(weather.sys.sunrise).format('hh:mm')} sunset={moment(weather.sys.sunset).format('hh:mm')} feels={Math.ceil(weather.main.feels_like)}/>
          <CityModal show={show} setShow={setShow} city={city} setCity={setCity}/>
          
        
        </>
      ) : 
      (<h1>Loading....</h1>)}
      <Footer />
      </>
  );
}

export default App;
