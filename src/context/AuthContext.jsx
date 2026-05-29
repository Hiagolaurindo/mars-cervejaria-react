import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const VALID_USERS = [
    { email: 'admin@gmail.com', password: '123456' },
    { email: 'usuario@gmail.com', password: 'senha123' },
    { email: 'teste@gmail.com', password: 'teste123' }
  ];

  useEffect(() => {
    const savedUser = localStorage.getItem('marsUserSession');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const validUser = VALID_USERS.find(u => u.email === email && u.password === password);
    
    if (!validUser) {
      return { success: false, error: '❌ E-mail ou senha incorretos!' };
    }

    const userData = {
      email: email,
      loginTime: new Date().toISOString()
    };

    localStorage.setItem('marsUserSession', JSON.stringify(userData));
    setUser(userData);
    return { success: true };
  };

  // Fazer logout
  const logout = () => {
    localStorage.removeItem('marsUserSession');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};
