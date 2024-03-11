import logo from './logo.svg';
import './AdicshanTxt.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Loading from './Double Ring-1s-200px.gif';
import backImg from './backImage.png';
import logoImg from './Adicshan_Logo.png';
import { useNavigate } from 'react-router-dom';

import { faHome } from '@fortawesome/free-solid-svg-icons';
function AdicshanTxt() {

const [paragraph,setParagraph]=useState('');
const [question,setQuestion]= useState("");
const [answer,setAnswer]=useState('');

const navigate =useNavigate();

const handleHome=()=>{
  navigate('/');
};

const handleParaChange=(event)=>{
  setParagraph(event.target.value);
};

const handleQuesChange=(event)=>{
  setQuestion(event.target.value);

};
const handleClose=(event)=>{
  setParagraph('');
  setAnswer('');
  setQuestion('');
  const ans=document.getElementById('ans');
  const cont=document.getElementById('cont');
  cont.style.display="block";
  ans.style.display="none";
}



const handlePressEnter = async (event) => {
  event.preventDefault();
  const ans=document.getElementById('ans');
 
  ans.style.display="block";

  setAnswer('');


  try {
    const response = await fetch('http://localhost:3001/ques', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ paragraph, question })
    });

    if (response.ok) {
      const answer = await response.json();
     const text=answer.output;
     const load=document.getElementById('loading');
     for( let i=0; i<text.length;i++){
      setAnswer(text.substring(0,i+1));
      await new Promise(resolve=>setTimeout(resolve,100));
      
     }
    } else {
      console.error('Server responded with an error', response.statusText);
    }
  } catch (error) {
    console.log('error:', error);
  }
};



  return (
    <div className="AdicshanTxt">

       
<img style={{position:"fixed",left:"0px",top:"0px",width:"250vh",height:"50vh"}} src={backImg} alt="error"/>
     
      <img style={{position:"fixed",left:"15px",top:"20px",width:"40px",height:"40px",borderRadius:"20px",backgroundColor:"white"}} src={logoImg} alt="error"/>
<button onClick={handleHome} style={{color:'white',fontWeight:'bold',position:'fixed',top:"10px",right:"-10px",background:"transparent",border:"none",width:'100px',height:'50px'}} >
  <FontAwesomeIcon icon={faHome} style={{width:"30px",height:"30px"}}/>
  </button>
     
      <div >
     <textarea className='paragraph  d-flex ' placeholder='Type or Paste your text here....'
     value={paragraph}
     onChange={handleParaChange}
     />
     <button  className='close' onClick={handleClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
     
  
  <textarea
    className='question d-flex'
    placeholder='Enter your question....'
    value={question}
    onChange={handleQuesChange}
  />

  <button className='search' id='sea' onClick={handlePressEnter}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>



    <p className='answer mt-5' id='ans' style={{fontSize:"18px",display:"none",fontFamily:"sans-serif "}}>
     
     
     <div id="loading" >
  <img style={{width:"30px",height:"30px"}} src={Loading} alt="Loading..."/>

</div>
{answer}
</p>

<div id="cont" className='container mt-5'>
     <div className="row d-flex justify-content-center">
        <div className="col-md-6 mt-2" style={{width:"300px"}}>
          {/* Content for the first div */}
          <div className="border p-3" style={{borderWidth:"5px",borderRadius:"10PX"}}>
          <p><span style={{fontSize:"25px",fontWeight:"bolder"}}>Have any doubt?</span><br />
            Type or paste paragraph and get the answer regarding to your question
              
            </p>
           
          </div>
        </div>

        <div className="col-md-6 mt-4">
          {/* Content for the second div */}
          <div className="border p-3" style={{borderRadius:"10px"}}>
            
          <p><span style={{fontSize:"25px",fontWeight:"bolder"}}>Adicshan</span> can make mistakes in trying to give correct answer<br />So ask question in context of given text.</p>
         
          </div>
        </div>
      </div>
      </div>
    
     
     </div>
    
  
    </div>
  );
}

export default AdicshanTxt;
