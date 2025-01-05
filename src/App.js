import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import stocksData from './stocks.json';
import Dashboard from './Dashboard';
import StockForm from './StockForm';
import StockTable from './StockTable';

const App = () => {
 


  const [stocks, setStocks] = useState(stocksData);

  const [metrics, setMetrics] = useState({
    totalValue: 0,
    topStock: '',
    distribution: {}
  });

  useEffect(() => {
    calculateMetrics();
  }, [stocks]);

  const calculateMetrics = () => {
    const totalValue = stocks.reduce(
      (sum, stock) => sum + stock.quantity * stock.currentPrice,
      0
    );

    const topStock = stocks.reduce(
      (top, stock) =>
        stock.currentPrice * stock.quantity > top.currentPrice * top.quantity
          ? stock
          : top,
      stocks[0]
    );

    const distribution = {};
    stocks.forEach(stock => {
      distribution[stock.name] =
        ((stock.quantity * stock.currentPrice) / totalValue) * 100;
    });

    setMetrics({
      totalValue,
      topStock: topStock.name,
      distribution
    });
  };


  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };


  const fetchStocks = async () => {
    const response = await axios.get(process.env.REACT_APP_API_BASE_URL + '/api/stocks');
    setStocks(response.data);
  };

  const fetchMetrics = async () => {
    const response = await axios.get(process.env.REACT_APP_API_BASE_URL + '/api/stocks/value');
    setMetrics(response.data);
  };

  const addOrUpdateStock = async (stock) => {
    await axios.post(process.env.REACT_APP_API_BASE_URL + '/api/stocks', stock);
    fetchStocks();
    fetchMetrics();
  };

  const deleteStock = async (ticker) => {
    await axios.delete(process.env.REACT_APP_API_BASE_URL + '/api/stocks/' + ticker);
    fetchStocks();
    fetchMetrics();
  };

  return (
    <div className="app" style={{backgroundColor:"black"}}>
        <header className="app-header">
        <div className="button-group">
          <button className="btn" style={{color:"white"}} onClick={() => handleScrollTo('dashboard')}>Dashboard</button>
          <button className="btn" style={{color:"white"}} onClick={() => handleScrollTo('stats')}>Stats</button>
          <button className="btn" style={{color:"white"}} onClick={() => handleScrollTo('form')}>Add/Update</button>
        </div>
      </header>
      <section id="dashboard">
        <Dashboard metrics={metrics} />
      </section>
      <section id="stats">
        <StockTable stocks={stocks} onEdit={() => {}} onDelete={() => {}} />
      </section>
      <section id="form">
        <StockForm onAddOrUpdate={() => {}} />
      </section>
    </div>
  );
};

export default App;



/*

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import AdicshanTxt from './AdicshanTxt.js';
import Exam_prediction from './Exam_prediction.js';
import Nlp_code from './nlp_code.js';

function App() {
  
  return(
    
    <Router>
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/nlp" element={<AdicshanTxt />} />
      <Route path="/examPredictor" element={<Exam_prediction />} />
      <Route path="/code" element={<Nlp_code />}/>
     
    </Routes>
  </Router>

  );
  
}

export default App;
*/



