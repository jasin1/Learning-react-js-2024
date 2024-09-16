// import { useState } from 'react';
import './App.css';
import Colors from './pages/Colors/Colors.jsx';
import Words from './pages/Words/Words.jsx'
import Home from './pages/Home/Home.jsx';
import {Routes, Route} from "react-router-dom";

function App() {


  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Colors" element={<Colors/>}/>
    <Route path="/Words" element={<Words/>}/>
    </Routes>
    </>
  )
}

export default App
