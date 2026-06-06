import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { Header } from './components/Header'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Login } from './pages/Login'
import { Welcome } from './pages/Welcome'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contacts } from './pages/Contacts'
import { Buy } from './pages/Buy'
import { Clientes } from './pages/crud/Clientes'
import { Cervejas } from './pages/crud/Cervejas'
import { Pedidos } from './pages/crud/Pedidos'
import { Relatorio } from './pages/Relatorio'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inicio" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/sobre" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/contatos" element={<ProtectedRoute><Contacts /></ProtectedRoute>} />
          <Route path="/adquira" element={<ProtectedRoute><Buy /></ProtectedRoute>} />
          <Route path="/clientes" element={<ProtectedRoute><Clientes /></ProtectedRoute>} />
          <Route path="/cervejas" element={<ProtectedRoute><Cervejas /></ProtectedRoute>} />
          <Route path="/pedidos" element={<ProtectedRoute><Pedidos /></ProtectedRoute>} />
          <Route path="/relatorio" element={<ProtectedRoute><Relatorio /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
