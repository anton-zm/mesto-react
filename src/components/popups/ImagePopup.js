import cross from '../images/close.svg';

function ImgPopup(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen}`}>
      <div className='popup__img-container'>
        <img src={cross} alt='Close' className='popup__close' />
        {props.children}
      </div>
    </div>
  );
}

export default ImgPopup;
