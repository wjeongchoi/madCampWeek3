import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header'; // Adjust the import path as needed
import { ClassList } from './screens/ClassList';

const AppRouter = (): JSX.Element => {
  return (
    <Router>
      <Header className={undefined} />
      <Routes>
        <Route path="/classList" element={<ClassList />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
