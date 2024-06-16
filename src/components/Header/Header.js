import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="header-nav">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/ShoeStorePage" className="nav-link">Shoe Store</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
