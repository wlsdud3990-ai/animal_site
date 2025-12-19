import React from 'react';
import footerLogo from '../images/f_logo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img
          src={footerLogo}
          alt="아프리카동물메디컬센터 로고"
          className="footer-logo"
        />
        <button className="footer-btn">PC버전보기</button>
      </div>

      <div className="footer-info">
        <p>
          24아프리카동물메디컬센터 | 대표: 000 | 사업자번호: 000-00-00000
        </p>
        <p>
          대표전화: 042-486-7581 | 주소: 000 000 00
        </p>
        <p className="copyright">
          Copyright &copy; 2021 아프리카동물메디컬센터.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
