import React from 'react';
import MainList from '../components/MainList';
import Data from "../utils/data";
const PhotoPage = () => {
  const mainData = Data.map((items) => {
    let tempJSON = {};
    tempJSON.id = items.id;
    tempJSON.model = items.model;
    tempJSON.concept = items.concept;
    tempJSON.desc = items.desc;
    tempJSON.img = items.list[0];
    return tempJSON;
  });
  return (
    <div className="h-pot main-content">
      <h2 className="main-h3">
        PHOTOS
      </h2>
      <div className="main-list-div">
        {
          mainData.map((items, index) => (
            <MainList
              key={index}
              id={items.id}
              model={items.model}
              concept={items.concept}
              desc={items.desc}
              img={items.img}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PhotoPage
