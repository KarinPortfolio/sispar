import styles from "./Cadastro.module.scss";
import { useNavigate } from "react-router-dom";
import api from "../../Services/Api.jsx";
import { useState } from "react";
// Assuming 'home' and 'vector' are imported or defined elsewhere
// import home from "../../assets/home.png";
// import vector from "../../assets/vector.svg";

function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cargo, setCargo] = useState("");
  const [salario, setSalario] = useState("");

  const cancelarSolicitacao = () => {
    navigate("/");
    setNome("");
    setEmail("");
    setSenha("");
    setCargo("");
    setSalario("");
  };

  const fazerCadastro = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("colaborador/cadastrar", {
        nome: nome,
        email: email,
        senha: senha,
        cargo: cargo,
        salario: salario,
      });
      console.log(response.data);
      navigate("/"); // Redirect to login after successful registration
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error);
      alert("Erro ao fazer cadastro. Verifique os dados.");
    }
  };

  return (
    <div>
      <div className={styles.cadastro}>
        <h1 className={styles.titulo}>Cadastro</h1>
        <form className="form" onSubmit={fazerCadastro} method="post">
          {" "}
          <label htmlFor="nome" className="form_label">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="email" className="form_label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="seuemail@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="senha" className="form_label">
            Senha
          </label>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <label htmlFor="cargo" className="form_label">
            Cargo
          </label>
          <input
            type="text"
            name="cargo"
            id="cargo"
            placeholder="cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
          <label htmlFor="salario" className="form_label">
            Salário
          </label>
          <input
            type="number"
            name="salario"
            id="salario"
            placeholder="salario"
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
          />
          <button
            className={`${styles.botao} ${styles.btnCriar}`}
            type="submit"
          >
            Cadastrar
          </button>{" "}
          <button
            className={`${styles.botao} ${styles.btnCancelar}`}
            type="button"
            onClick={cancelarSolicitacao}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
