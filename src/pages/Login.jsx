import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    setGeneralError('');

    // Validar e-mail
    if (!email) {
      newErrors.email = '⚠️ E-mail é obrigatório!';
    } else if (!validateEmail(email)) {
      newErrors.email = '⚠️ E-mail inválido!';
    }

    // Validar senha
    if (!password) {
      newErrors.password = '⚠️ Senha é obrigatória!';
    } else if (!validatePassword(password)) {
      newErrors.password = '⚠️ Senha deve ter pelo menos 6 caracteres!';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const result = login(email, password);
      if (result.success) {
        navigate('/');
      } else {
        setGeneralError(result.error);
      }
    }
  };

  return (
    <div className="login-container">
      <img className="particulas" src="/particulas.png" alt="particulas" />
      <img className="sol" width="10%" src="/sol.png" alt="sol" />
      
      <div className="login-box">
        <h1 className="login-title">Bem-vindo à Mars</h1>
        <p className="login-subtitle">Faça login para continuar</p>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input 
              type="email" 
              id="email" 
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <button type="submit" className="login-btn">Entrar</button>
          {generalError && <span className="error-message">{generalError}</span>}
        </form>

        <div className="login-info">
          <p className="info-text">
            <strong>Credenciais de teste:</strong><br />
            E-mail: <code>admin@gmail.com</code><br />
            Senha: <code>123456</code>
          </p>
        </div>
      </div>
    </div>
  );
};
