import Popup from '../Popup';
import React from 'react';
import { ERRORS } from '../../utils/validationErrors';
import { validateUrl } from '../../utils/urlRegex';

function Avatar(props) {
  const [linkErrorText, setLinkErrorText] = React.useState('');
  const [submitBtnDsbl, setStateSubmitButton] = React.useState(true);
  const [isLinkValid, setLinkValidState] = React.useState(false);
  const [checkForm, setFormState] = React.useState(false);

  React.useEffect(() => {
    if (isLinkValid) {
      setFormState(true);
    } else {
      setFormState(false);
    }
  }, [isLinkValid]);

  React.useEffect(() => {
    if (checkForm) {
      setStateSubmitButton(false);
    } else {
      setStateSubmitButton(true);
    }
  }, [checkForm]);

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
  return (
    <Popup isOpen={props.isOpen ? 'popup_is-opened' : ''} onClose={props.onClose} onSubmit={props.onSubmit} name='add-card' title='Обновить аватар'>
      <input onInput={linkValidate} type='text' name='user_ava' className='popup__input popup__input_type_ava' placeholder='Ссылка на аватар' required />
      <p className='popup__form-error'>{linkErrorText}</p>
      <button type='submit' className={`button popup__button popup__button_ava  ${!submitBtnDsbl ? 'popup__button_active' : ''}`} disabled={submitBtnDsbl ? true : false}>
        Сохранить
      </button>
    </Popup>
  );
}

export default Avatar;
