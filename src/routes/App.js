/* eslint-disable react/self-closing-comp */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Containers/Home';
import Login from '../Containers/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
    </BrowserRouter>
  );
};

export default App;
