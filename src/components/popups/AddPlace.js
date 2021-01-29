import Popup from '../Popup';
import React from 'react';

function AddPlace(props) {
  const [title, setTitle] = React.useState('');
  const [img, setImg] = React.useState('');

  function writeTitle(e) {
    setTitle(e.target.value);
  }

  function writeImg(e) {
    setImg(e.target.value);
  }

  function emitAddPlace(event) {
    event.preventDefault();
    props.submitFun(img, title);
    props.onClose();
  }
  return (
    <Popup isOpen={props.isOpen ? 'popup_is-opened' : ''} onClose={props.onClose} onSubmit={emitAddPlace} name='add-card' title='Новое место'>
      <input onChange={writeTitle} type='text' name='name' maxLength='20' className='popup__input popup__input_type_name' placeholder='Название' id='name' required />
      <p className='popup__form-error' id='name-error'></p>
      <input onChange={writeImg} type='text' name='link' className='popup__input popup__input_type_link-url' placeholder='Ссылка на картинку' id='link' required />
      <p className='popup__form-error' id='link-error'></p>
      <button type='submit' className='button popup__button popup__button_usercard '>
        +
      </button>
    </Popup>
  );
}

export default AddPlace;
