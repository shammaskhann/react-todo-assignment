import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
