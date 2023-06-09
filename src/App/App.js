import './App.css';
import React, { useEffect, useState } from 'react';
import apiCall from '../APIcalls';
import Homepage from '../Homepage/homepage';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Article from '../Article/Article';

function App() {

  const [section, setSection] = useState("home")
  const [articles, setArticles] = useState([])
  const [error, setError] = useState(false)

  useEffect(()=>{
    apiCall(section)
    .then(data=>setArticles(data.results))
    .catch(error=>setError(true))
  },[section])

  return (
    <div className="App">
      <Header section={section} setSection={setSection}/>
      <Routes>
        <Route path="/" element={<Homepage articles={articles}/>}/>
        <Route path=":articleTitle" element={<Article articles={articles}/>}/>
      </Routes>
    </div>
  );
}

export default App;
