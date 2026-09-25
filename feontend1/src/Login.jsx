import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import Kishan from "./Kishan";


function Login(){
    
     const [email,setemail]=useState('');
     const [pass,setpass]=useState('');

     const naviget=useNavigate();

    async function handle(){
             let result = await fetch('http://localhost:8000/login',{
                method:"post",
                body:JSON.stringify({email,pass}),
                headers:{
                    'Content-Type':'application/json'
                }

             })
             result= await result.json();
              console.log(result);
             if(result.name){
                naviget('/');
             }else{
                naviget('/error');
             }

     }

    return (
           <> 
            <Kishan/>
        <div style={{display:"flex",justifyContent:"center",margin:"20px"}}>
           
           <div  style={{borderRadius:"20px",width:"270px",height:"300px",display:"flex",flexDirection:"column",gap:"30px",backgroundColor:"silver", alignItems:"center"}}>
              <h1>LOGIN</h1>
              <input style={{width:"90%",height:"35px",borderRadius:"10px"}} type="text" value={email} onChange={(e)=>{
                setemail(e.target.value);
              }} placeholder="Email@.com" />
               <input style={{width:"90%",height:"35px",borderRadius:"10px"}} type="text"  value={pass} onChange={(e)=>{
                  setpass(e.target.value);
               }} placeholder="Password" />
               <button type="button" style={{ textAlign:"center", borderRadius:"20px", height:"40px", width:"40%", backgroundColor:"blue"}} onClick={handle}  >Login</button>
           </div>

        </div>
        </>
    )
}
export default Login;