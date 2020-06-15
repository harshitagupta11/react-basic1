import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.js'
import './index.css';

let greet="" ;
const greetStyle={}
const divStyle={
 
  display: ' flex',
  
  alignItems:'center', 
 flexDirection:'column'
}
const heading={
background:"yellow",color:'magenta',borderRadius:'10px',margin:'200px 0px 0px',padding:'5px',fontWeight:'bold',textShadow:'0px 2px 4px #ffe9c5',fontFamily:'"Josefin Sans", sans-serif'
}
let currentTime= new Date().getHours();
if(currentTime>=1 && currentTime<12){
  greet='Good Morning'
  greetStyle.color='green'
}
else if(currentTime>=12 && currentTime <=17){
  greet='Good Afternoon'
  greetStyle.color='orange'
}else{
  greet ='Good Night'
  greetStyle.color='grey'
}
function random(){
  return( `rgba(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.random().toFixed(1)})`)
}
function randomBackground(){
document.body.style.background=`linear-gradient(45deg, ${random()} 0%, ${random()} 35%, ${random()} 100%)`;
}
setInterval(randomBackground,1000);
ReactDOM.render(
  <>
  <div style={divStyle}>
  <div>
  <h1 style={heading}>Hello Geek, <span style={greetStyle}> {greet}</span> &#128515;</h1></div>
  
  <Clock /> 
</div>

</>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


