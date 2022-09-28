import styles from "./Card.module.css";

function Card({ image, name, genres }) {
  return (
    <div className={styles.card}>
      <div className={styles.fondo}>
        <img src={image} alt="videogame" className={styles.image} />
        <div className={styles.content}>
          <h3>{name}</h3>
          <p>{genres}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
