import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ClassList } from './screens/ClassList';
import { Home } from './screens/Home';
import { ClassRecomm } from './screens/ClassRecomm';
import { MyPage } from './screens/MyPage';
import { ClassRecommAsk } from './screens/ClassRecommAsk';
import { WatchClass } from './screens/WatchClass';
import { ClassRecommFinal } from './screens/ClassRecommFinal';
import { ClassRecommResult } from './screens/ClassRecommResult';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/classList" element={<ClassList />} />
          <Route path="/" element={<Home />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/classRecomm" element={<ClassRecomm />} />
          <Route path="/classRecommAsk" element={<ClassRecommAsk />} />
          <Route path="/classRecommFinal" element={<ClassRecommFinal />} />
          <Route path="/classRecommResult" element={<ClassRecommResult />} />
          <Route path="/watchClass" element={<WatchClass />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
