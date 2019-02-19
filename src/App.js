import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Nav from './components/nav';
import {ROUTE} from './assets/routes';
import store from './ducks/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
        <Nav />
        <Switch>
              <Route exact path='/search' component={ROUTE.Search} />
              <Route exact path='/profile' component={ROUTE.Profile} />
              <Route exact path='/repo:id' component={ROUTE.Profile} />
              <Route exact path='/' component={ROUTE.Landing} />
            </Switch>

        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;