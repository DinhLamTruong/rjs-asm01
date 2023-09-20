import React from 'react';
import './NavBar.css';

const NavBarItem = ({ navdata }) => {
  const navList = navdata.map((item, index) => (
    <div key={index} className={`navListItem ${item.active ? 'active' : ''} `}>
      <i className={`fa ${item.icon}`}></i>
      <a className="navLink" key={item.type} href="/">
        {item.type}
      </a>
    </div>
  ));
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">Booking Website</span>
          <div className="navItem">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
      </div>
      <div className="navList">
        <div className="navListContainer">{navList}</div>
      </div>
    </>
  );
};

export default NavBarItem;
