import { FaAlignJustify } from "react-icons/fa6";
import './Header.scss'

function Header({city,country,setShow}) {
  const handleShow = () => setShow(true);

  return (<section className='header'>
    <a href='#' className='header__logo'><h2>WB</h2></a>
    <a href="#" className='header__location' onClick={handleShow}>{city} ({country})</a>
    <a href="#" className='header__menu'><FaAlignJustify /></a>
  </section>)
}

export default Header