import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './component/AuthPage';
import ERPDashboard from './component/ERPDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<ERPDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
