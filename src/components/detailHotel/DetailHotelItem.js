import React from 'react';
import './detailHotel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const DetailHotelItem = props => {
  const dataDetail = props.dataDetail.photos.map((item, index) => (
    <div key={index} className="dHotelImgWrapper">
      <img className="dHotelImg" src={item} alt="" />
    </div>
  ));

  return (
    <div className="dHotelContainer">
      <div className="dHotelWrapper">
        {/* html hotel header */}
        <h2 className="dHotelTitle">{props.dataDetail.name}</h2>
        <div className="hotelAdress">
          <FontAwesomeIcon icon={faLocationDot} />
          <span> {props.dataDetail.address}</span>
        </div>
        <div className="hoteldistance">{props.dataDetail.distance}</div>
        <div className="hotelPrice">{props.dataDetail.price}</div>
        <button className="hotelBookNow">Reserve or Book Now!</button>

        {/* html image */}
        <div className="dHotelImgs">{dataDetail}</div>

        {/* html overviw hotel */}
        <div className="dHotelDescription">
          <div className="dHotelContent">
            <h2 className="hotelTitle">{props.dataDetail.title}</h2>
            <p className="hotelDescription">{props.dataDetail.description}</p>
          </div>

          {/* html phần tóm tắt */}
          <div className="dHotelSummary">
            <h4>Perfect for a 9-night stay!</h4>
            <p>
              Located in the real heart of krakow, this property has an
              excellent location score of 9.8!
            </p>
            <div className="dHotelPrice">
              <span className="dprice">
                ${props.dataDetail.nine_night_price}
              </span>
              <span className="subPrice">(9 nights)</span>
            </div>
            <button className="btnHotelBookNow">Reserve or Book Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHotelItem;
