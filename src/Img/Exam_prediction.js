import React, { useState } from "react";
import backImg from './backImage.png';
import logoImg from './Adicshan_Logo.png';
import LoadingGif from './Spin-1s-200px.gif';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


function Exam_prediction(){
  const [toughness, setToughness] = useState('UPSC_IIT_AIIMS_CAT');
  const [hour, setHour] = useState('greater_than_10');
  const [consist, setConsist] = useState('seven');
  const [syllabus, setSyllabus] = useState('hundred');
  const [time, setTime] = useState('eighty');
  const [prediction, setPrediction] = useState('');


  
const navigate =useNavigate();

const handleHome=()=>{
  navigate('/');
};
  
 
    const handleSubmit = async (event) => {
        event.preventDefault();
        const load=document.getElementById('loading');
        load.style.display="block";
        setPrediction("");
    
        try {
          const response = await fetch('http://localhost:3001/exam', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ toughness, hour, consist, syllabus, time })
          });
    
          if (response.ok) {
            load.style.display="none";
            const data = await response.json();
            setPrediction(data.output);
           
         const   doc=document.getElementById('result');
            if(data.output.charAt(0)==='n'){
              doc.style.color='red';
            }
            else{
              doc.style.color="green";
            }
          } else {
            load.style.display="none";

            console.error('Server responded with an error:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return(
      
<div style={{flexDirection:"column"}}  className="container d-flex justify-content-center align-items-center" >
 
<img style={{position:"fixed",left:"15px",top:"20px",width:"40px",height:"40px",borderRadius:"20px",backgroundColor:"white"}} src={logoImg} alt="error"/>

   


  <form className="form" style={{width:"400px",backgroundColor:"rgb(150, 165, 250)",position:"relative",marginTop:"80px",border:"solid black 4px",borderRadius:"20px",height:"auto"}}>
    <p className="d-flex text-center justify-content-center" style={{fontSize:"40px",fontWeight:"bold"}}>Exam predictor</p>
    <div style={{marginLeft:'10px',fontSize:"17px"}} className="form-group">
        <label >Toughness: </label>
        <select style={{marginLeft:"150px",backgroundColor:"black",color:"white"}}  value={toughness} onChange={(e)=>setToughness(e.target.value)}>
            <option>UPSC IIT AIIMS CAT</option>
            <option>NDA NEET CLAT SSC </option>
            <option>CBSE ICSE StateBoard</option>
            <option>Class 6-10</option>
        </select>
        <p>(What's the level of your exam?)</p>
    </div>
    <div style={{marginLeft:'10px',fontSize:"17px"}} className="form-group">
        <label>Hours:</label>
        <select style={{marginLeft:"144px",backgroundColor:"black",color:"white"}} value={hour} onChange={(e)=>setHour(e.target.value)}>
            <option>more than 10</option>
            <option>10</option>
            <option>6</option>
            <option>3</option>
        </select>
        <p>(How many hours do you spend on studying?)</p>
    </div>
    <div style={{marginLeft:'10px',fontSize:"17px"}} className="form-group">
        <label>Consistency:</label>
        <select style={{marginLeft:"100px",backgroundColor:"black",color:"white"}} value={consist} onChange={(e)=>setConsist(e.target.value)}>
            <option>7</option>
            <option>6</option>
            <option>5</option>
            <option>4</option>
            <option>3</option>
        </select>
        <p>(How many days have you actually studied in a week?)</p>
    </div>
    <div style={{marginLeft:'10px',fontSize:"17px"}} className="form-group">
        <label>Syllabus:</label>
        <select style={{marginLeft:"128px",backgroundColor:"black",color:"white"}} value={syllabus} onChange={(e)=>setSyllabus(e.target.value)}>
            <option>100</option>
            <option>80</option>
            <option>60</option>
            <option>40</option>
        </select>
        <p>(What percentage(%) of syllabus have you completed?)</p>
    </div>
    <div style={{marginLeft:'10px',fontSize:"17px"}} className="form-group">
        <label>Time:</label>
        <select style={{marginLeft:"153px",backgroundColor:"black",color:"white"}} value={time} onChange={(e)=>setTime(e.target.value)}>
            <option>80</option>
            <option>60</option>
            <option>40</option>
            <option>20</option>
        </select>
        <p>(What percentage(%) of time remains untill the exam?)</p>
    </div>
    <button  style={{marginLeft:"160px",backgroundColor:"black",border:"none",color:"white",height:"30px",fontSize:"20px",fontWeight:"bold",borderRadius:"5px"}} onClick={handleSubmit}>Check</button>
    <div id='result' style={{fontSize:"30px",color:"red",fontWeight:"bold",marginLeft:"10px"}}><span style={{fontSize:"15px",color:"black"}}>Chance to qualify the exam:   </span>{prediction}</div>
   
    </form>
    <p style={{marginLeft:"5px",marginTop:"15px",fontFamily:"Verdana sans-serif ",fontSize:"20px",fontFamily:"sans-serif"}}>This is a simple A.I model that makes predictions based on data. 
    However, we humans are far better than AI at changing predictions through our hard work and focused preparation for exams.</p>
   
    <button
        onClick={handleHome}
        style={{
          color: 'black',
          fontWeight:'bold',
          position: 'fixed',
          top: '10px',
          right: '-10px',
          width: '100px',
          height: '50px',
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        <FontAwesomeIcon icon ={faHome} style={{width:'30px',height:"30px"}} />
      </button>
 
      <div id="loading" style={{width:"50px",height:"50px",position:"fixed",display:"none"}}>
  <img style={{width:"50px",height:"50px"}} src={LoadingGif} alt="Loading..."/>

</div>
</div>

    );
}

export default Exam_prediction;