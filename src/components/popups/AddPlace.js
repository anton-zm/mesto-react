import Popup from '../Popup';

function AddPlace(props) {
  return (
    <Popup isOpen={props.isOpen ? 'popup_is-opened' : ''} onClose={props.onClose} onSubmit={props.onSubmit} name='add-card' title='Новое место' btnText='+'>
      <input type='text' name='name' className='popup__input popup__input_type_name' placeholder='Название' id='name' required />
      <p className='popup__form-error' id='name-error'></p>
      <input type='text' name='link' className='popup__input popup__input_type_link-url' placeholder='Ссылка на картинку' id='link' required />
      <p className='popup__form-error' id='link-error'></p>
      <button type='submit' className='button popup__button popup__button_usercard '>
        +
      </button>
    </Popup>
  );
}

export default AddPlace;
