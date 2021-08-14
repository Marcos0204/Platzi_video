/* eslint-disable indent */
import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';

const App = () => {
    return (
      <div className='App'>
        <Header />
        <Search />
      </div>
    );
};

export default App;
