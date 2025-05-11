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
  const [nPrestacao, setnPrestacao] = useState(""); // Estado para o campo número de prestação
  const [descricao, setDescricao] = useState(""); // Estado para o campo  descrição
  const [data, setData] = useState(""); // Estado para o campo data
  const [tipoReembolso, setTipoReembolso] = useState(""); // Estado para o campo tipo de reembolso
  const [centroCusto, setCentroCusto] = useState(""); // Estado para o campo centro de custo
  const [ordemInterna, setorOrdemInterna] = useState(""); // Estado para o campo ordem interna
  const [divisao, setDivisao] = useState(""); // Estado para o campo divisão
  const [pep, setPep] = useState(""); // Estado para o campo pep
  const [moeda, setMoeda] = useState(""); // Estado para o campo moeda
  const [distanciaKm, setDistanciaKm] = useState(""); // Estado para o campo distância km
  const [valorKm, setValorKm] = useState(""); // Estado para o campo valor km
  const [valorFaturado, setValorFaturado] = useState(""); // Estado para o campo valor faturado
  const [despesa, setDespesa] = useState(""); // Estado para o campo despesa
  const [dadosReembolso, setDadosReembolso] = useState([]);

  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    if (enviado) {
      setDadosReembolso([]); // Limpa os dados após o envio
      setEnviado(false); // Reseta o estado de controle
    }
  }, [enviado]);

  const handleSubmit = () => {
    const objetoReembolso = {
      empresa,
      colaborador,
      nPrestacao,
      descricao,
      data,
      tipoReembolso,
      ordemInterna,
      centroCusto,
      divisao,
      pep,
      moeda,
      distanciaKm,
      valorKm,
      valorFaturado,
      despesa,
    };

    setDadosReembolso(dadosReembolso.concat(objetoReembolso));

    limparCampos(); //quando clicar em salvar, ativa a função de limpar os campos
  };

  const handleDelete = (index) => {
    setDadosReembolso(dadosReembolso.filter((item, i) => i !== index));
  };

  const limparCampos = () => {
    setColaborador(""),
      setEmpresa(""),
      setnPrestacao(""),
      setDescricao(""),
      setData(""),
      setTipoReembolso(""),
      setCentroCusto(""),
      setorOrdemInterna(""),
      setDivisao(""),
      setPep(""),
      setMoeda(""),
      setDistanciaKm(""),
      setValorKm(""),
      setValorFaturado(""),
      setDespesa("");
  };

  const [foiEnviado, setFoiEnviado] = useState(false);
  const enviarParaAnalise = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.post("/reembolso/solicitacao", dadosReembolso);
      console.log("Resposta da API", response);
      alert("Solicitação enviada com sucesso!");
      setEnviado(true);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar a solicitação.");
    }
  };

  useEffect(() => {
    if (foiEnviado) {
      setDadosReembolso([]);
      setFoiEnviado(false);
    }
  }, [foiEnviado]);

  const cancelarSolicitacao = () => {
    setDadosReembolso([]);
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
              <article className={styles.containerEsq}>
                <div id={styles.item1} className={styles.caixa}>
                  <label htmlFor="nome">Nome Completo</label>
                  <input
                    value={colaborador}
                    name="colaborador"
                    onChange={(e) => setColaborador(e.target.value)}
                    type="text"
                  />
                </div>
                <div id={styles.item2} className={styles.caixa}>
                  <label htmlFor="empresa">Empresa</label>
                  <input
                    name="empresa"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    type="text"
                  />
                </div>
                <div id={styles.item3} className={styles.caixa}>
                  <label htmlFor="N.prestacao">N° prestacao contas</label>
                  <input
                    value={nPrestacao}
                    onChange={(e) => setnPrestacao(e.target.value)}
                    type="number"
                    name="nPrestacao"
                  />
                </div>

                <div id={styles.item4} className={styles.caixa}>
                  <label htmlFor="Descricao motivo do reembolso">
                    Descricao / motivo do reembolso
                  </label>
                  <textarea
                    name="descricao"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                  />
                </div>
              </article>
              <article className={styles.containerMeio}></article>
              {/* direita */}
              <div className={styles.containerBox}>
                <article className={styles.containerDir}>
                  <div id={styles.item5} className={styles.caixa}>
                    <label htmlFor="data">Data</label>
                    <input
                      value={data}
                      onChange={(e) => setData(e.target.value)}
                      type="date"
                      name="data"
                    />
                  </div>

                  <div id={styles.item6} className={styles.caixa}>
                    <label htmlFor="tipoReembolso">Tipo de Reembolso</label>
                    <select
                      value={tipoReembolso}
                      name="tipoReembolso"
                      onChange={(e) => setTipoReembolso(e.target.value)}
                      id="tipoReembolso"
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
                  <div id={styles.item7} className={styles.caixa}>
                    <label htmlFor="centroCusto">Centro de Custo</label>
                    <select
                      value={centroCusto}
                      onChange={(e) => setCentroCusto(e.target.value)}
                      name="centroCusto"
                      id="centroCusto"
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
                      value={ordemInterna}
                      name="ordemInterna"
                      onChange={(e) => setorOrdemInterna(e.target.value)}
                      id="ordemInterna"
                      type="number"
                    />
                  </div>

                  <div id={styles.item9} className={styles.caixa1}>
                    <label htmlFor="pep">PEP</label>
                    <input
                      value={pep}
                      onChange={(e) => setPep(e.target.value)}
                      name="pep"
                      id="PEP"
                      type="number"
                    />
                  </div>

                  <div className={styles.caixa1}>
                    <label htmlFor="div">Div.</label>
                    <input
                      type="number"
                      id="divisao"
                      onChange={(e) => setDivisao(e.target.value)}
                      name="divisao"
                      value={divisao}
                    />
                  </div>
                  <div id={styles.item11} className={styles.caixa1}>
                    <label htmlFor="distanciaKm">Dist./Km</label>
                    <input
                      value={distanciaKm}
                      onChange={(e) => setDistanciaKm(e.target.value)}
                      name="distanciaKm"
                      id="distanciaKm"
                      type="number"
                    />
                  </div>

                  <div id={styles.item12} className={styles.caixa}>
                    <label htmlFor="moeda">Moeda</label>
                    <select
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
                      value={valorKm}
                      onChange={(e) => setValorKm(e.target.value)}
                      name="valorKm"
                      type="number"
                    />
                  </div>

                  <div id={styles.item14} className={styles.caixa1}>
                    <label htmlFor="faturado">Val.Faturado</label>
                    <input
                      type="number"
                      name="valorFaturado"
                      value={valorFaturado}
                      onChange={(e) => setValorFaturado(e.target.value)}
                    />
                  </div>

                  <div id={styles.item15} className={styles.caixa1}>
                    <label htmlFor="despesa">Despesa</label>
                    <input
                      type="number"
                      id="despesa"
                      name="despesa"
                      value={despesa}
                      onChange={(e) => setDespesa(e.target.value)}
                    />
                  </div>

                  <div className={styles.btnform}>
                    <div id={styles.item16} className={styles.quadrado}>
                      <button
                        className={styles.salvar}
                        onClick={handleSubmit}
                        type="submit"
                      >
                        <img src={Salvar} alt="" /> Salvar
                      </button>

                      <button
                        className={styles.deletar}
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
                  <th>Colaborador(a)</th>
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
                {dadosReembolso.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <button
                        onClick={() => handleDelete(index)}
                        className={styles.btnLixeira}
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
                    <td>{item.nPrestacao}</td>
                    <td>{item.data}</td>

                    <td>
                      <button>
                        <img src={Motivo} alt="Motivo" />
                      </button>
                    </td>

                    {/* <td>{item.descricao}</td> */}
                    <td>{item.tipoReembolso}</td>
                    <td>{item.centroCusto}</td>
                    <td>{item.ordemInterna}</td>
                    <td>{item.divisao}</td>
                    <td>{item.pep}</td>
                    <td>{item.moeda}</td>
                    <td>{item.distanciaKm}</td>
                    <td>{item.valorKm}</td>
                    <td>{item.valorFaturado}</td>
                    <td>{item.despesa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>

        <footer className={styles.containerRodape}>
          <section className={styles.fatura}>
            <div id={styles.item18}>
              <label> Total Faturado </label>

              <input
                type="text"
                value={dadosReembolso
                  .reduce(
                    (total, item) => total + Number(item.valorFaturado || 0),
                    0
                  )
                  .toFixed(2)}
              />
            </div>

            <section id={styles.item19}>
              <label> Total Despesa </label>
              <input
                type="text"
                value={dadosReembolso
                  .reduce((total, item) => total + Number(item.despesa || 0), 0)
                  .toFixed(2)}
              />
            </section>

            <div>
              <div id={styles.item20}>
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
              </div>{" "}
            </div>
          </section>{" "}
        </footer>
      </div>
    </div>
  );
}

export default Solicitacoes;
