import styles from "./Reembolso.module.scss";
import Navbar from "../navbar/Navbar.jsx";

function Reembolso() {
  return (
    <>
      <Navbar />
      <section className={styles.container}>
        <h1>Esta é a tela de Reembolso</h1>
      </section>
    </>
  );
}
export default Reembolso;
