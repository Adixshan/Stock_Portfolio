import React from "react";
import "./Home.css";
import backImg from './backImage.png';
import logoImg from './Adicshan_Logo.png';
import examIcon from './exam.png';
import nlpIcon from './nlp.png';
import { useNavigate } from "react-router-dom";


function Home(){
const navigate =useNavigate();
const handleExamPredictor=()=>{
navigate('/examPredictor');
};

const handleNLP=()=>{
navigate('/nlp');
};

const handleNLP_code=()=>{
    navigate('/code');
};



    return(
<div className="home ">
         
         <div className="Mantra" style={{color:"yellow",fontSize:"20px",fontFamily:"sans-serif",position:"absolute",top:"30px"}}>
             कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।<br />
             मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
         </div>
         
         
<div className="con">

    <div id="examPredictor" onClick={handleExamPredictor} className="con-child">
        <img className="service-icon" id="examPredictorLogo" src={examIcon} alt="error"/>
        <div className="service-title">Result Predictor</div>
    </div>

    <div id="paraQues" onClick={handleNLP} className="con-child">
        <img className="service-icon" id="paraQuesLogo" src={nlpIcon} alt="error"/>
        <div className="service-title">Ask?</div>
    </div>

    <div id="nlp_code" onClick={handleNLP_code} className="con-child">
        <img className="service-icon" id="examPredictorLogo" src={examIcon} alt="error"/>
        <div className="service-title">Code generator</div>
    </div>
</div>

<div className="footer">
    jelll
</div>

</div>
    );
}
export default Home;