/* eslint-disable react/self-closing-comp */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Containers/Home';
import Login from '../Containers/Login';
import Register from '../Containers/Register';
import NotFound from '../Containers/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
