import React from 'react';
import Data from "../utils/data";
import { useParams } from 'react-router-dom';

const PhotoDetail = () => {
  const { id } = useParams();

  const thisData = Data.filter((items) => {
    return Number(items.id) === Number(id);
  });

  return (
    <div className="h-pot main-content">
      <div className='detail'>
        <h2>CONCEPT : {thisData[0].concept}</h2>
        <p className='de-model'>MODEL : {thisData[0].model}</p>
        <p>{thisData[0].desc}</p>
      </div>
      <div className="detail-img-div">
        {
          thisData[0].list.map((items, index) => (
            <img key={index} src={'.' + items} alt="이미지들"/>
          ))
        }
      </div>
    </div>
  )
}

export default PhotoDetail
