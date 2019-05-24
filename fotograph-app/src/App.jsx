import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavagationBar from './components/nav/NavagationBar';
import LandingPage from './components/landingpage/LandingPage';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn'

import PrivateRoute from './components/auth/private/PrivateRoute';
import UserHome from './components/Users/UserHome.jsx';
// import CreateNewPost from './components/Users/CreateNewPost';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav-wrapper">
          <NavagationBar />
            <Route exact path ='/' component={LandingPage} />
            <Route path ='/SignUp' component={SignUp} />
            <Route path ='/LogIn' component={LogIn} />
            {/* <Route path='/new-post' component={CreateNewPost} /> */}
            <PrivateRoute path ='/user' component={UserHome} />
        </div>
      </div>
    </Router>
  );
}

export default App;
