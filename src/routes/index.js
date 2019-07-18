import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Results from '../pages/Results';
import * as paths from './path';

export default () => {
  return (
    <Switch>
      <>
        <Route exact path="/" component={Home} />
        <Route path={paths.about} component={About} />
        <Route path={paths.results} component={Results} />
      </>
    </Switch>
  );
}
