import AddPlace from './popups/AddPlace';
import EditProfile from './popups/EditProfile';
import Avatar from './popups/Avatar';
import Card from './Card';
import api from '../utils/api';
import React from 'react';

function Main(props) {
  const [addPopup, toggleAddPopup] = React.useState(false);
  const [profilePopup, toggleProfilePopup] = React.useState(false);
  const [avaPopup, toggleAvaPopup] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [userAbout, setUserAbout] = React.useState('');
  const [userAva, setUserAva] = React.useState('');

  React.useEffect(() => {
    api.getUserData().then((res) => {
      setUserName(res.name);
      setUserAbout(res.about);
      setUserAva(res.avatar);
    });
  }, []);

  const PopupClosers = {
    closeAvaPopup() {
      toggleAvaPopup(false);
    },
    closeAddPopup() {
      toggleAddPopup(false);
    },
    closeProfilePopup() {
      toggleProfilePopup(false);
    },
  };
  const PopupOpeners = {
    handleEditAvatarClick() {
      toggleAvaPopup(true);
    },
    handleEditProfileClick() {
      toggleProfilePopup(true);
    },
    handleAddPlaceClick() {
      toggleAddPopup(true);
    },
  };

  return (
    <main className='profile root__section'>
      <div className='user-info'>
        <img src={userAva} alt='User avatar' onClick={PopupOpeners.handleEditAvatarClick} className='user-info__photo' />
        <div className='user-info__data'>
          <h1 className='user-info__name'>{userName}</h1>
          <p className='user-info__job'>{userAbout}</p>
          <button onClick={PopupOpeners.handleEditProfileClick} className='user-info__edit-button'>
            Edit
          </button>
        </div>
        <button onClick={PopupOpeners.handleAddPlaceClick} className='button user-info__button'>
          +
        </button>
      </div>
      <div className='places-list root__section'>
        {props.cards.map((item, index) => (
          <Card
            title={item.name}
            img={item.link}
            likes={item.likes.length}
            key={index}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onDeleteClick={props.onDeleteClick}
          />
        ))}
      </div>
      <AddPlace isOpen={addPopup} onClose={PopupClosers.closeAddPopup} />
      <EditProfile isOpen={profilePopup} onClose={PopupClosers.closeProfilePopup} />
      <Avatar isOpen={avaPopup} onClose={PopupClosers.closeAvaPopup} />
    </main>
  );
}

export default Main;
