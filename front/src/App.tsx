import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ClassList } from './screens/ClassList';
import { Home } from './screens/Home';
import { ClassRecomm } from './screens/ClassRecomm';
import { MyPage } from './screens/MyPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/classList" element={<ClassList />} />
          <Route path="/" element={<Home />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/classRecomm" element={<ClassRecomm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
