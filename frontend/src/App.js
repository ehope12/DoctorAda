import logo from './logo.svg';
import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'

// import DesktopHomepage from './home_page/Desktop1HomePage/Desktop1HomePage.jsx'
// import DesktopProfile from './profile/Desktop2Profile/Desktop2Profile.jsx'; 
import Profile from './components/profile';
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      
    </div>
  );
}

export default App;