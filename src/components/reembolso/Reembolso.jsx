import styles from "./Reembolso.module.scss";
import Navbar from "../navbar/Navbar.jsx";
import Card from "../Card/Card.jsx";
import reembolso from "../../assets/Dashboard/Reembolso.png";
import analise from "../../assets/Dashboard/Analises.png";
import historico from "../../assets/Dashboard/Historico.png";
import solicitados from "../../assets/Dashboard/N-Solicitados.png";
import aprovados from "../../assets/Dashboard/N-Aprovados.png";
import rejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import emanalise from "../../assets/Dashboard/N-Analises.png";

function Reembolso() {
  return (
    <main className={styles.container}>
      <Navbar />
      <section className={styles.reembolso}>
        <h1>Sistema de Reembolso</h1>
        <p>
          Solicite novos pedidos de reembolso, visualize solicitações em análise
          e todo o histórico.
        </p>
        <article className={styles.cards}>
          {" "}
          {/* Adicione a classe cards aqui */}
          <Card
            imagem={reembolso}
            descricaoAlt="icone de solicitar reembolso"
            titulo="Solicitar Reembolso"
          />
          <Card
            imagem={analise}
            descricaoAlt="icone de analise"
            titulo="Verificar Análises"
          />
          <Card
            imagem={historico}
            descricaoAlt="icone de historico"
            titulo="Histórico"
          />
        </article>
        <article className={styles.status}>
          {" "}
          {/* Nova classe para os status */}
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
        </article>
      </section>
    </main>
  );
}

export default Reembolso;
