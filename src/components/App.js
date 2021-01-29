import Header from './Header';
import Main from './Main';
import api from '../utils/api';
import React from 'react';

function App() {
  const [cards, renderCards] = React.useState([]);

  function addNewPlace(img, title) {
    api.addNewCard(title, img).then((res) => {
      renderCards([res, ...cards]);
    });
  }

  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      //console.log(res.slice(-10));
      renderCards(res.reverse().slice(0, 10));
    });
  }, []);

  return (
    <div className='root'>
      <Header />
      <Main cards={cards} addNewPlace={addNewPlace} />
    </div>
  );
}

export default App;
