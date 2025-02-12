import styles from "./Solicitacoes.module.scss";
import Navbar from "../navbar/Navbar.jsx";

function Solicitacoes() {
  return (
    <div>
      <Navbar />
      <main>
        <section className={styles.container}>
          <h1>Solicitação de reembolso</h1>
        </section>
      </main>
    </div>
  );
}
export default Solicitacoes;
