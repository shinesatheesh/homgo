import React from "react";
import Login from './routes/Login';
import Register from './routes/Register';
import { Route,Routes } from "react-router-dom";


function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
    </Routes>
    </>
  );
}

export default App;
