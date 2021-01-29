import Header from './Header';
import Main from './Main';
import api from '../utils/api';
import React from 'react';

function App() {
  const [cards, renderCards] = React.useState([]);

  function addNewPlace(img, title) {
    console.log('HERE!!!');
    api.addNewCard(title, img).then((res) => {
      console.log(res);
    });
    //https://eruditov.net/_pu/4/12980798.jpg
  }

  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      console.log(res.slice(-10));
      //console.log(res);
      renderCards(res.slice(-10));
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
