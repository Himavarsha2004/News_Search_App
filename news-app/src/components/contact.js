import React from 'react';
import { Link } from 'react-router-dom';
import './contactstyle.css';

const Contact = () => {
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

      <section className="contact">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>For any inquiries or feedback, please feel free to contact us using the information below:</p>
          <p><strong>Address:</strong> Hyderabad, Telangana, Pincode:500097</p>
          <p><strong>Email:</strong> <a href="mailto:contactUs@gmail.com">contactUs@gmail.com</a></p>
        </div>
      </section>

      <footer>
        <p>© 2024 News App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
