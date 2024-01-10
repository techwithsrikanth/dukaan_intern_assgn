import React from 'react';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import './App.css'; // Import the CSS file for additional styling
import Transaction from './components/transaction/Transaction.jsx';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Transaction />
      </div>
    </div>
  );
};

export default App;
