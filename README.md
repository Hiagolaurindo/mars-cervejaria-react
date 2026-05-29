# 🍺 Mars Cervejaria - React Login (Parte 1)

Conversão do projeto **MARS-CERVEJARIA** de HTML/CSS para **React** com sistema de login completo.

## 🚀 Instalação e Execução

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```

O projeto abrirá automaticamente em `http://localhost:5173`

### 3. Build para produção
```bash
npm run build
```

## 🔐 Credenciais de Teste

| E-mail | Senha |
|--------|-------|
| `admin@mars.com` | `123456` |
| `usuario@mars.com` | `senha123` |
| `teste@mars.com` | `teste123` |

## 📁 Estrutura do Projeto

```
mars-cervejaria-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Componente de navegação
│   │   └── ProtectedRoute.jsx   # Componente de proteção de rotas
│   ├── context/
│   │   └── AuthContext.jsx      # Context de autenticação
│   ├── pages/
│   │   ├── Login.jsx            # Página de login
│   │   ├── Home.jsx             # Página inicial
│   │   ├── About.jsx            # Página sobre
│   │   ├── Contacts.jsx         # Página de contatos
│   │   └── Buy.jsx              # Página de compras
│   ├── styles/
│   │   ├── index.css            # Estilos globais
│   │   ├── Header.css           # Estilos do header
│   │   ├── Login.css            # Estilos do login
│   │   └── Pages.css            # Estilos das páginas
│   └── main.jsx                 # Ponto de entrada
├── public/                       # Imagens e assets
├── index.html                    # HTML principal
├── package.json                  # Dependências
└── vite.config.js               # Configuração do Vite
```

## ✨ Funcionalidades Implementadas

### ✅ Autenticação
- Login com validação de e-mail e senha
- Mensagens de erro dinâmicas
- Controle de sessão com localStorage
- Manter logado ao atualizar a página

### ✅ Proteção de Rotas
- Rotas protegidas com ProtectedRoute
- Redirecionamento automático para login
- Acesso apenas para usuários autenticados

### ✅ Componentes React
- Context API para gerenciar autenticação
- React Router para navegação
- Componentes funcionais com Hooks

### ✅ Design
- Design responsivo
- Animações CSS
- Integração com imagens originais

## 🧪 Testes

### Teste 1: Login Bem-sucedido
1. Acesse a página
2. Digite: `admin@mars.com` / `123456`
3. Clique em "Entrar"
4. ✅ Redirecionado para a página inicial

### Teste 2: Proteção de Rotas
1. Limpe o localStorage
2. Tente acessar `/` diretamente
3. ✅ Redirecionado para `/login`

### Teste 3: Logout
1. Faça login
2. Clique em "Sair"
3. Confirme
4. ✅ Redirecionado para login

## 📊 Pontuação (Parte 1)

| Critério | Pontos | Status |
|----------|--------|--------|
| Formulário funcional e validações | 0,2 | ✅ |
| Controle de sessão e logout | 0,2 | ✅ |
| Proteção de rotas | 0,1 | ✅ |
| **TOTAL** | **0,5** | **✅ COMPLETO** |

## 🔧 Tecnologias Utilizadas

- **React 18** - Biblioteca UI
- **React Router 6** - Navegação
- **Vite** - Build tool
- **CSS3** - Estilos
- **localStorage** - Persistência de dados

## 📝 Notas

- Este é um sistema educacional
- As credenciais estão no código (não use em produção)
- localStorage não é seguro (apenas para demo)
- Sempre valide no backend em produção

## 🎓 Próximas Etapas

Após a Parte 1, você precisará implementar:
- **Parte 2:** 3 CRUDs (1,5 pontos)
- **Parte 3:** Relatório com JOIN (0,5 pontos)

---

**Desenvolvido para Avaliação N2 - Projeto React**
**Maio de 2026**
