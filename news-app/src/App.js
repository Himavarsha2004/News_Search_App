import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Business from './components/Business';
import Health from './components/health';
import Science from './components/science';
import Sports from './components/Sports';
import Technology from './components/technology';
import Entertainment from './components/Entertainment';
import About from './components/about';
import Contact from './components/contact';

function App() {
  const [user, setUser] = useState(null);


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/business" element={<Business />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
