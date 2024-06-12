import React from 'react';
import './Banner.style.css';

const Banner = () => {
  return (
    <div className="main-banner">
      <div className="main-img-box">
        <img className="main-banner-img" src='./assets/mainBanner.jpg' />
      </div>
      <div className="text-box">
        <h2>Yull Photo Area</h2>
        <p>
          안녕하세요.<br />
          <span>상상을 담아내는 사진작가 정율</span>입니다.<br />
          <br />
          
          저의 공간에 오신걸 환영합니다.<br />
          <span>PHOTOS 페이지</span>로 가시면 저의 기획 작업물들을<br />
          보실 수 있습니다.<br />
          <br />
          <span>협업 문의</span>는 아래 인스타그램 계정으로 DM부탁드립니다.
        </p>
        <div className="sns-btn-g">
          <a className="sns-btn insta-btn" target="_blank" href="https://www.instagram.com/yull_pic?igsh=MWk2ZDQxZWRnaHY1Nw%3D%3D&utm_source=qr">Instagram</a>
          <a className="sns-btn you-btn" target="_blank" href="https://youtube.com/@user-jb3xf1vl6z?si=SYCrBjlsRvTwOGVF">Youtube</a>
        </div>
        
      </div>
    </div>
  )
}

export default Banner