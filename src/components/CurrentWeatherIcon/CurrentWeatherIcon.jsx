import { WiDayCloudyWindy } from "react-icons/wi";
import './CurrentWeatherIcon.scss'

function CurrentWeatherIcon({temp}) {
   return (
    <section className='currentIcon'>
      <h1 className='currentIcon__temperature'>{temp}°C</h1>
      <WiDayCloudyWindy size="36rem" className="currentIcon__icon"/>
    </section>
  )
}

export default CurrentWeatherIcon