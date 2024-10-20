// App.js
import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Forum from './components/Forum';
import PubMedSearch from './components/SearchPopUp';

function App() {
  const [citation, setCitation] = useState('');

  const citeArticle = (article) => {
    const citeText = `${article.title} - ${article.url}`;
    setCitation(citeText);
    alert(`Cited: ${citeText}`);
  };

  return (
    <div className="App">
      {/* <NavBar /> */}
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
  );
}

export default App;
