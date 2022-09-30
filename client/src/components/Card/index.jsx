import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ image, name, genres }) {
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <img src={image} alt="videogame" />
      </div>

      <Link to="/detail">
        <div className={styles.back}>
          <h3>{name}</h3>
          <p>{genres}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
