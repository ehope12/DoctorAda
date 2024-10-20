// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Forum from './components/Forum';
import PubMedSearch from './components/SearchPopUp';
import Profile from './components/profile'
function App() {
  const [citation, setCitation] = useState('');

  const citeArticle = (article) => {
    const citeText = `${article.title} - ${article.url}`;
    setCitation(citeText);
    alert(`Cited: ${citeText}`);
  };

  return (
    <Router>
      <div className="App">
        <NavBar /> 
        
        <div className="main-container">
          <div className="forum-container">
            <Forum />
            <PubMedSearch onCiteArticle={citeArticle} />
          </div>
          <div className="search-container">
            {/* Article Results */}
            <div className="article-results">
              {/* Article boxes can be dynamically generated here */}
              <PubMedSearch onCiteArticle={citeArticle} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar'; // Import your NavBar component
// import Profile from './pages/Profile'; // Import your Profile component
// import Home from './pages/Home'; // Import other pages/components as needed

// const App = () => (
//     <Router>
//         <div className="App">
//             <NavBar /> {/* This should contain your navigation links */}
//             <Routes>
//                 <Route path="/" element={<Home />} /> {/* Your home page */}
//                 <Route path="/profile" element={<Profile />} /> {/* Your profile page */}
//                 {/* Add more routes here as needed */}
//             </Routes>
//         </div>
//     </Router>
// );

// export default App;
