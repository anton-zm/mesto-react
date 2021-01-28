function Card(props) {
  return (
    <div className='place-card'>
      <div className='place-card__image' style={{ backgroundImage: `url(${props.img})` }}>
        <button className='place-card__delete-icon'></button>
      </div>
      <div className='place-card__description'>
        <h3 className='place-card__name'>{props.title}</h3>
        <div className='place-card__like'>
          <button className='place-card__like-icon place-card__like-icon-off'></button>
          <span className='place-card__like-counter'>{props.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
