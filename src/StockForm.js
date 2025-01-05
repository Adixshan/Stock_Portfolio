import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './StockForm.css';

const StockForm = ({ onAddOrUpdate }) => {
  const [stock, setStock] = useState({
    name: '',
    ticker: '',
    quantity: 1,
    buyPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock({ ...stock, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddOrUpdate(stock);
    setStock({ name: '', ticker: '', quantity: 1, buyPrice: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="stock-form">
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Stock Name"
          value={stock.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="ticker"
          placeholder="Ticker"
          value={stock.ticker}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={stock.quantity}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          name="buyPrice"
          placeholder="Buy Price"
          value={stock.buyPrice}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary btn-add">
        <FontAwesomeIcon icon={faPlus} /> Add/Update Stock
      </button>
    </form>
  );
};

export default StockForm;
