import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, StarshipsPage, PlanetsPage } from '../pages';

const App = () => (
  <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="/starships" exact>
      <StarshipsPage />
    </Route>
    <Route path="/planets" exact>
      <PlanetsPage />
    </Route>
  </Switch>
);

export default App;
