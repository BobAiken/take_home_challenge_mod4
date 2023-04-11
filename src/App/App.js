import './App.css';
import React, { useEffect, useState } from 'react';
import apiCall from '../APIcalls';
import Homepage from '../Homepage/homepage';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {

  const [section, setSection] = useState("arts")
  const [articles, setArticles] = useState([])

  useEffect(()=>{
    apiCall("arts")
    .then(data=>setArticles(data.results))
  },[section])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage articles={articles}/>}/>
      </Routes>
    </div>
  );
}

export default App;
