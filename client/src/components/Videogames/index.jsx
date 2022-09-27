import styles from "./Videogames.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import Card from "../Card";
import { useState } from "react";

function Videogames() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(0);
  const filteredVideogames = allVideogames.slice(currentPage, currentPage + 5);

  const nextPage = () => {
    setCurrentPage(currentPage + 5);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 5);
  };

  return (
    <div>
      <button onClick={prevPage}>Anterior</button>
      <br />
      <button onClick={nextPage}>Siguiente</button>

      <div className={styles.cards}>
        {filteredVideogames ? (
          filteredVideogames.map((game) => {
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
    </div>
  );
}

export default Videogames;
