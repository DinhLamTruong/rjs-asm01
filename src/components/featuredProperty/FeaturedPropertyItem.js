import React from 'react';
import './FeaturedProperty.css';

const FeaturedPropertyItem = props => {
  const dataListHotel = props.dataListHotel.map((item, index) => (
    <div key={index} className="listHotelItem">
      <img className="listHotelImg" src={item.image_url} alt="" />
      <a className="name" href="/detail">
        {item.name}
      </a>
      <p className="city">{item.city}</p>
      <p className="price">Starting from ${item.price}</p>
      <button className="rate">{item.rate}</button>
      <span className="type">{item.type}</span>
    </div>
  ));
  return (
    <div className="listHotelContainer">
      <div className="listHotelWrapper">
        <h2 className="listHomeTitle">Home guests loves</h2>
        <div className="listHotel">{dataListHotel}</div>
      </div>
    </div>
  );
};

export default FeaturedPropertyItem;
