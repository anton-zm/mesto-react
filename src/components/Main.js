import AddPlace from './popups/AddPlace';
import EditProfile from './popups/EditProfile';
import Avatar from './popups/Avatar';
import React from 'react';

function Main() {
  const [addPopup, toggleAddPopup] = React.useState(false);
  const [profilePopup, toggleProfilePopup] = React.useState(false);
  const [avaPopup, toggleAvaPopup] = React.useState(false);

  function closeAvaPopup() {
    toggleAvaPopup(false);
  }
  function closeAddPopup() {
    toggleAddPopup(false);
  }
  function closeProfilePopup() {
    toggleProfilePopup(false);
  }
  function handleEditAvatarClick() {
    toggleAvaPopup(true);
  }
  function handleEditProfileClick() {
    toggleProfilePopup(true);
  }
  function handleAddPlaceClick() {
    toggleAddPopup(true);
  }

  return (
    <main className='profile root__section'>
      <div className='user-info'>
        <div onClick={handleEditAvatarClick} className='user-info__photo'></div>
        <div className='user-info__data'>
          <h1 className='user-info__name'>Anton Zmanovski</h1>
          <p className='user-info__job'>React developer</p>
          <button onClick={handleEditProfileClick} className='user-info__edit-button'>
            Edit
          </button>
        </div>
        <button onClick={handleAddPlaceClick} className='button user-info__button'>
          +
        </button>
      </div>
      <div className='places-list root__section'></div>
      <AddPlace isOpen={addPopup} onClose={closeAddPopup} />
      <EditProfile isOpen={profilePopup} onClose={closeProfilePopup} />
      <Avatar isOpen={avaPopup} onClose={closeAvaPopup} />
    </main>
  );
}

export default Main;
