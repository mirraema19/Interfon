import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css';
import '../App.css'; 

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userRole = await authenticateUserAndGetRole(username, password);
      onLogin(userRole);
      
      if (userRole === 'admin') {
        navigate('/admin');
      } else if (userRole === 'user') {
        navigate('/contenido');
      } else {
        throw new Error('Rol de usuario no válido');
      }
    } catch (error) {
      console.error('Error de autenticación:', error.message);
    }
  };

  const authenticateUserAndGetRole = async (username, password) => {
    if (username === 'admin' && password === 'admin') {
      return 'admin';
    } else if (username === 'user' && password === 'user') {
      return 'user';
    } else {
      throw new Error('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button className='rojo' onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </div>
  );
};

export default Login;
