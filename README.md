# Stock Portfolio Tracker [Website link](https://magnificent-florentine-8c79e9.netlify.app/)


## Overview
The **Stock Portfolio Tracker** is a modern web application that helps users manage and track their stock investments. It provides a dashboard with key portfolio metrics, a detailed stock table, and a form to add or update stocks. The application is built using ReactJS for the frontend and can be connected to a backend API for data persistence and advanced features.

## Features
- **Dashboard**: Displays total portfolio value, top-performing stock, and a pie chart showing portfolio distribution.
- **Stock Table**: Lists all stocks with details like name, ticker, quantity, buy price, current price, and total value.
- **Add/Update Form**: Allows users to add new stocks or update existing ones.
- **Smooth Navigation**: Quick access to sections via buttons at the top of the page.

---

## Technologies Used
- **Frontend**: ReactJS, Bootstrap, Chart.js
- **Backend (Optional)**: Node.js or Java Spring Boot
- **Styling**: Custom CSS with modern design principles
- **Icons**: FontAwesome

---

## Prerequisites
Ensure you have the following installed:
1. **Node.js** (v14 or later)
2. **npm** (comes with Node.js)
3. **Code Editor** (e.g., VS Code)

---

## How to Run Locally
### Step 1: Clone the Repository


### Step 2: Install Dependencies
Run the following command to install all required dependencies:


### Step 3: Start the Application
Start the React development server:

This will open the application in your default browser at `http://localhost:3000`.

---

## Application Structure

### 1. **Dashboard**
- Displays total portfolio value, top-performing stock, and a pie chart showing the portfolio distribution.
- Pie chart colors are dynamically assigned based on stock data.

### 2. **Stock Table**
- Lists all stocks with the following columns:
  - Name
  - Ticker
  - Quantity
  - Buy Price
  - Current Price
  - Total Value
- Provides clear formatting for gains and losses.

### 3. **Add/Update Form**
- Includes input fields for:
  - Stock Name
  - Ticker Symbol
  - Quantity
  - Buy Price
- Form validations ensure proper data entry.
- Automatically updates the dashboard and table upon submission.

### 4. **Navigation Buttons**
- Located at the top-right corner for quick access to:
  - Dashboard
  - Stats
  - Add/Update Form
- Smooth scrolling to respective sections.



## Backend Integration (Optional)
### Step 1: Setup Backend
Use a backend API (Node.js or Spring Boot) to handle persistent data. Configure routes for:
- Fetching stocks (`GET /api/stocks`)
- Adding/updating stocks (`POST /api/stocks`)
- Deleting stocks (`DELETE /api/stocks/:ticker`)

### Step 2: Connect Frontend to Backend
Update the API base URL in a `.env` file:

REACT_APP_API_BASE_URL=http://localhost:8080


## Styling
The application uses:
- Bootstrap for layout and grid system.
- Custom CSS for buttons, forms, and tables to ensure a modern design.
- Responsive design principles for usability across devices.

---

## Future Enhancements
- User authentication for personalized portfolios.
- Real-time stock price updates using APIs like Alpha Vantage or Yahoo Finance.
- Data visualization enhancements with more charts and graphs.

---

## Troubleshooting
- If the application does not load, ensure all dependencies are installed by running:

- Check the browser console for errors and ensure the backend (if used) is running.

---

## Conclusion
The Stock Portfolio Tracker is a powerful tool to manage investments effectively. Its user-friendly interface and modern design make it ideal for both casual and professional investors. Follow the steps above to get started and customize the application as needed.

