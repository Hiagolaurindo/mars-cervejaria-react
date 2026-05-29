import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Header.css';

export const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm('Tem certeza que deseja sair?')) {
      logout();
      navigate('/');
    }
  };

  return (
    <header className="cabecalho">
      <img className="cabecalho-img" src="/logobranca.svg" alt="logo mars" />
      <nav className="cabecalho-txt">
        {user ? (
          <>
            <Link className="cabecalho-txt-it" to="/inicio">INÍCIO |</Link>
            <Link className="cabecalho-txt-it" to="/sobre">SOBRE A MARS |</Link>
            <Link className="cabecalho-txt-it" to="/contatos">CONTATOS |</Link>
            <Link className="cabecalho-txt-it" to="/adquira">ADQUIRA A SUA |</Link>
            <div className="user-info">
              <span className="user-email">{user.email}</span>
              <button className="logout-btn" onClick={handleLogout}>Sair</button>
            </div>
          </>
        ) : (
          <Link className="cabecalho-txt-it" to="/login">LOGIN |</Link>
        )}
      </nav>
    </header>
  );
};
