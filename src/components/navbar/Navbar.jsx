import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <span className='payment'>Payments</span>
        <span className='how_it_works'>How it works</span>
        <input type="text" className='Search_func' placeholder="Search features, tutorials, etc." />
      </div>
      <div className="navbar-icons">
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  );
};

export default Navbar;
