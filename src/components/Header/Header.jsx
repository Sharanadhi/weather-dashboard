import { FaAlignJustify } from "react-icons/fa6";
import './Header.scss'

function Header() {
  return (<section className='header'>
    <a href='#' className='header__logo'>WB</a>
    <a href="#" className='header__location'>Halifax</a>
    <a href="#" className='header__menu'><FaAlignJustify /></a>
  </section>)
}

export default Header