import React, { useState } from 'react';
import '../styles/Pages.css';

export const Buy = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    cerveja: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Obrigado por seu pedido! ' + formData.username);
    setFormData({ username: '', email: '', cerveja: '' });
  };

  return (
    <div>
      <img className="particulas" src="/particulas.png" alt="particulas" />
      
      <div id="form">
        <form onSubmit={handleSubmit}>
          <img className="titulo-img" src="/logo.svg" alt="logomars" />
          <h2 className="titulo">Adquira a sua</h2>
          
          <label htmlFor="username">Nome</label>
          <div className="input">
            <i className="fa-solid fa-user"></i>
            <input 
              id="username" 
              name="username" 
              placeholder="insira seu nome" 
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <label htmlFor="email">Email</label>
          <div className="input">
            <i className="fa-solid fa-envelope"></i>
            <input 
              id="email" 
              name="email" 
              placeholder="insira seu email" 
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <label htmlFor="cerveja">Cerveja</label>
          <div className="input">
            <i className="fa-solid fa-wine-glass"></i>
            <input 
              id="cerveja" 
              name="cerveja" 
              placeholder="Escolha sua cerveja" 
              type="text"
              value={formData.cerveja}
              onChange={handleChange}
              required
            />
          </div>

          <div id="btn">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>

      <img className="cerveja-ad" src="/3 MARS BEER.png" alt="cervejasmars" />
    </div>
  );
};
