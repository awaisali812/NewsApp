import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { useState } from 'react';

 function App()  {
 let  pagesize=15;
 let apikey='452994071aca4b9cb43614ef5d509d2d'
  const [progress,setProgress]=useState(0)
  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <div className='container'>
          <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey}   key="general" language='en' pageSize={pagesize} country="us" category="general"/>} />
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey}   key="business" language='en' pageSize={pagesize} country="us" category="business"/>} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey}   key="entertainment" language='en' pageSize={pagesize} country="us" category="entertainment"/>} />
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey}   key="health" language='en' pageSize={pagesize} country="us" category="health"/>} />
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey}   key="science" language='en' pageSize={pagesize} country="us" category="science"/>} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey}   key="sports" language='en' pageSize={pagesize} country="us" category="sports"/>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey}   key="technology" language='en' pageSize={pagesize} country="us" category="technology"/>} />
        </Routes>
          </div>
        </Router>
        
      </div>
    )
}

export default App;
