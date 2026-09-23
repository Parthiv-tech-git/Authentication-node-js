import { useState } from 'react';
import  './re.css'
import { Link } from 'react-router-dom';


function Re(){
    const[det,setDet]=useState({
    name:'',
    email:'',
    phone:'',
    password:'',
    password1:'',
})

const s=()=>{
    let v= Object.values(det);
    if(v.length===''){
        alert("enter your data")
        console.log('hello')
    }
   if(det.password===det.password1){
    console.log('passwords are same')

   setDet({...det,name,email:""})
}
else{
    alert('please make sure the passwods are same')
    
   setDet({...det,name,email:""})

}

}




        return(
 <div className="co">
<div className="mainco">
      <h1> Register </h1>
     <input type="text" placeholder='Name' value={det.name}  onChange={(e)=>{setDet({...det,name:e.target.value})}} required />
     <input type="email"  placeholder='Email' value={det.email} onChange={(e)=>{setDet({...det,email:e.target.value})}}  required/>
     <input type="text"  placeholder=' creaete a password' value={det.password} onChange={(e)=>{setDet({...det,password:e.target.value})}} required/>
     <input type="text"  placeholder=' conform  the  password' value={det.password1} onChange={(e)=>{setDet({...det,password1:e.target.value})}} required />

     <input type="number"  placeholder='phone no'  value={det.phone} onChange={(e)=>{setDet({...det,phone:e.target.value})}} required/>

     <button onClick={s}>sign up</button>
     <div className="re">
      <p>I  have an account ? </p>
      <Link to='/login'><h4>sign in</h4></Link>
      
     </div>
     </div>
 </div>       
    )
}
export default Re;