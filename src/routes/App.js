/* eslint-disable react/self-closing-comp */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Containers/Home';
import Login from '../Containers/Login';
import Register from '../Containers/Register';
import NotFound from '../Containers/NotFound';
import Layout from '../components/Layout';
import Players from '../Containers/Players';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/players/:id' component={Players} />
          <Route component={NotFound} />
        </Switch>
      </Layout>

    </BrowserRouter>
  );
};

export default App;
