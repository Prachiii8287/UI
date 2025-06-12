import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './component/AuthPage';
import ERPDashboard from './component/ERPDashboard';
import AddEmployeeForm from './component/AddEmployeeForm';
import EmployeeListPage from './component/EmployeeListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<ERPDashboard />} />
        <Route path="/add-employee" element={<AddEmployeeForm />} />
        <Route path="/employee-list" element={<EmployeeListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
