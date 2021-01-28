import Popup from '../Popup';

function EditProfile(props) {
  return (
    <Popup isOpen={props.isOpen ? 'popup_is-opened' : ''} onClose={props.onClose} onSubmit={props.onSubmit} name='add-card' title='Редактировать профиль'>
      <input type='text' name='user_name' className='popup__input ' placeholder='Имя' minLength='2' maxLength='30' required />
      <p className='popup__form-error' id='username-error'></p>
      <input type='text' name='user_about' className='popup__input ' placeholder='О себе' minLength='2' maxLength='30' required />
      <p className='popup__form-error' id='userabout-error'></p>
      <button type='submit' className='button popup__button popup__button_edit popup__button_active'>
        Сохранить
      </button>
    </Popup>
  );
}

export default EditProfile;
