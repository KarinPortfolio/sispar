import styles from "./Cadastro.module.scss";
import Navbar from "../navbar/Navbar.jsx";
import home from "../../assets/Header/Home.png";
import vector from "../../assets/Header/Vector.png";

function Cadastro() {
  return (
    <div>
      <Navbar />
      <header>
        <img src={home} alt="Casa" />
        <img src={vector} alt="Seta" />
        <p>Cadastro</p>
      </header>
      <div className={styles.informacao}>
        <h1 className={styles.titulo}>Cadastro</h1>
        <form className="form" action="#" method="post">
          <label htmlFor="nome" className="form_label">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            className="form_input"
            id="nome"
            placeholder="Nome"
            required
          />
          <label htmlFor="email" className="form_label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form_input"
            id="email"
            placeholder="seuemail@email.com"
            required
          />
          <label htmlFor="senha" className="form_label">
            Senha
          </label>
          <input
            type="password"
            name="senha"
            className="form_input"
            id="senha"
            placeholder="Senha"
            required
          />
          <label htmlFor="cargo" className="form_label">
            Cargo
          </label>
          <input
            type="text"
            name="cargo"
            className="form_input"
            id="cargo"
            placeholder="cargo"
            required
          />
          <label htmlFor="salario" className="form_label">
            Nome
          </label>
          <input
            type="number"
            name="salario"
            className="form_input"
            id="salario"
            placeholder="salario"
            required
          />
        </form>
        <button className={styles.botao}>Cadastrar</button>
        <button className={styles.botao}>Cancelar</button>
      </div>
    </div>
  );
}

export default Cadastro;
