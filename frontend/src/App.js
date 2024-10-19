import logo from './logo.svg';
import React from 'react';
import './App.css';

// import DesktopHomepage from './home_page/Desktop1HomePage/Desktop1HomePage.jsx'
// import DesktopProfile from './profile/Desktop2Profile/Desktop2Profile.jsx'; 
import Profile from './components/profile';
function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <DesktopHomepage/> */}
      {/* <DesktopProfile/> */}
      <Profile/>
        
     
    </div>
  );
}

export default App;
