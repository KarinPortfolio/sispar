import styles from "./Solicitacao.module.scss";
import Navbar from "../navbar/Navbar.jsx";
import home from "../../assets/Header/home-header.png";
import vetor from "../../assets/Header/Vector.png";
import Salvar from "../../assets/Solicitacao/+.png";
import Deletar from "../../assets/Solicitacao/deletar.png";
import Lixeira from "../../assets/Solicitacao/lixeira.png";
import Motivo from "../../assets/Solicitacao/motivo.png";
import Cancelar from "../../assets/Solicitacao/x.png";
import Check from "../../assets/Solicitacao/check.png";
import { useState, useEffect } from "react";
import Api from "../../Services/Api.jsx";

function Solicitacoes() {
  const [colaborador, setColaborador] = useState(""); // Estado para o campo colaborador
  const [empresa, setEmpresa] = useState(""); // Estado para o campo empresa
  const [num_prestacao, setNum_prestacao] = useState(""); // Estado para o campo número de prestação
  const [descricao, setDescricao] = useState(""); // Estado para o campo   descrição
  const [data, setData] = useState(""); // Estado para o campo data
  const [tipo_reembolso, setTipo_reembolso] = useState(""); // Estado para o campo tipo de reembolso
  const [centro_custo, setCentro_custo] = useState(""); // Estado para o campo centro de custo
  const [ordem_interna, setOrdem_interna] = useState(""); // Estado para o campo ordem interna
  const [divisao, setDivisao] = useState(""); // Estado para o campo divisão
  const [pep, setPep] = useState(""); // Estado para o campo pep
  const [moeda, setMoeda] = useState(""); // Estado para o campo moeda
  const [distancia_km, setDistancia_km] = useState(""); // Estado para o campo distância km
  const [valor_km, setValor_km] = useState(""); // Estado para o campo valor km
  const [valor_faturado, setValor_faturado] = useState(""); // Estado para o campo valor faturado
  const [despesa, setDespesa] = useState(""); // Estado para o campo despesa
  const [dados_reembolso, setDados_reembolso] = useState([]);

  const [enviado, setEnviado] = useState(false);
  const idColaboradorFixo = 1; // Defina o ID fixo aqui

  useEffect(() => {
    if (enviado) {
      setDados_reembolso([]);
      setEnviado(false);
    }
  }, [enviado]);

  const handleSubmit = () => {
    //const idColaborador = localStorage.getItem("id_colaborador");
    const objetoReembolso = {
      empresa,
      colaborador,
      num_prestacao,
      descricao,
      data,
      tipo_reembolso,
      ordem_interna,
      centro_custo,
      divisao,
      pep,
      moeda,
      distancia_km,
      valor_km,
      valor_faturado,
      despesa,
      id_colaborador: idColaboradorFixo, // Usando o ID fixo
    };

    setDados_reembolso(dados_reembolso.concat(objetoReembolso));
    limparCampos();
  };

  const enviarParaAnalise = async (e) => {
    e.preventDefault();
    //const idColaborador = localStorage.getItem("id_colaborador");
    try {
      const response = await Api.post(
        "/reembolso/solicitacao",
        dados_reembolso.map((item) => ({
          ...item,
          id_colaborador: idColaboradorFixo, // Usando o ID fixo
        }))
      );
      console.log("Resposta da API", response);
      alert("Solicitação enviada com sucesso!");
      setEnviado(true);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar a solicitação.");
    }
  };

  const handleDelete = (index) => {
    setDados_reembolso(dados_reembolso.filter((_, i) => i !== index));
  };

  const limparCampos = () => {
    setColaborador("");
    setEmpresa("");
    setNum_prestacao("");
    setDescricao("");
    setData("");
    setTipo_reembolso("");
    setCentro_custo("");
    setOrdem_interna("");
    setDivisao("");
    setPep("");
    setMoeda("");
    setDistancia_km("");
    setValor_km("");
    setValor_faturado("");
    setDespesa("");
  };

  const cancelarSolicitacao = () => {
    setDados_reembolso([]);
    limparCampos();
  };

  return (
    <div>
      <Navbar />
      <div className={styles.Envolve}>
        <header>
          <img src={home} alt="Home" />
          <img src={vetor} alt="Seta" />
          <p>Reembolso</p>
          <img src={vetor} alt="Seta" />
          <p>Solicitação de Reembolso</p>
        </header>
        <main className={styles.containerMain}>
          <section className={styles.containerFormulario}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className={styles.formulario}
            >
              {/* esquerda */}
              <div className={styles.containerBox}>
                <article className={styles.containerEsq}>
                  <div id={styles.item1} className={styles.campo}>
                    <label htmlFor="nome">Nome Completo</label>
                    <input
                      value={colaborador}
                      name="colaborador"
                      onChange={(e) => setColaborador(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div id={styles.item2} className={styles.campo}>
                    <label htmlFor="empresa">Empresa</label>
                    <input
                      name="empresa"
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div id={styles.item3} className={styles.cxprestacao}>
                    <label htmlFor="N.prestacao">N° prest.</label>
                    <input
                      value={num_prestacao}
                      onChange={(e) => setNum_prestacao(e.target.value)}
                      type="text"
                      name="num_prestacao"
                    />
                  </div>
                </article>
                <article className={styles.containerEsq}>
                  <div id={styles.item4} className={styles.textcaixa}>
                    <label htmlFor="Descricao motivo do reembolso">
                      Descrição / motivo do reembolso
                    </label>
                    <textarea
                      name="descricao"
                      type="text"
                      value={descricao}
                      onChange={(e) => setDescricao(e.target.value)}
                    />
                  </div>
                </article>
              </div>

              <article className={styles.containerMeio}></article>
              {/* direita */}
              <div className={styles.containerBox}>
                <article className={styles.containerDir}>
                  <div id={styles.item5} className={styles.cxdata}>
                    <label htmlFor="data">Data</label>
                    <input
                      value={data}
                      onChange={(e) => setData(e.target.value)}
                      type="date"
                      name="data"
                    />
                  </div>

                  <div id={styles.item6} className={styles.campo}>
                    <label htmlFor="tipo_reembolso">Tipo Reembolso</label>
                    <select
                      value={tipo_reembolso}
                      name="tipo_reembolso"
                      onChange={(e) => setTipo_reembolso(e.target.value)}
                      id="tipo_reembolso"
                    >
                      <option value="selecionar">Selecionar</option>
                      <option value="alimentacao">Alimentação</option>
                      <option value="combustivel">Combustível</option>
                      <option value="conducao">Condução</option>
                      <option value="estacionamento">Estacionamento</option>
                      <option value="viagemAdmin">Viagem admin.</option>
                      <option value="viagemOperacional">
                        Viagem operacional
                      </option>
                      <option value="eventosRepresentacao">
                        Eventos de representação
                      </option>
                    </select>
                  </div>
                  <div id={styles.item7} className={styles.campo}>
                    <label htmlFor="centro_custo">Centro de Custo</label>
                    <select
                      value={centro_custo}
                      onChange={(e) => setCentro_custo(e.target.value)}
                      name="centro_custo"
                      id="centro_custo"
                    >
                      <option value="selecionar">Selecionar</option>
                      <option value="1100109002_interno">
                        1100109002 - FIN CONTROLES INTERNOS MTZ
                      </option>
                      <option value="1100110002_financas">
                        1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                      </option>
                      <option value="1100110102_contabilidade">
                        1100110102 - FIN CONTABILIDADE MTZ
                      </option>
                    </select>
                  </div>
                </article>
                <article className={styles.containerDirInf}>
                  <div id={styles.item8} className={styles.caixa1}>
                    <label htmlFor="ord_int">Ord.Int.</label>
                    <input
                      value={ordem_interna}
                      name="ordem_interna"
                      onChange={(e) => setOrdem_interna(e.target.value)}
                      id="ordem_interna"
                      type="text"
                    />
                  </div>

                  <div id={styles.item9} className={styles.caixa1}>
                    <label htmlFor="pep">PEP</label>
                    <input
                      value={pep}
                      onChange={(e) => setPep(e.target.value)}
                      name="pep"
                      id="pep"
                      type="text"
                    />
                  </div>

                  <div className={styles.caixa1}>
                    <label htmlFor="div">Div.</label>
                    <input
                      type="text"
                      id="divisao"
                      onChange={(e) => setDivisao(e.target.value)}
                      name="divisao"
                      value={divisao}
                    />
                  </div>
                  <div id={styles.item11} className={styles.caixa1}>
                    <label htmlFor="distancia_km">Dist./Km</label>
                    <input
                      value={distancia_km}
                      onChange={(e) => setDistancia_km(e.target.value)}
                      name="distancia_km"
                      id="distancia_km"
                      type="text"
                    />
                  </div>

                  <div id={styles.item12} className={styles.caixamoeda}>
                    <label htmlFor="moeda">Moeda</label>
                    <select
                      className={styles.moeda}
                      value={moeda}
                      onChange={(e) => setMoeda(e.target.value)}
                      name="moeda"
                      id="coents"
                    >
                      <option value=""></option>
                      <option value="brl">BRL</option>
                      <option value="ars">ARS</option>
                      <option value="usd">USD</option>
                    </select>
                  </div>

                  <div id={styles.item13} className={styles.caixa1}>
                    <label htmlFor="valor_km">Valor/Km</label>
                    <input
                      value={valor_km}
                      onChange={(e) => setValor_km(e.target.value)}
                      name="valor_km"
                      type="text"
                    />
                  </div>

                  <div id={styles.item14} className={styles.caixa1}>
                    <label htmlFor="faturado">Val.Faturado</label>
                    <input
                      type="text"
                      name="valor_faturado"
                      value={valor_faturado}
                      onChange={(e) => setValor_faturado(e.target.value)}
                    />
                  </div>

                  <div id={styles.item15} className={styles.caixa1}>
                    <label htmlFor="despesa">Despesa</label>
                    <input
                      type="text"
                      id="despesa"
                      name="despesa"
                      value={despesa}
                      onChange={(e) => setDespesa(e.target.value)}
                    />
                  </div>

                  <div>
                    <div id={styles.item16}>
                      <button
                        className={styles.minibutton1a}
                        onClick={handleSubmit}
                        type="submit"
                      >
                        <img src={Salvar} alt="" /> Salvar
                      </button>

                      <button
                        className={styles.minibutton1b}
                        type="button"
                        onClick={() => {
                          limparCampos();
                        }}
                      >
                        <img src={Deletar} alt="" />
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </form>
          </section>
          {/* tabela */}

          <section className={styles.informacao}>
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th>colaborador(a)</th>
                  <th>Empresa</th>
                  <th>N° Prest.</th>
                  <th>Data</th>
                  <th>Motivo</th>
                  <th>Tipo.Despesa.</th>
                  <th>Ctr.Custo</th>
                  <th>Ord. Int.</th>
                  <th>Div</th>
                  <th>PEP</th>
                  <th>Moeda</th>
                  <th>Dist.Km</th>
                  <th>Val.Km</th>
                  <th>Val.Faturado</th>
                  <th>Despesa</th>
                </tr>
              </thead>
              <tbody>
                {dados_reembolso.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <button
                        onClick={() => handleDelete(index)}
                        className={styles.minibutton2}
                      >
                        <img
                          className={styles.lixeira}
                          src={Lixeira}
                          alt="Deletar"
                        />
                      </button>
                    </td>
                    <td>{item.colaborador}</td>
                    <td>{item.empresa}</td>
                    <td>{item.num_prestacao}</td>
                    <td>{item.data}</td>

                    <td>
                      <button className={styles.minibutton2}>
                        <img src={Motivo} alt="Motivo" />
                      </button>
                    </td>

                    {/* <td>{item.descricao}</td> */}
                    <td>{item.tipo_reembolso}</td>
                    <td>{item.centro_custo}</td>
                    <td>{item.ordem_interna}</td>
                    <td>{item.divisao}</td>
                    <td>{item.pep}</td>
                    <td>{item.moeda}</td>
                    <td>{item.distancia_km}</td>
                    <td>{item.valor_km}</td>
                    <td>{item.valor_faturado}</td>
                    <td>{item.despesa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>

        <footer className={styles.containerRodape}>
          <div className={styles.fatura}>
            <section id={styles.item18}>
              <label> Total Faturado </label>

              <input
                type="text"
                value={dados_reembolso
                  .reduce(
                    (total, item) => total + Number(item.valor_faturado || 0),
                    0
                  )
                  .toFixed(2)}
              />
            </section>
            <section id={styles.item19}>
              <label> Total Despesa </label>
              <input
                type="text"
                value={dados_reembolso
                  .reduce((total, item) => total + Number(item.despesa || 0), 0)
                  .toFixed(2)}
              />
            </section>
            <section>
              <section id={styles.item20}>
                <button
                  className={styles.buttonAnalise}
                  onClick={enviarParaAnalise}
                >
                  {" "}
                  <img src={Check} alt="" /> Enviar para Análise{" "}
                </button>

                <button
                  className={styles.buttonCancelar}
                  onClick={cancelarSolicitacao}
                >
                  {" "}
                  <img src={Cancelar} alt="" /> Cancelar Solicitação{" "}
                </button>
              </section>
            </section>{" "}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Solicitacoes;
