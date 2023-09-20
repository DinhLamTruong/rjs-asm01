import React from 'react';
import './SearchListItem.css';

const SearchListItem = ({ resultSearch }) => {
  const dataSearch = resultSearch.map((item, index) => (
    <div key={index} className="searchItem">
      <div className="searchImg">
        <img className="searchImage" src={item.image_url} alt="" />
      </div>
      <div className="searchDetails">
        <h3 className="detailTitle">{item.name}</h3>
        <span className="distance">{item.distance} from center</span>
        <span className="taxeOption">{item.tag}</span>
        <span className="description">{item.description}</span>
        <span className="type">{item.type}</span>
        {item.free_cancel && (
          <>
            <span className="cancel">Free cancellation</span>
            <span className="cancelSubTitle">
              You can cancel later, so lock in great price today!
            </span>
          </>
        )}
      </div>
      <div className="searchDescription">
        <div className="searchRate">
          <span className="rateText">{item.rate_text}</span>
          <button className="btnRate">{item.rate}</button>
        </div>
        <div className="searchText">
          <span className="searchPrice">${item.price}</span>
          <span className="desPrice">Includes taxes and fees</span>
          <button className="btnCheck">See availability</button>
        </div>
      </div>
    </div>
  ));
  return <div className="listSearchResult">{dataSearch}</div>;
};

export default SearchListItem;
