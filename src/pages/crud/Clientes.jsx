import React, { useState } from 'react';
import { useFirestoreCrud } from '../../hooks/useFirestoreCrud';
import '../../styles/Admin.css';

const initialForm = { nome: '', email: '', telefone: '' };

export const Clientes = () => {
  const { items: clientes, loading, error, createItem, updateItem, deleteItem } = useFirestoreCrud('clientes');
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);

  const handleChange = event => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async event => {
    event.preventDefault();

    if (!form.nome.trim() || !form.email.trim() || !form.telefone.trim()) {
      alert('Preencha todos os campos do cliente.');
      return;
    }

    if (editingId) {
      await updateItem(editingId, form);
    } else {
      await createItem(form);
    }

    setForm(initialForm);
    setEditingId(null);
  };

  const handleEdit = cliente => {
    setEditingId(cliente.id);
    setForm({ nome: cliente.nome, email: cliente.email, telefone: cliente.telefone });
  };

  const handleDelete = async id => {
    if (confirm('Excluir este cliente?')) await deleteItem(id);
  };

  return (
    <main className="admin-page">
      <section className="admin-card">
        <h1>CRUD de Clientes</h1>
        <p>Cadastro, listagem, edição e exclusão de clientes salvos no Firebase Firestore.</p>

        <form className="admin-form" onSubmit={handleSubmit}>
          <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="E-mail" />
          <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="Telefone" />
          <button type="submit">{editingId ? 'Atualizar cliente' : 'Cadastrar cliente'}</button>
        </form>

        {error && <p className="error">Erro: {error}</p>}
        {loading ? <p>Carregando...</p> : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr><th>Nome</th><th>E-mail</th><th>Telefone</th><th>Ações</th></tr>
              </thead>
              <tbody>
                {clientes.map(cliente => (
                  <tr key={cliente.id}>
                    <td>{cliente.nome}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.telefone}</td>
                    <td className="actions">
                      <button onClick={() => handleEdit(cliente)}>Editar</button>
                      <button className="danger" onClick={() => handleDelete(cliente.id)}>Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
};
