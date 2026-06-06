import React from 'react';
import { useFirestoreCrud } from '../hooks/useFirestoreCrud';
import '../styles/Admin.css';

export const Relatorio = () => {
  const { items: clientes } = useFirestoreCrud('clientes');
  const { items: cervejas } = useFirestoreCrud('cervejas');
  const { items: pedidos, loading } = useFirestoreCrud('pedidos');

  const relatorio = pedidos.map(pedido => {
    const cliente = clientes.find(item => item.id === pedido.clienteId);
    const cerveja = cervejas.find(item => item.id === pedido.cervejaId);
    const preco = Number(cerveja?.preco || 0);
    const quantidade = Number(pedido.quantidade || 0);

    return {
      id: pedido.id,
      cliente: cliente?.nome || 'Cliente não encontrado',
      email: cliente?.email || '-',
      cerveja: cerveja?.nome || 'Cerveja não encontrada',
      tipo: cerveja?.tipo || '-',
      quantidade,
      status: pedido.status,
      total: preco * quantidade,
    };
  });

  return (
    <main className="admin-page">
      <section className="admin-card">
        <h1>Relatório de Pedidos</h1>
        <p>JOIN simulado entre as coleções Clientes, Cervejas e Pedidos usando map() e find().</p>

        {loading ? <p>Carregando relatório...</p> : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Cliente</th><th>E-mail</th><th>Cerveja</th><th>Tipo</th><th>Qtd.</th><th>Status</th><th>Total</th>
                </tr>
              </thead>
              <tbody>
                {relatorio.map(item => (
                  <tr key={item.id}>
                    <td>{item.cliente}</td>
                    <td>{item.email}</td>
                    <td>{item.cerveja}</td>
                    <td>{item.tipo}</td>
                    <td>{item.quantidade}</td>
                    <td>{item.status}</td>
                    <td>R$ {item.total.toFixed(2)}</td>
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
