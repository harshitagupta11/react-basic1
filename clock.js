import React, {useState} from 'react';

function Clock(){
  let time= new Date().toLocaleTimeString();
const [ctime,updtime]=useState(time);
const tick=()=>{
  updtime(new Date().toLocaleTimeString())
}
const clockStyle={
  background:"black",color:'white',borderRadius:'10px',margin:'15px 0px 0px',padding:'5px',fontWeight:'bold',textShadow:'0px 2px 4px #ffe9c5',fontFamily:'"Josefin Sans", sans-serif'
}
setInterval(tick,1000)
return(
   <>
<div style={clockStyle}>{ctime}</div>

</>
);
}
export default Clock;