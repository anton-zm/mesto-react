import Popup from '../Popup';
import React from 'react';
import { ERRORS } from '../../utils/validationErrors';
import { userContext } from '../../contexts/userContext';

function EditProfile(props) {
  const User = React.useContext(userContext);
  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');
  const [nameErrorText, setNameErrorText] = React.useState('');
  const [aboutErrorText, setAboutErrorText] = React.useState('');
  const [isNameValid, setNameValidState] = React.useState(true);
  const [isAboutValid, setAboutValidState] = React.useState(true);
  const [checkForm, setFormState] = React.useState(false);
  const [submitBtnDsbl, setStateSubmitButton] = React.useState(false);

  React.useEffect(() => {
    setName(User.name);
    setAbout(User.about);
  }, [User]);

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

  function writeName(e) {
    setName(e.target.value);
  }

  function writeAbout(e) {
    setAbout(e.target.value);
  }

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
  function submit(event) {
    event.preventDefault();
    props.onSubmit(name, about);
  }
  return (
    <Popup isOpen={props.isOpen ? 'popup_is-opened' : ''} onClose={props.onClose} onSubmit={submit} name='add-card' title='Редактировать профиль'>
      <input
        onInput={nameValidate}
        onChange={writeName}
        type='text'
        name='user_name'
        value={name || ''}
        className='popup__input'
        placeholder='Имя'
        minLength='2'
        maxLength='30'
        required
      />
      <p className='popup__form-error'>{nameErrorText}</p>
      <input
        onInput={aboutValidate}
        onChange={writeAbout}
        type='text'
        name='user_about'
        value={about || ''}
        className='popup__input '
        placeholder='О себе'
        minLength='2'
        maxLength='30'
        required
      />
      <p className='popup__form-error'>{aboutErrorText}</p>
      <button type='submit' className={`button popup__button popup__button_edit  ${!submitBtnDsbl ? 'popup__button_active' : ''}`} disabled={submitBtnDsbl ? true : false}>
        Сохранить
      </button>
    </Popup>
  );
}

export default EditProfile;
