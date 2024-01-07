import React from 'react';
import "./style/register.css";
import { Link } from 'react-router-dom';
import "./Postdata"
import Postdata from './Postdata';
import env from "../cofig"
function Register({email,setemail,pass,setpass,phone,setphone,date,setdate,pass_conf,setpassconf,name,setname}) {
  const api = env.api;

  const submit = async ()=>{
    let data = {
      email : email,
      name : name,
      phone : phone,
      pass : pass,
      pass_conf : pass_conf,
      dob : date
    }
    
    let result = await Postdata(`${api}/register`,data)
    console.log(result)
  }
 const handle = (event)=>{
  const field = event.target.name;
  const value = event.target.value;
  switch(field){
    case "name":
      setname(value);
      break;
    case "email":
      setemail(value);
      break;
    case "pass":
      setpass(value);
      break;
    case "dob":
      setdate(value)
      break;
    case "phone":
      setphone(value)
      break;
    case "pass_conf":
      setpassconf(value);
      break;
  }

 }
 

  return (
   <div>
    
    <div className='container'>
      <div className='mt-3' >
        <h1>Register</h1>
        <label>Enter your name</label>
        <input type='text' name='name' value={name} onChange={handle}  required/>
      
      <div >
        <label>Email</label>
        <input type='text' name='email' value={email} onChange={handle} required/>
      </div>
      <div >
        <label>phone number</label>
        <input type='number' name='phone' value={phone} onChange={handle} required/>
      </div>
      <div >
        <label>Date of birth</label>
        <input type='date' name='dob' value={date} onChange={handle} required/>
      </div>
      <div >
        <label>Enter your password</label>
        <input type='text' name='pass' value={pass} onChange={handle} required/>
      </div>
      <div >
        <label>confirm password</label>
        <input type='text' name='pass_conf' value={pass_conf} onChange={handle} required/>
      </div>
      <button onClick={submit}>submit</button>
      <Link to="/">Login</Link>
      </div>
    </div>
   </div>
  );
}

export default Register;