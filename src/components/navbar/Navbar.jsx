import styles from "./Navbar.module.scss";
import fechar from "../../assets/Header/fechar-header.png";
import home from "../../assets/Header/Home.png";
import reembolso from "../../assets/Header/Reembolso.png";
import perfil from "../../assets/Header/Perfil.png";
import pesquisa from "../../assets/Header/Pesquisa.png";
import historico from "../../assets/Header/Historico.png";
import sair from "../../assets/Header/Sair.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <button>
        <img src={fechar} alt="Fechar" />
      </button>

      <button className={styles.btnperfil}>
        <img src={perfil} alt="Perfil" />
      </button>

      <button>
        <Link to="/">
          <img src={home} alt="Home" />
        </Link>
      </button>

      <button>
        <Link to="/reembolso">
          <img src={reembolso} alt="Reembolso" />
        </Link>
      </button>

      <button>
        <Link to="/solicitacoes">
          <img src={pesquisa} alt="Pesquisa" />
        </Link>
      </button>

      <button>
        <img src={historico} alt="Histórico" />
      </button>

      <button className={styles.btnSair}>
        <Link to="/">
          <img src={sair} alt="Sair" />
        </Link>
      </button>
    </nav>
  );
}
export default Navbar;
