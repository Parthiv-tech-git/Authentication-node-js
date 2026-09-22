import './lo.css'
import { Link } from 'react-router-dom';



function Lo(){
    return(
 <div className='main'>
     <div className="mainco">
      <h1> LOGIN </h1>
     <input type="text" placeholder='enter the user name' />
     <input type="text"  placeholder='enter the password' />
     <button>login</button>
     <div className="re">
      <p>Don't have an account ? </p>
      <Link to='/'> <h4>Register</h4></Link>
     

     </div>
     </div>
     
     
     
     </div>
    
    )
}export default Lo;