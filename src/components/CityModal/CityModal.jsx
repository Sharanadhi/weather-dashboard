import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Citymodal.scss'

function CityModal({show,setShow,city,setCity}){
  const handleClose = () => setShow(false);

  const searchCity = async (e) => {
    e.preventDefault();
    const cityName= e.target.cityName.value;
    console.log(cityName);
    handleClose();
    setCity(cityName);
  }

  return (
  <Modal show={show} onHide={handleClose} className='citymodal'>
    
    <Modal.Body>
      <form className="citymodal__form" onSubmit={searchCity}>
        <label htmlFor="cityName">City</label>
        <input type="text" name='cityName' placeholder='Enter city name' value={city}
            onChange={(e) => setCity(e.target.value)} className='citymodal__input'/>
        <Button variant="primary"  type='submit' className='citymodal__button'>
       Search
      </Button>
      <Button variant="danger"  type='button' className='citymodal__button' onClick={handleClose}>
       Cancel
      </Button>
      </form>
    </Modal.Body>
  </Modal>)
}

export default CityModal