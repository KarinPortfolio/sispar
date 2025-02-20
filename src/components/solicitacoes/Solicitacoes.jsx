import styles from "./Solicitacoes.module.scss";
import Navbar from "../navbar/Navbar.jsx";
import home from "../../assets/Header/home-header.png";
import vetor from "../../assets/Header/Vector.png";
import lixo from "../../assets/Dashboard/lixo.png";
import relatorio from "../../assets/Dashboard/relatorio.png";
import prev from "../../assets/Dashboard/prev.png";
import check from "../../assets/Dashboard/check.png";
import cancel from "../../assets/Dashboard/cancel.png";
function Solicitacoes() {
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
            {/* esquerda */}
            <article className={styles.containerEsq}>
              <div id={styles.item1} className={styles.caixa}>
                <label for="nome">Nome Completo</label>
                <input type="nome" name="nome" id="nome"></input>
              </div>
              <div id={styles.item2} className={styles.caixa}>
                <label for="empresa">Empresa</label>
                <input type="empresa" name="empresa" id="empresa"></input>
              </div>
              <div id={styles.item3} className={styles.caixa}>
                <label for="N.prestacao">N° prestacao contas</label>
                <input
                  type="N.prestacao"
                  name="N.prestacao"
                  id="N.prestacao"
                ></input>
              </div>
              <div id={styles.item4} className={styles.caixa}>
                <label for="Descricao motivo do reembolso">
                  Descricao / motivo do reembolso
                </label>
                <input
                  type="motivo_reembolso"
                  name="motivo_reembolso"
                  id="motivo_reembolso"
                ></input>
              </div>
            </article>
            <article className={styles.containerMeio}></article>
            {/* direita */}
            <article className={styles.containerDir}>
              <div id={styles.item5} className={styles.caixa}>
                <label for="data">Data</label>
                <input type="date" id="data" name="data" />
              </div>
              <div id={styles.item6} className={styles.caixa}>
                <label for="tipo_despesa">Tipo de Despesa</label>
                <select id="tipo_despesa" name="tipo_despesa">
                  <option value="selecionar">Selecionar</option>
                  <option value="alimentacao">Alimentação</option>
                  <option value="combustivel">Combustível</option>
                  <option value="conducao">Condução</option>
                  <option value="estacionamento">Estacionamento</option>
                  <option value="viagemAdmin">Viagem admin.</option>
                  <option value="viagemOperacional">Viagem operacional</option>
                  <option value="eventosRepresentacao">
                    Eventos de representação
                  </option>
                </select>
              </div>
              <div id={styles.item7} className={styles.caixa}>
                <label for="controle_custo">Controle de Custo</label>
                <select id="controle_custo" name="controle_custo">
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
              <div id={styles.item8} className={styles.caixa}>
                <label for="ord_int">Ord.Int.</label>
                <input type="text" id="ord_int" name="ord_int" />
              </div>
              <div id={styles.item9} className={styles.caixa}>
                <label for="pep">PEP</label>
                <input type="text" id="pep" name="pep" />
              </div>
              <div className={styles.caixa}>
                <label for="div">Div.</label>
                <input type="text" id="div" name="div" />
              </div>
              <div id={styles.item11} className={styles.caixa}>
                <label for="dist_km">Dist./Km</label>
                <input type="text" id="dist_km" name="dist_km" />
              </div>
              <div id={styles.item12} className={styles.caixa}>
                <label for="moeda">Moeda</label>
                <input type="text" id="moeda" name="moeda" />
              </div>
              <div id={styles.item13} className={styles.caixa}>
                <label for="valor_km">Valor/Km</label>
                <input type="text" id="valor_km" name="valor_km" />
              </div>
              <div id={styles.item14} className={styles.caixa}>
                <label for="val_taxa">Val.Taxa</label>
                <input type="text" id="val_taxa" name="val_taxa" />
              </div>
              <div id={styles.item15} className={styles.caixa}>
                <label for="val_faturado">Val.Faturado</label>
                <input type="text" id="val_faturado" name="val_faturado" />
              </div>
              <div className={styles.btnform}>
                <div id={styles.item16} className={styles.caixa}>
                  <button className={styles.btnform1}>+ Salvar</button>
                </div>
                <div id={styles.item17} className={styles.caixa}>
                  <button className={styles.btnform2}>
                    <img className={styles.btn} src={prev} />
                  </button>
                </div>
              </div>
            </article>
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
                  <th>Tipo.Reemb.</th>
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
                <tr>
                  <td>
                    <img className={styles.icone} src={lixo} />
                  </td>
                  <td>Vitor Carvalho</td>
                  <td>WSS001</td>
                  <td>329456</td>
                  <td>08/01/2025</td>
                  <td>
                    <img className={styles.icone} src={relatorio} />
                  </td>
                  <td>Desp.de viagem a...</td>
                  <td>1100110002 - Fin...</td>
                  <td>0003</td>
                  <td>002</td>
                  <td>001</td>
                  <td>BRL</td>
                  <td>434Km</td>
                  <td>0.65</td>
                  <td>242.10</td>
                  <td>40.05</td>
                </tr>
                <tr>
                  <td>
                    <img className={styles.icone} src={lixo} />
                  </td>
                  <td>Vanessa Port...</td>
                  <td>WSS002</td>
                  <td>987789</td>
                  <td>01/01/2025</td>
                  <td>
                    <img className={styles.icone} src={relatorio} />
                  </td>
                  <td>Desp.de viagem a...</td>
                  <td>1100110002 - Fin C...</td>
                  <td>0002</td>
                  <td>005</td>
                  <td>001</td>
                  <td>ARS</td>
                  <td>289Km</td>
                  <td>0.37</td>
                  <td>106.93</td>
                  <td>00.00</td>
                </tr>
                <tr>
                  <td>
                    <img className={styles.icone} src={lixo} />
                  </td>
                  <td>Washington Ki...</td>
                  <td>WSS003</td>
                  <td>546791</td>
                  <td>03/01/2025</td>
                  <td>
                    <img className={styles.icone} src={relatorio} />
                  </td>
                  <td>Eventos de aprese...</td>
                  <td>1100110002 - Fin...</td>
                  <td>0001</td>
                  <td>005</td>
                  <td>001</td>
                  <td>USD</td>
                  <td>197</td>
                  <td>0.77</td>
                  <td>109.75</td>
                  <td>29.97</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className={styles.containerRodape}>
            <div id={styles.item18} className={styles.caixa}>
              <label for="total_faturado">Total Faturado</label>
              <input type="text" id="total_faturado" name="total_faturado" />
            </div>

            <div id={styles.item19} className={styles.caixa}>
              <label for="total_despesa">Total Despesa</label>
              <input type="text" id="total_despesa" name="total_despesa" />
            </div>

            <div className={styles.btnform}>
              <div id={styles.item20} className={styles.caixa}>
                <button className={styles.btnform3}>
                  <img className={styles.btn} src={check} />
                  Enviar para Análise
                </button>
              </div>

              <div id={styles.item21} className={styles.caixa}>
                <button className={styles.btnform4}>
                  <img className={styles.btn} src={cancel} />
                  Cancelar Solicitação
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Solicitacoes;
