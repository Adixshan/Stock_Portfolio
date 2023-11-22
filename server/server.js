const express= require('express');
const bodyParser=require('body-parser');
const {spawn}=require('child_process');
const port=3001;
const path=require('path');
const app=express();
const cors= require('cors');
const exp = require('constants');

app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.post('/ques',(req,res)=>{

const {paragraph,question}=req.body;


const pythonScriptPath=path.join(__dirname,'text.py');
const nlp_process= spawn('python',[pythonScriptPath,paragraph,question]);
nlp_process.stdout.on('data',(data)=>{
    const output=data.toString();
    console.log(output);
    res.status(200).json({output:output});
});
nlp_process.stderr.on('data',(data)=>{
    const error=data.toString();
    console.log('error', error);
});
nlp_process.on('close',(code)=>{
    console.log(`python process execute with code ${code}`);
});


});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});