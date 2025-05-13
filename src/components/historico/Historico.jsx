import { useState, useEffect } from "react";

function Historico() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://sispar-api-kh9p.onrender.com/reembolso/reembolsos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); // O array vazio significa que este efeito será executado apenas uma vez na montagem do componente

  if (loading) {
    return <div>Carregando dados...</div>;
  }

  if (error) {
    return <div>Erro ao carregar os dados: {error}</div>;
  }

  if (!data) {
    return <div>Nenhum dado recebido.</div>;
  }

  return (
    <div>
      <h1>Resultado da API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {Array.isArray(data) ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.nome && <p>Nome: {item.nome}</p>}
              {item.email && <p>Email: {item.email}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          {data.nome && <p>Nome: {data.nome}</p>}
          {data.email && <p>Email: {data.email}</p>}
        </div>
      )}
    </div>
  );
}

export default Historico;
