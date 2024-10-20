// PubMedSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import './PubMedSearch.css';

function PubMedSearch() {
  const [query, setQuery] = useState('');
  const [numResults, setNumResults] = useState(5);
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const submitSearch = (e) => {
    e.preventDefault();
    if (!query) {
      alert('Please enter a search query.');
      return;
    }

    axios.get('http://127.0.0.1:5000/search', {
      params: { query, num_results: numResults }
    })
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => console.error("There was an error fetching the articles!", error));
  };

  const openArticleDetails = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="search-container">
      <h2 className="search-title">PubMed Article Search</h2>

      {/* Articles list above the search box */}
      {articles.length > 0 && (
        <ul>
          {articles.map((article, index) => (
            <li key={index} className="article-box" onClick={() => openArticleDetails(article)}>
              <h3>{article.title}</h3>
              <small><strong>Authors:</strong> {article.authors.join(', ')}</small>
              <hr />
            </li>
          ))}
        </ul>
      )}

      {/* Search form at the bottom */}
      <form className="search-submit" onSubmit={submitSearch}>
        <input 
          type="text" 
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter search query"
          required
        />
        <input 
          type="number" 
          value={numResults}
          onChange={e => setNumResults(e.target.value)}
          min="1"
          placeholder="Number of results"
          required
        />
        <button className="search-submit" type="submit">Search</button>
      </form>

      {/* Modal for displaying selected article details */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>{selectedArticle.title}</h3>
            <p>{selectedArticle.abstract}</p>
            <small><strong>Publication Date:</strong> {selectedArticle.publication_date}</small><br/>
            <small><strong>Authors:</strong> {selectedArticle.authors.join(', ')}</small>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PubMedSearch;
