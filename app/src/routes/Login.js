import React from 'react'
import { Link } from 'react-router-dom';
import env from '../cofig';
import "./Postdata";
import "./style/login.css";
import Postdata from './Postdata';

function Login({email,setemail,pass,setpass}) {

  const api = env.api;
  const handle = (event)=>{
    if(event.target.name === "email"){
      setemail(event.target.value);
    }else{
      setpass(event.target.value);
    }
  }
  const submit = async ()=>{
    const result = await Postdata(`${api}/login`,{email: email , pass: pass});
    console.log(result)
    }
  
  return (
    <div>
      <Link to="/Register">Register</Link>
      
      <div className='container'>
        <div className='mt-3'>
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
      
    </div>
  );
  }

export default Login;