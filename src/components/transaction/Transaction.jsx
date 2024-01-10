import React from 'react';
import { faSort, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Transaction = () => {
  const orders = [];

  // Creating 20 sample order details
  for (let i = 0; i < 20; i++) {
    orders.push(
      <tr key={i}>
        <td>#281209</td>
        <td>7 July, 2023</td>
        <td>$ 1278.23</td>
        <td>$22</td>
      </tr>
    );
  }
  return (
    <div className="transaction-container">
      <div className="overview">
        <div>
          <h3>Overview</h3>
          <div className="overview-box">
            <div className="overview-item">
              <p>Online Orders</p>
              <p>231</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className='last_mnth'>Last Month</h3>
          <div className="overview-box">
            <div className="overview-item">
              <p>Amount Received</p>
              <p>$ 23,92,312.19</p>
            </div>
          </div>
        </div>
      </div>


      <div className="transactions">
        <div className="transactions-header">
          <h3>Transactions | This Month</h3>
          <div className="search-sort">
            <input type="text" placeholder="Search functionality" />
            <button>
              <FontAwesomeIcon icon={faSort} /><span> Sort</span>
              
            </button>
            <button>
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
        </div>
        <div className="order-details">
          <table className="order-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Order Amount</th>
                <th>Transaction Fee</th>
              </tr>
            </thead>
            <tbody>{orders}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
