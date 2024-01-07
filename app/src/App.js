import React, { useState } from "react";
import Login from './routes/Login';
import Register from './routes/Register';
import { Route,Routes } from "react-router-dom";


function App() {
  const [email , setemail] = useState("");
  const [pass , setpass] = useState("");
  const [date , setdate] = useState("");
  const [pass_conf, setpassconf] = useState("");
  const [phone , setphone] = useState('');
  const [name , setname] = useState('')
  return (
    <>
    <Routes>
      <Route path="/" element={<Login
        email = {email}
        setemail ={setemail}
        pass={pass}
        setpass={setpass}
      />} />
      <Route path="/Register" element={<Register
        email = {email}
        setemail ={setemail}
        pass={pass}
        setpass={setpass}       
        phone = {phone}
        setdate = {setdate}
        date = {date}
        setphone = {setphone}
        pass_conf = {pass_conf}
        setpassconf = {setpassconf}
        name = {name}
        setname = {setname}

      />} />
    </Routes>
    </>
  );
}

export default App;
