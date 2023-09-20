import React from 'react';
import NavBarItem from './NavBarItem';

const navBarData = [
  {
    type: 'Stays',
    icon: 'fa-bed',
    active: true,
  },
  {
    type: 'Flights',
    icon: 'fa-plane',
    active: false,
  },
  {
    type: 'Car rentals',
    icon: 'fa-car',
    active: false,
  },
  {
    type: 'Attractions',
    icon: 'fa-bed',
    active: false,
  },
  {
    type: 'Airport taxis',
    icon: 'fa-taxi',
    active: false,
  },
];

const NavBar = () => {
  return (
    <div>
      <NavBarItem navdata={navBarData} />
    </div>
  );
};

export default NavBar;
