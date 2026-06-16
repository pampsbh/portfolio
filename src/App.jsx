import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/components/pages/HomePage';
import CasePage from '@/components/pages/CasePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case/:slug" element={<CasePage />} />
    </Routes>
  );
}

export default App;
