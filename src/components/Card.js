import React from 'react';
import api from '../utils/api';
import { USERID } from '../utils/id';

function Card(props) {
  const [isLiked, setLike] = React.useState(false);
  const [counter, setCounter] = React.useState(props.likes.length);
  const [btnDsbl, setBtnState] = React.useState(false);
  const [deleteIcon, setDeleteIcon] = React.useState(false);

  React.useEffect(() => {
    props.likes.forEach((e) => {
      if (e._id === USERID) {
        setLike(true);
        setBtnState(true);
      }
    });
  }, [props.likes]);

  React.useEffect(() => {
    if (props.owner === USERID) {
      setDeleteIcon(true);
    }
  }, [props.owner]);

  function like() {
    setLike(true);
    api.likeCard(props.id).then(() => {
      setCounter(props.likes.length + 1);
      setBtnState(true);
    });
  }
  return (
    <div className='place-card'>
      <div className='place-card__image' style={{ backgroundImage: `url(${props.img})` }}>
        <button className={`place-card__delete-icon ${deleteIcon ? 'place-card_my-card' : ''}`}></button>
      </div>
      <div className='place-card__description'>
        <h3 className='place-card__name'>{props.title}</h3>
        <div className='place-card__like'>
          <button onClick={like} className={`place-card__like-icon ${isLiked ? 'place-card__like-icon_liked' : ''}`} disabled={btnDsbl ? true : false}></button>
          <span className='place-card__like-counter'>{counter}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
