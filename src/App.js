import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import Home from './pages/Home';

library.add(fab, faCheckSquare, faCoffee)

const App = () => (
  <div>
    <Home />
  </div>
);

export default App;
