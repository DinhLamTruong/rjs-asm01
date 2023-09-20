import React from 'react';
import './Featured.css';

const FeaturedItem = props => {
  const dataCity = props.dataCity.map((item, index) => (
    <div key={index} className="featuredItem">
      <img className="featuredImg" src={item.image} alt="" />
      <div className="featuredTitles">
        <h2>{item.name}</h2>
        <h3>{item.subText}</h3>
      </div>
    </div>
  ));
  return (
    <div className='featuredContainer'>
      <div className="featured">{dataCity}</div>
    </div>
  );
};

export default FeaturedItem;
