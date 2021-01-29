import Popup from '../Popup';
import React from 'react';
import { ERRORS } from '../../utils/validationErrors';
import { validateUrl } from '../../utils/urlRegex';

function AddPlace(props) {
  const [title, setTitle] = React.useState('');
  const [img, setImg] = React.useState('');
  const [linkErrorText, setLinkErrorText] = React.useState('');
  const [nameErrorText, setNameErrorText] = React.useState('');
  const [isNameValid, setNameValidState] = React.useState(false);
  const [isLinkValid, setLinkValidState] = React.useState(false);
  const [checkForm, setFormState] = React.useState(false);
  const [submitBtnDsbl, setStateSubmitButton] = React.useState(true);

  React.useEffect(() => {
    if (isNameValid && isLinkValid) {
      setFormState(true);
    } else {
      setFormState(false);
    }
  }, [isNameValid, isLinkValid]);

  React.useEffect(() => {
    if (checkForm) {
      setStateSubmitButton(false);
    } else {
      setStateSubmitButton(true);
    }
  }, [checkForm]);

  function nameValidate(event) {
    if (event.target.value.length < 2 && event.target.value) {
      setNameErrorText(ERRORS.tooShort);
      setNameValidState(false);
    } else if (!event.target.value) {
      setNameErrorText(ERRORS.empty);
      setNameValidState(false);
    } else {
      setNameErrorText('');
      setNameValidState(true);
    }
  }
  function linkValidate(event) {
    if (validateUrl.test(event.target.value)) {
      setLinkErrorText('');
      setLinkValidState(true);
    } else if (!event.target.value) {
      setLinkErrorText(ERRORS.empty);
      setLinkValidState(false);
    } else {
      setLinkErrorText(ERRORS.notUrl);
      setLinkValidState(false);
    }
  }

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
      <input
        onChange={writeTitle}
        onInput={nameValidate}
        type='text'
        name='name'
        maxLength='20'
        className='popup__input popup__input_type_name'
        placeholder='Название'
        id='name'
        required
      />
      <p className='popup__form-error' id='name-error'>
        {nameErrorText}
      </p>
      <input onChange={writeImg} onInput={linkValidate} type='text' name='link' className='popup__input popup__input_type_link-url' placeholder='Ссылка на картинку' required />
      <p className='popup__form-error' id='link-error'>
        {linkErrorText}
      </p>
      <button type='submit' className={`button popup__button popup__button_usercard ${!submitBtnDsbl ? 'popup__button_active' : ''}`} disabled={submitBtnDsbl ? true : false}>
        +
      </button>
    </Popup>
  );
}

export default AddPlace;
