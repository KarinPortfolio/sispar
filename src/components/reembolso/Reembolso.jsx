import styles from "./Reembolso.module.scss";
import Navbar from "../navbar/Navbar.jsx";
import reembolso from "../../assets/Dashboard/Reembolso.png";
import analise from "../../assets/Dashboard/Analises.png";
import historico from "../../assets/Dashboard/Historico.png";
import { Link } from "react-router-dom";
import solicitados from "../../assets/Dashboard/N-Solicitados.png";
import aprovados from "../../assets/Dashboard/N-Aprovados.png";
import rejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import emanalise from "../../assets/Dashboard/N-Analises.png";
import home from "../../assets/Header/home-header.png";
import vector from "../../assets/Header/Vector.png";
import atualizado from "../../assets/Dashboard/atualizado.png";

function Reembolso() {
  return (
    <div>
      <Navbar />
      <div className={styles.Envolve}>
        <header>
          <img src={home} alt="Casa" />
          <img src={vector} alt="Seta" />
          <p>Reembolso</p>
        </header>
        <main className={styles.bordaExterna}>
          <section className={styles.containerCentral}>
            <h2>Sistema de Reembolso</h2>
            <p>
              Solicite novos pedidos de reembolso, visualize solicitações em
              análise e todo o histórico.
            </p>
            <div className={styles.containerCards}>
              <article className={styles.cards}>
                <Link to="/solicitacoes">
                  <img src={reembolso} />
                </Link>
                <p>Solicitação de reembolso</p>
              </article>
              <article className={styles.cards}>
                <img src={analise} />
                <p> Em análise</p>
              </article>
              <article className={styles.cards}>
                <img src={historico} />
                <p>Histórico</p>
              </article>
            </div>
          </section>
          <section className={styles.containerStatus}>
            <img
              src={solicitados}
              alt="Solicitados"
              className={styles.btnsolicitados}
            />
            <h4>182</h4>
            <p>Solicitados</p>

            <img
              src={aprovados}
              alt="Aprovados"
              className={styles.btnaprovados}
            />
            <h4>74</h4>
            <p>Aprovados</p>

            <img
              src={rejeitados}
              alt="Rejeitados"
              className={styles.btnrejeitados}
            />
            <h4>195</h4>
            <p>Rejeitados</p>
            <img
              src={emanalise}
              alt="Em Análise"
              className={styles.btnemanalise}
            />
            <h4>41</h4>
            <p>Em Análise</p>
          </section>
          <section className={styles.containerSalvo}>
            <img src={atualizado} /> <a href="#">Sistema atualizado</a>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Reembolso;
