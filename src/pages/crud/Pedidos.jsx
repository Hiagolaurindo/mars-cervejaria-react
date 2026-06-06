import React, { useState } from 'react';
import { useFirestoreCrud } from '../../hooks/useFirestoreCrud';
import '../../styles/Admin.css';

const initialForm = { clienteId: '', cervejaId: '', quantidade: 1, status: 'Pendente' };

export const Pedidos = () => {
  const { items: clientes } = useFirestoreCrud('clientes');
  const { items: cervejas } = useFirestoreCrud('cervejas');
  const { items: pedidos, loading, error, createItem, updateItem, deleteItem } = useFirestoreCrud('pedidos');
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);

  const handleChange = event => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async event => {
    event.preventDefault();

    if (!form.clienteId || !form.cervejaId || Number(form.quantidade) <= 0) {
      alert('Selecione cliente, cerveja e quantidade válida.');
      return;
    }

    const data = { ...form, quantidade: Number(form.quantidade) };
    editingId ? await updateItem(editingId, data) : await createItem(data);
    setForm(initialForm);
    setEditingId(null);
  };

  const handleEdit = pedido => {
    setEditingId(pedido.id);
    setForm({
      clienteId: pedido.clienteId,
      cervejaId: pedido.cervejaId,
      quantidade: pedido.quantidade,
      status: pedido.status,
    });
  };

  const handleDelete = async id => {
    if (confirm('Excluir este pedido?')) await deleteItem(id);
  };

  const getClienteNome = id => clientes.find(cliente => cliente.id === id)?.nome || 'Cliente removido';
  const getCervejaNome = id => cervejas.find(cerveja => cerveja.id === id)?.nome || 'Cerveja removida';

  return (
    <main className="admin-page">
      <section className="admin-card">
        <h1>CRUD de Pedidos</h1>
        <p>Pedido usa chave estrangeira simulada: clienteId e cervejaId.</p>

        <form className="admin-form" onSubmit={handleSubmit}>
          <select name="clienteId" value={form.clienteId} onChange={handleChange}>
            <option value="">Selecione o cliente</option>
            {clientes.map(cliente => <option key={cliente.id} value={cliente.id}>{cliente.nome}</option>)}
          </select>

          <select name="cervejaId" value={form.cervejaId} onChange={handleChange}>
            <option value="">Selecione a cerveja</option>
            {cervejas.map(cerveja => <option key={cerveja.id} value={cerveja.id}>{cerveja.nome}</option>)}
          </select>

          <input name="quantidade" type="number" min="1" value={form.quantidade} onChange={handleChange} placeholder="Quantidade" />

          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Pendente">Pendente</option>
            <option value="Pago">Pago</option>
            <option value="Entregue">Entregue</option>
          </select>

          <button type="submit">{editingId ? 'Atualizar pedido' : 'Cadastrar pedido'}</button>
        </form>

        {error && <p className="error">Erro: {error}</p>}
        {loading ? <p>Carregando...</p> : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr><th>Cliente</th><th>Cerveja</th><th>Qtd.</th><th>Status</th><th>Ações</th></tr>
              </thead>
              <tbody>
                {pedidos.map(pedido => (
                  <tr key={pedido.id}>
                    <td>{getClienteNome(pedido.clienteId)}</td>
                    <td>{getCervejaNome(pedido.cervejaId)}</td>
                    <td>{pedido.quantidade}</td>
                    <td>{pedido.status}</td>
                    <td className="actions">
                      <button onClick={() => handleEdit(pedido)}>Editar</button>
                      <button className="danger" onClick={() => handleDelete(pedido.id)}>Excluir</button>
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
