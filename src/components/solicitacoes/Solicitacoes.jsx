import styles from "./Solicitacoes.module.scss";
import Navbar from "../navbar/Navbar.jsx";
import home from "../../assets/Header/home-header.png";
import vetor from "../../assets/Header/Vector.png";

function Solicitacoes() {
  return (
    <div>
      <Navbar />
      <div className={styles.bordaExterna}>
        <header>
          <img src={home} alt="Home" />
          <img src={vetor} alt="Separator" />
          <p>Reembolso</p>
          <img src={vetor} alt="Separator" />
          <p>Solicitação de Reembolso</p>
        </header>
        <main>
          <div className={styles.blocoFormulario}>
            {" "}
            {/* Corrected class name */}
            <section className={styles.formulario1}>
              <p>Nome Completo</p>
              <form action="">
                <input
                  type="nome"
                  name="nome"
                  id="nome"
                  placeholder="Nome Completo"
                ></input>
              </form>
              <p>Empresa</p>
              <form action="">
                <input
                  type="empresa"
                  name="empresa"
                  id="empresa"
                  placeholder="Empresa"
                ></input>
              </form>
              <p>N° Prest.Contas</p>
              <form action="">
                <input
                  type="prestacao"
                  name="prestacao"
                  id="prestacao"
                  placeholder="N.PrestacaoConta"
                ></input>
              </form>
              <p>Descrição / Motivo do Reembolso</p>
              <form action="">
                <input
                  type="descricao"
                  name="descricao"
                  id="descricao"
                  placeholder="Descricao"
                ></input>
              </form>
            </section>
            <section className={styles.formulario2}>
              <p>Data</p>
              <form action="">
                <input type="" name="" id="" placeholder=""></input>
              </form>
              <p>Tipo de Despesa</p>
              <form action="">
                <input type="" name="" id="" placeholder=""></input>
              </form>
              <p>Controle de Custo</p>
              <form action="">
                <input type="" name="" id="" placeholder=""></input>
              </form>
              <p>Ord.Init.</p>
              <form action="">
                <input type="" name="" id="" placeholder=""></input>
              </form>
              <p>PEP</p>
              <form action="">
                <input type="" name="" id="" placeholder=""></input>
              </form>
              <p>Div.</p>
              <form action="">
                <input type="" name="" id="" placeholder=""></input>
              </form>
              <p>Dist./Km</p>
              <form action="">
                <input type="" name="" id="" placeholder=""></input>
              </form>
              <p>Moeda</p>
              <form action="">
                <input type="" name="" id="" placeholder=""></input>
              </form>
              <p>Valor/Km</p>
              <form action="">
                <input type="" name="" id="" placeholder=""></input>
              </form>
              <p>Val.Taxa</p>
              <form action="">
                <input type="" name="" id="" placeholder=""></input>
              </form>
              <p> Val. Faturado</p>
              <form action="">
                <input type="" name="" id="" placeholder=""></input>
              </form>
              <button>Salvar</button>
              <button>
                <img src={vetor} />
              </button>
            </section>
          </div>
          <section className={styles.quadro}>
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
                  <th>Dist.</th>
                  <th>Km</th>
                  <th>Val.Km</th>
                  <th>Val.Faturado</th>
                  <th>Despesa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th> </th>
                  <td>Nome do Colaborador</td>
                  <td>Empresa A</td>
                  <td>12345</td>
                  <td>2024-07-26</td>
                  <td>Viagem de negócios</td>
                  <td>Reembolso de Despesas</td>
                  <td>Centro de Custo X</td>
                  <td>Ordem Interna 67890</td>
                  <td>Divisão Y</td>
                  <td>PEP Z</td>
                  <td>BRL</td>
                  <td>100</td>
                  <td>100</td>
                  <td>1.50</td>
                  <td>150.00</td>
                  <td>Alimentação</td>
                </tr>
                <tr>
                  <th> </th>
                  <td>Nome de Colaborador</td>
                  <td>Empresa B</td>
                  <td>67890</td>
                  <td>2024-07-27</td>
                  <td>Treinamento</td>
                  <td>Reembolso de Despesas</td>
                  <td>Centro de Custo W</td>
                  <td>Ordem Interna 13579</td>
                  <td>Divisão V</td>
                  <td>PEP U</td>
                  <td>USD</td>
                  <td>200</td>
                  <td>200</td>
                  <td>0.80</td>
                  <td>160.00</td>
                  <td>Hospedagem</td>
                </tr>
                <tr>
                  <th> </th>
                  <td>Nome outro Colaborador</td>
                  <td>Empresa C</td>
                  <td>10111</td>
                  <td>2024-07-28</td>
                  <td>Consultoria</td>
                  <td>Reembolso de Despesas</td>
                  <td>Centro de Custo Z</td>
                  <td>Ordem Interna 24680</td>
                  <td>Divisão T</td>
                  <td>PEP S</td>
                  <td>EUR</td>
                  <td>300</td>
                  <td>300</td>
                  <td>1.20</td>
                  <td>360.00</td>
                  <td>Transporte</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Solicitacoes;
