import { useState } from 'react';
import './App.css'
function App(){
 const [an,setAn]= useState([]);
//  const da = async()=>{
//  let a= await fetch(
//      "https://datasets-server.huggingface.co/rows?dataset=TfqDeadlox636%2Ficrm-hitek-fulldb&config=default&split=train&offset=0&length=100");
// let b= await a.json();
// console.log(b)


//  }









  return(
    <div className='main'>
     <div className="mainco">
      <h1> LOGIN </h1>
     <input type="text" placeholder='enter the user name' />
     <input type="text"  placeholder='enter the password' />
     <a href="">forgot password</a>
     <div className="in">
      <button onClick={da}>sigin</button>
     <button>register</button>
     </div>
     </div>
    </div>
  )
}
export default App;
