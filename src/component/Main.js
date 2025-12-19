import React from 'react';
import './Main.css';

/* Swiper React 컴포넌트 import */
import { Swiper, SwiperSlide } from 'swiper/react';

/* Swiper 모듈 import (v12 최신 방식) */
import { Autoplay, Pagination } from 'swiper/modules';

/* Swiper CSS */
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';

function Main() {
  const slides = [slide1, slide2, slide3];

  return (
    <main>
      <section className="slider">
        <Swiper
          modules={[Autoplay, Pagination]}          // 모듈 등록
          loop={true}                               // 무한 반복
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}          // 하단 동그라미
          navigation={false}                        // 좌우 화살표 제거
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide} alt={`슬라이드 ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 하단 그리드 메뉴 */}
      <section className="main-grid">
        <div className="grid-row">
          <button className="grid-item">
            <span className="nav-icon icon-intro"></span>
            병원소개
          </button>

          <button className="grid-item">
            <span className="nav-icon icon-doctor"></span>
            의료진 소개
          </button>

          <button className="grid-item">
            <span className="nav-icon icon-care"></span>
            진료과목
          </button>
        </div>

        <div className="grid-row">
          <button className="grid-item">
            <span className="nav-icon icon-clinic"></span>
            특화클리닉
          </button>

          <button className="grid-item">
            <span className="nav-icon icon-equipment"></span>
            장비소개
          </button>

          <button className="grid-item">
            <span className="nav-icon icon-tour"></span>
            둘러보기
          </button>
        </div>

        <button className="grid-item special-btn">
          <span className="content-wrapper">
            <span className="nav-icon icon-full"></span>
            <span className="text">오시는 길</span>
          </span>
        </button>


      </section>


      {/* ✅ 하단 배너 */}
      <section className="main-banner">
        <div className="banner-content">
          <h2 className="banner-top">
            <i className="fa-solid fa-phone"></i>
            <span className="branch">둔산점</span>
            <span className="phone">042-0000-0000 . 042-000-0000</span>
          </h2>

          <p className="banner-desc">
            365일 24시 진료(국민연금공단)
          </p>
        </div>
      </section>
    </main>
  );
}
export default Main;
