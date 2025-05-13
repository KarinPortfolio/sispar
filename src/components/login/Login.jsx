import Capa from "../../assets/Tela Login/tela-login.png";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Login.module.scss";
import api from "../../Services/Api.jsx";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const irParaCadastro = () => {
    navigate("/cadastro");
  };
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/colaborador/login", {
        email: email,
        senha: senha,
      });
      console.log(response.data);

      localStorage.setItem("id_colaborador", response.data.id_colaborador);
      navigate("/reembolso");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <main className={styles.ContainerLogin}>
      <img src={Capa} alt="foto de um navio cargueiro" />
      <section className={styles.Login}>
        <img src={Logo} alt="Logo da Wilson Sons" />
        <h1 id="homeh1">Boas vindas ao Novo Portal SISPAR</h1>
        <p id="homep">Sistema de emissão de boletos e Parcelamento</p>
        <div className="styles.ContainerFormulario">
          <form action="">
            <label className={styles.ContainerFormulario} htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </label>
            <label className={styles.ContainerFormulario} htmlFor="senha">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              ></input>
            </label>
            <a href="#">Esqueci minha senha</a>
            <div>
              <button className={styles.btnEntrar} onClick={fazerLogin}>
                Entrar
              </button>

              <button className={styles.btnCriar} onClick={irParaCadastro}>
                Criar conta
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
export default Login;
