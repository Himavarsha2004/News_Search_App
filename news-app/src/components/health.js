import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'; // Ensure this path is correct

const Health = () => {
  const apiKey = '87ab7e5213f94c5d9b1334d9515c0b6a';
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');

  const fetchTopNewsWithImages = async () => {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=20&apiKey=${apiKey}`;
      const response = await axios.get(apiUrl);
      const articlesWithImages = response.data.articles.filter(article => article.urlToImage !== null);
      setArticles(articlesWithImages.slice(0, 10));
    } catch (error) {
      console.error('Error fetching news with images', error);
    }
  };

  const fetchHealthNewsQuery = async (query) => {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?q=${query}&country=in&category=health&pageSize=20&apiKey=${apiKey}`;
      const response = await axios.get(apiUrl);
      const articlesWithImages = response.data.articles.filter(article => article.urlToImage !== null);
      setArticles(articlesWithImages.slice(0, 10));
    } catch (error) {
      console.error('Error fetching news by query', error);
    }
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      fetchHealthNewsQuery(query);
    }
  };

  useEffect(() => {
    fetchTopNewsWithImages();
  }, []);

  const handleArticleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="health-page" style={{ backgroundColor: 'rgb(33, 55, 100)', minHeight: '100vh' }}>
      <header>
        <nav className="navbar">
          <div className="logo">Health News.</div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search news here"
              className="search-bar"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>Search</button>
          </div>
        </nav>
      </header>
      <section className="obj-width" id="blog-container">
        {articles.length === 0 ? (
          <p className="no-results-message">No Results Found</p>
        ) : (
          articles.map((article, index) => (
            <div key={index} className="blog-card" onClick={() => handleArticleClick(article.url)}>
              <img src={article.urlToImage} alt={article.title} />
              <h2>{article.title.length > 30 ? `${article.title.slice(0, 30)}....` : article.title}</h2>
              <p>{article.description.length > 30 ? `${article.description.slice(0, 120)}....` : article.description}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Health;
