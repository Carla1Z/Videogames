import styles from "./Videogames.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import Card from "../Card";

function Videogames() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <div className={styles.cards}>
      {allVideogames ? (
        allVideogames.map((game) => {
          return (
            <Card
              key={game.id}
              image={game.image}
              name={game.name}
              genres={game.genres}
            />
          );
        })
      ) : (
        <h3>No se encontraron videojuegos</h3>
      )}
    </div>
  );
}

export default Videogames;
