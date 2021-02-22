function Loader(props) {
  return (
    <div className={`loader__container loader__container_cards ${!props.cardsloader ? 'loader_disabled' : ''}`}>
      <div className='sk-chase'>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
      </div>
    </div>
  );
}

export default Loader;
