import cross from '../../images/close.svg';

function ImgPopup(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_is-opened' : ''}`}>
      <div className='popup__img-container'>
        <img onClick={props.onClose} src={cross} alt='Close' className='popup__close' />
        <img src={props.img} alt='Large size' className='popup__img' />
      </div>
    </div>
  );
}

export default ImgPopup;
