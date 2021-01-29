import Popup from '../Popup';
import React from 'react';
import { ERRORS } from '../../utils/validationErrors';

function EditProfile(props) {
  const [nameErrorText, setNameErrorText] = React.useState('');
  const [aboutErrorText, setAboutErrorText] = React.useState('');
  const [isNameValid, setNameValidState] = React.useState(false);
  const [isAboutValid, setAboutValidState] = React.useState(false);
  const [checkForm, setFormState] = React.useState(false);
  const [submitBtnDsbl, setStateSubmitButton] = React.useState(true);

  React.useEffect(() => {
    if (isNameValid && isAboutValid) {
      setFormState(true);
    } else {
      setFormState(false);
    }
  }, [isNameValid, isAboutValid]);

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
  function aboutValidate(event) {
    if (event.target.value.length < 2 && event.target.value) {
      setAboutErrorText(ERRORS.tooShort);
      setAboutValidState(false);
    } else if (!event.target.value) {
      setAboutErrorText(ERRORS.empty);
      setAboutValidState(false);
    } else {
      setAboutErrorText('');
      setAboutValidState(true);
    }
  }
  return (
    <Popup isOpen={props.isOpen ? 'popup_is-opened' : ''} onClose={props.onClose} onSubmit={props.onSubmit} name='add-card' title='Редактировать профиль'>
      <input onInput={nameValidate} type='text' name='user_name' className='popup__input ' placeholder='Имя' minLength='2' maxLength='30' required />
      <p className='popup__form-error'>{nameErrorText}</p>
      <input onInput={aboutValidate} type='text' name='user_about' className='popup__input ' placeholder='О себе' minLength='2' maxLength='30' required />
      <p className='popup__form-error'>{aboutErrorText}</p>
      <button type='submit' className={`button popup__button popup__button_edit  ${!submitBtnDsbl ? 'popup__button_active' : ''}`} disabled={submitBtnDsbl ? true : false}>
        Сохранить
      </button>
    </Popup>
  );
}

export default EditProfile;
