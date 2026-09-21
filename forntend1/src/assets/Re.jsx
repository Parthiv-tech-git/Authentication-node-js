import  './re.css'
import { Link } from 'react-router-dom';


function Re(){
        return(
 <div className="co">
<div className="mainco">
      <h1> Register </h1>
     <input type="text" placeholder='Name' />
     <input type="email"  placeholder='Email' />
     <input type="text"  placeholder=' creaete a password' />
     <input type="text"  placeholder=' conform  the  password' />

     <input type="text"  placeholder='phone no' />

     <button>sign up</button>
     <div className="re">
      <p>I  have an account ? </p>
      <Link to='/'><h4>sign in</h4></Link>
      
     </div>
     </div>
 </div>       
    )
}
export default Re;