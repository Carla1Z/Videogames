import styles from "./Videogames.module.css";
import Card from "../Card";
import { Link } from "react-router-dom";
import Loader from "../Loader";

function Videogames({ allVideogames }) {
  return (
    <div>
      <div className={styles.cards}>
        {allVideogames.length > 0 ? (
          allVideogames.map((game) => {
            return (
              <Link to={`/home/${game.id}`} key={game.id}>
                <Card
                  key={game.id}
                  image={game.image}
                  name={game.name}
                  genres={!game.originDb ? game.genres : game.genres.map(el => el.name)}
                />
              </Link>
            );
          })
        ) : (
          <Loader className={styles.loader} />
        )}
      </div>
    </div>
  );
}

export default Videogames;
