import styles from "./Historico.module.scss";
import Navbar from "../navbar/Navbar.jsx";
import lixo from "../../assets/Dashboard/lixo.png";
import home from "../../assets/Header/Home.png";
import vector from "../../assets/Header/Vector.png";
import relatorio from "../../assets/Dashboard/relatorio.png";

function Historico() {
  return (
    <>
      <Navbar />

      <header>
        <img src={home} alt="Casa" />
        <img src={vector} alt="Seta" />
        <p>Historico</p>
      </header>
      {/* tabela */}

      <section className={styles.miolo}>
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
    </>
  );
}

export default Historico;
