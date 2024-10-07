import './CurrentWeather.scss'

function CurrentWeather({desc,high,low}) {
  return (
    <section className='currentWeather'>
      <h2 className='currentWeather__description'>{desc}</h2>
      <p className='currentWeather__text'><span>H:{high}°C</span> <span>L:{low}°C</span></p>
    </section>
  )
}

export default CurrentWeather