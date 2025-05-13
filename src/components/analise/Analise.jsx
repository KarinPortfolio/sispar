import { useState, useEffect } from "react";

function Analise() {
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
        // Filtrar os itens "em análise"
        const itensEmAnalise = Array.isArray(actualData)
          ? actualData.filter((item) => item.status === "analisando") // Assumindo que há um campo 'status'
          : actualData && actualData.status === "em análise"
          ? [actualData]
          : [];

        setData(itensEmAnalise);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando dados...</div>;
  }

  if (error) {
    return <div>Erro ao carregar os dados: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div>Nenhum item em análise encontrado.</div>;
  }

  return (
    <div>
      <h1>Itens em Análise</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.num_processo && (
              <p>Número do Processo: {item.num_processo}</p>
            )}
            {/* Você pode adicionar mais informações relevantes aqui, se necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Analise;
