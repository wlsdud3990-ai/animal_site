import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import './App.css';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />

      {/* Top 버튼: 스크롤 위치에 따라 나타남 */}
      {showTopBtn && (
        <button className="top-btn slide-in" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}

    </>
  );
}

export default App;
