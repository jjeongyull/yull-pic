import React from 'react'

const Notice = () => {
  return (
    <div className="h-pot main-content notice-div">
      <h2 className="notice-h2">NOTICE</h2>
      <p className="no-info">
        안녕하세요. 율픽입니다.<br />
        율픽에 방문해주셔서 너무 감사드립니다.<br />
        저의 작업은 상상을 기획해 촬영을 진행합니다.<br />
        제가 기획을 한 후 촬영을 할땐 비용은 모두 제가 부담하며,
        기획 촬영이 진행될땐  <span className="no-bold">인스타그램, 유튜브(온라인 전시), 향후 계획중인 무료전시</span>에 작품이 올라간다는점 참고 부탁드립니다.<br />
        <br />
        <br />
        그 외 제가 진행하는 촬영은<br />
        <span className="no-bold">개인스냅, 커플스냅, 공연 연습사진, 공연사진촬영, 앨범커버촬영</span> 진행합니다.<br />
        그 외 협업을 원하시면 디엠으로 소통해 주시면 됩니다.<br />

        <br />
        <span className="no-bold">가격안내</span><br />
        개인스냅, 커플스냅일 경우 1시간 단위 40,000원<br />
        원본 전체, 보정본 15장 제공됩니다.
        <br />
        아래 버튼에 유튜브 온라인 전시를 보실 수 있으며<br />
        인스타그램 디엠으로 협업 및 촬영 문의 부탁드립니다.<br />
        <br />
        감사합니다.
        
     

      </p>
      <div className="sns-btn-g no-btn">
        <a className="sns-btn insta-btn" target="_blank" href="https://www.instagram.com/yull_pic?igsh=MWk2ZDQxZWRnaHY1Nw%3D%3D&utm_source=qr">Instagram</a>
        <a className="sns-btn you-btn" target="_blank" href="https://youtube.com/@user-jb3xf1vl6z?si=SYCrBjlsRvTwOGVF">Youtube</a>
      </div>
    </div>
  )
}

export default Notice;