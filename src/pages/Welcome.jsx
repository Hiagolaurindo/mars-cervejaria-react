import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Welcome.css';

export const Welcome = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Se o usuário está logado, redireciona para /inicio
  useEffect(() => {
    if (user) {
      navigate('/inicio');
    }
  }, [user, navigate]);

  return (
    <div className="welcome-container">
      <img className="particulas" src="/particulas.png" alt="particulas" />
      <img className="sol" width="10%" src="/sol.png" alt="sol" />
      
      <div className="welcome-content">
        <img className="welcome-logo" src="/logobranca.svg" alt="Mars Logo" />
        
        <h1 className="welcome-title">Bem-vindo à Mars Cervejaria</h1>
        
        <p className="welcome-subtitle">
          Descubra o melhor em cervejas artesanais
        </p>
        
        <p className="welcome-description">
          A cada gole, uma sensação única. Explore nossos sabores especiais e 
          faça parte dessa experiência incrível.
        </p>
        
        <Link to="/login" className="welcome-btn">
          Fazer Login
        </Link>
        
        <p className="welcome-footer">
          Não tem conta? <span>Entre com as credenciais de teste</span>
        </p>
      </div>
    </div>
  );
};
