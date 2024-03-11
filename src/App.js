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
