import Header from './Header';
import Main from './Main';
import api from '../utils/api';
import React from 'react';

function App() {
  const [cards, renderCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      console.log(res.slice(0, 6));
      renderCards(res.slice(0, 6));
    });
  }, []);

  return (
    <div className='root'>
      <Header />
      <Main cards={cards} />
    </div>
  );
}

export default App;
