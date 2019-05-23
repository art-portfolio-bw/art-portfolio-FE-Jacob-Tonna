import React from 'react';
import {Route} from 'react-router-dom';

import NavagationBar from './components/nav/NavagationBar';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn'

function App() {
  return (
    <div className="App">
      <NavagationBar />

      <Route path ='/SignUp' component={SignUp} />
      <Route path ='/LogIn' component={LogIn} />

    </div>
  );
}

export default App;
