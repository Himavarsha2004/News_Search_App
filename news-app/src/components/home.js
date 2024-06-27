import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">News.</div>
          <div className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className='search-container'>
            <input type="text" placeholder='Search news here' className='search-bar' id='search-input'></input>
            <button id='search-button'>Search</button>
          </div>
        </nav>
      </header>
      <section className="home">
        <div className="home-content">
          <h1>Explore the top news!!</h1>
          <p>Welcome to our news website. Here, you can stay updated with the latest news from all over India. Whether it's business, entertainment, health, science, sports, or technology, we've got you covered. Use the search bar above to find specific news articles or explore our categories below.</p>
        </div>
      </section>
      <section className="sub-categories">
        <h2>Explore by Category</h2>
        <ul>
          <li><Link to="/business">Business</Link></li>
          <li><Link to="/health">Health</Link></li>
          <li><Link to="/science">Science</Link></li>
          <li><Link to="/sports">Sports</Link></li>
          <li><Link to="/technology">Technology</Link></li>
          <li><Link to="/entertainment">Entertainment</Link></li>
        </ul>
      </section>
      <footer>
        <p>© 2024 News App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

