import './App.css'
function App(){
  const  da= async()=>{
 let a= await fetch(

     "https://huggingface.co/api/datasets/TfqDeadlox636/icrm-hitek-fulldb/parquet/default/train");
     let b = await a.json();
     console.log(b)
  }

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