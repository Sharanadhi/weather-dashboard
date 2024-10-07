import { FaAlignJustify } from "react-icons/fa6";
import './Header.scss'

function Header({city,country}) {
  return (<section className='header'>
    <a href='#' className='header__logo'><h2>WB</h2></a>
    <a href="#" className='header__location'>{city} ({country})</a>
    <a href="#" className='header__menu'><FaAlignJustify /></a>
  </section>)
}

export default Header