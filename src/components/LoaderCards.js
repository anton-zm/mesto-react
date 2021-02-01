function Loader(props) {
  return (
    <div className={`loader__container ${!props.cardsloader ? 'loader_disabled' : ''}`}>
      <div class='sk-chase'>
        <div class='sk-chase-dot'></div>
        <div class='sk-chase-dot'></div>
        <div class='sk-chase-dot'></div>
        <div class='sk-chase-dot'></div>
        <div class='sk-chase-dot'></div>
        <div class='sk-chase-dot'></div>
      </div>
    </div>
  );
}

export default Loader;
