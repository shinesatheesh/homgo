import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


import "./style/login.css";

function Login() {
  const api = "http://localhost:8000/api"
  const [email , setemail] = useState("");
  const [pass , setpass] = useState("");
  const handle = (event)=>{
    if(event.target.name === "email"){
      setemail(event.target.value);
    }else{
      setpass(event.target.value);
    }
  }
  const submit = async ()=>{
    try{
      const response = await axios.post(`${api}/login`,{
        email: email,
        pass : pass
      })
      if(response){
        console.log(response.data)
      }
    }catch(error){
      console.log("error")
    }
  }
  return (
    <div>
      {/* <Link to="/Register">Register</Link> */}
      
      <div>
        <h1>login</h1>
        <label>Email</label>
        <input type='text' onChange={handle} 
          value={email}
          name='email' required /><br/>

        <label>password</label>
        <input type='password' onChange={handle} 
          value={pass}
          name="pass" required/><br/>
        <button onClick={submit}>sign in</button>
      </div>
      
    </div>
  );
}

export default Login;