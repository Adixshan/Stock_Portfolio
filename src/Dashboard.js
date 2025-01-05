import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import "./Dashboard.css";
import photo from "./Aditya_photo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = ({ metrics}) => {
  const { totalValue, topStock, distribution } = metrics;

  const data = {
    labels: Object.keys(distribution),
    datasets: [
      {
        data: Object.values(distribution),
        backgroundColor: ['#007bff', '#6610f2', '#6f42c1', '#e83e8c', '#28a745']
      }
    ]
  };

  return (
    <div className="dashboard-container container-fluid">
      {/* User Info */}
      <div className="user-info d-flex align-items-center mb-4">
        <img 
          src={photo}
          alt="User Logo" 
          className="user-photo rounded-circle me-3"
        />
        <h3 className="welcome-text" style={{color:"white"}}>Welcome, Aditya!</h3>
      </div>


      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card shadow-sm p-3 mb-4">
            <h5 className="card-title" style={{ color: '#007bff' }}>Recent Transactions</h5>
            <table className="table">
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Action</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tesla</td>
                  <td>Buy</td>
                  <td>5</td>
                  <td>$350</td>
                </tr>
                <tr>
                  <td>Apple</td>
                  <td>Sell</td>
                  <td>3</td>
                  <td>$155</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm p-3 mb-4">
            <h5 className="card-title" style={{ color: '#dc3545' }}>Stock Performance</h5>
            <table className="table">
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Change (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google</td>
                  <td style={{ color: '#28a745' }}>+4.8%</td>
                </tr>
                <tr>
                  <td>Amazon</td>
                  <td style={{ color: '#dc3545' }}>-1.2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Main Layout */}
      <div className="row">
        {/* Stats Section */}
        <div className="col-lg-6">
          <div className="row stats-row ms-3"> {/* Added margin-left */}
            <div className="col-sm-4">
              <div className="card shadow-sm p-3 mb-4 stat-card">
                <h4 className="stat-title" style={{ color: '#28a745' }}>Total Portfolio Value</h4>
                <p className="stat-value">${totalValue.toFixed(2)}</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card shadow-sm p-3 mb-4 stat-card">
                <h4 className="stat-title" style={{ color: '#17a2b8' }}>Top Performing Stock</h4>
                <p className="stat-value">{topStock}</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card shadow-sm p-3 mb-4 stat-card">
                <h4 className="stat-title" style={{ color: '#007bff' }}>Number of Stocks</h4>
                <p className="stat-value">{Object.keys(distribution).length}</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card shadow-sm p-3 mb-4 stat-card">
                <h4 className="stat-title" style={{ color: '#dc3545' }}>Average Stock Price</h4>
                <p className="stat-value">${(totalValue / Object.keys(distribution).length).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pie Chart Section */}
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <div className="pie" style={{ width: '90%', height: '500px' }}> {/* Increased size */}
            <h4 className="card-title text-center" style={{ color: 'white' }}>Portfolio Distribution</h4>
            <Pie 
  data={data} 
  options={{ 
    maintainAspectRatio: true, 
    responsive: true, 
    plugins: {
      legend: {
        position: 'bottom', // Position of the legend
        labels: {
          color: '#ffffff', // White color for all labels
          font: {
            size: 14, // Font size
            family: 'Arial, sans-serif', // Font family
          },
        },
      },
    
    },
  }} 
  style={{ maxWidth: '100%', maxHeight: '400px', border: 'none' }} 
/>

          </div>
        </div>
      </div>

      {/* Recent Transactions and Stock Performance */}
      
    </div>
  );
};

export default Dashboard;
