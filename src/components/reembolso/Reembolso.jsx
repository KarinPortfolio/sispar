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

function Reembolso() {
  return (
    <div>
      <Navbar />
      <header>
        <img src={home} alt="Casinha do header" />
        <img src={vector} alt="Setinha do header" />
        <p>Reembolso</p>
      </header>

      <main>
        <section className={styles.container}>
          <div className={styles.letreiro}>
            <h1>Sistema de Reembolso</h1>
            <p>
              Solicite novos pedidos de reembolso, visualize solicitações em
              análise e todo o histórico.
            </p>
          </div>
          <div className={styles.letreiro2}>
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
        <section className={styles.status}>
          <button className={styles.btnsolicitados}>
            <img src={solicitados} alt="Solicitados" />{" "}
            {/* Use <img> corretamente */}
          </button>
          <span>182</span>
          <p>Solicitados</p>
          <button className={styles.btnaprovados}>
            <img src={aprovados} alt="Aprovados" />
          </button>
          <span>74</span>
          <p>Aprovados</p>
          <button className={styles.btnrejeitados}>
            <img src={rejeitados} alt="Rejeitados" />
          </button>
          <span>195</span>
          <p>Rejeitados</p>
          <button className={styles.btnemanalise}>
            <img src={emanalise} alt="Em Análise" />
          </button>
          <span>41</span>
          <p>Em Análise</p>
        </section>
      </main>
    </div>
  );
}

export default Reembolso;
