# Integração Firebase / Firestore

## O que foi implementado

Foram adicionados 3 CRUDs completos usando Firebase Firestore:

1. Clientes
2. Cervejas
3. Pedidos

Também foi criada a tela de Relatório, simulando JOIN entre:

- pedidos.clienteId -> clientes.id
- pedidos.cervejaId -> cervejas.id

O JOIN é feito em React usando `map()` e `find()`.

## Arquivos principais

- `src/firebase/config.js`: configuração do Firebase.
- `src/hooks/useFirestoreCrud.js`: hook reutilizável com Create, Read, Update e Delete.
- `src/pages/crud/Clientes.jsx`: CRUD de clientes.
- `src/pages/crud/Cervejas.jsx`: CRUD de cervejas.
- `src/pages/crud/Pedidos.jsx`: CRUD de pedidos.
- `src/pages/Relatorio.jsx`: relatório com JOIN.
- `src/styles/Admin.css`: estilo das telas de CRUD e relatório.

## Como configurar o Firebase

1. Acesse o Firebase Console.
2. Crie um projeto.
3. Crie um aplicativo Web.
4. Copie as credenciais do Firebase.
5. Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`.
6. Cole suas credenciais no `.env`.

Exemplo:

```env
VITE_FIREBASE_API_KEY=sua_chave
VITE_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-projeto
VITE_FIREBASE_STORAGE_BUCKET=seu-projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VITE_FIREBASE_APP_ID=seu_app_id
```

## Comandos

Instalar dependências:

```bash
npm install
```

Rodar o projeto:

```bash
npm run dev
```

Gerar build:

```bash
npm run build
```

## Firestore

No Firebase, ative o Cloud Firestore.

Para teste em ambiente acadêmico, você pode usar regras temporárias de desenvolvimento:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

Atenção: essa regra é apenas para teste. Em projeto real, use autenticação e regras seguras.
