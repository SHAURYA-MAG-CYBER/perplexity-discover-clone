import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Discover from './pages/Discover';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Discover/>} />
          <Route path='/detail/:title' element={<DetailPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
