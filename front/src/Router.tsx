import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ClassList } from './screens/ClassList';
import { Header } from './components/Header';
import { Home } from './screens/Home';

const AppRouter = (): JSX.Element => {
  return (
    <Router>
      <Header className={undefined} divClassName={undefined} />
      <Routes>
        <Route path="/classList" element={<ClassList />} />
        <Route path="/" element={<Home />} />


      </Routes>
    </Router>
  );
};

export default AppRouter;
