import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Results from '../pages/Results';
import { about, results } from './path';

export default () => {
  return (
    <Switch>
      <div>
        <Route exact path="/" component={Home} />
        <Route path={about} component={About} />
        <Route path={results} component={Results} />
      </div>
    </Switch>
  );
}
