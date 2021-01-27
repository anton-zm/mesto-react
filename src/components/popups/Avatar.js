import Popup from '../Popup';

function Avatar(props) {
  return (
    <Popup isOpen={props.isOpen ? 'popup_is-opened' : ''} onClose={props.onClose} name='add-card' title='Обновить аватар'>
      <input type='text' name='user_ava' className='popup__input popup__input_type_ava' placeholder='Ссылка на аватар' required />
      <p className='popup__form-error'></p>
      <button type='submit' className='button popup__button popup__button_ava popup__button_active'>
        Сохранить
      </button>
    </Popup>
  );
}

export default Avatar;
