import './App.css';
import React, { useEffect, useState } from 'react';
import apiCall from '../APIcalls';

function App() {

  const [section, setSection] = useState("arts")
  const [articles, setArticles] = useState([])

  useEffect(()=>{
    apiCall("arts")
    .then(data=>setArticles(data.results))
  },[section])

  return (
    <div className="App">
  
    </div>
  );
}

export default App;
