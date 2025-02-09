import Capa from "../../assets/Tela Login/tela-login.png";
import { Link } from "react-router-dom";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Login.module.scss"; //importando o componente de estilização do login

function Login() {
  return (
    <main className={styles.ContainerLogin}>
      <img src={Capa} alt="foto de um navio cargueiro" />
      <section className={styles.Login}>
        <img src={Logo} alt="Logo da Wilson Sons" />
        <h1>Boas vindas ao Novo Portal SISPAR</h1>
        <p>Sistema de emissão de boletos e Parcelamento</p>
        <form action="">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          ></input>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          ></input>
          <a href="#">Esqueci minha senha</a>
          <div>
            <Link to="/reembolso">
              <button className={styles.btnEntrar}>Entrar</button>
            </Link>
            <button className={styles.btnCriar}>Criar conta</button>
          </div>
        </form>
      </section>
    </main>
  );
}
export default Login;
