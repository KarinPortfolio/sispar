import styles from "./Navbar.module.scss";
import fechar from "../../assets/Header/fechar-header.png";
import home from "../../assets/Header/Home.png";
import reembolso from "../../assets/Header/Reembolso.png";
import perfil from "../../assets/Header/Perfil.png";
import pesquisa from "../../assets/Header/Pesquisa.png";
import historico from "../../assets/Header/Historico.png";
import sair from "../../assets/Header/Sair.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const irParaHome = () => {
    navigate("/");
  };
  const irParaReembolso = () => {
    navigate("/reembolso");
  };
  const irParaSolicitacao = () => {
    navigate("/solicitacao");
  };
  const irParaHistorico = () => {
    navigate("/historico");
  };

  return (
    <nav>
      <button>
        <img src={fechar} alt="Fechar" />
      </button>

      <button className={styles.btnperfil}>
        <img src={perfil} alt="Perfil" />
      </button>

      <button>
        <img src={home} alt="Home" onClick={irParaHome} />
      </button>

      <button>
        <img src={reembolso} alt="Solicitacao" onClick={irParaSolicitacao} />
      </button>

      <button>
        <img src={pesquisa} alt="Pesquisa" onClick={irParaReembolso} />
      </button>

      <button>
        <img src={historico} alt="Histórico" onClick={irParaHistorico} />
      </button>

      <button className={styles.btnSair}>
        <img src={sair} alt="Sair" onClick={irParaHome} />
      </button>
    </nav>
  );
}
export default Navbar;
