import { useState } from 'react';
import './App.css'
import Re from './assets/Re';
import Lo from './assets/Lo';

import { Routes, Route } from "react-router-dom";

function App(){
 const [an,setAn]= useState([]);







  return(
    <div className='mai'>


  

    <Routes>
      <Route path='/' element={<Lo/>} />
       <Route path='/register' element={<Re/>} />
    </Routes>

     </div>
    
  )
}
export default App;