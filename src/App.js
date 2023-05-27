import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Game from './components/Game/Game';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div>
      <Header />
        <div className='container'>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='game' element={<Game />} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
};

export default App;