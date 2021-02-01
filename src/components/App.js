import Header from './Header';
import Main from './Main';
import api from '../utils/api';
import React from 'react';

function App() {
  const [cards, renderCards] = React.useState([]);
  const [cardsloader, toggleloader] = React.useState(true);

  function addNewPlace(img, title) {
    api.addNewCard(title, img).then((res) => {
      renderCards([res, ...cards]);
    });
  }

  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      renderCards(res.reverse().slice(0, 70));
      toggleloader(false);
    });
  }, []);

  return (
    <div className='root'>
      <Header />
      <Main cards={cards} addNewPlace={addNewPlace} cardsloader={cardsloader} />
    </div>
  );
}

export default App;
