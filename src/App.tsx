import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/style/App.scss';

import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
