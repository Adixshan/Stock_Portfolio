import React ,{useState,useEffect,useRef} from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-okaidia.css';
import CodeMirror from 'codemirror';
import './nlp_code.css';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons';

import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {faCopy} from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

 

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'; // You can choose a different theme if you prefer
import 'codemirror/mode/python/python';
import 'codemirror/addon/display/placeholder';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
import 'codemirror/keymap/sublime';







const Nlp_code =() => {

    const [msg,setMsg]=useState('');
    const [code,setCode]=useState('');

    const codeMirrorRef = useRef(null);

useEffect(()=>{
    Prism.highlightAll();
},[]);



    



    const navigate=useNavigate();

const handleMsg=(event)=>{
    setMsg(event.target.value);
}
    

const handleHome =()=>{
navigate('/');
}

const handleInputMsg = async () => {
   
    try {
      const response = await fetch('http://localhost:5000/nlp_code_input', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ msg }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      let temp='';
      for (let i =0; i<data.length; i++){
        setTimeout(()=>{
          temp=temp+data.charAt(i);
          setCode(temp);
          
          Prism.highlightAll();
        },i*100);
       
      }
     
    //  if(codeMirrorRef.current){
    //    codeMirrorRef.current.setValue(data);
     // }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    return (
        <div className='nlp_code  '>
            
            <div  className='code_header'>
                Adicshan
                <button className='home_icon' onClick={handleHome}>
                    <FontAwesomeIcon icon={faHome} style={{width:'30px',height:"30px"}} />
                </button>
            </div>
         

         
              <div id="input_container">
               <input id='input_msg'  placeholder='Message Adicshan...' value={msg} onChange={handleMsg} />
               <FontAwesomeIcon onClick={handleInputMsg} icon={faArrowAltCircleDown} style={{width:"28px",height:'28px',cursor:"pointer",backgroundColor:"rgb(1, 1, 74)",border:"none",color:"white",position:"absolute",bottom:"10px",right:"10px"}} />
               </div>
               
           <pre id="code">
            <code className='language-python '>
            
              {code}

            </code>
           </pre>
   
          
        </div>
    );
};

export default Nlp_code;