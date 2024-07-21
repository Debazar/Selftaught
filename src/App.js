import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Courses from './components/Courses';
import Community from './components/Commiunity';
import Blog from './components/Blog';
import Aboutus from './components/Aboutus';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path = "/" element={<Home/>}/>
         <Route path='/Courses' element={<Courses/>}/>
         <Route path='/Community' element={<Community/>}/>
         <Route path='/Blog' element={<Blog/>}/>
         <Route path='/Aboutus' element={<Aboutus/>}/>
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;