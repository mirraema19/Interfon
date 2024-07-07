// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Content from './Components/Contenido'; 
import Hablar from './Components/Hablar';
import Monitorear from './Components/Monitorear';
import Llave from './Components/Llave';
import Login from './Components/Login';
import AdminDashboard from './Components/AdminDashboard';
import './Login.css'; 


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userRole, setUserRole] = useState('');

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Content /> : <Login onLogin={handleLogin} />} />
          <Route path="/hablar" element={isLoggedIn ? <Hablar /> : <Navigate to="/login" />} />
          <Route path="/monitorear" element={isLoggedIn ? <Monitorear /> : <Navigate to="/login" />} />
          <Route path="/llave" element={isLoggedIn ? <Llave /> : <Navigate to="/login" />} />
          <Route path="/admin" element={isLoggedIn && userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
          
          <Route path="/contenido" element={isLoggedIn && userRole === 'user' ? <Content /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
