import styles from "./Card.module.scss";

function Card({ imagem, descricaoAlt, titulo }) {
  return (
    <div className={styles.container}>
      <img src={imagem} alt={descricaoAlt} />
      <h3>{titulo}</h3>
    </div>
  );
}
export default Card;
