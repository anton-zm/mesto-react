import cross from '../images/close.svg';

function Popup(props) {
  function closePopup(event) {
    event.target.parentElement.lastElementChild.reset();
    const forms = document.querySelectorAll('.popup__button');
    Array.from(forms).forEach((e) => {
      e.classList.remove('popup__button_active');
    });
    props.onClose();
  }
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen}`}>
      <div className='popup__content'>
        <img src={cross} alt='Close' className='popup__close' onClick={closePopup} />
        <h3 className='popup__title'>{props.title}</h3>
        <form className='popup__form' name={props.name} onSubmit={props.onSubmit} noValidate>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default Popup;
