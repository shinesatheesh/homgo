import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./style/login.css";

function Login() {

  const [email , setemail] = useState("");
  const [pass , setpass] = useState("");
  const handle = (event)=>{
    if(event.target.name == "email"){
      setemail(event.target.value);
    }else{
      setpass(event.target.value);
    }
  }
  console.log(`email ${email}`)
  console.log(`pass ${pass}`)
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
        <button>sign in</button>
      </div>
      
    </div>
  );
}

export default Login;