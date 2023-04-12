import './App.css';
import React, { useEffect, useState } from 'react';
import apiCall from '../APIcalls';
import Homepage from '../Homepage/homepage';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';

function App() {

  const [section, setSection] = useState("home")
  const [articles, setArticles] = useState([])

  useEffect(()=>{
    apiCall(section)
    .then(data=>setArticles(data.results))
  },[section])

  return (
    <div className="App">
      <Header section={section} setSection={setSection}/>
      <Routes>
        <Route path="/" element={<Homepage articles={articles}/>}/>
      </Routes>
    </div>
  );
}

export default App;
