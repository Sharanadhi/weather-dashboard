import { useEffect, useState } from "react";
import moment from 'moment';

import './Footer.scss'

function Footer () {
  const [time, setTime] = useState(moment().format('LTS'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format('LTS'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className='footer'>
      <p>{time}</p>
    </footer>
  )
}

export default Footer