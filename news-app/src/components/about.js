import React from 'react';
import { Link } from 'react-router-dom';
import './aboutstyle.css';

const About = () => {
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
        </nav>
      </header>

      <section className="about">
        <div className="about-content">
          <h1>About Us</h1>
          <p>Welcome to our news search application! Our platform is designed to provide you with the latest and top-quality news from various categories, including business, technology, science, health, sports, and entertainment.</p>
          <p>You can also explore the news of India based on your choice from the search bar. Whether you're interested in the latest business trends, technological innovations, scientific discoveries, or entertainment updates, our platform has you covered with curated content from reliable sources.</p>
          <p>With our user-friendly interface, you can easily navigate through different categories, search for specific topics, and access detailed information about each news article. Clicking on the blog card will provide you with the full article content, allowing you to delve deeper into the stories that matter to you.</p>
          <p>Stay updated and informed with our news search application. Explore the world of news at your fingertips!</p>
        </div>
      </section>

      <footer>
        <p>© 2024 News App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
