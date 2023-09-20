import React from 'react';
import './PropertyTypeHotels.css';

const PropertyTypeHotelsItem = props => {
  const dataProperty = props.dataTypeHotel.map((item, index) => (
    <div key={index} className="propertyItem">
      <img className="propertyImg" src={item.image} alt="" />
      <div className="propertyText">
        <h3 className="TypeHotel">{item.name}</h3>
        <span className="count">{item.count} Hotels</span>
      </div>
    </div>
  ));
  return (
    <div className="property">
      <div className="propertyContainer">
        <div>
          <h2 className="propertyTitle">Brows by property type</h2>
          <div className="propertyHotel">{dataProperty}</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTypeHotelsItem;
