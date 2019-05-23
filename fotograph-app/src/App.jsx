import React from 'react';
import Nav from './components/nav/NavagationBar';
import LandingPage from './components/landingpage/LandingPage'
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className="App">
      App.jsx lives here
      <Nav />
      <LandingPage />
      <LogIn />
      <SignUp />
    </div>
  );
}

export default App;
