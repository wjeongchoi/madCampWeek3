import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Tab1 from './screens/Tab1';
import Tab3 from './screens/Tab3';
import { ClassList } from './screens/ClassList';
import { Home } from './screens/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/tab1" element={<Tab1 />} />
          <Route path="/classList" element={<ClassList />} />
          <Route path="/" element={<Home />} />

          <Route path="/tab3" element={<Tab3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
