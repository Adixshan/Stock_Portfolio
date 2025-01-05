import React from 'react';
import './StockTable.css';

const StockTable = ({ stocks }) => {
  return (
    <div className="table-container">
      <table className="stock-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Current Price</th>
            <th>Total Value</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.quantity}</td>
              <td style={{ color: 'green' }}>${stock.buyPrice.toFixed(2)}</td>
             <td style={{ color: stock.currentPrice > stock.buyPrice ? '#28a745' : '#dc3545' }}>
  ${stock.currentPrice.toFixed(2)}
</td>


              <td>${(stock.quantity * stock.currentPrice).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
