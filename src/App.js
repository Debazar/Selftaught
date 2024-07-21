import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Courses from './components/Courses';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path = "/" element={<Home/>}/>
         <Route path='/Courses' element={<Courses/>}/>
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;