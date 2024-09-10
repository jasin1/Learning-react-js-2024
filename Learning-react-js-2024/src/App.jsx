// import { useState } from 'react';
import './App.css';
import Colors from './pages/Colors/Colors.jsx';
import Home from './pages/Home/Home.jsx';
import {Routes, Route} from "react-router-dom";

function App() {


  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Colors" element={<Colors/>}/>
    </Routes>
    </>
  )
}

export default App
