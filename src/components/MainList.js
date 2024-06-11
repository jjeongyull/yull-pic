import React from 'react';
import { useNavigate } from "react-router-dom";

const MainList = ({ id, model, concept, desc, img }) => {
  const navigate = useNavigate();
  
  const linkDetail = (id) => {
    navigate(`/photo/${id}`);
  }
  
  return (
    <div className="main-img-card" onClick={() => linkDetail(id)}>
      <img src={img} alt="메인 이미지" />
      <div className="list-text-box">
        <h4 className="list-h4">CONCEPT: {concept}</h4>
        <p className="list-model">MODEL: {model}</p>
        <p className="list-desc">{desc}</p>
      </div>
    </div>
  )
}

export default MainList