import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import Calcul from './pages/calcul';


function App() {
  return (
    <Router>
     
        
        
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/calcul" element={<Calcul />} />
              
            </Routes>
        
     
    </Router>
  );
}

export default App;