import React from 'react';
import './SearchPopup.css';

const SearchPopup = () => {
  return (
    <div className="listSearch">
      <h2 className="searchTitle">Search</h2>
      <div className="listSearchItem">
        <label>Destination</label>
        <input></input>
      </div>
      <div className="listSearchItem">
        <label>Check-in Date</label>
        <span className="checkInText">20/9/2023 to 20/9/2023</span>
      </div>
      <div className="listSearchItem">
        <div className="listOptions">
          <span>Options</span>
          <div className="listOption">
            <label>
              Min price <small>per night</small>
            </label>
            <input type="text" />
          </div>
          <div className="listOption">
            <label>
              Max price <small>per night</small>
            </label>
            <input type="text" />
          </div>
          <div className="listOption">
            <label>Adult</label>
            <input min={1} type="number" placeholder="1" />
          </div>
          <div className="listOption">
            <label>Children</label>
            <input min={0} type="number" placeholder="0" />
          </div>
          <div className="listOption">
            <label>Room</label>
            <input min={1} type="number" placeholder="1" />
          </div>
        </div>
      </div>
      <div className="listSearchItem">
        <button className="btnSeach">Search</button>
      </div>
    </div>
  );
};

export default SearchPopup;
