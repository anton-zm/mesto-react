import cross from '../images/close.svg';

function Popup(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen}`}>
      <div className='popup__content'>
        <img src={cross} alt='Close' className='popup__close' onClick={props.onClose} />
        <h3 className='popup__title'>{props.title}</h3>
        <form className='popup__form' name={props.name} onSubmit={props.onSubmit} noValidate>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default Popup;
