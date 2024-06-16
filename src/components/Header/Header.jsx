import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  const isAuthenticated = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="header-container">
        <ul className="header-nav left">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/ShoePage" className="nav-link">Shoes Page</Link></li>
        </ul>
        <ul className="header-nav right">
          {isAuthenticated ? (
            <>
              <li><button onClick={handleLogout} className="nav-link">Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="nav-link">Login</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export { Header };
