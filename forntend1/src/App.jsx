import { useState } from 'react';
import './App.css'
import Re from './assets/Re';
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
     <button>login</button>
     <div className="re">
      <p>Don't have an account ? </p>
      <h4>Register</h4>
     </div>
     </div>
     <Re/>
     </div>
    
  )
}
export default App;