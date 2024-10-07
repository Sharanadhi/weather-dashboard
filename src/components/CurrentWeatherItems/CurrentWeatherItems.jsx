

import './CurrentWeatherItems.scss'
import { WiStrongWind } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { WiRaindrop } from "react-icons/wi";
import { WiHorizon } from "react-icons/wi";
import { WiHorizonAlt } from "react-icons/wi";
import { WiThermometerExterior } from "react-icons/wi";

function CurrentWeatherItems({wind,pressure,humidity,sunrise,sunset,feels}) {



  return (
    <section className='weatherItems'>
      <div className='weatherItems__card'>
        <WiStrongWind size="4rem" className='weatherItems__icon'/>
        <h3 className='weatherItems__text'>{wind} km/h</h3>
      </div>
      <div className='weatherItems__card'>
        <WiThermometer size="4rem" className='weatherItems__icon' />
        <h3 className='weatherItems__text'>{pressure} hPa</h3>
      </div>
      <div className='weatherItems__card'>
        <WiRaindrop size="4rem" className='weatherItems__icon' />
        <h3 className='weatherItems__text'>{humidity} %</h3>
      </div>
      <div className='weatherItems__card'>
        <WiHorizonAlt size="4rem" className='weatherItems__icon' />
        <h3 className='weatherItems__text'>{sunrise} AM</h3>
      </div>
      <div className='weatherItems__card'>
        <WiHorizon size="4rem" className='weatherItems__icon' />
        <h3 className='weatherItems__text'>{sunset} PM</h3>
      </div>
      <div className='weatherItems__card'>
        <WiThermometerExterior size="4rem" className='weatherItems__icon' />
        <h3 className='weatherItems__text'>{feels} °C</h3>
      </div>

    </section>
  )
}

export default CurrentWeatherItems