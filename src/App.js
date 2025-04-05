import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import AdminPage from './pages/AdminPage';
import CreatorPage from './pages/CreatorPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NavBar from './components/NavBar';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        style={{ margin: '10px', padding: '10px 20px' }}
        onClick={() => navigate('/login')}
      >
        Login
      </button>
      <button
        style={{ margin: '10px', padding: '10px 20px' }}
        onClick={() => navigate('/admin')}
      >
        Admin
      </button>
      <button
        style={{ margin: '10px', padding: '10px 20px' }}
        onClick={() => navigate('/creator')}
      >
        Creator
      </button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/creator" element={<CreatorPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;