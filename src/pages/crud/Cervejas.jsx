import React, { useState } from 'react';
import { useFirestoreCrud } from '../../hooks/useFirestoreCrud';
import '../../styles/Admin.css';

const initialForm = { nome: '', tipo: '', preco: '' };

export const Cervejas = () => {
  const { items: cervejas, loading, error, createItem, updateItem, deleteItem } = useFirestoreCrud('cervejas');
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);

  const handleChange = event => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async event => {
    event.preventDefault();

    if (!form.nome.trim() || !form.tipo.trim() || !form.preco) {
      alert('Preencha todos os campos da cerveja.');
      return;
    }

    const data = { ...form, preco: Number(form.preco) };
    editingId ? await updateItem(editingId, data) : await createItem(data);
    setForm(initialForm);
    setEditingId(null);
  };

  const handleEdit = cerveja => {
    setEditingId(cerveja.id);
    setForm({ nome: cerveja.nome, tipo: cerveja.tipo, preco: cerveja.preco });
  };

  const handleDelete = async id => {
    if (confirm('Excluir esta cerveja?')) await deleteItem(id);
  };

  return (
    <main className="admin-page">
      <section className="admin-card">
        <h1>CRUD de Cervejas</h1>
        <p>Produtos da cervejaria cadastrados no Firebase.</p>

        <form className="admin-form" onSubmit={handleSubmit}>
          <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome da cerveja" />
          <input name="tipo" value={form.tipo} onChange={handleChange} placeholder="Tipo / sabor" />
          <input name="preco" type="number" min="0" step="0.01" value={form.preco} onChange={handleChange} placeholder="Preço" />
          <button type="submit">{editingId ? 'Atualizar cerveja' : 'Cadastrar cerveja'}</button>
        </form>

        {error && <p className="error">Erro: {error}</p>}
        {loading ? <p>Carregando...</p> : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr><th>Nome</th><th>Tipo</th><th>Preço</th><th>Ações</th></tr>
              </thead>
              <tbody>
                {cervejas.map(cerveja => (
                  <tr key={cerveja.id}>
                    <td>{cerveja.nome}</td>
                    <td>{cerveja.tipo}</td>
                    <td>R$ {Number(cerveja.preco).toFixed(2)}</td>
                    <td className="actions">
                      <button onClick={() => handleEdit(cerveja)}>Editar</button>
                      <button className="danger" onClick={() => handleDelete(cerveja.id)}>Excluir</button>
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
