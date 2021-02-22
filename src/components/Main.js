import AddPlace from './popups/AddPlace';
import EditProfile from './popups/EditProfile';
import Avatar from './popups/Avatar';
import LoaderInfo from './LoaderUserInfo';
import LoaderCards from './LoaderCards';
import ImgPopup from './popups/ImagePopup';
import Card from './Card';
import api from '../utils/api';
import React from 'react';
import { userContext } from '../contexts/userContext';

function Main(props) {
  const [addPopup, toggleAddPopup] = React.useState(false);
  const [profilePopup, toggleProfilePopup] = React.useState(false);
  const [avaPopup, toggleAvaPopup] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState(false);
  const [userInfoLoader, setUserInfoLoader] = React.useState(true);
  const [userAva, setUserAva] = React.useState('');
  const [user, setUser] = React.useState('');
  const [imagePopup, toggleImgPopup] = React.useState(false);
  const [imgInPopup, setImgToPopup] = React.useState('');

  React.useEffect(() => {
    api.getUserData().then((res) => {
      setUserAva(res.avatar);
      setUser(res);
      setUserInfoLoader(false);
      setUserInfo(true);
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
    closeImgPopup() {
      toggleImgPopup(false);
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

  function addImgToPopup(img) {
    toggleImgPopup(true);
    setImgToPopup(img);
  }

  function editUserProfile(name, about) {
    api.updateProfile(name, about).then((res) => {
      setUser(res);
      toggleProfilePopup(false);
    });
  }

  function editUserAvatar(link) {
    api.updateAva(link).then((ava) => {
      setUserAva(ava.avatar);
      toggleAvaPopup(false);
    });
  }

  return (
    <main className='profile root__section'>
      <userContext.Provider value={user}>
        <LoaderInfo userinfo={userInfoLoader} />
        <div className={`user-info ${!userInfo ? 'user-info_disabled' : ''}`}>
          <img src={userAva} alt='User avatar' onClick={PopupOpeners.handleEditAvatarClick} className='user-info__photo' />
          <div className='user-info__data'>
            <h1 className='user-info__name'>{user.name}</h1>
            <p className='user-info__job'>{user.about}</p>
            <button onClick={PopupOpeners.handleEditProfileClick} className='user-info__edit-button'>
              Edit
            </button>
          </div>
          <button onClick={PopupOpeners.handleAddPlaceClick} className='button user-info__button'>
            +
          </button>
        </div>
        <LoaderCards cardsloader={props.cardsloader} />
        <div className='places-list root__section'>
          {props.cards.map((item, index) => (
            <Card Click={addImgToPopup} title={item.name} img={item.link} likes={item.likes} key={index} id={item._id} owner={item.owner} />
          ))}
        </div>
        <AddPlace isOpen={addPopup} onClose={PopupClosers.closeAddPopup} submitFun={props.addNewPlace} />
        <EditProfile isOpen={profilePopup} onClose={PopupClosers.closeProfilePopup} onSubmit={editUserProfile} />
        <Avatar isOpen={avaPopup} onClose={PopupClosers.closeAvaPopup} onSubmit={editUserAvatar} />
        <ImgPopup isOpen={imagePopup} onClose={PopupClosers.closeImgPopup} img={imgInPopup} />
      </userContext.Provider>
    </main>
  );
}

export default Main;
