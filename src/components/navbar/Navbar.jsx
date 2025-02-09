import styles from "./Navbar.module.scss";
import fechar from "../../assets/Header/fechar-header.png";
import home from "../../assets/Header/Home.png";
import reembolso from "../../assets/Header/Reembolso.png";
import perfil from "../../assets/Header/Perfil.png";
import pesquisa from "../../assets/Header/Pesquisa.png";
import historico from "../../assets/Header/Historico.png";
import sair from "../../assets/Header/Sair.png";

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
        <img src={home} alt="Home" />
      </button>

      <button>
        <img src={reembolso} alt="Reembolso" />
      </button>

      <button>
        <img src={pesquisa} alt="Pesquisa" />
      </button>

      <button>
        <img src={historico} alt="Histórico" />
      </button>

      <button className={styles.btnSair}>
        <img src={sair} alt="Sair" />

        <img src={fechar} alt="Fechar" />
      </button>
    </nav>
  );
}
export default Navbar;
