import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBox,
  faTruck,
  faChartBar,
  faMoneyBillAlt,
  faTools,
  faTags,
  faUsers,
  faEye,
  faPaintBrush,
  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons';
import './sidebar.css'; // Import the CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h4>Nishyan</h4>
        <span className="visit-store">Visit Store</span>
      </div>
      <ul className="sidebar-list">
        <li><FontAwesomeIcon icon={faHome} /> Home</li>
        <li><FontAwesomeIcon icon={faBox} /> Orders</li>
        <li><FontAwesomeIcon icon={faTruck} /> Products</li>
        <li><FontAwesomeIcon icon={faChartBar} /> Delivery</li>
        <li><FontAwesomeIcon icon={faMoneyBillAlt} /> Marketing</li>
        <li><FontAwesomeIcon icon={faTools} /> Analytics</li>
        <li><FontAwesomeIcon icon={faTags} /> Payments</li>
        <li><FontAwesomeIcon icon={faUsers} /> Tools</li>
        <li><FontAwesomeIcon icon={faEye} /> Discounts</li>
        <li><FontAwesomeIcon icon={faPaintBrush} /> Audience</li>
        <li><FontAwesomeIcon icon={faPuzzlePiece} /> Appearance</li>
        <li><FontAwesomeIcon icon={faPuzzlePiece} /> Plugins</li>
      </ul>
    </div>
  );
};

export default Sidebar;
