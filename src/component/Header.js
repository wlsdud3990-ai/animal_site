import React, { useState } from 'react';
import logo from '../images/logo.png';
import './Header.css';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="logo">
        <img src={logo} alt="사이트 로고" />
      </h1>

      <button
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="메뉴 열기"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {menuOpen && (
        <nav className="mobile-menu">
          <ul>
            <li><a href="#">병원소개</a></li>
            <li><a href="#">진료안내</a></li>
            <li><a href="#">의료진</a></li>
            <li><a href="#">오시는길</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
